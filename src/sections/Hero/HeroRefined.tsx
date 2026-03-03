import { Section } from '../../types/layoutConfig';
import { Gem, Crown } from 'lucide-react';

interface HeroRefinedProps {
  section: Section;
}

export default function HeroRefined({ section }: HeroRefinedProps) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Elegant background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-gold-400/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-tl from-amber-500/10 to-transparent rounded-full blur-3xl"></div>

      {/* Elegant border lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-700/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-700/50 to-transparent"></div>

      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-amber-700/30"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-amber-700/30"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-amber-700/30"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-amber-700/30"></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          {/* Top accent - elegant */}
          <div className="space-y-6">
            <div className="flex justify-center">
              <Crown size={32} className="text-amber-600" />
            </div>
            <p className="text-sm font-medium tracking-[0.2em] text-amber-700/80 uppercase">
              An Elegant Affair
            </p>
          </div>

          {/* Main heading - refined */}
          <div className="space-y-8">
            <h1 className="text-7xl md:text-8xl font-serif text-white leading-tight tracking-tight">
              <span className="block">Caroline</span>
              <span className="block text-4xl md:text-5xl text-amber-600 font-light my-4">&</span>
              <span className="block">Alexander</span>
            </h1>

            {/* Decorative separator - elegant */}
            <div className="flex justify-center items-center gap-4">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-amber-600"></div>
              <Gem size={20} className="text-amber-600" />
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-amber-600"></div>
            </div>
          </div>

          {/* Refined tagline */}
          <div className="space-y-8">
            <p className="text-2xl md:text-3xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
              A celebration of timeless elegance and enduring love
            </p>

            {/* Refined info section */}
            <div className="grid grid-cols-2 gap-8 md:gap-12 pt-6">
              <div className="space-y-3">
                <p className="text-xs font-semibold tracking-widest text-amber-600/70 uppercase">Date</p>
                <p className="text-3xl font-serif text-white">April 13, 2024</p>
              </div>
              <div className="space-y-3">
                <p className="text-xs font-semibold tracking-widest text-amber-600/70 uppercase">Venue</p>
                <p className="text-3xl font-serif text-white">The Palace</p>
              </div>
            </div>
          </div>

          {/* Refined CTA */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <button className="px-12 py-4 bg-gradient-to-r from-amber-700 to-amber-600 text-white font-semibold rounded-none hover:from-amber-800 hover:to-amber-700 transition-all uppercase tracking-widest text-sm shadow-xl">
              RSVP
            </button>
            <button className="px-12 py-4 bg-transparent text-amber-600 border border-amber-600/50 font-semibold rounded-none hover:bg-amber-600/5 transition-colors uppercase tracking-widest text-sm">
              Details
            </button>
          </div>

          {/* Bottom refined element */}
          <div className="pt-12">
            <div className="inline-block">
              <p className="text-xs font-light tracking-widest text-gray-500 uppercase">Together Forever</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
