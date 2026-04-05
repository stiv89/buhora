import { Content } from './types';

interface HeroProps {
  content: Content;
}

export default function Hero({ content }: HeroProps) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Sora:wght@500;600&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400&display=swap"
      />

      <section className="relative min-h-screen flex flex-col justify-center px-6 sm:px-10 md:px-16 pt-24 pb-12 overflow-hidden">

        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />

        <div className="relative max-w-2xl w-full">

          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-5 h-[1.5px] bg-blue-500 flex-shrink-0" />
            <span
              className="text-[10px] tracking-[0.2em] uppercase text-blue-500"
              style={{ fontFamily: '"DM Mono", monospace' }}
            >
              Data Analytics
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-[clamp(28px,6vw,54px)] font-semibold leading-[1.1] tracking-tight text-white mb-4"
            style={{ fontFamily: '"Sora", sans-serif' }}
          >
            {content.hero.headline}
          </h1>

          {/* Subheadline */}
          <p
            className="text-[clamp(13px,2vw,15px)] font-light leading-relaxed mb-8 max-w-[460px]"
            style={{ color: 'rgba(255,255,255,0.42)', fontFamily: '"DM Sans", sans-serif' }}
          >
            {content.hero.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-[22px] py-[11px] text-xs font-medium text-white transition-colors duration-200"
              style={{
                fontFamily: '"DM Sans", sans-serif',
                background: '#1D4ED8',
                borderRadius: '2px',
                letterSpacing: '0.05em',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = '#1E40AF')}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = '#1D4ED8')}
            >
              {content.hero.cta}
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a
              href="#cases"
              className="inline-flex items-center px-[22px] py-[10px] text-xs transition-all duration-200"
              style={{
                fontFamily: '"DM Sans", sans-serif',
                color: 'rgba(255,255,255,0.35)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '2px',
                letterSpacing: '0.04em',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = 'rgba(255,255,255,0.7)';
                el.style.borderColor = 'rgba(255,255,255,0.2)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = 'rgba(255,255,255,0.35)';
                el.style.borderColor = 'rgba(255,255,255,0.08)';
              }}
            >
              Ver casos de éxito
            </a>
          </div>

          {/* Stats strip */}
          <div
            className="flex pt-6"
            style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
          >
            {[
              { value: '200+', label: 'Clientes' },
              { value: '$4.2B', label: 'Procesados' },
              { value: '99.9%', label: 'Uptime' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="flex-1 pr-4 sm:pr-5 mr-4 sm:mr-5 last:pr-0 last:mr-0"
                style={i < 2 ? { borderRight: '1px solid rgba(255,255,255,0.05)' } : {}}
              >
                <p
                  className="text-white font-semibold text-[clamp(16px,3vw,20px)] mb-0.5"
                  style={{ fontFamily: '"Sora", sans-serif' }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-[10px] tracking-[0.08em] uppercase"
                  style={{ color: 'rgba(255,255,255,0.25)', fontFamily: '"DM Sans", sans-serif' }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}