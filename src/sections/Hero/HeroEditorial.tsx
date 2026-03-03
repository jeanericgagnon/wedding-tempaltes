import { Section } from '../../types/layoutConfig';

interface HeroEditorialProps {
  section: Section;
}

export default function HeroEditorial({ section }: HeroEditorialProps) {
  const bride = section.bindings?.bride || 'Jane';
  const groom = section.bindings?.groom || 'John';
  const date = section.bindings?.date || 'June 15, 2025';
  const location = section.bindings?.location || 'The Grand Estate';

  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg')] bg-cover bg-center opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
          <div className="max-w-3xl">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-2">
                <div className="text-sm tracking-[0.3em] text-gray-400 uppercase font-light">
                  Wedding Celebration
                </div>
                <div className="w-12 h-1 bg-gradient-to-r from-rose-500 to-pink-500" />
              </div>

              <div className="space-y-6">
                <div className="group cursor-default">
                  <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tighter leading-none text-white mb-3 transition-all duration-300">
                    {bride}
                  </h1>
                  <div className="h-1 w-0 bg-rose-500 group-hover:w-16 transition-all duration-500" />
                </div>

                <div className="flex items-center gap-6 py-6 border-y border-gray-700 border-opacity-50">
                  <span className="text-6xl sm:text-7xl text-gray-600 font-light">&</span>
                </div>

                <div className="group cursor-default">
                  <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tighter leading-none text-white mb-3 transition-all duration-300">
                    {groom}
                  </h1>
                  <div className="h-1 w-0 bg-pink-500 group-hover:w-16 transition-all duration-500" />
                </div>
              </div>

              <div className="pt-8 space-y-4 border-t border-gray-700 border-opacity-50">
                <div className="space-y-2">
                  <p className="text-lg tracking-widest text-gray-300 uppercase font-light">{date}</p>
                  <p className="text-base text-gray-400 tracking-wide">{location}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <button className="px-8 py-3 bg-rose-600 hover:bg-rose-700 text-white font-light tracking-wide uppercase text-sm transition-all duration-300 transform hover:scale-105 active:scale-95">
                  RSVP Now
                </button>
                <button className="px-8 py-3 border border-gray-400 hover:border-white text-white font-light tracking-wide uppercase text-sm transition-all duration-300 transform hover:scale-105 active:scale-95">
                  Learn More
                </button>
              </div>
            </div>
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
