import { AnimatedPulseCircle } from '@/components/svg/AnimatedPulseCircle';

export default function AnimatedPulseCircleDemo() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-4 text-[rgb(178,148,198)]">AnimatedPulseCircle</h1>
      <p className="mb-8 text-text-light dark:text-text-dark">
        A simple animated SVG circle that pulses using the <code>&lt;animate&gt;</code> SVG element. You can customize the <b>size</b> and <b>color</b> via props.
      </p>
      <div className="flex flex-col items-center gap-8">
        <AnimatedPulseCircle size={120} color="rgb(178,148,198)" />
        <AnimatedPulseCircle size={80} color="hotpink" />
      </div>
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-2">Usage</h2>
        <pre className="bg-surface-light/20 dark:bg-surface-dark/20 rounded p-4 text-sm overflow-x-auto">
{`import { AnimatedPulseCircle } from '@/components/svg/AnimatedPulseCircle';

<AnimatedPulseCircle size={120} color="rgb(178,148,198)" />
`}
        </pre>
        <h3 className="mt-4 font-semibold">Props</h3>
        <ul className="list-disc list-inside text-text-light dark:text-text-dark">
          <li><b>size</b> (number): The width/height of the SVG in pixels. Default: 100</li>
          <li><b>color</b> (string): The stroke color of the circle. Default: <code>rgb(178,148,198)</code></li>
        </ul>
      </div>
    </main>
  );
} 