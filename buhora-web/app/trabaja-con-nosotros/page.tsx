'use client';

import { useState } from 'react';
import { Language } from '../components/types';
import { content } from '../components/content';
import PageLayout from '../components/PageLayout';

export default function TrabajaConNosotros() {
  const [language, setLanguage] = useState<Language>('es');
  const t = content[language];
  
  const pageContent = {
    es: {
      title: 'Trabaja con nosotros',
      subtitle: 'Posiciones abiertas',
      intro: {
        content: 'Buscamos profesionales que compartan nuestra visión: convertir datos complejos en decisiones claras.',
      },
      positions: {
        items: [
          {
            title: 'UX/UI Designer',
            location: 'Argentina',
            remote: true,
          },
          {
            title: 'Data Analyst',
            location: 'Paraguay',
            remote: true,
          },
          {
            title: 'Frontend Developer',
            location: 'Paraguay',
            remote: true,
          },
          {
            title: 'Sr Backend Developer',
            location: 'Anywhere',
            remote: true,
          },
          {
            title: 'Data Scientist',
            location: 'Paraguay',
            remote: true,
          },
        ],
      },
      apply: {
        title: 'Aplicar',
        description: 'Envía tu CV y carta de presentación a',
        email: 'careers@buhora.com',
      },
    },
    en: {
      title: 'Work with us',
      subtitle: 'Open positions',
      intro: {
        content: 'We seek professionals who share our vision: turning complex data into clear decisions.',
      },
      positions: {
        items: [
          {
            title: 'UX/UI Designer',
            location: 'Argentina',
            remote: true,
          },
          {
            title: 'Data Analyst',
            location: 'Paraguay',
            remote: true,
          },
          {
            title: 'Frontend Developer',
            location: 'Paraguay',
            remote: true,
          },
          {
            title: 'Sr Backend Developer',
            location: 'Anywhere',
            remote: true,
          },
          {
            title: 'Data Scientist',
            location: 'Paraguay',
            remote: true,
          },
        ],
      },
      apply: {
        title: 'Apply',
        description: 'Send your CV and cover letter to',
        email: 'careers@buhora.com',
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

          <div className="space-y-12">
            {/* Intro */}
            <div className="space-y-4">
              <p className="text-lg font-light text-white/70 leading-relaxed">
                {page.intro.content}
              </p>
            </div>

            {/* Positions */}
            <div className="space-y-6">
              <div className="space-y-4">
                {page.positions.items.map((position, index) => (
                  <div key={index} className="pb-6 border-b border-white/10 last:border-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h3 className="text-xl font-light text-white">
                        {position.title}
                      </h3>
                      <div className="flex items-center gap-3 text-sm font-light text-white/60">
                        <span>{position.location}</span>
                        {position.remote && (
                          <>
                            <span className="text-white/30">•</span>
                            <span>Remote</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Apply */}
            <div className="pt-8 space-y-4">
              <h3 className="text-xl font-light text-white">
                {page.apply.title}
              </h3>
              <div className="space-y-2">
                <p className="text-base font-light text-white/70">
                  {page.apply.description}
                </p>
                <a
                  href={`mailto:${page.apply.email}`}
                  className="inline-block text-lg font-light text-white/90 hover:text-white transition-colors"
                >
                  {page.apply.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
}
