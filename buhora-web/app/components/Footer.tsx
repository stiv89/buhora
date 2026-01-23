import Link from 'next/link';
import { Content } from './types';

interface FooterProps {
  content: Content;
}

export default function Footer({ content }: FooterProps) {
  return (
    <footer className="relative bg-black/90 border-t border-white/5">
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-lg font-light tracking-wide text-white/70">BUHORA</div>
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm font-light text-white/50">
                <Link
                  href="/sobre-nosotros"
                  className="hover:text-white/70 transition-colors"
                >
                  {content.footer.aboutUs}
                </Link>
                <Link
                  href="/centro-de-ayuda"
                  className="hover:text-white/70 transition-colors"
                >
                  {content.footer.helpCenter}
                </Link>
                <Link
                  href="/trabaja-con-nosotros"
                  className="hover:text-white/70 transition-colors"
                >
                  {content.footer.workWithUs}
                </Link>
                <Link
                  href="/terminos-y-condiciones"
                  className="hover:text-white/70 transition-colors"
                >
                  {content.footer.terms}
                </Link>
                <Link
                  href="/politica-de-privacidad"
                  className="hover:text-white/70 transition-colors"
                >
                  {content.footer.privacy}
                </Link>
              </div>
            </div>
            <div className="text-center text-xs font-light text-white/40 pt-2">
              {content.footer.copyright}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
