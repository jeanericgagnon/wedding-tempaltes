import { Section } from '../../types/layoutConfig';
import { Layers, ChevronDown } from 'lucide-react';

interface HeroLayeredProps {
  section: Section;
}

export default function HeroLayered({ section }: HeroLayeredProps) {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Layer 1 - Back geometric pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="1000" height="1000" fill="url(#grid)" />
        </svg>
      </div>

      {/* Layer 2 - Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-transparent to-gray-900/80"></div>

      {/* Layer 3 - Colored gradient shapes */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-gradient-to-bl from-rose-500/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-full blur-3xl"></div>

      {/* Layer 4 - Accent lines */}
      <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-500/30 to-transparent"></div>
      <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>

      {/* Layer 5 - Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-3xl mx-auto">
          {/* Top layer accent */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-rose-400 mb-8">
              <Layers size={20} />
              <span className="text-sm font-semibold tracking-widest uppercase">Multiple Stories</span>
            </div>
          </div>

          {/* Main content block - layered */}
          <div className="space-y-8">
            {/* Layer card 1 */}
            <div className="relative bg-white/5 backdrop-blur-md border border-rose-400/20 rounded-xl p-8 md:p-12 hover:bg-white/10 transition-all">
              <div className="absolute -inset-px bg-gradient-to-r from-rose-500/20 via-transparent to-orange-500/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity -z-10"></div>

              <div className="text-center space-y-6">
                <h1 className="text-6xl md:text-7xl font-serif text-white leading-tight">
                  Katherine & Ryan
                </h1>

                <p className="text-xl text-gray-300 font-light">
                  Layers of love, built upon a foundation of friendship
                </p>
              </div>
            </div>

            {/* Layer card 2 - offset */}
            <div className="relative md:ml-12 bg-white/5 backdrop-blur-md border border-orange-400/20 rounded-xl p-6 md:p-10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-orange-300 font-semibold uppercase tracking-widest mb-2">The Big Day</p>
                  <p className="text-4xl md:text-5xl font-serif text-white">
                    November 30, 2024
                  </p>
                </div>
                <Layers size={40} className="text-orange-300/30 hidden md:block" />
              </div>
            </div>

            {/* Layer card 3 - offset more */}
            <div className="relative md:mr-12 bg-white/5 backdrop-blur-md border border-rose-400/20 rounded-xl p-6 md:p-10">
              <p className="text-lg text-gray-300 text-center">
                The Enchanted Garden, Sunset Estate
              </p>
            </div>
          </div>

          {/* CTA - layered */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-12">
            <button className="px-10 py-4 bg-gradient-to-r from-rose-600 to-orange-600 text-white rounded-lg font-semibold hover:from-rose-700 hover:to-orange-700 transition-all shadow-xl text-lg">
              RSVP Now
            </button>
            <button className="px-10 py-4 bg-white/10 text-white border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-colors text-lg">
              Details
            </button>
          </div>

          {/* Bottom layer element */}
          <div className="flex justify-center pt-12 text-white/40 animate-bounce">
            <ChevronDown size={32} />
          </div>
        </div>
      </div>
    </section>
  );
}
