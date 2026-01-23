'use client';

import { useState } from 'react';
import { Language } from './components/types';
import { content } from './components/content';
import GrainTexture from './components/GrainTexture';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Approach from './components/Approach';
import WhatWeDo from './components/WhatWeDo';
import WhoWeWorkWith from './components/WhoWeWorkWith';
import Closing from './components/Closing';
import Footer from './components/Footer';

export default function Home() {
  const [language, setLanguage] = useState<Language>('es');
  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0F14] to-[#0E1116] text-white relative">
      <GrainTexture />
      <div className="relative z-10">
        <Header content={t} language={language} onLanguageChange={setLanguage} />
        <Hero content={t} />
        <Problem content={t} />
        <Approach content={t} />
        <WhatWeDo content={t} />
        <WhoWeWorkWith content={t} />
        <Closing content={t} />
        <Footer content={t} />
      </div>
    </div>
  );
}
