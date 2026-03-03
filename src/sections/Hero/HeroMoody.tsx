import { Section } from '../../types/layoutConfig';

interface HeroMoodyProps {
  section: Section;
}

export default function HeroMoody({ section }: HeroMoodyProps) {
  const bride = section.bindings?.bride || 'Jane';
  const groom = section.bindings?.groom || 'John';
  const date = section.bindings?.date || 'June 15, 2025';
  const conjunction = section.bindings?.conjunction || 'and';

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 flex items-center justify-center relative overflow-hidden group">
      <img
        src="https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/60 group-hover:via-black/40 transition-all duration-700" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto w-full">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-white tracking-tight leading-none group-hover:scale-105 transition-transform duration-500 origin-center">
            {bride}
          </h1>

          <div className="flex items-center justify-center gap-6 py-4">
            <div className="h-px flex-grow max-w-[60px] bg-gradient-to-r from-purple-400 to-transparent group-hover:max-w-[100px] transition-all duration-500" />
            <div className="text-2xl sm:text-3xl text-purple-300 font-serif font-light italic group-hover:text-purple-200 transition-colors duration-300">
              {conjunction}
            </div>
            <div className="h-px flex-grow max-w-[60px] bg-gradient-to-l from-purple-400 to-transparent group-hover:max-w-[100px] transition-all duration-500" />
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-white tracking-tight leading-none group-hover:scale-105 transition-transform duration-500 origin-center">
            {groom}
          </h1>

          <div className="pt-8 flex items-center justify-center">
            <div className="h-1 w-0 bg-gradient-to-r from-purple-400 to-transparent group-hover:w-32 transition-all duration-700" />
          </div>

          <div className="text-base sm:text-lg md:text-xl tracking-widest text-purple-200 uppercase font-light group-hover:text-purple-100 transition-colors duration-300">
            {date}
          </div>

          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-purple-600/50 hover:bg-purple-600/70 backdrop-blur-sm text-white font-light tracking-wide uppercase text-sm transition-all duration-300 border border-purple-400/50 hover:border-purple-300 transform hover:scale-105 active:scale-95">
              RSVP
            </button>
            <button className="px-8 py-3 border border-purple-400/50 hover:border-purple-300 text-purple-200 hover:text-white font-light tracking-wide uppercase text-sm transition-all duration-300 transform hover:scale-105 active:scale-95">
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
          animation: fade-in 1.2s ease-out;
        }
      `}</style>
    </section>
  );
}
