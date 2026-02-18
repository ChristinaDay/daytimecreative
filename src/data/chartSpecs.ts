// Vega specs for the 6 Operational Data Graphics chart primitives.
// Background / label colours are overridden at render time by VegaChart based on theme.

export const chart1Spec = {
  $schema: 'https://vega.github.io/schema/vega/v5.json',
  description: 'High-density time-series line chart for operational metrics',
  width: 560, height: 260,
  padding: { top: 10, left: 56, right: 16, bottom: 36 },
  background: '#171719',
  data: [{ name: 'table', values: [
    { time: '00:00', value: 45.2 }, { time: '02:00', value: 48.1 },
    { time: '04:00', value: 52.3 }, { time: '06:00', value: 68.5 },
    { time: '08:00', value: 82.4 }, { time: '10:00', value: 78.9 },
    { time: '12:00', value: 85.2 }, { time: '14:00', value: 79.8 },
    { time: '16:00', value: 72.4 }, { time: '18:00', value: 65.1 },
    { time: '20:00', value: 58.3 }, { time: '22:00', value: 51.2 },
    { time: '24:00', value: 46.8 },
  ] }],
  scales: [
    { name: 'x', type: 'point', domain: { data: 'table', field: 'time' }, range: 'width', padding: 0.5 },
    { name: 'y', type: 'linear', domain: [0, 100], range: 'height', nice: true, zero: true },
  ],
  axes: [
    { orient: 'bottom', scale: 'x', labelColor: '#999AA6', labelFontSize: 11, labelFont: 'Inter,sans-serif', labelPadding: 8, tickColor: '#4D4E56', tickSize: 5, domain: false, grid: false, title: null },
    { orient: 'left', scale: 'y', labelColor: '#999AA6', labelFontSize: 11, labelFont: 'Inter,sans-serif', labelPadding: 8, tickColor: '#4D4E56', tickSize: 5, tickCount: 5, domain: false, grid: true, gridColor: '#4D4E56', gridOpacity: 0.4, title: null },
  ],
  marks: [
    { type: 'line', from: { data: 'table' }, encode: { enter: { x: { scale: 'x', field: 'time' }, y: { scale: 'y', field: 'value' }, stroke: { value: '#3B82F5' }, strokeWidth: { value: 2 } } } },
    { type: 'symbol', from: { data: 'table' }, encode: { enter: { x: { scale: 'x', field: 'time' }, y: { scale: 'y', field: 'value' }, fill: { value: '#3B82F5' }, size: { value: 40 }, stroke: { value: '#171719' }, strokeWidth: { value: 1.5 } }, update: { fillOpacity: { value: 1 } }, hover: { fillOpacity: { value: 0.7 } } } },
  ],
};

export const chart2Spec = {
  $schema: 'https://vega.github.io/schema/vega/v5.json',
  description: 'Multi-series comparison line chart',
  width: 560, height: 280,
  padding: { top: 10, left: 56, right: 16, bottom: 48 },
  background: '#171719',
  data: [{ name: 'table', values: [
    { week: 'Week 1', Production: 1245, Staging: 892, Development: 445 },
    { week: 'Week 2', Production: 1389, Staging: 945, Development: 478 },
    { week: 'Week 3', Production: 1502, Staging: 1023, Development: 512 },
    { week: 'Week 4', Production: 1456, Staging: 998, Development: 489 },
  ], transform: [{ type: 'fold', fields: ['Production', 'Staging', 'Development'], as: ['series', 'value'] }] }],
  scales: [
    { name: 'x', type: 'point', domain: { data: 'table', field: 'week' }, range: 'width', padding: 0.5 },
    { name: 'y', type: 'linear', domain: { data: 'table', field: 'value' }, range: 'height', nice: true, zero: true },
    { name: 'color', type: 'ordinal', domain: ['Production', 'Staging', 'Development'], range: ['#3B82F5', '#22BF4A', '#F2CB05'] },
  ],
  axes: [
    { orient: 'bottom', scale: 'x', labelColor: '#999AA6', labelFontSize: 11, labelFont: 'Inter,sans-serif', labelPadding: 8, tickColor: '#4D4E56', tickSize: 5, domain: false, grid: false, title: null },
    { orient: 'left', scale: 'y', labelColor: '#999AA6', labelFontSize: 11, labelFont: 'Inter,sans-serif', labelPadding: 8, tickColor: '#4D4E56', tickSize: 5, tickCount: 5, domain: false, grid: true, gridColor: '#4D4E56', gridOpacity: 0.4, title: null },
  ],
  marks: [{ type: 'group', from: { facet: { name: 'series', data: 'table', groupby: 'series' } }, marks: [
    { type: 'line', from: { data: 'series' }, encode: { enter: { x: { scale: 'x', field: 'week' }, y: { scale: 'y', field: 'value' }, stroke: { scale: 'color', field: 'series' }, strokeWidth: { value: 2 } } } },
    { type: 'symbol', from: { data: 'series' }, encode: { enter: { x: { scale: 'x', field: 'week' }, y: { scale: 'y', field: 'value' }, fill: { scale: 'color', field: 'series' }, size: { value: 40 }, stroke: { value: '#171719' }, strokeWidth: { value: 1.5 } } } },
  ] }],
  legends: [{ stroke: 'color', title: null, orient: 'bottom', direction: 'horizontal', symbolType: 'stroke', symbolStrokeWidth: 2, symbolOffset: 8, labelColor: '#D9D9E0', labelFont: 'Inter,sans-serif', labelFontSize: 11, labelOffset: 8, offset: 16, padding: 8 }],
};

export const chart3Spec = {
  $schema: 'https://vega.github.io/schema/vega/v5.json',
  description: 'Stacked area trend — resource allocation over time',
  width: 560, height: 270,
  padding: { top: 10, left: 56, right: 16, bottom: 48 },
  background: '#171719',
  data: [{ name: 'table', values: [
    { week: 'Mon', Compute: 420, Storage: 180, Network: 95 },
    { week: 'Tue', Compute: 480, Storage: 200, Network: 110 },
    { week: 'Wed', Compute: 610, Storage: 220, Network: 140 },
    { week: 'Thu', Compute: 590, Storage: 235, Network: 130 },
    { week: 'Fri', Compute: 720, Storage: 260, Network: 165 },
    { week: 'Sat', Compute: 380, Storage: 195, Network: 80 },
    { week: 'Sun', Compute: 310, Storage: 175, Network: 70 },
  ], transform: [
    { type: 'fold', fields: ['Compute', 'Storage', 'Network'], as: ['category', 'value'] },
    { type: 'stack', groupby: ['week'], field: 'value', as: ['y0', 'y1'], sort: { field: 'category' } },
  ] }],
  scales: [
    { name: 'x', type: 'point', domain: { data: 'table', field: 'week' }, range: 'width', padding: 0.5 },
    { name: 'y', type: 'linear', domain: { data: 'table', field: 'y1' }, range: 'height', nice: true, zero: true },
    { name: 'color', type: 'ordinal', domain: ['Compute', 'Storage', 'Network'], range: ['#3B82F5', '#22BF4A', '#F2CB05'] },
  ],
  axes: [
    { orient: 'bottom', scale: 'x', labelColor: '#999AA6', labelFontSize: 11, labelFont: 'Inter,sans-serif', labelPadding: 8, tickColor: '#4D4E56', tickSize: 5, domain: false, grid: false, title: null },
    { orient: 'left', scale: 'y', labelColor: '#999AA6', labelFontSize: 11, labelFont: 'Inter,sans-serif', labelPadding: 8, tickColor: '#4D4E56', tickSize: 5, tickCount: 5, domain: false, grid: true, gridColor: '#4D4E56', gridOpacity: 0.4, title: null },
  ],
  marks: [{ type: 'group', from: { facet: { name: 'series', data: 'table', groupby: 'category' } }, marks: [
    { type: 'area', from: { data: 'series' }, encode: { enter: { x: { scale: 'x', field: 'week' }, y: { scale: 'y', field: 'y0' }, y2: { scale: 'y', field: 'y1' }, fill: { scale: 'color', field: 'category' }, fillOpacity: { value: 0.75 }, interpolate: { value: 'monotone' } }, update: { fillOpacity: { value: 0.75 } }, hover: { fillOpacity: { value: 0.9 } } } },
    { type: 'line', from: { data: 'series' }, encode: { enter: { x: { scale: 'x', field: 'week' }, y: { scale: 'y', field: 'y1' }, stroke: { scale: 'color', field: 'category' }, strokeWidth: { value: 1.5 }, strokeOpacity: { value: 0.5 }, interpolate: { value: 'monotone' } } } },
  ] }],
  legends: [{ fill: 'color', title: null, orient: 'bottom', direction: 'horizontal', symbolType: 'square', symbolSize: 80, symbolOffset: 8, labelColor: '#D9D9E0', labelFont: 'Inter,sans-serif', labelFontSize: 11, labelOffset: 8, offset: 16, padding: 8 }],
};

export const chart4Spec = {
  $schema: 'https://vega.github.io/schema/vega/v5.json',
  description: 'Histogram — response time distribution',
  width: 560, height: 260,
  padding: { top: 10, left: 56, right: 16, bottom: 36 },
  background: '#171719',
  data: [{ name: 'table', values: [
    { bin: '0–50ms', count: 1240 },
    { bin: '50–100ms', count: 3580 },
    { bin: '100–150ms', count: 2150 },
    { bin: '150–200ms', count: 890 },
    { bin: '200+ms', count: 320 },
  ] }],
  scales: [
    { name: 'x', type: 'band', domain: { data: 'table', field: 'bin' }, range: 'width', padding: 0.2 },
    { name: 'y', type: 'linear', domain: { data: 'table', field: 'count' }, range: 'height', nice: true, zero: true },
  ],
  axes: [
    { orient: 'bottom', scale: 'x', labelColor: '#999AA6', labelFontSize: 11, labelFont: 'Inter,sans-serif', labelPadding: 8, tickColor: '#4D4E56', tickSize: 5, domain: false, grid: false, title: null },
    { orient: 'left', scale: 'y', labelColor: '#999AA6', labelFontSize: 11, labelFont: 'Inter,sans-serif', labelPadding: 8, tickColor: '#4D4E56', tickSize: 5, tickCount: 5, domain: false, grid: true, gridColor: '#4D4E56', gridOpacity: 0.4, title: null, format: '~s' },
  ],
  marks: [{ type: 'rect', from: { data: 'table' }, encode: {
    enter: { x: { scale: 'x', field: 'bin' }, width: { scale: 'x', band: 1 }, y: { scale: 'y', field: 'count' }, y2: { scale: 'y', value: 0 }, fill: { value: '#3B82F5' }, cornerRadiusTopLeft: { value: 3 }, cornerRadiusTopRight: { value: 3 } },
    update: { fillOpacity: { value: 0.85 } }, hover: { fillOpacity: { value: 1 } },
  } }],
};

export const chart5Spec = {
  $schema: 'https://vega.github.io/schema/vega/v5.json',
  description: 'Throughput bar comparison — endpoint volume ranking',
  width: 560, height: 260,
  padding: { top: 10, left: 156, right: 56, bottom: 36 },
  background: '#171719',
  data: [{ name: 'table', values: [
    { endpoint: 'POST /api/events',    requests: 18420 },
    { endpoint: 'GET /api/metrics',    requests: 14380 },
    { endpoint: 'GET /api/health',     requests: 12100 },
    { endpoint: 'PUT /api/config',     requests: 7650 },
    { endpoint: 'GET /api/pipelines',  requests: 5930 },
    { endpoint: 'DELETE /api/jobs',    requests: 2840 },
    { endpoint: 'POST /api/transform', requests: 1720 },
  ], transform: [{ type: 'collect', sort: { field: 'requests', order: 'descending' } }] }],
  scales: [
    { name: 'y', type: 'band', domain: { data: 'table', field: 'endpoint', sort: { field: 'requests', order: 'descending' } }, range: 'height', padding: 0.25 },
    { name: 'x', type: 'linear', domain: { data: 'table', field: 'requests' }, range: 'width', nice: true, zero: true },
  ],
  axes: [
    { orient: 'left', scale: 'y', labelColor: '#D9D9E0', labelFontSize: 11, labelFont: "'JetBrains Mono','Courier New',monospace", labelPadding: 8, tickSize: 0, domain: false, grid: false, title: null },
    { orient: 'bottom', scale: 'x', labelColor: '#999AA6', labelFontSize: 11, labelFont: 'Inter,sans-serif', labelPadding: 8, tickColor: '#4D4E56', tickSize: 5, tickCount: 4, domain: false, grid: true, gridColor: '#4D4E56', gridOpacity: 0.4, title: null, format: '~s' },
  ],
  marks: [
    { type: 'rect', from: { data: 'table' }, encode: {
      enter: { y: { scale: 'y', field: 'endpoint' }, height: { scale: 'y', band: 1 }, x: { scale: 'x', value: 0 }, x2: { scale: 'x', field: 'requests' }, fill: { value: '#3B82F5' }, cornerRadiusTopRight: { value: 3 }, cornerRadiusBottomRight: { value: 3 } },
      update: { fillOpacity: { value: 0.85 } }, hover: { fillOpacity: { value: 1 } },
    } },
    { type: 'text', from: { data: 'table' }, encode: { enter: {
      x: { scale: 'x', field: 'requests', offset: 5 },
      y: { scale: 'y', field: 'endpoint', offset: { scale: 'y', band: 0.5 } },
      baseline: { value: 'middle' }, text: { signal: "format(datum.requests, ',.0f')" },
      fill: { value: '#999AA6' }, fontSize: { value: 11 }, font: { value: 'Inter,sans-serif' },
    } } },
  ],
};

export const chart6Spec = {
  $schema: 'https://vega.github.io/schema/vega/v5.json',
  description: 'Status timeline — system health bands',
  width: 560, height: 200,
  padding: { top: 10, left: 96, right: 16, bottom: 36 },
  background: '#171719',
  data: [{ name: 'table', values: [
    { service: 'Auth Service', start: 0, end: 6, status: 'Healthy', serviceOrder: 0 },
    { service: 'Auth Service', start: 6, end: 14, status: 'Warning', serviceOrder: 0 },
    { service: 'Auth Service', start: 14, end: 24, status: 'Healthy', serviceOrder: 0 },
    { service: 'API Gateway', start: 0, end: 24, status: 'Healthy', serviceOrder: 1 },
    { service: 'Database', start: 0, end: 6, status: 'Healthy', serviceOrder: 2 },
    { service: 'Database', start: 6, end: 10, status: 'Warning', serviceOrder: 2 },
    { service: 'Database', start: 10, end: 13, status: 'Error', serviceOrder: 2 },
    { service: 'Database', start: 13, end: 24, status: 'Healthy', serviceOrder: 2 },
  ] }],
  scales: [
    { name: 'x', type: 'linear', domain: [0, 24], range: 'width', zero: true, nice: false },
    { name: 'y', type: 'band', domain: { data: 'table', field: 'service', sort: { field: 'serviceOrder' } }, range: 'height', padding: 0.3 },
    { name: 'color', type: 'ordinal', domain: ['Healthy', 'Warning', 'Error'], range: ['#22BF4A', '#F28500', '#CC3D3D'] },
  ],
  axes: [
    { orient: 'top', scale: 'x', labelColor: '#999AA6', labelFontSize: 11, labelFont: 'Inter,sans-serif', labelPadding: 8, tickColor: '#999AA6', tickSize: 5, domain: false, grid: false, title: null, format: 'd', values: [0, 6, 12, 18, 24], labelExpr: "datum.value + 'h'" },
    { orient: 'left', scale: 'y', labelColor: '#D9D9E0', labelFontSize: 12, labelFont: 'Inter,sans-serif', labelPadding: 8, tickSize: 0, domain: false, grid: false, title: null },
  ],
  marks: [{ type: 'rect', from: { data: 'table' }, encode: {
    enter: { x: { scale: 'x', field: 'start' }, x2: { scale: 'x', field: 'end' }, y: { scale: 'y', field: 'service' }, height: { scale: 'y', band: 1 }, fill: { scale: 'color', field: 'status' }, fillOpacity: { value: 0.85 }, cornerRadius: { value: 3 } },
    update: { fillOpacity: { value: 0.85 }, stroke: { value: null } },
    hover: { fillOpacity: { value: 1 }, stroke: { value: '#FFFFFF' }, strokeWidth: { value: 1 } },
  } }],
  legends: [{ fill: 'color', title: null, orient: 'bottom', direction: 'horizontal', symbolType: 'square', symbolSize: 100, symbolOffset: 8, labelColor: '#D9D9E0', labelFont: 'Inter,sans-serif', labelFontSize: 11, labelOffset: 8, offset: 8 }],
};

export const chart7Spec = {
  $schema: 'https://vega.github.io/schema/vega/v5.json',
  description: 'Histogram — error rate distribution by status code',
  width: 560, height: 260,
  padding: { top: 10, left: 56, right: 16, bottom: 36 },
  background: '#171719',
  data: [{ name: 'table', values: [
    { status: '2xx', count: 12450 },
    { status: '3xx', count: 890 },
    { status: '4xx', count: 2340 },
    { status: '5xx', count: 420 },
  ] }],
  scales: [
    { name: 'x', type: 'band', domain: { data: 'table', field: 'status' }, range: 'width', padding: 0.2 },
    { name: 'y', type: 'linear', domain: { data: 'table', field: 'count' }, range: 'height', nice: true, zero: true },
    { name: 'color', type: 'ordinal', domain: ['2xx', '3xx', '4xx', '5xx'], range: ['#22BF4A', '#F2CB05', '#F28500', '#CC3D3D'] },
  ],
  axes: [
    { orient: 'bottom', scale: 'x', labelColor: '#999AA6', labelFontSize: 11, labelFont: 'Inter,sans-serif', labelPadding: 8, tickColor: '#4D4E56', tickSize: 5, domain: false, grid: false, title: null },
    { orient: 'left', scale: 'y', labelColor: '#999AA6', labelFontSize: 11, labelFont: 'Inter,sans-serif', labelPadding: 8, tickColor: '#4D4E56', tickSize: 5, tickCount: 5, domain: false, grid: true, gridColor: '#4D4E56', gridOpacity: 0.4, title: null, format: '~s' },
  ],
  marks: [{ type: 'rect', from: { data: 'table' }, encode: {
    enter: { x: { scale: 'x', field: 'status' }, width: { scale: 'x', band: 1 }, y: { scale: 'y', field: 'count' }, y2: { scale: 'y', value: 0 }, fill: { scale: 'color', field: 'status' }, cornerRadiusTopLeft: { value: 3 }, cornerRadiusTopRight: { value: 3 } },
    update: { fillOpacity: { value: 0.85 } }, hover: { fillOpacity: { value: 1 } },
  } }],
};
