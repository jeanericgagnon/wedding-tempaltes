import { Section } from '../../types/layoutConfig';
import { Wind, Heart, Star } from 'lucide-react';

interface HeroFloatingProps {
  section: Section;
}

export default function HeroFloating({ section }: HeroFloatingProps) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/40 rounded-full blur-2xl animate-float" style={{ animation: 'float 6s ease-in-out infinite' }}></div>
      <div className="absolute top-40 right-20 w-40 h-40 bg-cyan-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-1/3 w-48 h-48 bg-teal-200/30 rounded-full blur-3xl" style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '1s' }}></div>
      <div className="absolute -bottom-16 right-1/4 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl" style={{ animation: 'float 10s ease-in-out infinite', animationDelay: '3s' }}></div>

      {/* Floating decorative shapes */}
      <div className="absolute top-1/4 left-1/4 text-cyan-300 opacity-20 animate-bounce" style={{ animationDelay: '0s' }}>
        <Star size={48} />
      </div>
      <div className="absolute bottom-1/3 right-1/4 text-blue-300 opacity-20 animate-bounce" style={{ animationDelay: '1s' }}>
        <Heart size={40} />
      </div>
      <div className="absolute top-1/2 right-1/6 text-teal-300 opacity-20 animate-bounce" style={{ animationDelay: '2s' }}>
        <Wind size={44} />
      </div>

      {/* Keyframe animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          {/* Top floating accent */}
          <div className="inline-block animate-bounce">
            <div className="bg-white/60 backdrop-blur-md px-6 py-2 rounded-full border border-cyan-200/50">
              <span className="text-cyan-700 font-medium tracking-widest text-sm uppercase">A New Beginning</span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-7xl font-serif text-gray-900 leading-tight">
            Alexandra & Marcus
          </h1>

          {/* Decorative separator */}
          <div className="flex justify-center items-center gap-3">
            <Heart size={20} className="text-cyan-500 animate-pulse" />
            <div className="w-12 h-px bg-gradient-to-r from-cyan-400 to-blue-400"></div>
            <Heart size={20} className="text-blue-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-700 font-light max-w-2xl mx-auto leading-relaxed">
            Where dreams meet destiny, love takes flight
          </p>

          {/* Date card floating */}
          <div className="inline-block bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-cyan-100/50" style={{ animation: 'float 4s ease-in-out infinite' }}>
            <p className="text-sm text-cyan-600 font-semibold uppercase tracking-widest mb-2">Wedding Date</p>
            <p className="text-4xl font-serif text-gray-900 mb-2">May 18, 2024</p>
            <p className="text-gray-600">Oceanview Resort & Spa</p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg text-lg">
              RSVP
            </button>
            <button className="px-10 py-4 bg-white text-cyan-600 border-2 border-cyan-400 rounded-xl font-semibold hover:bg-cyan-50 transition-colors text-lg">
              Our Journey
            </button>
          </div>

          {/* Floating message */}
          <p className="text-gray-600 italic pt-4">
            Join us for an unforgettable celebration
          </p>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-cyan-400 rounded-full opacity-50" style={{ animation: 'float 15s linear infinite' }}></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full opacity-50" style={{ animation: 'float 20s linear infinite', animationDelay: '5s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-teal-400 rounded-full opacity-50" style={{ animation: 'float 25s linear infinite', animationDelay: '10s' }}></div>
      </div>
    </section>
  );
}
