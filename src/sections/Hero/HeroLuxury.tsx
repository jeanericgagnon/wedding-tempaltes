import { Sparkles } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface HeroLuxuryProps {
  section: Section;
}

export default function HeroLuxury({ section }: HeroLuxuryProps) {
  const bride = section.bindings?.bride || 'Elizabeth';
  const groom = section.bindings?.groom || 'Michael';
  const date = section.bindings?.date || 'August 20, 2025';
  const location = section.bindings?.location || 'The Grand Estate';

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-300/5 rounded-full blur-3xl" />
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="flex justify-center mb-12 animate-pulse">
          <Sparkles className="w-14 h-14 text-amber-300" />
        </div>

        <div className="mb-12 space-y-3">
          <p className="text-amber-300/80 font-light tracking-widest uppercase text-xs">
            Together Forever
          </p>
        </div>

        <h1 className="text-7xl md:text-8xl font-serif text-white mb-8 tracking-tight">
          <span className="block">{bride}</span>
          <span className="text-amber-300 font-light text-5xl md:text-6xl block my-4">&</span>
          <span className="block">{groom}</span>
        </h1>

        <div className="flex justify-center mb-16">
          <div className="h-px w-40 bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
        </div>

        <div className="space-y-6">
          <div className="text-3xl md:text-4xl text-amber-100 font-light tracking-wide">
            {date}
          </div>
          <div className="text-xl md:text-2xl text-gray-300 font-light">
            {location}
          </div>
        </div>

        <div className="mt-20 pt-16 border-t border-amber-300/20">
          <p className="text-gray-500 text-xs tracking-widest uppercase">
            Honour of your presence requested
          </p>
        </div>
      </div>
    </section>
  );
}
