import { Content } from './types';

interface WhoWeWorkWithProps {
  content: Content;
}

export default function WhoWeWorkWith({ content }: WhoWeWorkWithProps) {
  return (
    <div style={{ background: '#07090E' }} className="py-16 sm:py-20 md:py-28">
      <section className="px-6 sm:px-10 md:px-16">
        <div className="max-w-5xl mx-auto">

          {/* Header row */}
          <div className="flex items-start justify-between gap-8 mb-14 sm:mb-16 border-b border-white/[0.06] pb-10">
            <div className="flex items-center gap-3">
              <div className="w-5 h-[1.5px] bg-blue-500 flex-shrink-0" />
              <span
                className="text-[10px] tracking-[0.2em] uppercase text-blue-500"
                style={{ fontFamily: '"DM Mono", monospace' }}
              >
                Clientes
              </span>
            </div>
            <h2
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-right max-w-xs leading-tight"
              style={{ fontFamily: '"Sora", sans-serif' }}
            >
              {content.whoWeWorkWith.title}
            </h2>
          </div>

          {/* Description */}
          <p
            className="text-base sm:text-lg md:text-xl font-light leading-relaxed mb-14 max-w-2xl"
            style={{ color: 'rgba(255,255,255,0.45)', fontFamily: '"DM Sans", sans-serif' }}
          >
            {content.whoWeWorkWith.description}
          </p>

          {/* Items — horizontal tags */}
          <div className="flex flex-wrap gap-2">
            {content.whoWeWorkWith.items.map((item, index) => (
              <div
                key={index}
                className="group flex items-center gap-3 px-5 py-3 border border-white/[0.07] hover:border-white/15 hover:bg-white/[0.03] transition-all duration-300"
                style={{ borderRadius: '2px' }}
              >
                <span
                  className="text-[9px] tracking-[0.15em] text-white/20 group-hover:text-blue-500/50 transition-colors duration-300"
                  style={{ fontFamily: '"DM Mono", monospace' }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p
                  className="text-sm font-light group-hover:text-white/75 transition-colors duration-300"
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