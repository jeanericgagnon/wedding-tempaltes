import { Section } from '../../types/layoutConfig';
import { Film, Play } from 'lucide-react';

interface HeroCinematicProps {
  section: Section;
}

export default function HeroCinematic({ section }: HeroCinematicProps) {
  return (
    <section className="min-h-screen bg-black relative overflow-hidden">
      {/* Cinematic background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-purple-900/20 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>

      {/* Animated light rays */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-b from-purple-500 to-transparent rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-t from-pink-500 to-transparent rounded-full blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Film strip decorations */}
      <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-yellow-400 via-transparent to-transparent opacity-30"></div>
      <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-20"></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Top accent */}
          <div className="mb-12 flex justify-center items-center gap-3">
            <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
            <Film size={20} className="text-purple-400" />
            <span className="text-purple-300 text-sm font-semibold tracking-widest uppercase">A Love Story</span>
            <Film size={20} className="text-purple-400" />
            <div className="w-8 h-0.5 bg-gradient-to-l from-purple-500 to-transparent"></div>
          </div>

          {/* Main heading with cinematic treatment */}
          <div className="space-y-6 mb-10">
            <h1 className="text-7xl md:text-8xl font-serif text-white leading-tight tracking-tight">
              <span className="block">Olivia</span>
              <span className="block text-2xl md:text-3xl text-purple-400 font-light mt-4">AND</span>
              <span className="block">Christopher</span>
            </h1>
          </div>

          {/* Tagline with dramatic effect */}
          <div className="max-w-2xl mx-auto space-y-6 mb-12">
            <p className="text-2xl md:text-3xl text-gray-200 font-light">
              Two stories becoming one extraordinary journey
            </p>
            <div className="flex justify-center gap-2">
              <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-transparent"></div>
              <div className="w-1 h-8 bg-gradient-to-b from-pink-500 to-transparent"></div>
              <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-transparent"></div>
            </div>
          </div>

          {/* Date and location */}
          <div className="space-y-3 mb-12 text-gray-300">
            <p className="text-xl md:text-2xl font-serif">
              October 12, 2024
            </p>
            <p className="text-lg">
              The Grand Ballroom, Lakeside Manor
            </p>
          </div>

          {/* CTA buttons with cinematic style */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all flex items-center gap-2 text-lg">
              <Play size={20} />
              RSVP Now
            </button>
            <button className="px-10 py-4 bg-transparent text-white border-2 border-purple-400 rounded-lg font-semibold hover:bg-purple-500/10 transition-colors text-lg">
              Watch Our Story
            </button>
          </div>

          {/* Film frames bottom decoration */}
          <div className="mt-16 flex justify-center gap-2 opacity-40">
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Cinematic scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-purple-400 animate-bounce opacity-60">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
