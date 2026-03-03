import { Waves } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface HeroCoastalProps {
  section: Section;
}

export default function HeroCoastal({ section }: HeroCoastalProps) {
  const bride = section.bindings?.bride || 'Jane';
  const groom = section.bindings?.groom || 'John';
  const date = section.bindings?.date || 'June 15, 2025';
  const subtitle = section.bindings?.subtitle || 'By the sea, where our journey begins';

  return (
    <section className="min-h-screen bg-gradient-to-b from-sky-100 via-blue-50 to-cyan-50 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg')] bg-cover bg-center opacity-20 group-hover:opacity-25 transition-opacity duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-300/10 via-transparent to-transparent" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto group w-full">
        <div className="space-y-8 animate-fade-in">
          <div className="flex justify-center">
            <div className="relative">
              <Waves className="w-24 h-24 text-blue-400 group-hover:animate-bounce transition-all duration-300" />
              <div className="absolute inset-0 bg-blue-400/20 blur-xl group-hover:bg-blue-400/40 transition-all duration-500" />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-light text-blue-950 leading-none tracking-tight">
              {bride} <span className="text-blue-500">&</span> {groom}
            </h1>
          </div>

          <div className="flex items-center justify-center gap-4 py-6">
            <div className="h-1 w-12 bg-blue-300 rounded-full" />
            <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-150 transition-transform duration-300" />
            <div className="h-1 w-12 bg-blue-300 rounded-full" />
          </div>

          <div className="space-y-3">
            <div className="text-xl md:text-2xl text-blue-700 font-light tracking-widest uppercase">
              {date}
            </div>
            <p className="text-lg text-blue-600 font-light italic transition-all duration-300 group-hover:text-blue-700">
              {subtitle}
            </p>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-light tracking-wide uppercase text-sm transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
              RSVP
            </button>
            <button className="px-8 py-3 border-2 border-blue-400 hover:border-blue-600 hover:bg-blue-50 text-blue-900 font-light tracking-wide uppercase text-sm transition-all duration-300 transform hover:scale-105 active:scale-95">
              Explore
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
