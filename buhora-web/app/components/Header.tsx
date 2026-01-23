'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { Language, Content } from './types';

interface HeaderProps {
  content: Content;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function Header({ content, language, onLanguageChange }: HeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Páginas que necesitan header con fondo desde el inicio
  const pagesWithLightBackground = useMemo(() => [
    '/servicios',
    '/politica-de-privacidad',
    '/terminos-y-condiciones',
  ], []);
  
  const isOnLightPage = useMemo(() => 
    pagesWithLightBackground.some(page => pathname.startsWith(page)), 
    [pagesWithLightBackground, pathname]
  );
  
  // Determinar si el header debe tener fondo sólido
  const shouldHaveSolidBackground = scrolled || isOnLightPage;

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setScrolled(scrollY > 50);
          
          ticking = false;
        });
        ticking = true;
      }
    };
    
    // Ejecutar inmediatamente para verificar el estado inicial
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset del menú cuando cambia la ruta
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Función para manejar scroll a sección
  const handleScrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out ${
      shouldHaveSolidBackground 
        ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/50' 
        : 'bg-transparent border-b border-white/10'
    }`}>
      
      <div className="relative max-w-7xl mx-auto px-6 py-2 opacity-100">
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-between text-sm font-medium">
          {/* Logo - Tamaño aumentado */}
          <div className="flex-shrink-0 mr-10">
            <Link href="/" className="inline-block">
              <Image 
                src="/logo.png" 
                alt="BUHORA" 
                width={200}
                height={60}
                className={`h-16 w-auto transition-all duration-300 ${
                  shouldHaveSolidBackground ? 'brightness-0' : ''
                }`}
                priority
              />
            </Link>
          </div>

          {/* Navegación Central */}
          <div className="flex items-center space-x-6">
            <a
              href="#approach"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection('approach');
              }}
              className={`relative transition-all duration-300 font-medium group px-3 py-2 rounded-lg ${
                shouldHaveSolidBackground 
                  ? 'text-gray-500 hover:text-gray-800' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              <span className="relative z-10">{content.header.nav.approach}</span>
              <span className={`absolute inset-x-0 bottom-0 h-0.5 ${
                shouldHaveSolidBackground ? 'bg-black' : 'bg-white'
              } transform transition-transform duration-300 origin-left rounded-full scale-x-0 group-hover:scale-x-100`}></span>
            </a>

            <Link
              href="/servicios"
              className={`relative transition-all duration-300 font-medium group px-3 py-2 rounded-lg ${
                pathname.startsWith('/servicios') 
                  ? shouldHaveSolidBackground ? 'text-gray-900' : 'text-white'
                  : shouldHaveSolidBackground ? 'text-gray-500 hover:text-gray-800' : 'text-white/90 hover:text-white'
              }`}
            >
              <span className="relative z-10">{content.header.nav.services}</span>
              <span className={`absolute inset-x-0 bottom-0 h-0.5 ${
                shouldHaveSolidBackground ? 'bg-black' : 'bg-white'
              } transform transition-transform duration-300 origin-left rounded-full ${
                pathname.startsWith('/servicios') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection('contact');
              }}
              className={`relative transition-all duration-300 font-medium group px-3 py-2 rounded-lg ${
                shouldHaveSolidBackground 
                  ? 'text-gray-500 hover:text-gray-800' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              <span className="relative z-10">{content.header.nav.contact}</span>
              <span className={`absolute inset-x-0 bottom-0 h-0.5 ${
                shouldHaveSolidBackground ? 'bg-black' : 'bg-white'
              } transform transition-transform duration-300 origin-left rounded-full scale-x-0 group-hover:scale-x-100`}></span>
            </a>
          </div>

          {/* Acciones de la derecha */}
          <div className="flex items-center space-x-3">
            {/* Language selector simple */}
            <button
              onClick={() => onLanguageChange(language === 'es' ? 'en' : 'es')}
              className={`inline-flex items-center gap-1 px-2 py-1 text-sm rounded-md transition-colors duration-200 ${
                shouldHaveSolidBackground
                  ? 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="text-xs">{language === 'es' ? '🇵🇾' : '🇺🇸'}</span>
              <span className="font-medium">{language.toUpperCase()}</span>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between">
          <Link href="/" className="inline-block group touch-target">
            <div className="bg-transparent border-transparent rounded-xl p-3 transition-all duration-300">
              <Image 
                src="/logo.png" 
                alt="BUHORA" 
                width={180}
                height={56}
                className={`h-14 w-auto transition-all duration-300 ${
                  shouldHaveSolidBackground ? 'brightness-0' : ''
                }`}
                priority
              />
            </div>
          </Link>
          
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`touch-target hover:opacity-80 focus:outline-none transition-all duration-300 p-3 rounded-xl hover:shadow-lg border min-h-[48px] min-w-[48px] ${
              shouldHaveSolidBackground
                ? 'text-gray-800 hover:bg-gray-100 border-gray-200'
                : 'text-white hover:bg-white/20 hover:backdrop-blur-sm border-white/10 hover:border-white/30'
            }`}
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} 
                className="transition-all duration-300"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <nav className={`lg:hidden ${menuOpen ? 'flex' : 'hidden'} flex-col items-center space-y-2 mt-6 text-base font-medium bg-white/95 backdrop-blur-xl shadow-2xl border border-gray-200 rounded-2xl p-6 transition-all duration-500 transform ${menuOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 -translate-y-4'} safe-area-bottom`}>
          
          {/* Enlaces principales */}
          <a
            href="#approach"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection('approach');
            }}
            className="touch-target w-full text-center py-3 px-4 rounded-lg transition-all duration-300 text-gray-700 hover:bg-gray-50"
          >
            {content.header.nav.approach}
          </a>

          <Link
            href="/servicios"
            className={`touch-target w-full text-center py-3 px-4 rounded-lg transition-all duration-300 ${
              pathname.startsWith('/servicios') 
                ? 'bg-gray-100 text-gray-900 font-semibold' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            {content.header.nav.services}
          </Link>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection('contact');
            }}
            className="touch-target w-full text-center py-3 px-4 rounded-lg transition-all duration-300 text-gray-700 hover:bg-gray-50"
          >
            {content.header.nav.contact}
          </a>

          {/* Divisor */}
          <div className="w-full h-px bg-gray-200 my-2"></div>
          
          {/* Selector de idioma */}
          <div className="flex items-center gap-2 w-full p-1 bg-gray-100 rounded-lg">
            <button
              onClick={() => onLanguageChange('es')}
              className={`touch-target flex-1 px-4 py-2.5 rounded-md text-sm font-medium transition-all duration-300 ${
                language === 'es' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              🇵🇾 ES
            </button>
            <button
              onClick={() => onLanguageChange('en')}
              className={`touch-target flex-1 px-4 py-2.5 rounded-md text-sm font-medium transition-all duration-300 ${
                language === 'en' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              🇺🇸 EN
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
