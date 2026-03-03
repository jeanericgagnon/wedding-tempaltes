import { Section } from '../../types/layoutConfig';
import { BookOpen, ArrowRight } from 'lucide-react';

interface HeroMagazineProps {
  section: Section;
}

export default function HeroMagazine({ section }: HeroMagazineProps) {
  return (
    <section className="min-h-screen bg-white relative overflow-hidden">
      {/* Magazine-style background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-red-100/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-gray-100 to-transparent"></div>

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600"></div>

      <div className="relative z-10 min-h-screen flex items-center px-4">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side - Magazine cover style */}
            <div className="space-y-6">
              {/* Magazine masthead */}
              <div className="inline-block">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen size={24} className="text-red-600" />
                  <span className="text-sm font-bold uppercase tracking-widest text-gray-700">Love Story</span>
                </div>
              </div>

              {/* Main headline */}
              <div className="space-y-4">
                <p className="text-sm font-bold uppercase tracking-widest text-red-600 mb-2">Wedding Special</p>
                <h1 className="text-6xl md:text-7xl font-serif text-gray-900 leading-tight">
                  Victoria &amp; Thomas
                </h1>
              </div>

              {/* Subheading */}
              <p className="text-2xl text-gray-700 font-light leading-relaxed max-w-lg">
                A modern romance told through timeless moments
              </p>

              {/* Magazine-style info boxes */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="bg-red-50 border-l-4 border-red-600 p-4">
                  <p className="text-xs font-bold uppercase text-gray-600 mb-1">Date</p>
                  <p className="text-xl font-serif text-gray-900">July 20, 2024</p>
                </div>
                <div className="bg-gray-100 border-l-4 border-gray-400 p-4">
                  <p className="text-xs font-bold uppercase text-gray-600 mb-1">Location</p>
                  <p className="text-xl font-serif text-gray-900">City Hall, Downtown</p>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <button className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors text-lg">
                  RSVP <ArrowRight size={20} />
                </button>
                <button className="px-8 py-3 bg-white text-red-600 border-2 border-red-600 font-semibold rounded-lg hover:bg-red-50 transition-colors text-lg">
                  Read Feature
                </button>
              </div>
            </div>

            {/* Right side - Magazine layout visual */}
            <div className="relative">
              {/* Magazine page mock-up */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg shadow-2xl p-8 md:p-12 space-y-6 relative overflow-hidden">
                {/* Page accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 rounded-full blur-2xl"></div>

                {/* Magazine column layout */}
                <div className="relative z-10 space-y-4">
                  <div className="space-y-2">
                    <div className="h-2 bg-red-600 rounded w-1/2"></div>
                    <div className="h-2 bg-gray-600 rounded w-full"></div>
                    <div className="h-2 bg-gray-600 rounded w-5/6"></div>
                  </div>

                  <div className="flex items-center gap-4 py-6 border-t border-b border-gray-700">
                    <BookOpen size={40} className="text-red-500" />
                    <div className="flex-1">
                      <p className="text-xs text-gray-400 uppercase">Featured</p>
                      <p className="text-white font-serif text-xl">Their Journey</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="h-2 bg-gray-600 rounded"></div>
                    <div className="h-2 bg-gray-600 rounded"></div>
                    <div className="h-2 bg-gray-600 rounded w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
