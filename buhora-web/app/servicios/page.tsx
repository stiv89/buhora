'use client';

import { useState } from 'react';
import { Language } from '../components/types';
import { content } from '../components/content';
import PageLayout from '../components/PageLayout';
import SectionWrapper from '../components/SectionWrapper';

export default function Servicios() {
  const [language, setLanguage] = useState<Language>('es');
  const t = content[language];
  
  const servicesContent = {
    es: {
      title: 'Nuestros Servicios',
      subtitle: 'Soluciones analíticas diseñadas para transformar datos en decisiones estratégicas',
      services: [
        {
          title: 'Analítica Estratégica',
          description: 'Desarrollamos análisis profundos que conectan datos con objetivos de negocio. Identificamos patrones, tendencias y oportunidades que impulsan el crecimiento estratégico.',
          details: [
            'Análisis de tendencias y patrones',
            'Modelado predictivo',
            'Análisis de escenarios',
            'Benchmarking competitivo'
          ]
        },
        {
          title: 'Insight de Negocio y Operacional',
          description: 'Convertimos datos operacionales en insights accionables. Optimizamos procesos, identificamos cuellos de botella y mejoramos la eficiencia operativa.',
          details: [
            'Análisis de rendimiento operacional',
            'Optimización de procesos',
            'Métricas KPI personalizadas',
            'Análisis de eficiencia'
          ]
        },
        {
          title: 'Soporte para Decisiones',
          description: 'Proporcionamos el contexto y análisis necesario para tomar decisiones informadas. Cada recomendación está respaldada por datos sólidos y análisis riguroso.',
          details: [
            'Dashboards ejecutivos',
            'Análisis ad-hoc',
            'Consultoría estratégica basada en datos',
            'Sesiones de análisis y presentación'
          ]
        },
        {
          title: 'Claridad en Reportes Ejecutivos',
          description: 'Transformamos datos complejos en reportes claros y concisos. Diseñamos visualizaciones que comunican insights de manera efectiva a todos los niveles organizacionales.',
          details: [
            'Reportes ejecutivos personalizados',
            'Visualizaciones de datos',
            'Presentaciones estratégicas',
            'Documentación de análisis'
          ]
        }
      ]
    },
    en: {
      title: 'Our Services',
      subtitle: 'Analytical solutions designed to transform data into strategic decisions',
      services: [
        {
          title: 'Strategic Analytics',
          description: 'We develop deep analyses that connect data with business objectives. We identify patterns, trends, and opportunities that drive strategic growth.',
          details: [
            'Trend and pattern analysis',
            'Predictive modeling',
            'Scenario analysis',
            'Competitive benchmarking'
          ]
        },
        {
          title: 'Business & Operational Insight',
          description: 'We transform operational data into actionable insights. We optimize processes, identify bottlenecks, and improve operational efficiency.',
          details: [
            'Operational performance analysis',
            'Process optimization',
            'Custom KPI metrics',
            'Efficiency analysis'
          ]
        },
        {
          title: 'Decision Support',
          description: 'We provide the context and analysis needed to make informed decisions. Every recommendation is backed by solid data and rigorous analysis.',
          details: [
            'Executive dashboards',
            'Ad-hoc analysis',
            'Data-driven strategic consulting',
            'Analysis and presentation sessions'
          ]
        },
        {
          title: 'Executive Reporting Clarity',
          description: 'We transform complex data into clear and concise reports. We design visualizations that effectively communicate insights at all organizational levels.',
          details: [
            'Custom executive reports',
            'Data visualizations',
            'Strategic presentations',
            'Analysis documentation'
          ]
        }
      ]
    }
  };

  const currentContent = servicesContent[language];

  return (
    <PageLayout 
      content={t} 
      language={language} 
      onLanguageChange={setLanguage}
    >
      <main className="pt-32 pb-20">
        <SectionWrapper variant="gradient" className="py-24 sm:py-32 md:py-40 lg:py-48">
          <div className="px-4 sm:px-6 md:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto">
              {/* Header centrado */}
              <div className="text-center mb-16 sm:mb-20 md:mb-24">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white mb-6 sm:mb-8">
                  {currentContent.title}
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl font-light text-white/80 max-w-3xl mx-auto">
                  {currentContent.subtitle}
                </p>
              </div>

              {/* Grid de servicios */}
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                {currentContent.services.map((service, index) => (
                  <div
                    key={index}
                    className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 md:p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="space-y-6 sm:space-y-8">
                      <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4">
                          {service.title}
                        </h2>
                        <div className="w-20 h-0.5 bg-white/20 mb-6"></div>
                        <p className="text-lg sm:text-xl md:text-2xl font-light text-white/85 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      
                      <div className="pt-4 border-t border-white/10">
                        <ul className="space-y-3 sm:space-y-4">
                          {service.details.map((detail, detailIndex) => (
                            <li
                              key={detailIndex}
                              className="flex items-start gap-3 text-base sm:text-lg font-light text-white/75"
                            >
                              <span className="text-white/40 mt-2">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="mt-16 sm:mt-20 md:mt-24 text-center">
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 md:p-16 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
                  <p className="text-2xl sm:text-3xl md:text-4xl font-light text-white/90 mb-8">
                    {language === 'es' 
                      ? '¿Listo para transformar tus datos en decisiones estratégicas?'
                      : 'Ready to transform your data into strategic decisions?'
                    }
                  </p>
                  <a
                    href="/#contact"
                    className="inline-block px-10 sm:px-12 md:px-16 py-4 sm:py-5 border border-white/25 rounded-lg text-base sm:text-lg md:text-xl font-light text-white/95 hover:border-white/50 hover:bg-white/10 hover:text-white transition-all duration-300"
                  >
                    {language === 'es' ? 'Contactar' : 'Get in touch'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </main>
    </PageLayout>
  );
}
