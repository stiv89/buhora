import { Content } from './types';
import SectionWrapper from './SectionWrapper';

interface WhatWeDoProps {
  content: Content;
}

export default function WhatWeDo({ content }: WhatWeDoProps) {
  return (
    <SectionWrapper variant="gradient" className="py-24 sm:py-32 md:py-40">
      <section id="what-we-do" className="px-4 sm:px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Título centrado */}
          <div className="mb-12 sm:mb-16 md:mb-20 text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white">
              {content.whatWeDo.title}
            </h2>
          </div>
          
          {/* Glass card principal */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] mb-8 sm:mb-10 md:mb-12">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white/90 text-center leading-relaxed">
              {content.whatWeDo.description}
            </p>
          </div>
          
          {/* Lista de items en glass cards */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {content.whatWeDo.items.map((item, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="w-1 h-12 sm:h-16 bg-gradient-to-b from-white/40 to-white/20 rounded-full flex-shrink-0"></div>
                  <p className="text-lg sm:text-xl md:text-2xl font-light text-white/90">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
