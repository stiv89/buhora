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
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import StructuredData from './components/StructuredData';

export default function Home() {
  const [language, setLanguage] = useState<Language>('es');
  const t = content[language];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BUHORA",
    "url": "https://buhora.com",
    "logo": "https://buhora.com/logo.png",
    "description": "Data analytics and business intelligence consulting in Paraguay. We help organizations turn complex data into clear, actionable insights for strategic decision-making.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Asunción",
      "addressCountry": "PY"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contacto@buhora.com",
      "contactType": "Customer Service"
    },
    "sameAs": [
      "https://linkedin.com/company/buhora"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Paraguay"
    },
    "knowsAbout": [
      "Data Analytics",
      "Business Intelligence",
      "Data Analysis",
      "Strategic Analytics",
      "Data Consulting",
      "Business Analytics",
      "Data Science",
      "Data Visualization",
      "Executive Dashboards",
      "Decision Support"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "BUHORA",
    "url": "https://buhora.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://buhora.com/centro-de-ayuda",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
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
          <ContactSection content={t} />
          <Footer content={t} />
        </div>
      </div>
    </>
  );
}
