import { Section } from '../../types/layoutConfig';
import { Heart, Sparkles } from 'lucide-react';

interface HeroArtisticProps {
  section: Section;
}

export default function HeroArtistic({ section }: HeroArtisticProps) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 relative overflow-hidden">
      {/* Artistic background pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-rose-200 to-transparent rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-200 to-transparent rounded-full blur-3xl opacity-60"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-rose-300 opacity-40">
        <Sparkles size={48} />
      </div>
      <div className="absolute bottom-32 right-12 text-pink-300 opacity-40">
        <Sparkles size={32} />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Decorative top element */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 text-rose-600">
              <Heart size={20} fill="currentColor" />
              <span className="text-sm font-medium tracking-widest uppercase">Our Celebration</span>
              <Heart size={20} fill="currentColor" />
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-6 leading-tight">
            Sarah & Michael
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-2xl text-gray-700 mb-8 font-light">
            Two souls, one beautiful journey together
          </p>

          {/* Date */}
          <div className="inline-block bg-white/60 backdrop-blur-sm px-8 py-4 rounded-full mb-12 border border-rose-200">
            <p className="text-gray-900 font-semibold">June 15, 2024</p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-rose-600 text-white rounded-lg font-semibold hover:bg-rose-700 transition-colors md:text-lg">
              RSVP Now
            </button>
            <button className="px-8 py-3 bg-white text-rose-600 border-2 border-rose-600 rounded-lg font-semibold hover:bg-rose-50 transition-colors md:text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-rose-600 opacity-60">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
