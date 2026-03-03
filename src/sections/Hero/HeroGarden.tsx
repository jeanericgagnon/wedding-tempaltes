import { Flower } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface HeroGardenProps {
  section: Section;
}

export default function HeroGarden({ section }: HeroGardenProps) {
  const bride = section.bindings?.bride || 'Jane';
  const groom = section.bindings?.groom || 'John';
  const date = section.bindings?.date || 'June 15, 2025';
  const tagline = section.bindings?.tagline || 'Join us for a garden celebration of love and new beginnings';

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center relative overflow-hidden group">
      <img
        src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg"
        alt="Garden Background"
        className="absolute inset-0 w-full h-full object-cover opacity-8 group-hover:opacity-12 transition-opacity duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-100/30 via-transparent to-transparent group-hover:from-emerald-100/40 transition-all duration-700" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto w-full">
        <div className="space-y-8 animate-fade-in">
          <div className="flex justify-center items-center gap-6 mb-2">
            <Flower className="w-8 h-8 text-emerald-500 group-hover:animate-bounce" style={{ animationDelay: '0s' }} />
            <Flower className="w-12 h-12 text-emerald-600 group-hover:animate-bounce" style={{ animationDelay: '0.1s' }} />
            <Flower className="w-8 h-8 text-emerald-500 group-hover:animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-light mb-6 text-emerald-950 leading-none group-hover:scale-105 transition-transform duration-500 origin-center">
            {bride} <span className="text-emerald-500 group-hover:text-emerald-600 transition-colors duration-300">&</span> {groom}
          </h1>

          <div className="flex items-center justify-center gap-4 py-6">
            <div className="h-1 w-12 bg-gradient-to-r from-emerald-300 to-transparent rounded-full" />
            <div className="w-2 h-2 bg-emerald-500 rounded-full group-hover:scale-125 transition-transform duration-300" />
            <div className="h-1 w-12 bg-gradient-to-l from-emerald-300 to-transparent rounded-full" />
          </div>

          <div className="space-y-3">
            <div className="text-xl sm:text-2xl md:text-3xl text-emerald-800 font-light tracking-widest uppercase group-hover:text-emerald-900 transition-colors duration-300">
              {date}
            </div>
            <p className="text-base sm:text-lg text-emerald-700 font-light italic max-w-2xl mx-auto leading-relaxed group-hover:text-emerald-800 transition-colors duration-300">
              {tagline}
            </p>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-light tracking-wide uppercase text-sm transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
              RSVP
            </button>
            <button className="px-8 py-3 border-2 border-emerald-400 hover:border-emerald-600 hover:bg-emerald-50 text-emerald-900 font-light tracking-wide uppercase text-sm transition-all duration-300 transform hover:scale-105 active:scale-95">
              Learn More
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
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
}
