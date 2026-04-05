import { Content } from './types';

interface ApproachProps {
  content: Content;
}

export default function Approach({ content }: ApproachProps) {
  return (
    <div style={{ background: '#07090E' }} className="py-16 sm:py-20 md:py-28">
      <section id="approach" className="px-6 sm:px-10 md:px-16">
        <div className="max-w-5xl mx-auto">

          {/* Header row */}
          <div className="flex items-start justify-between gap-8 mb-14 sm:mb-16 border-b border-white/[0.06] pb-10">
            <div className="flex items-center gap-3">
              <div className="w-5 h-[1.5px] bg-blue-500 flex-shrink-0" />
              <span
                className="text-[10px] tracking-[0.2em] uppercase text-blue-500"
                style={{ fontFamily: '"DM Mono", monospace' }}
              >
                Enfoque
              </span>
            </div>
            <h2
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-right max-w-xs leading-tight"
              style={{ fontFamily: '"Sora", sans-serif' }}
            >
              {content.approach.title}
            </h2>
          </div>

          {/* Items — numbered list style */}
          <div className="space-y-0">
            {content.approach.items.map((item, index) => (
              <div
                key={index}
                className="group flex items-start gap-8 sm:gap-12 py-8 sm:py-10 border-b border-white/[0.05] last:border-0 hover:border-white/10 transition-colors duration-300"
              >
                {/* Number */}
                <span
                  className="flex-shrink-0 text-[11px] tracking-[0.15em] text-white/20 pt-1 group-hover:text-blue-500/60 transition-colors duration-300"
                  style={{ fontFamily: '"DM Mono", monospace' }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Content */}
                <div className="flex-1 flex flex-col sm:flex-row sm:items-start sm:gap-12">
                  <h3
                    className="text-base sm:text-lg font-medium text-white/80 sm:w-48 flex-shrink-0 mb-3 sm:mb-0 group-hover:text-white transition-colors duration-300"
                    style={{ fontFamily: '"Sora", sans-serif' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: 'rgba(255,255,255,0.38)', fontFamily: '"DM Sans", sans-serif' }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Arrow indicator */}
                <svg
                  className="flex-shrink-0 w-4 h-4 text-white/10 group-hover:text-blue-500/50 transition-all duration-300 group-hover:translate-x-0.5 mt-0.5 hidden sm:block"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}