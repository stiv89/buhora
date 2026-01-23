import { Content } from './types';
import SectionWrapper from './SectionWrapper';

interface ProblemProps {
  content: Content;
}

export default function Problem({ content }: ProblemProps) {
  return (
    <SectionWrapper variant="gradient" className="py-24 sm:py-32 md:py-40">
      <section className="px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Primera sección - Glass card */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
              <div className="text-center space-y-6 sm:space-y-8 md:space-y-10">
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.2] text-white/95">
                  {content.problem.text1}
                </p>
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.2] text-white/95">
                  {content.problem.text2.split(' ').map((word, i, arr) => {
                    const cleanWord = word.toLowerCase().replace(/[.,!?;:]$/, '');
                    const isClarity = cleanWord === 'clarity' || cleanWord === 'claridad';
                    return (
                      <span key={i}>
                        {isClarity ? (
                          <span className="text-white font-medium">{word}</span>
                        ) : (
                          word
                        )}
                        {i < arr.length - 1 && ' '}
                      </span>
                    );
                  })}
                </p>
              </div>
            </div>
          </div>
          
          {/* Segunda sección - Glass card separada */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
            <div className="text-center space-y-6 sm:space-y-8 md:space-y-10">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed text-white/90">
                {content.problem.text3}
              </p>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed text-white/90">
                {content.problem.text4}
              </p>
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
