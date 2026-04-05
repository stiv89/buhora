import { Content } from './types';

interface ProblemProps {
  content: Content;
}

export default function Problem({ content }: ProblemProps) {
  return (
    <div style={{ background: '#07090E' }} className="py-16 sm:py-20 md:py-28">
      <section className="px-6 sm:px-10 md:px-16">
        <div className="max-w-3xl mx-auto space-y-px">

          {/* Card 1 */}
          <div className="bg-white/[0.03] border border-white/[0.07] rounded-[3px] px-8 sm:px-12 md:px-16 py-10 sm:py-12 md:py-14">
            <div className="space-y-4 sm:space-y-5">
              <p className="text-2xl sm:text-3xl md:text-4xl font-light leading-[1.25] text-white/80"
                style={{ fontFamily: '"Sora", sans-serif' }}>
                {content.problem.text1}
              </p>
              <p className="text-2xl sm:text-3xl md:text-4xl font-light leading-[1.25] text-white/80"
                style={{ fontFamily: '"Sora", sans-serif' }}>
                {content.problem.text2.split(' ').map((word, i, arr) => {
                  const clean = word.toLowerCase().replace(/[.,!?;:]$/, '');
                  const isKey = clean === 'clarity' || clean === 'claridad';
                  return (
                    <span key={i}>
                      {isKey ? <span className="text-white font-medium">{word}</span> : word}
                      {i < arr.length - 1 && ' '}
                    </span>
                  );
                })}
              </p>
            </div>
          </div>

          {/* Divider dot */}
          <div className="flex justify-center py-3">
            <div className="w-1 h-1 rounded-full bg-white/10" />
          </div>

          {/* Card 2 */}
          <div className="bg-white/[0.03] border border-white/[0.07] rounded-[3px] px-8 sm:px-12 md:px-16 py-10 sm:py-12 md:py-14">
            <div className="space-y-4 sm:space-y-5">
              <p className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed text-white/55"
                style={{ fontFamily: '"DM Sans", sans-serif' }}>
                {content.problem.text3}
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed text-white/55"
                style={{ fontFamily: '"DM Sans", sans-serif' }}>
                {content.problem.text4}
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}