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
    <header className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out header-entrance ${
      shouldHaveSolidBackground 
        ? 'bg-white/80 backdrop-blur-2xl border-b border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)]' 
        : 'bg-white/10 backdrop-blur-2xl border-b border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)]'
    }`}
    style={{
      backdropFilter: 'blur(20px) saturate(180%)',
      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
    }}>
      {/* Glassmorphism overlay effect */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${
        shouldHaveSolidBackground 
          ? 'bg-gradient-to-b from-white/40 to-white/20 opacity-100' 
          : 'bg-gradient-to-b from-white/20 to-white/5 opacity-100'
      }`}></div>
      {/* Subtle shimmer effect */}
      <div className="absolute inset-0 animate-glass-shimmer pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-4 opacity-100">
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-between text-sm font-medium">
          {/* Logo - Tamaño aumentado */}
          <div className="flex-shrink-0 mr-10">
            <Link href="/" className="inline-block group/logo transition-transform duration-500 hover:scale-105 active:scale-95">
              <div className="relative">
                <Image 
                  src="/logo.png" 
                  alt="BUHORA" 
                  width={200}
                  height={60}
                  className={`h-16 w-auto transition-all duration-500 ${
                    shouldHaveSolidBackground ? 'brightness-0' : ''
                  } group-hover/logo:opacity-90`}
                  priority
                />
                <div className={`absolute inset-0 rounded-xl transition-opacity duration-500 ${
                  shouldHaveSolidBackground 
                    ? 'bg-white/20' 
                    : 'bg-white/10'
                } opacity-0 group-hover/logo:opacity-100 -z-10 blur-sm`}></div>
              </div>
            </Link>
          </div>

          {/* Navegación Central */}
          <div className="flex items-center space-x-2">
            <a
              href="#approach"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection('approach');
              }}
              className={`relative transition-all duration-500 ease-out font-medium group px-4 py-2.5 rounded-xl ${
                shouldHaveSolidBackground 
                  ? 'text-gray-700 hover:text-gray-900' 
                  : 'text-white/90 hover:text-white'
              } hover:scale-105 active:scale-95`}
            >
              <span className="relative z-10 transition-all duration-300">{content.header.nav.approach}</span>
              <span className={`absolute inset-0 rounded-xl transition-all duration-500 ${
                shouldHaveSolidBackground 
                  ? 'bg-white/60 backdrop-blur-sm' 
                  : 'bg-white/20 backdrop-blur-sm'
              } opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100`}></span>
              <span className={`absolute inset-x-3 bottom-1.5 h-0.5 ${
                shouldHaveSolidBackground ? 'bg-gradient-to-r from-gray-900 to-gray-700' : 'bg-gradient-to-r from-white to-white/80'
              } transform transition-all duration-500 origin-center rounded-full scale-x-0 group-hover:scale-x-100`}></span>
            </a>

            <Link
              href="/servicios"
              className={`relative transition-all duration-500 ease-out font-medium group px-4 py-2.5 rounded-xl ${
                pathname.startsWith('/servicios') 
                  ? shouldHaveSolidBackground ? 'text-gray-900' : 'text-white'
                  : shouldHaveSolidBackground ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
              } hover:scale-105 active:scale-95`}
            >
              <span className="relative z-10 transition-all duration-300">{content.header.nav.services}</span>
              <span className={`absolute inset-0 rounded-xl transition-all duration-500 ${
                shouldHaveSolidBackground 
                  ? 'bg-white/60 backdrop-blur-sm' 
                  : 'bg-white/20 backdrop-blur-sm'
              } ${pathname.startsWith('/servicios') ? 'opacity-100 scale-100' : 'opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100'}`}></span>
              <span className={`absolute inset-x-3 bottom-1.5 h-0.5 ${
                shouldHaveSolidBackground ? 'bg-gradient-to-r from-gray-900 to-gray-700' : 'bg-gradient-to-r from-white to-white/80'
              } transform transition-all duration-500 origin-center rounded-full ${
                pathname.startsWith('/servicios') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection('contact');
              }}
              className={`relative transition-all duration-500 ease-out font-medium group px-4 py-2.5 rounded-xl ${
                shouldHaveSolidBackground 
                  ? 'text-gray-700 hover:text-gray-900' 
                  : 'text-white/90 hover:text-white'
              } hover:scale-105 active:scale-95`}
            >
              <span className="relative z-10 transition-all duration-300">{content.header.nav.contact}</span>
              <span className={`absolute inset-0 rounded-xl transition-all duration-500 ${
                shouldHaveSolidBackground 
                  ? 'bg-white/60 backdrop-blur-sm' 
                  : 'bg-white/20 backdrop-blur-sm'
              } opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100`}></span>
              <span className={`absolute inset-x-3 bottom-1.5 h-0.5 ${
                shouldHaveSolidBackground ? 'bg-gradient-to-r from-gray-900 to-gray-700' : 'bg-gradient-to-r from-white to-white/80'
              } transform transition-all duration-500 origin-center rounded-full scale-x-0 group-hover:scale-x-100`}></span>
            </a>
          </div>

          {/* Acciones de la derecha */}
          <div className="flex items-center space-x-3">
            {/* Language selector simple */}
            <button
              onClick={() => onLanguageChange(language === 'es' ? 'en' : 'es')}
              className={`relative inline-flex items-center gap-2 px-4 py-2 text-sm rounded-xl transition-all duration-500 ease-out ${
                shouldHaveSolidBackground
                  ? 'text-gray-700 hover:text-gray-900'
                  : 'text-white/80 hover:text-white'
              } hover:scale-105 active:scale-95 group`}
            >
              <span className="relative z-10 text-base transition-transform duration-300 group-hover:scale-110">
                {language === 'es' ? '🇵🇾' : '🇺🇸'}
              </span>
              <span className="relative z-10 font-medium">{language.toUpperCase()}</span>
              <span className={`absolute inset-0 rounded-xl transition-all duration-500 ${
                shouldHaveSolidBackground
                  ? 'bg-white/60 backdrop-blur-sm'
                  : 'bg-white/20 backdrop-blur-sm'
              } opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100`}></span>
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
            className={`relative touch-target focus:outline-none transition-all duration-500 ease-out p-3 rounded-xl min-h-[48px] min-w-[48px] group ${
              shouldHaveSolidBackground
                ? 'text-gray-800'
                : 'text-white'
            } hover:scale-105 active:scale-95`}
            aria-label="Toggle menu"
            style={{
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
            }}
          >
            <span className={`absolute inset-0 rounded-xl transition-all duration-500 ${
              shouldHaveSolidBackground
                ? 'bg-white/60 backdrop-blur-sm border border-white/40'
                : 'bg-white/20 backdrop-blur-sm border border-white/20'
            } opacity-100 group-hover:opacity-100 scale-100`}></span>
            <svg className={`relative z-10 w-7 h-7 transition-all duration-500 ${
              menuOpen ? 'rotate-90' : ''
            }`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} 
                className="transition-all duration-500"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <nav className={`lg:hidden ${menuOpen ? 'flex' : 'hidden'} flex-col items-center space-y-2 mt-6 text-base font-medium rounded-2xl p-6 transition-all duration-700 ease-out transform ${menuOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 -translate-y-4'} safe-area-bottom`}
        style={{
          background: shouldHaveSolidBackground 
            ? 'rgba(255, 255, 255, 0.75)' 
            : 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.2)',
        }}>
          <div className={`absolute inset-0 rounded-2xl transition-opacity duration-700 ${
            shouldHaveSolidBackground 
              ? 'bg-gradient-to-b from-white/40 to-white/20' 
              : 'bg-gradient-to-b from-white/20 to-white/5'
          } opacity-100`}></div>
          
          {/* Enlaces principales */}
          <a
            href="#approach"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection('approach');
            }}
            className="relative touch-target w-full text-center py-3.5 px-4 rounded-xl transition-all duration-500 text-gray-700 hover:text-gray-900 group z-10"
          >
            <span className={`absolute inset-0 rounded-xl transition-all duration-500 ${
              shouldHaveSolidBackground 
                ? 'bg-white/60 backdrop-blur-sm' 
                : 'bg-white/20 backdrop-blur-sm'
            } opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100`}></span>
            <span className="relative z-10">{content.header.nav.approach}</span>
          </a>

          <Link
            href="/servicios"
            className={`relative touch-target w-full text-center py-3.5 px-4 rounded-xl transition-all duration-500 z-10 ${
              pathname.startsWith('/servicios') 
                ? shouldHaveSolidBackground 
                  ? 'bg-white/80 text-gray-900 font-semibold' 
                  : 'bg-white/30 text-white font-semibold'
                : 'text-gray-700 hover:text-gray-900'
            }`}
          >
            <span className={`absolute inset-0 rounded-xl transition-all duration-500 ${
              shouldHaveSolidBackground 
                ? 'bg-white/60 backdrop-blur-sm' 
                : 'bg-white/20 backdrop-blur-sm'
            } ${pathname.startsWith('/servicios') ? 'opacity-100 scale-100' : 'opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100'}`}></span>
            <span className="relative z-10">{content.header.nav.services}</span>
          </Link>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection('contact');
            }}
            className="relative touch-target w-full text-center py-3.5 px-4 rounded-xl transition-all duration-500 text-gray-700 hover:text-gray-900 group z-10"
          >
            <span className={`absolute inset-0 rounded-xl transition-all duration-500 ${
              shouldHaveSolidBackground 
                ? 'bg-white/60 backdrop-blur-sm' 
                : 'bg-white/20 backdrop-blur-sm'
            } opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100`}></span>
            <span className="relative z-10">{content.header.nav.contact}</span>
          </a>

          {/* Divisor */}
          <div className={`w-full h-px my-3 z-10 ${
            shouldHaveSolidBackground 
              ? 'bg-gradient-to-r from-transparent via-gray-300 to-transparent' 
              : 'bg-gradient-to-r from-transparent via-white/30 to-transparent'
          }`}></div>
          
          {/* Selector de idioma */}
          <div className={`flex items-center gap-2 w-full p-1.5 rounded-xl z-10 ${
            shouldHaveSolidBackground 
              ? 'bg-white/60 backdrop-blur-sm' 
              : 'bg-white/20 backdrop-blur-sm'
          }`}
          style={{
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}>
            <button
              onClick={() => onLanguageChange('es')}
              className={`relative touch-target flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-500 ${
                language === 'es' 
                  ? shouldHaveSolidBackground
                    ? 'bg-white text-gray-900 shadow-lg scale-105' 
                    : 'bg-white/40 text-white shadow-lg scale-105'
                  : shouldHaveSolidBackground
                    ? 'text-gray-600 hover:text-gray-900' 
                    : 'text-white/70 hover:text-white'
              } hover:scale-105 active:scale-95`}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span className="text-base">🇵🇾</span>
                <span>ES</span>
              </span>
            </button>
            <button
              onClick={() => onLanguageChange('en')}
              className={`relative touch-target flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-500 ${
                language === 'en' 
                  ? shouldHaveSolidBackground
                    ? 'bg-white text-gray-900 shadow-lg scale-105' 
                    : 'bg-white/40 text-white shadow-lg scale-105'
                  : shouldHaveSolidBackground
                    ? 'text-gray-600 hover:text-gray-900' 
                    : 'text-white/70 hover:text-white'
              } hover:scale-105 active:scale-95`}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span className="text-base">🇺🇸</span>
                <span>EN</span>
              </span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
