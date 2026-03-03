import { Section } from '../../types/layoutConfig';

interface HeroMinimalProps {
  section: Section;
}

export default function HeroMinimal({ section }: HeroMinimalProps) {
  const bride = section.bindings?.bride || 'Sarah';
  const groom = section.bindings?.groom || 'David';
  const date = section.bindings?.date || '05.10.2025';

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-rose-100 to-transparent rounded-full -mr-48 -mt-48 opacity-30 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-t from-pink-100 to-transparent rounded-full -ml-48 -mb-48 opacity-30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-amber-50 to-rose-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-20 blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto w-full">
        <div className="space-y-8 md:space-y-10">
          <div className="space-y-4">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-light tracking-tighter text-gray-950 leading-none animate-fade-in">
              {bride}
            </h1>
          </div>

          <div className="flex justify-center py-4 md:py-6">
            <div className="text-4xl md:text-5xl text-gray-300 font-extralight">&</div>
          </div>

          <div className="space-y-4">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-light tracking-tighter text-gray-950 leading-none animate-fade-in" style={{ animationDelay: '0.1s' }}>
              {groom}
            </h1>
          </div>

          <div className="pt-8 md:pt-12 border-t border-gray-300 border-opacity-40">
            <div className="text-xs md:text-sm tracking-widest text-gray-500 uppercase font-light">
              {date}
            </div>
            <div className="flex justify-center gap-2 mt-6">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
            </div>
          </div>

          <div className="pt-8 md:pt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <button className="px-8 py-3 text-sm tracking-widest text-gray-700 border border-gray-400 hover:border-gray-600 hover:bg-gray-50 rounded transition-all duration-300 uppercase font-light">
              RSVP
            </button>
            <button className="px-8 py-3 text-sm tracking-widest text-white bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 rounded transition-all duration-300 uppercase font-light shadow-lg hover:shadow-xl">
              Learn More
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
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
