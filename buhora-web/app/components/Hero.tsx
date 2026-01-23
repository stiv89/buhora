import { Content } from './types';

interface HeroProps {
  content: Content;
}

export default function Hero({ content }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 pt-32 sm:pt-36 md:pt-40">
      <div className="max-w-6xl mx-auto text-center w-full">
        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight tracking-tight text-white">
            {content.hero.headline}
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl font-light text-white/75 max-w-3xl mx-auto leading-relaxed">
            {content.hero.subheadline}
          </p>
          
          <div className="pt-4 sm:pt-6">
            <a
              href="#contact"
              className="inline-block px-8 sm:px-10 md:px-12 py-3 sm:py-4 border border-white/25 rounded-sm text-sm md:text-base font-light text-white/95 hover:border-white/50 hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              {content.hero.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
