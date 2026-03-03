import { ArrowRight } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface HeroBoldProps {
  section: Section;
}

export default function HeroBold({ section }: HeroBoldProps) {
  const bride = section.bindings?.bride || 'Alexandra';
  const groom = section.bindings?.groom || 'James';
  const date = section.bindings?.date || 'July 4, 2025';
  const tagline = section.bindings?.tagline || 'Our Love Story Begins';

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 opacity-10">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="border border-gray-700" />
        ))}
      </div>

      <div className="relative z-10 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm tracking-widest text-gray-400 uppercase">
                We Are Getting Married
              </h2>
              <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
                {bride}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                  &
                </span>
                <br />
                {groom}
              </h1>
            </div>

            <p className="text-xl text-gray-300 font-light">
              {tagline}
            </p>

            <div className="space-y-3 pt-6">
              <div className="text-sm text-gray-400">Save the Date</div>
              <div className="text-3xl font-bold text-white">{date}</div>
            </div>

            <button className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:gap-4">
              Learn More <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-80 h-96 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-lg border border-amber-400/30 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-amber-400/40">&</div>
                <p className="text-gray-400 text-sm mt-4">A New Beginning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
