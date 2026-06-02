import {
  Inter,
  Playfair_Display,
  Merriweather,
  Work_Sans,
  EB_Garamond,
  IBM_Plex_Sans,
  Lora,
  Space_Grotesk,
  Roboto_Slab,
  Cormorant_Garamond,
  Prata,
  DM_Serif_Display,
  Libre_Baskerville,
  Vollkorn,
  Spectral,
} from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-merriweather',
});
const workSans = Work_Sans({ subsets: ['latin'], variable: '--font-worksans' });
const ebGaramond = EB_Garamond({ subsets: ['latin'], variable: '--font-ebgaramond' });
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibmplexsans',
});
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-spacegrotesk' });
const robotoSlab = Roboto_Slab({ subsets: ['latin'], variable: '--font-robotoslab' });
const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cormorantgaramond',
});
const prata = Prata({ subsets: ['latin'], weight: ['400'], variable: '--font-prata' });
const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dmserifdisplay',
});
const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-librebaskerville',
});
const vollkorn = Vollkorn({ subsets: ['latin'], variable: '--font-vollkorn' });
const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-spectral',
});

const sampleBody = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisi eu velit.`;
const sampleQuote = `Research-driven and crafted with care, from logos to environmental graphics.`;

export default function FontTestPage() {
  return (
    <div className="min-h-screen space-y-24 bg-background-light px-8 py-16 text-text-light dark:bg-background-dark dark:text-text-dark">
      {/* Playfair Display + Inter */}
      <section>
        <div className="mb-2 text-sm font-semibold text-accent-light dark:text-accent-dark">
          Editorial & Modern
        </div>
        <div className="mb-4">
          <span className="text-xs uppercase tracking-widest text-gray-400">
            Playfair Display + Inter
          </span>
        </div>
        <h1
          className={`${playfair.variable} mb-6 font-serif text-5xl`}
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          Headline Example
        </h1>
        <blockquote
          className={`${playfair.variable} mb-6 font-serif text-3xl italic`}
          style={{ fontFamily: 'var(--font-playfair), serif', fontStretch: 'condensed' }}
        >
          {sampleQuote}
        </blockquote>
        <p
          className={`${inter.variable} font-sans text-lg`}
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          {sampleBody}
        </p>
      </section>

      {/* Merriweather + Work Sans */}
      <section>
        <div className="mb-2 text-sm font-semibold text-accent-light dark:text-accent-dark">
          Contemporary & Friendly
        </div>
        <div className="mb-4">
          <span className="text-xs uppercase tracking-widest text-gray-400">
            Merriweather + Work Sans
          </span>
        </div>
        <h1
          className={`${merriweather.variable} mb-6 font-serif text-5xl`}
          style={{ fontFamily: 'var(--font-merriweather), serif' }}
        >
          Headline Example
        </h1>
        <blockquote
          className={`${merriweather.variable} mb-6 font-serif text-3xl italic`}
          style={{ fontFamily: 'var(--font-merriweather), serif', fontStretch: 'condensed' }}
        >
          {sampleQuote}
        </blockquote>
        <p
          className={`${workSans.variable} font-sans text-lg`}
          style={{ fontFamily: 'var(--font-worksans), sans-serif' }}
        >
          {sampleBody}
        </p>
      </section>

      {/* EB Garamond + IBM Plex Sans */}
      <section>
        <div className="mb-2 text-sm font-semibold text-accent-light dark:text-accent-dark">
          Techy & Editorial
        </div>
        <div className="mb-4">
          <span className="text-xs uppercase tracking-widest text-gray-400">
            EB Garamond + IBM Plex Sans
          </span>
        </div>
        <h1
          className={`${ebGaramond.variable} mb-6 font-serif text-5xl`}
          style={{ fontFamily: 'var(--font-ebgaramond), serif' }}
        >
          Headline Example
        </h1>
        <blockquote
          className={`${ebGaramond.variable} mb-6 font-serif text-3xl italic`}
          style={{ fontFamily: 'var(--font-ebgaramond), serif', fontStretch: 'condensed' }}
        >
          {sampleQuote}
        </blockquote>
        <p
          className={`${ibmPlexSans.variable} font-sans text-lg`}
          style={{ fontFamily: 'var(--font-ibmplexsans), sans-serif' }}
        >
          {sampleBody}
        </p>
      </section>

      {/* Lora + Space Grotesk */}
      <section>
        <div className="mb-2 text-sm font-semibold text-accent-light dark:text-accent-dark">
          Elegant & Contemporary
        </div>
        <div className="mb-4">
          <span className="text-xs uppercase tracking-widest text-gray-400">
            Lora + Space Grotesk
          </span>
        </div>
        <h1
          className={`${lora.variable} mb-6 font-serif text-5xl`}
          style={{ fontFamily: 'var(--font-lora), serif' }}
        >
          Headline Example
        </h1>
        <blockquote
          className={`${lora.variable} mb-6 font-serif text-3xl italic`}
          style={{ fontFamily: 'var(--font-lora), serif', fontStretch: 'condensed' }}
        >
          {sampleQuote}
        </blockquote>
        <p
          className={`${spaceGrotesk.variable} font-sans text-lg`}
          style={{ fontFamily: 'var(--font-spacegrotesk), sans-serif' }}
        >
          {sampleBody}
        </p>
      </section>

      {/* Roboto Slab + Work Sans */}
      <section>
        <div className="mb-2 text-sm font-semibold text-accent-light dark:text-accent-dark">
          Clean & Versatile
        </div>
        <div className="mb-4">
          <span className="text-xs uppercase tracking-widest text-gray-400">
            Roboto Slab + Work Sans
          </span>
        </div>
        <h1
          className={`${robotoSlab.variable} mb-6 font-serif text-5xl`}
          style={{ fontFamily: 'var(--font-robotoslab), serif' }}
        >
          Headline Example
        </h1>
        <blockquote
          className={`${robotoSlab.variable} mb-6 font-serif text-3xl italic`}
          style={{ fontFamily: 'var(--font-robotoslab), serif', fontStretch: 'condensed' }}
        >
          {sampleQuote}
        </blockquote>
        <p
          className={`${workSans.variable} font-sans text-lg`}
          style={{ fontFamily: 'var(--font-worksans), sans-serif' }}
        >
          {sampleBody}
        </p>
      </section>

      {/* Cormorant Garamond + Inter */}
      <section>
        <div className="mb-2 text-sm font-semibold text-accent-light dark:text-accent-dark">
          Classic & Modern
        </div>
        <div className="mb-4">
          <span className="text-xs uppercase tracking-widest text-gray-400">
            Cormorant Garamond + Inter
          </span>
        </div>
        <h1
          className={`${cormorantGaramond.variable} mb-6 font-serif text-5xl`}
          style={{ fontFamily: 'var(--font-cormorantgaramond), serif' }}
        >
          Headline Example
        </h1>
        <blockquote
          className={`${cormorantGaramond.variable} mb-6 font-serif text-3xl italic`}
          style={{ fontFamily: 'var(--font-cormorantgaramond), serif', fontStretch: 'condensed' }}
        >
          {sampleQuote}
        </blockquote>
        <p
          className={`${inter.variable} font-sans text-lg`}
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          {sampleBody}
        </p>
      </section>

      {/* Editorial & Modern - More Examples */}
      <section>
        <div className="mb-2 text-sm font-semibold text-accent-light dark:text-accent-dark">
          Editorial & Modern
        </div>
        <div className="mb-4">
          <span className="text-xs uppercase tracking-widest text-gray-400">Prata + Inter</span>
        </div>
        <h1
          className={`${prata.variable} mb-6 font-serif text-5xl`}
          style={{ fontFamily: 'var(--font-prata), serif' }}
        >
          Headline Example
        </h1>
        <blockquote
          className={`${prata.variable} mb-6 font-serif text-3xl italic`}
          style={{ fontFamily: 'var(--font-prata), serif', fontStretch: 'condensed' }}
        >
          {sampleQuote}
        </blockquote>
        <p
          className={`${inter.variable} font-sans text-lg`}
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          {sampleBody}
        </p>
      </section>
      <section>
        <div className="mb-2 text-sm font-semibold text-accent-light dark:text-accent-dark">
          Editorial & Modern
        </div>
        <div className="mb-4">
          <span className="text-xs uppercase tracking-widest text-gray-400">
            DM Serif Display + Inter
          </span>
        </div>
        <h1
          className={`${dmSerifDisplay.variable} mb-6 font-serif text-5xl`}
          style={{ fontFamily: 'var(--font-dmserifdisplay), serif' }}
        >
          Headline Example
        </h1>
        <blockquote
          className={`${dmSerifDisplay.variable} mb-6 font-serif text-3xl italic`}
          style={{ fontFamily: 'var(--font-dmserifdisplay), serif', fontStretch: 'condensed' }}
        >
          {sampleQuote}
        </blockquote>
        <p
          className={`${inter.variable} font-sans text-lg`}
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          {sampleBody}
        </p>
      </section>

      {/* Elegant & Contemporary - More Examples */}
      <section>
        <div className="mb-2 text-sm font-semibold text-accent-light dark:text-accent-dark">
          Elegant & Contemporary
        </div>
        <div className="mb-4">
          <span className="text-xs uppercase tracking-widest text-gray-400">
            Libre Baskerville + Space Grotesk
          </span>
        </div>
        <h1
          className={`${libreBaskerville.variable} mb-6 font-serif text-5xl`}
          style={{ fontFamily: 'var(--font-librebaskerville), serif' }}
        >
          Headline Example
        </h1>
        <blockquote
          className={`${libreBaskerville.variable} mb-6 font-serif text-3xl italic`}
          style={{ fontFamily: 'var(--font-librebaskerville), serif', fontStretch: 'condensed' }}
        >
          {sampleQuote}
        </blockquote>
        <p
          className={`${spaceGrotesk.variable} font-sans text-lg`}
          style={{ fontFamily: 'var(--font-spacegrotesk), sans-serif' }}
        >
          {sampleBody}
        </p>
      </section>
      <section>
        <div className="mb-2 text-sm font-semibold text-accent-light dark:text-accent-dark">
          Elegant & Contemporary
        </div>
        <div className="mb-4">
          <span className="text-xs uppercase tracking-widest text-gray-400">
            Vollkorn + Space Grotesk
          </span>
        </div>
        <h1
          className={`${vollkorn.variable} mb-6 font-serif text-5xl`}
          style={{ fontFamily: 'var(--font-vollkorn), serif' }}
        >
          Headline Example
        </h1>
        <blockquote
          className={`${vollkorn.variable} mb-6 font-serif text-3xl italic`}
          style={{ fontFamily: 'var(--font-vollkorn), serif', fontStretch: 'condensed' }}
        >
          {sampleQuote}
        </blockquote>
        <p
          className={`${spaceGrotesk.variable} font-sans text-lg`}
          style={{ fontFamily: 'var(--font-spacegrotesk), sans-serif' }}
        >
          {sampleBody}
        </p>
      </section>
      <section>
        <div className="mb-2 text-sm font-semibold text-accent-light dark:text-accent-dark">
          Elegant & Contemporary
        </div>
        <div className="mb-4">
          <span className="text-xs uppercase tracking-widest text-gray-400">
            Spectral + Space Grotesk
          </span>
        </div>
        <h1
          className={`${spectral.variable} mb-6 font-serif text-5xl`}
          style={{ fontFamily: 'var(--font-spectral), serif' }}
        >
          Headline Example
        </h1>
        <blockquote
          className={`${spectral.variable} mb-6 font-serif text-3xl italic`}
          style={{ fontFamily: 'var(--font-spectral), serif', fontStretch: 'condensed' }}
        >
          {sampleQuote}
        </blockquote>
        <p
          className={`${spaceGrotesk.variable} font-sans text-lg`}
          style={{ fontFamily: 'var(--font-spacegrotesk), sans-serif' }}
        >
          {sampleBody}
        </p>
      </section>
    </div>
  );
}
