import Image from 'next/image';
import { Content } from './types';

interface ClosingProps {
  content: Content;
}

export default function Closing({ content }: ClosingProps) {
  return (
    <div style={{ background: '#07090E' }} className="py-16 sm:py-20 md:py-28">
      <section className="px-6 sm:px-10 md:px-16">
        <div className="max-w-5xl mx-auto">

          {/* Top border */}
          <div className="border-t border-white/[0.06] pt-14 sm:pt-16">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-10">
              <div className="w-5 h-[1.5px] bg-blue-500 flex-shrink-0" />
              <span
                className="text-[10px] tracking-[0.2em] uppercase text-blue-500"
                style={{ fontFamily: '"DM Mono", monospace' }}
              >
                Conclusión
              </span>
            </div>

            {/* Text block */}
            <div className="max-w-3xl space-y-4 mb-16 sm:mb-20">
              <p
                className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-[1.15] tracking-tight text-white"
                style={{ fontFamily: '"Sora", sans-serif' }}
              >
                {content.closing.text1}
              </p>
              <p
                className="text-2xl sm:text-3xl md:text-4xl font-light leading-[1.15] tracking-tight"
                style={{ color: 'rgba(255,255,255,0.45)', fontFamily: '"Sora", sans-serif' }}
              >
                {content.closing.text2}
              </p>
            </div>

            {/* Footer row */}
            <div className="flex items-center justify-between border-t border-white/[0.05] pt-8">
              <Image
                src="/logo.png"
                alt="BUHORA"
                width={120}
                height={36}
                className="h-8 sm:h-9 w-auto opacity-40"
              />
              <div
                className="text-[10px] tracking-[0.15em] uppercase"
                style={{ color: 'rgba(255,255,255,0.2)', fontFamily: '"DM Mono", monospace' }}
              >
                Data Analytics
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}