'use client';

import { useState } from 'react';
import { Language } from '../components/types';
import { content } from '../components/content';
import { termsContent } from '../components/legal-content';
import PageLayout from '../components/PageLayout';

export default function TerminosYCondiciones() {
  const [language, setLanguage] = useState<Language>('es');
  const t = content[language];
  const legalContent = termsContent[language];
  
  const currentDate = new Date().toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <PageLayout 
      content={t} 
      language={language} 
      onLanguageChange={setLanguage}
    >
      <main className="pt-32 pb-20 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light mb-4 text-white">
            {legalContent.title}
          </h1>
          <p className="text-sm font-light text-white/50 mb-16">
            {legalContent.lastUpdated} {currentDate}
          </p>

          <div className="space-y-12">
            {legalContent.sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-light text-white">
                  {section.title}
                </h2>
                <p className="text-lg font-light text-white/70 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </PageLayout>
  );
}
