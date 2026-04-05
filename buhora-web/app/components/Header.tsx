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

const NAV_LINK =
  'flex items-center gap-1 px-3 py-1.5 text-xs text-white/50 hover:text-white/90 transition-colors duration-200 rounded-sm cursor-pointer bg-transparent border-none font-sans tracking-wide';

const DROPDOWN_ITEM =
  'block px-3.5 py-2.5 text-xs text-white/50 hover:text-white hover:bg-white/[0.04] transition-all duration-150 border-b border-white/[0.04] last:border-0';

export default function Header({ content, language, onLanguageChange }: HeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const lightPages = useMemo(() => ['/servicios', '/politica-de-privacidad', '/terminos-y-condiciones'], []);
  const isLightPage = useMemo(() => lightPages.some(p => pathname.startsWith(p)), [lightPages, pathname]);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          setOpenDropdown(null);
          ticking = false;
        });
        ticking = true;
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); setOpenDropdown(null); }, [pathname]);

  useEffect(() => {
    if (!openDropdown) return;
    const handler = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('[data-dropdown]')) setOpenDropdown(null);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [openDropdown]);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
    setOpenDropdown(null);
  }, []);

  const solid = scrolled || isLightPage;

  const headerBg = solid
    ? isLightPage
      ? 'bg-white/80 border-black/[0.06] backdrop-blur-xl'
      : 'bg-[rgba(11,15,20,0.8)] border-white/[0.07] backdrop-blur-xl'
    : 'bg-transparent border-transparent';

  const textColor = isLightPage ? 'text-gray-700 hover:text-gray-900' : 'text-white/50 hover:text-white/90';

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-5 pt-3">
      <header className={`w-full max-w-5xl mx-auto h-12 flex items-center justify-between px-4 lg:px-5 border rounded-[3px] transition-all duration-400 ${headerBg}`}>

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="BUHORA"
            width={160}
            height={48}
            className={`h-11 w-auto transition-all duration-300 ${isLightPage ? 'brightness-0' : ''}`}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">

          {/* Enfoque dropdown */}
          <div className="relative" data-dropdown
            onMouseEnter={() => setOpenDropdown('approach')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className={`${NAV_LINK} ${textColor}`}>
              {content.header.nav.approach}
              <svg className={`w-2.5 h-2.5 opacity-40 transition-transform duration-200 ${openDropdown === 'approach' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'approach' && (
              <div className="absolute top-full left-0 mt-1.5 w-48 bg-[rgba(11,15,20,0.97)] border border-white/[0.07] rounded-[3px] overflow-hidden shadow-xl z-10">
                {[content.header.nav.dropdowns.approach.clarityFirst, content.header.nav.dropdowns.approach.realDecisions, content.header.nav.dropdowns.approach.independence, content.header.nav.dropdowns.approach.howWeWork].map((label) => (
                  <a key={label} href="#approach" onClick={(e) => { e.preventDefault(); scrollTo('approach'); }} className={DROPDOWN_ITEM}>{label}</a>
                ))}
              </div>
            )}
          </div>

          {/* Servicios dropdown */}
          <div className="relative" data-dropdown
            onMouseEnter={() => setOpenDropdown('services')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className={`${NAV_LINK} ${textColor}`}>
              {content.header.nav.services}
              <svg className={`w-2.5 h-2.5 opacity-40 transition-transform duration-200 ${openDropdown === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'services' && (
              <div className="absolute top-full left-0 mt-1.5 w-48 bg-[rgba(11,15,20,0.97)] border border-white/[0.07] rounded-[3px] overflow-hidden shadow-xl z-10">
                {[content.header.nav.dropdowns.services.strategicAnalytics, content.header.nav.dropdowns.services.executiveDashboards, content.header.nav.dropdowns.services.businessInsights, content.header.nav.dropdowns.services.decisionSupport].map((label) => (
                  <Link key={label} href="/servicios" onClick={() => setOpenDropdown(null)} className={DROPDOWN_ITEM}>{label}</Link>
                ))}
              </div>
            )}
          </div>

          {/* Recursos dropdown */}
          <div className="relative" data-dropdown
            onMouseEnter={() => setOpenDropdown('resources')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className={`${NAV_LINK} ${textColor}`}>
              {content.header.nav.resources}
              <svg className={`w-2.5 h-2.5 opacity-40 transition-transform duration-200 ${openDropdown === 'resources' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'resources' && (
              <div className="absolute top-full left-0 mt-1.5 w-44 bg-[rgba(11,15,20,0.97)] border border-white/[0.07] rounded-[3px] overflow-hidden shadow-xl z-10">
                {[content.header.nav.dropdowns.resources.articles, content.header.nav.dropdowns.resources.cases, content.header.nav.dropdowns.resources.methodology].map((label) => (
                  <a key={label} href="#" className={DROPDOWN_ITEM}>{label}</a>
                ))}
              </div>
            )}
          </div>

          {/* Contacto */}
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }} className={`${NAV_LINK} ${textColor}`}>
            {content.header.nav.contact}
          </a>
        </nav>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-2">
          <button
            onClick={() => onLanguageChange(language === 'es' ? 'en' : 'es')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 text-[10px] font-mono tracking-widest border rounded-[2px] transition-all duration-200 ${
              isLightPage
                ? 'text-gray-500 border-gray-200 hover:text-gray-800 hover:border-gray-400'
                : 'text-white/35 border-white/[0.07] hover:text-white/75 hover:border-white/15'
            }`}
          >
            <span className="text-sm">{language === 'es' ? '🇵🇾' : '🇺🇸'}</span>
            {language.toUpperCase()}
          </button>

          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
            className="flex items-center gap-1.5 px-4 py-2 text-[11px] font-medium tracking-wide text-white bg-blue-700 hover:bg-blue-800 rounded-[2px] transition-colors duration-200"
          >
            Demo
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden flex items-center justify-center w-9 h-9 border rounded-[2px] transition-all duration-200 ${
            isLightPage
              ? 'text-gray-700 border-gray-200 bg-white/60'
              : 'text-white/60 border-white/[0.07] bg-white/[0.04]'
          }`}
          aria-label="Toggle menu"
        >
          <svg className="w-4 h-4 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={`lg:hidden w-full max-w-5xl mx-auto mt-1.5 border rounded-[3px] overflow-hidden ${
          isLightPage
            ? 'bg-white/90 border-black/[0.06] backdrop-blur-xl'
            : 'bg-[rgba(11,15,20,0.97)] border-white/[0.07] backdrop-blur-xl'
        }`}>
          {[
            { label: content.header.nav.approach, action: () => scrollTo('approach') },
            { label: content.header.nav.services, href: '/servicios' },
            { label: content.header.nav.resources, action: () => setMenuOpen(false) },
            { label: content.header.nav.contact, action: () => scrollTo('contact') },
          ].map(({ label, action, href }) =>
            href ? (
              <Link key={label} href={href} onClick={() => setMenuOpen(false)}
                className={`block px-5 py-3.5 text-sm border-b transition-colors duration-150 ${isLightPage ? 'text-gray-700 border-gray-100 hover:bg-gray-50' : 'text-white/55 border-white/[0.04] hover:text-white hover:bg-white/[0.03]'}`}>
                {label}
              </Link>
            ) : (
              <button key={label} onClick={action}
                className={`w-full text-left px-5 py-3.5 text-sm border-b transition-colors duration-150 ${isLightPage ? 'text-gray-700 border-gray-100 hover:bg-gray-50' : 'text-white/55 border-white/[0.04] hover:text-white hover:bg-white/[0.03]'}`}>
                {label}
              </button>
            )
          )}

          {/* Footer: lang + CTA */}
          <div className={`flex items-center justify-between px-5 py-3 ${isLightPage ? 'border-t border-gray-100' : 'border-t border-white/[0.05]'}`}>
            <div className="flex gap-1.5">
              {(['es', 'en'] as Language[]).map((lang) => (
                <button key={lang} onClick={() => onLanguageChange(lang)}
                  className={`px-3 py-1.5 text-[10px] font-mono tracking-widest border rounded-[2px] transition-all duration-200 ${
                    language === lang
                      ? isLightPage ? 'text-gray-900 border-gray-400 bg-gray-100' : 'text-white/90 border-white/20 bg-white/[0.07]'
                      : isLightPage ? 'text-gray-400 border-gray-200' : 'text-white/30 border-white/[0.06]'
                  }`}>
                  {lang === 'es' ? '🇵🇾 ES' : '🇺🇸 EN'}
                </button>
              ))}
            </div>
            <button onClick={() => scrollTo('contact')}
              className="flex items-center gap-1.5 px-4 py-2 text-[11px] font-medium tracking-wide text-white bg-blue-700 hover:bg-blue-800 rounded-[2px] transition-colors duration-200">
              Solicitar demo →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}