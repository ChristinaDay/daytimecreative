'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

interface VegaChartProps {
  spec: Record<string, unknown>;
  className?: string;
  /** When true the chart data animates from 0 → target on first scroll-into-view */
  animate?: boolean;
  /** Override the global theme. 'light' | 'dark' | undefined (uses global theme) */
  forcedTheme?: 'light' | 'dark';
}

// Colours that swap with the portfolio's dark/light mode
const DARK = {
  background: '#171719',
  labelColor: '#999AA6',
  gridColor: '#4D4E56',
  legendLabel: '#D9D9E0',
  stroke: '#4D4E56',
};
const LIGHT = {
  background: '#f9fafb',
  labelColor: '#6b7280',
  gridColor: '#d1d5db',
  legendLabel: '#1a1a1a',
  stroke: '#d1d5db',
};

function applyTheme(spec: Record<string, unknown>, isDark: boolean) {
  const c = isDark ? DARK : LIGHT;
  const s = JSON.parse(JSON.stringify(spec)) as Record<string, unknown>;
  s.background = c.background;

  type VegaAxis   = Record<string, unknown>;
  type VegaLegend = Record<string, unknown>;

  if (Array.isArray(s.axes)) {
    s.axes = (s.axes as VegaAxis[]).map((ax) => ({
      ...ax,
      labelColor: c.labelColor,
      tickColor: c.stroke,
      ...(ax.grid ? { gridColor: c.gridColor } : {}),
      ...(ax.orient === 'left' && ax.domain === false ? { labelColor: c.legendLabel } : {}),
    }));
  }
  if (Array.isArray(s.legends)) {
    s.legends = (s.legends as VegaLegend[]).map((lg) => ({
      ...lg,
      labelColor: c.legendLabel,
    }));
  }
  return s;
}

/** Ease-out cubic — fast start, soft finish */
function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

type DataRow = Record<string, unknown>;

/**
 * Sets all numeric fields in the data source to 0, renders the chart, then
 * interpolates every value from 0 → target using rAF when the element enters
 * the viewport.
 */
async function setupDataAnimation(
  view: { change: (n: string, c: unknown) => unknown; runAsync: () => Promise<void> },
  originalRows: DataRow[],
  container: HTMLElement,
  duration = 1500,
) {
  // We need vega's changeset() helper — import dynamically to keep SSR safe
  const { changeset } = await import('vega');

  // Initial state: all numerics → 0
  const zeroed = originalRows.map((row) => {
    const r: DataRow = {};
    for (const [k, v] of Object.entries(row)) r[k] = typeof v === 'number' ? 0 : v;
    return r;
  });

  // Push the zeroed data immediately so the chart renders with flat/empty marks
  view.change('table', changeset().remove(() => true).insert(zeroed));
  await view.runAsync();

  // Start animating as soon as the chart scrolls into view
  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries[0].isIntersecting) return;
      observer.disconnect();

      const start = performance.now();

      function frame(now: number) {
        const progress = Math.min((now - start) / duration, 1);
        const eased    = easeOutCubic(progress);

        const current = originalRows.map((row) => {
          const r: DataRow = {};
          for (const [k, v] of Object.entries(row)) {
            r[k] = typeof v === 'number' ? (v as number) * eased : v;
          }
          return r;
        });

        view.change('table', changeset().remove(() => true).insert(current));
        view.runAsync();

        if (progress < 1) requestAnimationFrame(frame);
      }

      requestAnimationFrame(frame);
    },
    { threshold: 0.25 },
  );

  observer.observe(container);
}

export default function VegaChart({ spec, className = '', animate = false, forcedTheme }: VegaChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<unknown>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!containerRef.current) return;
    const isDark = forcedTheme ? forcedTheme === 'dark' : resolvedTheme !== 'light';
    const themedSpec = applyTheme(spec, isDark);

    import('vega-embed').then(({ default: vegaEmbed }) => {
      if (!containerRef.current) return;

      // When animating, start with zeroed data so the first render is "empty"
      let renderSpec = themedSpec;
      if (animate) {
        const specCopy = JSON.parse(JSON.stringify(themedSpec)) as Record<string, unknown>;
        const dataArr  = specCopy.data as Array<{ name?: string; values?: DataRow[] }> | undefined;
        const tableDs  = dataArr?.find((d) => d.name === 'table' || !d.name);
        if (tableDs?.values) {
          tableDs.values = tableDs.values.map((row) => {
            const r: DataRow = {};
            for (const [k, v] of Object.entries(row)) r[k] = typeof v === 'number' ? 0 : v;
            return r;
          });
        }
        renderSpec = specCopy;
      }

      vegaEmbed(containerRef.current, renderSpec as never, {
        actions: false,
        renderer: 'svg',
      }).then((result) => {
        viewRef.current = result.view;

        if (animate && containerRef.current) {
          // Extract original (non-zeroed) table values from the unmodified themedSpec
          const dataArr = (themedSpec.data as Array<{ name?: string; values?: DataRow[] }> | undefined);
          const tableDs = dataArr?.find((d) => d.name === 'table' || !d.name);
          const rows    = tableDs?.values ?? [];

          if (rows.length > 0) {
            setupDataAnimation(
              result.view as unknown as Parameters<typeof setupDataAnimation>[0],
              rows,
              containerRef.current,
            );
          }
        }
      });
    });

    return () => {
      if (viewRef.current) {
        (viewRef.current as { finalize: () => void }).finalize();
        viewRef.current = null;
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resolvedTheme, forcedTheme]);

  return <div ref={containerRef} className={`w-full overflow-x-auto ${className}`} />;
}
