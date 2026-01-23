import Image from 'next/image';
import { Content } from './types';
import SectionWrapper from './SectionWrapper';

interface ClosingProps {
  content: Content;
}

export default function Closing({ content }: ClosingProps) {
  return (
    <SectionWrapper variant="gradient" className="py-24 sm:py-32 md:py-40">
      <section className="px-4 sm:px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Glass card centrada */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
            <div className="text-center space-y-8 sm:space-y-10 md:space-y-12">
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white/95 leading-relaxed">
                {content.closing.text1}
              </p>
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white/95 leading-relaxed">
                {content.closing.text2}
              </p>
              <div className="pt-12 sm:pt-16 md:pt-20">
                <Image
                  src="/logo.png"
                  alt="BUHORA"
                  width={100}
                  height={33}
                  className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto mx-auto opacity-70"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
