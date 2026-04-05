import Link from 'next/link';
import { Content } from './types';

interface FooterProps {
  content: Content;
}

export default function Footer({ content }: FooterProps) {
  return (
    <footer style={{ background: '#07090E' }} className="border-t border-white/[0.05]">
      <div className="px-6 sm:px-10 md:px-16 py-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Brand */}
          <span
            className="text-[10px] tracking-[0.2em] uppercase text-white/20"
            style={{ fontFamily: '"DM Mono", monospace' }}
          >
            BUHORA
          </span>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {[
              { label: content.footer.aboutUs, href: '/sobre-nosotros' },
              { label: content.footer.helpCenter, href: '/centro-de-ayuda' },
              { label: content.footer.workWithUs, href: '/trabaja-con-nosotros' },
              { label: content.footer.terms, href: '/terminos-y-condiciones' },
              { label: content.footer.privacy, href: '/politica-de-privacidad' },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-[11px] font-light transition-colors duration-200 hover:text-white/60"
                style={{ color: 'rgba(255,255,255,0.25)', fontFamily: '"DM Sans", sans-serif' }}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <span
            className="text-[10px] text-white/15"
            style={{ fontFamily: '"DM Mono", monospace' }}
          >
            {content.footer.copyright}
          </span>

        </div>
      </div>
    </footer>
  );
}