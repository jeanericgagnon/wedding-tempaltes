import { ChevronDown } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface HeroFullscreenProps {
  section: Section;
}

export default function HeroFullscreen({ section }: HeroFullscreenProps) {
  const bride = section.bindings?.bride || 'Jane';
  const groom = section.bindings?.groom || 'John';
  const date = section.bindings?.date || 'June 15, 2025';
  const subtitle = section.bindings?.subtitle || 'Together Forever';

  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden group">
      <img
        src="https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 group-hover:from-black/50 group-hover:via-black/40 group-hover:to-black/70 transition-all duration-700" />

      <div className="relative z-10 text-center px-4 text-white max-w-4xl mx-auto">
        <div className="space-y-8 animate-fade-in">
          <div className="text-base sm:text-lg md:text-xl tracking-widest uppercase mb-8 font-light opacity-90 group-hover:opacity-100 transition-opacity duration-300">
            {subtitle}
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-light mb-8 leading-none group-hover:scale-105 transition-transform duration-500 origin-center">
            {bride} <span className="font-extralight text-gray-200">&</span> {groom}
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto" />

          <div className="text-xl sm:text-2xl md:text-3xl tracking-wider font-light opacity-95 group-hover:opacity-100 transition-opacity duration-300">
            {date}
          </div>

          <div className="pt-8">
            <button className="px-8 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-light tracking-wide uppercase text-sm transition-all duration-300 border border-white/50 hover:border-white">
              Explore Wedding
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white z-10 group cursor-pointer"
        aria-label="Scroll to next section"
      >
        <div className="flex flex-col items-center gap-2 animate-bounce group-hover:animate-bounce hover:opacity-100 opacity-80 transition-opacity">
          <span className="text-xs uppercase font-light tracking-widest opacity-75">Scroll</span>
          <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" />
        </div>
      </button>

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
