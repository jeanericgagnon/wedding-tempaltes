import { Heart } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface HeroStackedProps {
  section: Section;
}

export default function HeroStacked({ section }: HeroStackedProps) {
  const bride = section.bindings?.bride || 'Jane';
  const groom = section.bindings?.groom || 'John';
  const date = section.bindings?.date || 'June 15, 2025';
  const location = section.bindings?.location || 'Somewhere Beautiful';

  return (
    <section className="min-h-screen bg-white relative overflow-hidden">
      <div className="h-[60vh] relative overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg"
          alt="Hero"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
      </div>

      <div className="max-w-3xl mx-auto px-4 -mt-32 relative z-10 text-center pb-24 group">
        <div className="space-y-8 animate-fade-in">
          <Heart className="w-12 h-12 mx-auto text-rose-500 group-hover:scale-125 group-hover:animate-pulse transition-transform duration-300" />

          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light text-gray-900 leading-tight">
              {bride}
            </h1>
            <div className="flex items-center justify-center">
              <span className="text-4xl text-rose-400 font-light">&</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light text-gray-900 leading-tight">
              {groom}
            </h1>
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="h-0.5 w-0 bg-gradient-to-r from-rose-400 to-transparent group-hover:w-8 transition-all duration-500" />
            <div className="h-1 w-24 bg-rose-300 group-hover:bg-rose-400 transition-colors duration-300 rounded-full" />
            <div className="h-0.5 w-0 bg-gradient-to-l from-rose-400 to-transparent group-hover:w-8 transition-all duration-500" />
          </div>

          <div className="space-y-2">
            <div className="text-xl md:text-2xl text-gray-800 font-light tracking-widest uppercase">
              {date}
            </div>
            <div className="text-lg text-gray-600 font-light">
              {location}
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-rose-600 hover:bg-rose-700 text-white font-light tracking-wide uppercase text-sm transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
              Save the Date
            </button>
            <button className="px-8 py-3 border-2 border-rose-300 hover:border-rose-500 hover:bg-rose-50 text-gray-900 font-light tracking-wide uppercase text-sm transition-all duration-300 transform hover:scale-105 active:scale-95">
              More Info
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}
