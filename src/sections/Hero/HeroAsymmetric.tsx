import { Section } from '../../types/layoutConfig';
import { Gem, Calendar } from 'lucide-react';

interface HeroAsymmetricProps {
  section: Section;
}

export default function HeroAsymmetric({ section }: HeroAsymmetricProps) {
  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Asymmetric geometric background */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-blue-500/10 via-transparent to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-bl from-blue-400 to-transparent rounded-full blur-3xl opacity-20"></div>
      <div className="absolute top-1/3 -left-32 w-64 h-64 bg-gradient-to-tr from-indigo-500 to-transparent rounded-full blur-3xl opacity-10"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:40px_40px]"></div>

      <div className="relative z-10 min-h-screen flex items-center px-4">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left side - content */}
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 text-blue-400 mb-6">
                <Gem size={20} />
                <span className="text-sm font-medium tracking-widest uppercase">The Journey</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-serif text-white mb-6 leading-tight">
                Emily & James
              </h1>

              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                When two hearts find their perfect match, the world becomes a little more beautiful. Join us as we celebrate the beginning of forever.
              </p>

              <div className="flex items-center gap-4 mb-10 text-slate-300">
                <Calendar size={24} className="text-blue-400" />
                <div>
                  <p className="text-sm font-medium text-slate-400">Wedding Date</p>
                  <p className="text-2xl font-semibold text-white">August 22, 2024</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
                  RSVP
                </button>
                <button className="px-8 py-3 bg-slate-700 text-blue-300 border border-blue-400/30 rounded-lg font-semibold hover:bg-slate-600 transition-colors text-lg">
                  Our Story
                </button>
              </div>
            </div>

            {/* Right side - visual accent */}
            <div className="order-1 md:order-2 relative h-96 md:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-2xl backdrop-blur-md border border-blue-400/20"></div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-500 rounded-full blur-2xl opacity-30"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-indigo-600 rounded-full blur-3xl opacity-20"></div>
              <div className="relative p-8 h-full flex flex-col justify-center items-center text-center">
                <Gem size={80} className="text-blue-300/30 mb-6" />
                <p className="text-slate-300 text-lg italic">A celebration of love</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
