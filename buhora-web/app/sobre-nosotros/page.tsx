'use client';

import { useState } from 'react';
import { Language } from '../components/types';
import { content } from '../components/content';
import PageLayout from '../components/PageLayout';

export default function SobreNosotros() {
  const [language, setLanguage] = useState<Language>('es');
  const t = content[language];
  
  const pageContent = {
    es: {
      title: 'Por qué existimos',
      subtitle: 'Nuestra forma de pensar los datos',
      stance: {
        title: 'Cómo pensamos distinto',
        intro: 'El problema no es la falta de datos. Es la falta de claridad para decidir.',
        whatWeDont: {
          title: 'Qué no hacemos',
          items: [
            'No ayudamos a generar más datos',
            'No vendemos dashboards interminables',
            'No recomendamos herramientas por comisión',
            'No creamos reportes que nadie lee',
          ],
        },
        whatWeDo: {
          title: 'Qué sí hacemos',
          items: [
            'Ayudamos a entender cuáles datos importan',
            'Construimos análisis que respaldan decisiones reales',
            'Recomendamos lo que funciona, sin sesgo',
            'Priorizamos claridad sobre complejidad',
          ],
        },
      },
      approach: {
        title: 'Nuestra manera de trabajar',
        content: 'Trabajamos como socios analíticos de líderes y equipos que necesitan decidir con información clara, no con reportes interminables.',
        principles: [
          {
            title: 'Claridad',
            decision: 'Menos dashboards. Más decisiones.',
            description: 'Cada análisis responde una pregunta concreta del negocio. Si no respalda una decisión, no lo hacemos.',
          },
          {
            title: 'Independencia',
            decision: 'No vendemos herramientas. Recomendamos lo que funciona.',
            description: 'Sin sesgo de plataforma. Elegimos la mejor solución para cada situación, no la que más nos conviene.',
          },
          {
            title: 'Enfoque en decisiones',
            decision: 'Cada análisis responde una pregunta concreta del negocio.',
            description: 'Empezamos con las decisiones que necesitás tomar, no con las herramientas que podríamos usar.',
          },
        ],
      },
      team: {
        title: 'Cómo trabajamos',
        content: 'Trabajamos como socios analíticos de líderes y equipos que necesitan decidir con información clara, no con reportes interminables.',
      },
    },
    en: {
      title: 'Why we exist',
      subtitle: 'How we think differently about data',
      stance: {
        title: 'How we think differently',
        intro: 'The problem isn\'t lack of data. It\'s lack of clarity to decide.',
        whatWeDont: {
          title: 'What we don\'t do',
          items: [
            'We don\'t help generate more data',
            'We don\'t sell endless dashboards',
            'We don\'t recommend tools for commission',
            'We don\'t create reports no one reads',
          ],
        },
        whatWeDo: {
          title: 'What we do',
          items: [
            'We help understand which data matters',
            'We build analyses that support real decisions',
            'We recommend what works, without bias',
            'We prioritize clarity over complexity',
          ],
        },
      },
      approach: {
        title: 'How we work',
        content: 'We work as analytical partners to leaders and teams who need to decide with clear information, not endless reports.',
        principles: [
          {
            title: 'Clarity',
            decision: 'Fewer dashboards. More decisions.',
            description: 'Every analysis answers a concrete business question. If it doesn\'t support a decision, we don\'t do it.',
          },
          {
            title: 'Independence',
            decision: 'We don\'t sell tools. We recommend what works.',
            description: 'No platform bias. We choose the best solution for each situation, not what benefits us most.',
          },
          {
            title: 'Decision-focused',
            decision: 'Every analysis answers a concrete business question.',
            description: 'We start with the decisions you need to make, not the tools we could use.',
          },
        ],
      },
      team: {
        title: 'How we work',
        content: 'We work as analytical partners to leaders and teams who need to decide with clear information, not endless reports.',
      },
    },
  };

  const page = pageContent[language];

  return (
    <PageLayout 
      content={t} 
      language={language} 
      onLanguageChange={setLanguage}
    >
      <main className="pt-32 pb-20 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light mb-4 text-white">
            {page.title}
          </h1>
          <p className="text-xl font-light text-white/60 mb-16">
            {page.subtitle}
          </p>

          <div className="space-y-16">
            {/* Stance - Cómo pensamos distinto */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-light text-white">
                  {page.stance.title}
                </h2>
                <p className="text-xl font-light text-white/80 leading-relaxed">
                  {page.stance.intro}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Qué no hacemos */}
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-white/60">
                    {page.stance.whatWeDont.title}
                  </h3>
                  <ul className="space-y-3">
                    {page.stance.whatWeDont.items.map((item, index) => (
                      <li key={index} className="text-base font-light text-white/70 leading-relaxed flex items-start gap-3">
                        <span className="text-white/40 mt-1">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Qué sí hacemos */}
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-white">
                    {page.stance.whatWeDo.title}
                  </h3>
                  <ul className="space-y-3">
                    {page.stance.whatWeDo.items.map((item, index) => (
                      <li key={index} className="text-base font-light text-white/90 leading-relaxed flex items-start gap-3">
                        <span className="text-white mt-1">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Approach - Nuestra manera de trabajar */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-light text-white">
                  {page.approach.title}
                </h2>
                <p className="text-lg font-light text-white/70 leading-relaxed">
                  {page.approach.content}
                </p>
              </div>

              <div className="space-y-6">
                {page.approach.principles.map((principle, index) => (
                  <div key={index} className="space-y-3 pb-6 border-b border-white/10 last:border-0">
                    <div className="space-y-1">
                      <h3 className="text-xl font-light text-white">
                        {principle.title}
                      </h3>
                      <p className="text-base font-light text-white/90">
                        {principle.decision}
                      </p>
                    </div>
                    <p className="text-sm font-light text-white/60 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Team - Cómo trabajamos */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-light text-white">
                {page.team.title}
              </h2>
              <p className="text-lg font-light text-white/70 leading-relaxed">
                {page.team.content}
              </p>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
}
