import { Content } from './types';

interface ContactSectionProps {
  content: Content;
}

export default function ContactSection({ content }: ContactSectionProps) {
  return (
    <div style={{ background: '#07090E' }} className="py-16 sm:py-20 md:py-24">
      <section id="contact" className="px-6 sm:px-10 md:px-16">
        <div className="max-w-5xl mx-auto">

          {/* Header row */}
          <div className="flex items-start justify-between gap-8 mb-14 border-b border-white/[0.06] pb-10">
            <div className="flex items-center gap-3">
              <div className="w-5 h-[1.5px] bg-blue-500 flex-shrink-0" />
              <span
                className="text-[10px] tracking-[0.2em] uppercase text-blue-500"
                style={{ fontFamily: '"DM Mono", monospace' }}
              >
                Contacto
              </span>
            </div>
            <h2
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-right max-w-xs leading-tight"
              style={{ fontFamily: '"Sora", sans-serif' }}
            >
              {content.header.nav.contact}
            </h2>
          </div>

          {/* Contact items */}
          <div className="space-y-0">

            {/* Location */}
            <div className="group flex items-center gap-8 sm:gap-12 py-6 border-b border-white/[0.05] hover:border-white/10 transition-colors duration-300">
              <span
                className="flex-shrink-0 text-[10px] tracking-[0.15em] text-white/20 group-hover:text-blue-500/60 transition-colors duration-300 w-6"
                style={{ fontFamily: '"DM Mono", monospace' }}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <span
                className="flex-shrink-0 text-[10px] tracking-[0.12em] uppercase text-white/20 w-20"
                style={{ fontFamily: '"DM Mono", monospace' }}
              >
                Ubicación
              </span>
              <p
                className="text-sm font-light group-hover:text-white/70 transition-colors duration-300"
                style={{ color: 'rgba(255,255,255,0.5)', fontFamily: '"DM Sans", sans-serif' }}
              >
                {content.footer.location}
              </p>
            </div>

            {/* Email */}
            <div className="group flex items-center gap-8 sm:gap-12 py-6 border-b border-white/[0.05] hover:border-white/10 transition-colors duration-300">
              <span
                className="flex-shrink-0 text-white/20 group-hover:text-blue-500/60 transition-colors duration-300 w-6"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <span
                className="flex-shrink-0 text-[10px] tracking-[0.12em] uppercase text-white/20 w-20"
                style={{ fontFamily: '"DM Mono", monospace' }}
              >
                Email
              </span>
              <a
                href="mailto:contacto@buhora.com"
                className="text-sm font-light transition-colors duration-300 hover:text-white"
                style={{ color: 'rgba(255,255,255,0.5)', fontFamily: '"DM Sans", sans-serif' }}
              >
                contacto@buhora.com
              </a>
            </div>

            {/* LinkedIn */}
            <div className="group flex items-center gap-8 sm:gap-12 py-6 hover:border-white/10 transition-colors duration-300">
              <span
                className="flex-shrink-0 text-white/20 group-hover:text-blue-500/60 transition-colors duration-300 w-6"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </span>
              <span
                className="flex-shrink-0 text-[10px] tracking-[0.12em] uppercase text-white/20 w-20"
                style={{ fontFamily: '"DM Mono", monospace' }}
              >
                LinkedIn
              </span>
              <a
                href="https://linkedin.com/company/buhora"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-light transition-colors duration-300 hover:text-white"
                style={{ color: 'rgba(255,255,255,0.5)', fontFamily: '"DM Sans", sans-serif' }}
              >
                {content.footer.linkedin}
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}