import { Content } from './types';

interface WhatWeDoProps {
  content: Content;
}

export default function WhatWeDo({ content }: WhatWeDoProps) {
  return (
    <div style={{ background: '#07090E' }} className="py-16 sm:py-20 md:py-28">
      <section id="what-we-do" className="px-6 sm:px-10 md:px-16">
        <div className="max-w-5xl mx-auto">

          {/* Header row */}
          <div className="flex items-start justify-between gap-8 mb-14 sm:mb-16 border-b border-white/[0.06] pb-10">
            <div className="flex items-center gap-3">
              <div className="w-5 h-[1.5px] bg-blue-500 flex-shrink-0" />
              <span
                className="text-[10px] tracking-[0.2em] uppercase text-blue-500"
                style={{ fontFamily: '"DM Mono", monospace' }}
              >
                Servicios
              </span>
            </div>
            <h2
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-right max-w-xs leading-tight"
              style={{ fontFamily: '"Sora", sans-serif' }}
            >
              {content.whatWeDo.title}
            </h2>
          </div>

          {/* Description */}
          <p
            className="text-base sm:text-lg md:text-xl font-light leading-relaxed mb-14 max-w-2xl"
            style={{ color: 'rgba(255,255,255,0.45)', fontFamily: '"DM Sans", sans-serif' }}
          >
            {content.whatWeDo.description}
          </p>

          {/* Items grid */}
          <div className="grid sm:grid-cols-2 gap-px bg-white/[0.04]">
            {content.whatWeDo.items.map((item, index) => (
              <div
                key={index}
                className="group flex items-start gap-5 p-7 sm:p-8 bg-[#07090E] hover:bg-white/[0.02] transition-colors duration-300"
              >
                <span
                  className="flex-shrink-0 text-[10px] tracking-[0.15em] text-white/20 pt-1 group-hover:text-blue-500/60 transition-colors duration-300"
                  style={{ fontFamily: '"DM Mono", monospace' }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p
                  className="text-sm sm:text-base font-light leading-relaxed group-hover:text-white/70 transition-colors duration-300"
                  style={{ color: 'rgba(255,255,255,0.5)', fontFamily: '"DM Sans", sans-serif' }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}