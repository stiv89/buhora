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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
          // Cerrar dropdowns al hacer scroll
          setOpenDropdown(null);
          
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
    setOpenDropdown(null);
  }, [pathname]);

  // Cerrar dropdowns al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('[data-dropdown]')) {
        setOpenDropdown(null);
      }
    };

    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [openDropdown]);

  // Función para manejar scroll a sección
  const handleScrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out header-entrance ${
      scrolled ? 'pt-2 px-4 lg:px-6' : 'pt-3 px-4 lg:px-6'
    }`}>
      <header className={`w-full max-w-6xl mx-auto transition-all duration-500 ease-out rounded-3xl ${
        shouldHaveSolidBackground 
          ? isOnLightPage
            ? 'bg-white/75 backdrop-blur-xl border border-white/30 shadow-[0_1px_0_rgba(255,255,255,0.05)]' 
            : 'bg-[rgba(11,15,20,0.6)] backdrop-blur-[12px] border border-white/10 shadow-[0_1px_0_rgba(255,255,255,0.05)]'
          : 'bg-transparent backdrop-blur-0 border border-transparent shadow-none'
      } ${scrolled ? 'py-2 lg:py-2.5' : 'py-2.5 lg:py-3'}`}
      style={{
        backdropFilter: scrolled ? (isOnLightPage ? 'blur(16px) saturate(150%)' : 'blur(12px) saturate(120%)') : 'none',
        WebkitBackdropFilter: scrolled ? (isOnLightPage ? 'blur(16px) saturate(150%)' : 'blur(12px) saturate(120%)') : 'none',
      }}>
        {/* Glassmorphism overlay effect - solo cuando scrollea */}
        {scrolled && (
          <div className={`absolute inset-0 rounded-3xl transition-opacity duration-500 ${
            isOnLightPage 
              ? 'bg-gradient-to-b from-white/30 to-white/15 opacity-100' 
              : 'bg-gradient-to-b from-white/5 to-transparent opacity-100'
          }`}></div>
        )}
        
        <div className={`relative max-w-7xl mx-auto px-5 lg:px-6 transition-all duration-500 ${
          scrolled ? 'py-2 lg:py-2.5' : 'py-2.5 lg:py-3'
        } opacity-100`}>
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-between text-sm font-medium">
          {/* Logo - Tamaño reducido */}
          <div className="flex-shrink-0 mr-6 lg:mr-8">
            <Link href="/" className="inline-block group/logo transition-transform duration-500 hover:scale-105 active:scale-95">
              <div className="relative">
                <Image 
                  src="/logo.png" 
                  alt="BUHORA" 
                  width={200}
                  height={60}
                  className={`h-14 lg:h-16 w-auto transition-all duration-500 ${
                    isOnLightPage ? 'brightness-0' : ''
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

          {/* Navegación Central con Dropdowns */}
          <div className="flex items-center space-x-1">
            {/* Dropdown: Enfoque */}
            <div 
              className="relative"
              data-dropdown
              onMouseEnter={() => {
                if (window.innerWidth >= 1024) {
                  setOpenDropdown('approach');
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth >= 1024) {
                  setOpenDropdown(null);
                }
              }}
            >
              <button
                className={`relative transition-all duration-500 ease-out font-medium group px-3 py-2 rounded-xl text-sm flex items-center gap-1 ${
                  isOnLightPage 
                    ? 'text-gray-700 hover:text-gray-900' 
                    : 'text-white/90 hover:text-white'
                }`}
                onClick={() => setOpenDropdown(openDropdown === 'approach' ? null : 'approach')}
              >
                <span className="relative z-10 transition-all duration-300">{content.header.nav.approach}</span>
                <svg className={`w-4 h-4 transition-transform duration-300 ${openDropdown === 'approach' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openDropdown === 'approach' && (
                <div className="absolute top-full left-0 mt-2 w-64 rounded-xl overflow-hidden dropdown-enter"
                style={{
                  background: 'rgba(11, 15, 20, 0.9)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
                }}>
                  <div className="p-2 space-y-1">
                    <a
                      href="#approach"
                      onClick={(e) => {
                        e.preventDefault();
                        handleScrollToSection('approach');
                        setOpenDropdown(null);
                      }}
                      className="block px-4 py-3 rounded-lg text-sm text-white/90 hover:text-white hover:bg-white/5 transition-all duration-200"
                    >
                      {content.header.nav.dropdowns.approach.clarityFirst}
                    </a>
                    <a
                      href="#approach"
                      onClick={(e) => {
                        e.preventDefault();
                        handleScrollToSection('approach');
                        setOpenDropdown(null);
                      }}
                      className="block px-4 py-3 rounded-lg text-sm text-white/90 hover:text-white hover:bg-white/5 transition-all duration-200"
                    >
                      {content.header.nav.dropdowns.approach.realDecisions}
                    </a>
                    <a
                      href="#approach"
                      onClick={(e) => {
                        e.preventDefault();
                        handleScrollToSection('approach');
                        setOpenDropdown(null);
                      }}
                      className="block px-4 py-3 rounded-lg text-sm text-white/90 hover:text-white hover:bg-white/5 transition-all duration-200"
                    >
                      {content.header.nav.dropdowns.approach.independence}
                    </a>
                    <a
                      href="#approach"
                      onClick={(e) => {
                        e.preventDefault();
                        handleScrollToSection('approach');
                        setOpenDropdown(null);
                      }}
                      className="block px-4 py-3 rounded-lg text-sm text-white/90 hover:text-white hover:bg-white/5 transition-all duration-200"
                    >
                      {content.header.nav.dropdowns.approach.howWeWork}
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Dropdown: Servicios */}
            <div 
              className="relative"
              data-dropdown
              onMouseEnter={() => {
                if (window.innerWidth >= 1024) {
                  setOpenDropdown('services');
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth >= 1024) {
                  setOpenDropdown(null);
                }
              }}
            >
              <button
                className={`relative transition-all duration-500 ease-out font-medium group px-3 py-2 rounded-xl text-sm flex items-center gap-1 ${
                  pathname.startsWith('/servicios') 
                    ? isOnLightPage ? 'text-gray-900' : 'text-white'
                    : isOnLightPage ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
                }`}
                onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}
              >
                <span className="relative z-10 transition-all duration-300">{content.header.nav.services}</span>
                <svg className={`w-4 h-4 transition-transform duration-300 ${openDropdown === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-64 rounded-xl overflow-hidden dropdown-enter"
                style={{
                  background: 'rgba(11, 15, 20, 0.9)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
                }}>
                  <div className="p-2 space-y-1">
                    <Link
                      href="/servicios"
                      onClick={() => setOpenDropdown(null)}
                      className="block px-4 py-3 rounded-lg text-sm text-white/90 hover:text-white hover:bg-white/5 transition-all duration-200"
                    >
                      {content.header.nav.dropdowns.services.strategicAnalytics}
                    </Link>
                    <Link
                      href="/servicios"
                      onClick={() => setOpenDropdown(null)}
                      className="block px-4 py-3 rounded-lg text-sm text-white/90 hover:text-white hover:bg-white/5 transition-all duration-200"
                    >
                      {content.header.nav.dropdowns.services.executiveDashboards}
                    </Link>
                    <Link
                      href="/servicios"
                      onClick={() => setOpenDropdown(null)}
                      className="block px-4 py-3 rounded-lg text-sm text-white/90 hover:text-white hover:bg-white/5 transition-all duration-200"
                    >
                      {content.header.nav.dropdowns.services.businessInsights}
                    </Link>
                    <Link
                      href="/servicios"
                      onClick={() => setOpenDropdown(null)}
                      className="block px-4 py-3 rounded-lg text-sm text-white/90 hover:text-white hover:bg-white/5 transition-all duration-200"
                    >
                      {content.header.nav.dropdowns.services.decisionSupport}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Dropdown: Recursos */}
            <div 
              className="relative"
              data-dropdown
              onMouseEnter={() => {
                if (window.innerWidth >= 1024) {
                  setOpenDropdown('resources');
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth >= 1024) {
                  setOpenDropdown(null);
                }
              }}
            >
              <button
                className={`relative transition-all duration-500 ease-out font-medium group px-3 py-2 rounded-xl text-sm flex items-center gap-1 ${
                  isOnLightPage 
                    ? 'text-gray-700 hover:text-gray-900' 
                    : 'text-white/90 hover:text-white'
                }`}
                onClick={() => setOpenDropdown(openDropdown === 'resources' ? null : 'resources')}
              >
                <span className="relative z-10 transition-all duration-300">{content.header.nav.resources}</span>
                <svg className={`w-4 h-4 transition-transform duration-300 ${openDropdown === 'resources' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openDropdown === 'resources' && (
                <div className="absolute top-full left-0 mt-2 w-56 rounded-xl overflow-hidden dropdown-enter"
                style={{
                  background: 'rgba(11, 15, 20, 0.9)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
                }}>
                  <div className="p-2 space-y-1">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenDropdown(null);
                      }}
                      className="block px-4 py-3 rounded-lg text-sm text-white/90 hover:text-white hover:bg-white/5 transition-all duration-200"
                    >
                      {content.header.nav.dropdowns.resources.articles}
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenDropdown(null);
                      }}
                      className="block px-4 py-3 rounded-lg text-sm text-white/90 hover:text-white hover:bg-white/5 transition-all duration-200"
                    >
                      {content.header.nav.dropdowns.resources.cases}
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenDropdown(null);
                      }}
                      className="block px-4 py-3 rounded-lg text-sm text-white/90 hover:text-white hover:bg-white/5 transition-all duration-200"
                    >
                      {content.header.nav.dropdowns.resources.methodology}
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Botón Contactar */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection('contact');
              }}
              className={`relative transition-all duration-500 ease-out font-medium group px-3 py-2 rounded-xl text-sm ${
                isOnLightPage 
                  ? 'text-gray-700 hover:text-gray-900' 
                  : 'text-white/90 hover:text-white'
              } hover:scale-105 active:scale-95`}
            >
              <span className="relative z-10 transition-all duration-300">{content.header.nav.contact}</span>
              <span className={`absolute inset-0 rounded-xl transition-all duration-500 ${
                isOnLightPage 
                  ? 'bg-white/60 backdrop-blur-sm' 
                  : 'bg-white/10 backdrop-blur-sm'
              } opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100`}></span>
            </a>
          </div>

          {/* Acciones de la derecha */}
          <div className="flex items-center space-x-3">
            {/* Language selector simple */}
            <button
              onClick={() => onLanguageChange(language === 'es' ? 'en' : 'es')}
              className={`relative inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-xl transition-all duration-500 ease-out ${
                isOnLightPage
                  ? 'text-gray-700 hover:text-gray-900'
                  : 'text-white/80 hover:text-white'
              } hover:scale-105 active:scale-95 group`}
            >
              <span className="relative z-10 text-base transition-transform duration-300 group-hover:scale-110">
                {language === 'es' ? '🇵🇾' : '🇺🇸'}
              </span>
              <span className="relative z-10 font-medium">{language.toUpperCase()}</span>
              <span className={`absolute inset-0 rounded-xl transition-all duration-500 ${
                isOnLightPage
                  ? 'bg-white/60 backdrop-blur-sm'
                  : 'bg-white/10 backdrop-blur-sm'
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
                  isOnLightPage ? 'brightness-0' : ''
                }`}
                priority
              />
            </div>
          </Link>
          
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`relative touch-target focus:outline-none transition-all duration-500 ease-out p-3 rounded-xl min-h-[48px] min-w-[48px] group ${
              isOnLightPage
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
              isOnLightPage
                ? 'bg-white/60 backdrop-blur-sm border border-white/40'
                : 'bg-white/10 backdrop-blur-sm border border-white/10'
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
          background: isOnLightPage 
            ? 'rgba(255, 255, 255, 0.75)' 
            : scrolled
            ? 'rgba(11, 15, 20, 0.6)'
            : 'rgba(255, 255, 255, 0.15)',
          backdropFilter: scrolled ? 'blur(12px) saturate(120%)' : 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: scrolled ? 'blur(12px) saturate(120%)' : 'blur(20px) saturate(180%)',
          boxShadow: scrolled ? '0 1px 0 rgba(255,255,255,0.05)' : '0 8px 32px 0 rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.2)',
        }}>
          <div className={`absolute inset-0 rounded-2xl transition-opacity duration-700 ${
            isOnLightPage 
              ? 'bg-gradient-to-b from-white/40 to-white/20' 
              : scrolled
              ? 'bg-gradient-to-b from-white/5 to-transparent'
              : 'bg-gradient-to-b from-white/20 to-white/5'
          } opacity-100`}></div>
          
          {/* Enlaces principales */}
          <a
            href="#approach"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection('approach');
            }}
            className={`relative touch-target w-full text-center py-3.5 px-4 rounded-xl transition-all duration-500 group z-10 ${
              isOnLightPage ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
            }`}
          >
            <span className={`absolute inset-0 rounded-xl transition-all duration-500 ${
              isOnLightPage 
                ? 'bg-white/60 backdrop-blur-sm' 
                : 'bg-white/10 backdrop-blur-sm'
            } opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100`}></span>
            <span className="relative z-10">{content.header.nav.approach}</span>
          </a>

          <Link
            href="/servicios"
            className={`relative touch-target w-full text-center py-3.5 px-4 rounded-xl transition-all duration-500 z-10 ${
              pathname.startsWith('/servicios') 
                ? isOnLightPage 
                  ? 'bg-white/80 text-gray-900 font-semibold' 
                  : 'bg-white/30 text-white font-semibold'
                : isOnLightPage ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
            }`}
          >
            <span className={`absolute inset-0 rounded-xl transition-all duration-500 ${
              isOnLightPage 
                ? 'bg-white/60 backdrop-blur-sm' 
                : 'bg-white/10 backdrop-blur-sm'
            } ${pathname.startsWith('/servicios') ? 'opacity-100 scale-100' : 'opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100'}`}></span>
            <span className="relative z-10">{content.header.nav.services}</span>
          </Link>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection('contact');
            }}
            className={`relative touch-target w-full text-center py-3.5 px-4 rounded-xl transition-all duration-500 group z-10 ${
              isOnLightPage ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
            }`}
          >
            <span className={`absolute inset-0 rounded-xl transition-all duration-500 ${
              isOnLightPage 
                ? 'bg-white/60 backdrop-blur-sm' 
                : 'bg-white/10 backdrop-blur-sm'
            } opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100`}></span>
            <span className="relative z-10">{content.header.nav.contact}</span>
          </a>

          {/* Divisor */}
          <div className={`w-full h-px my-3 z-10 ${
            isOnLightPage 
              ? 'bg-gradient-to-r from-transparent via-gray-300 to-transparent' 
              : 'bg-gradient-to-r from-transparent via-white/30 to-transparent'
          }`}></div>
          
          {/* Selector de idioma */}
          <div className={`flex items-center gap-2 w-full p-1.5 rounded-xl z-10 ${
            isOnLightPage 
              ? 'bg-white/60 backdrop-blur-sm' 
              : 'bg-white/10 backdrop-blur-sm'
          }`}
          style={{
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}>
            <button
              onClick={() => onLanguageChange('es')}
              className={`relative touch-target flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-500 ${
                language === 'es' 
                  ? isOnLightPage
                    ? 'bg-white text-gray-900 shadow-lg scale-105' 
                    : 'bg-white/40 text-white shadow-lg scale-105'
                  : isOnLightPage
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
    </div>
  );
}
