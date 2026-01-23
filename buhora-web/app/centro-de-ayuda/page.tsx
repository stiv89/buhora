'use client';

import { useState } from 'react';
import { Language } from '../components/types';
import { content } from '../components/content';
import PageLayout from '../components/PageLayout';

export default function CentroDeAyuda() {
  const [language, setLanguage] = useState<Language>('es');
  const t = content[language];
  
  const pageContent = {
    es: {
      title: 'Preguntas frecuentes',
      subtitle: 'Respuestas directas',
      faq: {
        items: [
          {
            question: '¿Cómo trabajan?',
            answer: 'Empezamos con tus preguntas estratégicas, no con herramientas. Desarrollamos análisis que respaldan decisiones reales, priorizando claridad sobre complejidad.',
          },
          {
            question: '¿Con quién trabajan?',
            answer: 'Líderes y equipos que necesitan decidir con información clara, no con reportes interminables. Fundadores, ejecutivos y organizaciones en crecimiento.',
          },
          {
            question: '¿Qué servicios ofrecen?',
            answer: 'Analítica estratégica, insights de negocio, soporte para decisiones y claridad en reportes ejecutivos. Sin sesgo de plataforma.',
          },
          {
            question: '¿Cómo contactarlos?',
            answer: 'Escríbenos a contacto@buhora.com. Estamos en Asunción, Paraguay, pero trabajamos de forma remota.',
          },
        ],
      },
      contact: {
        title: '¿Otra pregunta?',
        email: 'contacto@buhora.com',
      },
    },
    en: {
      title: 'Frequently asked questions',
      subtitle: 'Direct answers',
      faq: {
        items: [
          {
            question: 'How do you work?',
            answer: 'We start with your strategic questions, not tools. We develop analyses that support real decisions, prioritizing clarity over complexity.',
          },
          {
            question: 'Who do you work with?',
            answer: 'Leaders and teams who need to decide with clear information, not endless reports. Founders, executives, and growing organizations.',
          },
          {
            question: 'What services do you offer?',
            answer: 'Strategic analytics, business insights, decision support, and executive reporting clarity. No platform bias.',
          },
          {
            question: 'How to contact you?',
            answer: 'Write to us at contacto@buhora.com. We\'re based in Asunción, Paraguay, but work remotely.',
          },
        ],
      },
      contact: {
        title: 'Another question?',
        email: 'contacto@buhora.com',
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
            {/* FAQ */}
            <div className="space-y-8">
              {page.faq.items.map((item, index) => (
                <div key={index} className="space-y-3 pb-8 border-b border-white/10 last:border-0">
                  <h3 className="text-xl md:text-2xl font-light text-white">
                    {item.question}
                  </h3>
                  <p className="text-base font-light text-white/70 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div className="pt-8 text-center space-y-2">
              <p className="text-base font-light text-white/60">
                {page.contact.title}
              </p>
              <a
                href={`mailto:${page.contact.email}`}
                className="inline-block text-lg font-light text-white/90 hover:text-white transition-colors"
              >
                {page.contact.email}
              </a>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
}
