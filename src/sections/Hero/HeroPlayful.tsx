import { Heart, Sparkles, Star } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface HeroPlayfulProps {
  section: Section;
}

export default function HeroPlayful({ section }: HeroPlayfulProps) {
  const bride = section.bindings?.bride || 'Jane';
  const groom = section.bindings?.groom || 'John';
  const date = section.bindings?.date || 'June 15, 2025';
  const tagline = section.bindings?.tagline || "Let's Celebrate Together";

  return (
    <section className="min-h-screen bg-gradient-to-br from-fuchsia-100 via-pink-100 to-yellow-100 flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-10 left-10 animate-bounce opacity-80 hover:opacity-100 transition-opacity">
        <Heart className="w-8 h-8 text-fuchsia-400 drop-shadow-lg" fill="currentColor" />
      </div>
      <div className="absolute bottom-20 right-20 animate-pulse opacity-70 hover:opacity-100 transition-opacity">
        <Star className="w-10 h-10 text-yellow-400 drop-shadow-lg" fill="currentColor" />
      </div>
      <div className="absolute top-1/3 right-10 opacity-80 hover:opacity-100 transition-opacity" style={{ animation: 'bounce 2s infinite 0.3s' }}>
        <Sparkles className="w-6 h-6 text-pink-400 drop-shadow-lg" />
      </div>
      <div className="absolute top-1/4 left-1/4 opacity-60 hover:opacity-80 transition-opacity" style={{ animation: 'pulse 3s infinite' }}>
        <Heart className="w-6 h-6 text-yellow-300 drop-shadow-lg" fill="currentColor" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto group">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-pink-500 to-yellow-500 drop-shadow-lg group-hover:scale-105 transition-transform duration-300">
            {bride}
          </h1>
          <div className="text-4xl sm:text-5xl font-light text-fuchsia-500 group-hover:scale-110 transition-transform duration-300">&</div>
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-pink-500 to-fuchsia-600 drop-shadow-lg group-hover:scale-105 transition-transform duration-300">
            {groom}
          </h1>

          <div className="flex items-center justify-center gap-4 py-6">
            <div className="h-1 w-12 bg-gradient-to-r from-fuchsia-400 to-transparent rounded-full" />
            <Sparkles className="w-6 h-6 text-pink-500 animate-spin" style={{ animationDuration: '3s' }} />
            <div className="h-1 w-12 bg-gradient-to-l from-yellow-400 to-transparent rounded-full" />
          </div>

          <div className="space-y-3">
            <div className="text-2xl sm:text-3xl text-fuchsia-700 font-bold tracking-wide">{date}</div>
            <p className="text-xl sm:text-2xl text-pink-600 font-semibold group-hover:text-fuchsia-600 transition-colors duration-300">
              {tagline}
            </p>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-600 hover:to-pink-600 text-white font-bold tracking-wide uppercase text-sm transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-lg rounded-full">
              RSVP Now
            </button>
            <button className="px-8 py-3 border-2 border-fuchsia-400 hover:border-fuchsia-600 hover:bg-white/50 text-fuchsia-700 font-bold tracking-wide uppercase text-sm transition-all duration-300 transform hover:scale-110 active:scale-95 rounded-full">
              Details
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
