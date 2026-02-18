'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

interface VegaChartProps {
  spec: Record<string, unknown>;
  className?: string;
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

  type VegaAxis = Record<string, unknown>;
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

export default function VegaChart({ spec, className = '' }: VegaChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<unknown>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!containerRef.current) return;
    const isDark = resolvedTheme !== 'light';
    const themedSpec = applyTheme(spec, isDark);

    // Dynamically import vega-embed to avoid SSR issues
    import('vega-embed').then(({ default: vegaEmbed }) => {
      if (!containerRef.current) return;
      vegaEmbed(containerRef.current, themedSpec as never, {
        actions: false,
        renderer: 'svg',
      }).then((result) => {
        viewRef.current = result.view;
      });
    });

    return () => {
      if (viewRef.current) {
        (viewRef.current as { finalize: () => void }).finalize();
        viewRef.current = null;
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resolvedTheme]);

  return <div ref={containerRef} className={`w-full overflow-x-auto ${className}`} />;
}
