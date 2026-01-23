'use client';

import { ReactNode } from 'react';
import { Language, Content } from './types';
import GrainTexture from './GrainTexture';
import Header from './Header';
import Footer from './Footer';

interface PageLayoutProps {
  children: ReactNode;
  content: Content;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function PageLayout({ 
  children, 
  content, 
  language, 
  onLanguageChange 
}: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0D10] to-[#141821] text-white relative">
      <GrainTexture />
      <Header content={content} language={language} onLanguageChange={onLanguageChange} />
      {children}
      <Footer content={content} />
    </div>
  );
}
