import { Heart } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface HeroClassicProps {
  section: Section;
}

export default function HeroClassic({ section }: HeroClassicProps) {
  const bride = section.bindings?.bride || 'Jane';
  const groom = section.bindings?.groom || 'John';
  const date = section.bindings?.date || 'June 15, 2025';
  const location = section.bindings?.location || 'Somewhere Beautiful';

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-pink-50 to-rose-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg')] bg-cover bg-center opacity-15 group-hover:opacity-20 transition-opacity duration-700" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-rose-200 to-transparent rounded-full -mr-48 -mt-48 opacity-20 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-t from-pink-200 to-transparent rounded-full -ml-48 -mb-48 opacity-20 blur-3xl" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto group">
        <div className="space-y-8 animate-fade-in">
          <Heart className="w-16 h-16 mx-auto mb-4 text-rose-500 group-hover:scale-110 group-hover:animate-pulse transition-transform duration-300" />

          <div className="space-y-4">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-light mb-6 text-gray-900 leading-none tracking-tight">
              {bride}
            </h1>
            <div className="flex items-center justify-center gap-4 py-4">
              <div className="h-1 w-0 group-hover:w-12 bg-rose-400 transition-all duration-500" />
              <span className="text-3xl md:text-4xl text-rose-400 font-light">&</span>
              <div className="h-1 w-0 group-hover:w-12 bg-rose-400 transition-all duration-500" />
            </div>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-light text-gray-900 leading-none tracking-tight">
              {groom}
            </h1>
          </div>

          <div className="pt-8 space-y-3 border-t border-gray-300 border-opacity-30">
            <div className="text-lg md:text-2xl text-gray-700 font-light tracking-widest uppercase">
              {date}
            </div>
            <div className="text-base md:text-lg text-gray-600 font-light">
              {location}
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-rose-600 hover:bg-rose-700 text-white font-light tracking-wide uppercase text-sm transition-all duration-300 transform hover:scale-105 active:scale-95">
              RSVP
            </button>
            <button className="px-8 py-3 border-2 border-rose-400 hover:border-rose-600 hover:bg-rose-50 text-gray-900 font-light tracking-wide uppercase text-sm transition-all duration-300 transform hover:scale-105 active:scale-95">
              Details
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  );
}
