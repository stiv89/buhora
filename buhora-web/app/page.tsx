'use client';

import { useState } from 'react';

export default function Home() {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  const content = {
    es: {
      header: {
        logo: 'Bᵘ',
        nav: {
          approach: 'Enfoque',
          whatWeDo: 'Qué hacemos',
          contact: 'Contacto',
        },
      },
      hero: {
        headline: 'Data analytics for strategic decision-making',
        subheadline: 'Ayudamos a organizaciones a convertir datos complejos en insights claros y accionables.',
        cta: 'Contactar',
      },
      problem: {
        text1: "La mayoría de las organizaciones no tienen problemas con los datos.",
        text2: 'Tienen problemas con la claridad.',
        text3: 'Los dashboards se multiplican.',
        text4: 'Las decisiones no se vuelven más fáciles.',
      },
      approach: {
        title: 'Nuestro enfoque',
        items: [
          {
            title: 'Claridad primero',
            description: 'Empezar con las preguntas correctas — no con las herramientas.',
          },
          {
            title: 'Impulsado por decisiones',
            description: 'Cada análisis respalda una decisión real.',
          },
          {
            title: 'Insight independiente',
            description: 'Sin sesgo de plataforma. Sin complejidad innecesaria.',
          },
        ],
      },
      whatWeDo: {
        title: 'Qué hacemos',
        description: 'BUHORA brinda soporte analítico para organizaciones que trabajan con entornos de datos complejos.',
        items: [
          'Analítica estratégica',
          'Insight de negocio y operacional',
          'Soporte para decisiones',
          'Claridad en reportes ejecutivos',
        ],
      },
      whoWeWorkWith: {
        title: 'Con quién trabajamos',
        description: 'Colaboramos con líderes y equipos que dependen de los datos para tomar decisiones críticas.',
        items: [
          'Fundadores y ejecutivos',
          'Equipos de estrategia',
          'Organizaciones en crecimiento',
        ],
      },
      closing: {
        text1: 'Los datos están en todas partes.',
        text2: 'La comprensión sigue siendo rara.',
      },
      footer: {
        email: 'Email',
        linkedin: 'LinkedIn',
      },
    },
    en: {
      header: {
        logo: 'Bᵘ',
        nav: {
          approach: 'Approach',
          whatWeDo: 'What we do',
          contact: 'Contact',
        },
      },
      hero: {
        headline: 'Data analytics for strategic decision-making',
        subheadline: 'We help organizations turn complex data into clear, actionable insight.',
        cta: 'Get in touch',
      },
      problem: {
        text1: "Most organizations don't struggle with data.",
        text2: 'They struggle with clarity.',
        text3: 'Dashboards multiply.',
        text4: "Decisions don't get easier.",
      },
      approach: {
        title: 'Our approach',
        items: [
          {
            title: 'Clarity first',
            description: 'Start with the right questions — not the tools.',
          },
          {
            title: 'Decision-driven',
            description: 'Every analysis supports a real decision.',
          },
          {
            title: 'Independent insight',
            description: 'No platform bias. No unnecessary complexity.',
          },
        ],
      },
      whatWeDo: {
        title: 'What we do',
        description: 'BUHORA provides analytical support for organizations dealing with complex data environments.',
        items: [
          'Strategic analytics',
          'Business & operational insight',
          'Decision support',
          'Executive reporting clarity',
        ],
      },
      whoWeWorkWith: {
        title: 'Who we work with',
        description: 'We collaborate with leaders and teams who rely on data to make critical decisions.',
        items: [
          'Founders & executives',
          'Strategy teams',
          'Growing organizations',
        ],
      },
      closing: {
        text1: 'Data is everywhere.',
        text2: 'Understanding is still rare.',
      },
      footer: {
        email: 'Email',
        linkedin: 'LinkedIn',
      },
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0D10] to-[#141821] text-white relative">
      {/* Grain texture overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      ></div>

      {/* Header - Fixed, transparent */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-8 md:px-16 md:py-10">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="text-lg font-light tracking-wide text-white">{t.header.logo}</div>
          <div className="flex items-center gap-10">
            <a
              href="#approach"
              className="text-sm font-light text-white/90 hover:text-white transition-colors"
            >
              {t.header.nav.approach}
            </a>
            <a
              href="#what-we-do"
              className="text-sm font-light text-white/90 hover:text-white transition-colors"
            >
              {t.header.nav.whatWeDo}
            </a>
            <a
              href="#contact"
              className="text-sm font-light text-white/90 hover:text-white transition-colors"
            >
              {t.header.nav.contact}
            </a>
            <div className="flex items-center gap-2 ml-2">
              <button
                onClick={() => setLanguage('es')}
                className={`text-xs font-light transition-colors ${
                  language === 'es'
                    ? 'text-white'
                    : 'text-white/50 hover:text-white/70'
                }`}
              >
                ES
              </button>
              <span className="text-white/30">|</span>
              <button
                onClick={() => setLanguage('en')}
                className={`text-xs font-light transition-colors ${
                  language === 'en'
                    ? 'text-white'
                    : 'text-white/50 hover:text-white/70'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero - Centered, large, spacious */}
      <section className="min-h-screen flex items-center justify-center px-8 md:px-16 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.1] tracking-[-0.02em] mb-12 text-white">
            {t.hero.headline}
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/70 mb-20 max-w-3xl mx-auto leading-relaxed">
            {t.hero.subheadline}
          </p>
          <a
            href="#contact"
            className="inline-block px-10 py-4 border border-white/20 rounded-sm text-sm font-light text-white/90 hover:border-white/40 hover:bg-white/5 transition-all"
          >
            {t.hero.cta}
          </a>
        </div>
      </section>

      {/* Problem Section - Left aligned */}
      <section className="py-40 px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-left space-y-8">
            <p className="text-3xl md:text-4xl lg:text-5xl font-light leading-[1.3] text-white/90">
              {t.problem.text1}
            </p>
            <p className="text-3xl md:text-4xl lg:text-5xl font-light leading-[1.3] text-white/90">
              {t.problem.text2.split(' ').map((word, i, arr) => {
                const cleanWord = word.toLowerCase().replace(/[.,!?;:]$/, '');
                const isClarity = cleanWord === 'clarity' || cleanWord === 'claridad';
                return (
                  <span key={i}>
                    {isClarity ? (
                      <span className="text-white font-normal">{word}</span>
                    ) : (
                      word
                    )}
                    {i < arr.length - 1 && ' '}
                  </span>
                );
              })}
            </p>
            <div className="pt-12 space-y-6">
              <p className="text-2xl md:text-3xl font-light leading-relaxed text-white/80">
                {t.problem.text3}
              </p>
              <p className="text-2xl md:text-3xl font-light leading-relaxed text-white/80">
                {t.problem.text4}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-40 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-24 text-left">
            {t.approach.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-16 md:gap-20">
            {t.approach.items.map((item, index) => (
              <div key={index} className="space-y-5">
                <h3 className="text-2xl font-light text-white">{item.title}</h3>
                <p className="text-lg font-light text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="py-40 px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-left">
            {t.whatWeDo.title}
          </h2>
          <p className="text-xl font-light text-white/80 mb-16 text-left max-w-3xl leading-relaxed">
            {t.whatWeDo.description}
          </p>
          <ul className="space-y-6 max-w-2xl">
            {t.whatWeDo.items.map((item, index) => (
              <li
                key={index}
                className="text-lg font-light text-white/70 text-left"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="py-40 px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-left">
            {t.whoWeWorkWith.title}
          </h2>
          <p className="text-xl font-light text-white/80 mb-16 text-left max-w-3xl leading-relaxed">
            {t.whoWeWorkWith.description}
          </p>
          <div className="flex flex-wrap gap-4">
            {t.whoWeWorkWith.items.map((item, index) => (
              <span
                key={index}
                className="px-8 py-3 border border-white/10 rounded-sm text-base font-light text-white/70"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section - Almost empty screen */}
      <section className="py-40 px-8 md:px-16 min-h-[70vh] flex flex-col items-center justify-center">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <p className="text-4xl md:text-5xl lg:text-6xl font-light text-white/90 leading-relaxed">
            {t.closing.text1}
          </p>
          <p className="text-4xl md:text-5xl lg:text-6xl font-light text-white/90 leading-relaxed">
            {t.closing.text2}
          </p>
          <div className="pt-24">
            <div className="text-xl font-light tracking-wide text-white/60">
              {t.header.logo}
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Very simple */}
      <footer id="contact" className="py-20 px-8 md:px-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-xl font-light tracking-wide text-white">BUHORA</div>
          <div className="flex items-center gap-8">
            <a
              href="mailto:contact@buhora.com"
              className="text-sm font-light text-white/70 hover:text-white transition-colors"
            >
              {t.footer.email}
            </a>
            <a
              href="https://linkedin.com/company/buhora"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-light text-white/70 hover:text-white transition-colors"
            >
              {t.footer.linkedin}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
