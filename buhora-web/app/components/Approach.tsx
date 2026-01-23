import { Content } from './types';
import SectionWrapper from './SectionWrapper';

interface ApproachProps {
  content: Content;
}

export default function Approach({ content }: ApproachProps) {
  return (
    <SectionWrapper variant="default" className="py-24 sm:py-32 md:py-40">
      <section id="approach" className="px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Título centrado */}
          <div className="mb-16 sm:mb-20 md:mb-24 lg:mb-28 text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white">
              {content.approach.title}
            </h2>
          </div>
          
          {/* Cards glass centradas */}
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {content.approach.items.map((item, index) => (
              <div 
                key={index} 
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="text-center space-y-4 sm:space-y-5 md:space-y-6">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white">
                    {item.title}
                  </h3>
                  <div className="w-16 h-0.5 bg-white/20 mx-auto"></div>
                  <p className="text-base sm:text-lg md:text-xl font-light text-white/80 leading-relaxed">
                    {item.description}
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
