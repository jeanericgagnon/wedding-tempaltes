import { Section } from '../../types/layoutConfig';
import { MapPin, Users, Film, Ticket, Projector, Volume2 } from 'lucide-react';

interface VenueCinematicProps {
  section: Section;
}

export default function VenueCinematic({ section }: VenueCinematicProps) {
  return (
    <section className="py-16 md:py-24 bg-black text-white relative overflow-hidden">
      {/* Background overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-600/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Cinema Header */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-2 bg-red-600/20 border border-red-500/50 rounded-full">
            <Film className="w-4 h-4 text-red-500" />
            <p className="text-red-400 text-sm font-semibold">CINEMATIC VENUE</p>
          </div>
          <h2 className="text-7xl md:text-8xl font-black mb-6 text-white drop-shadow-lg">
            The Paramount
          </h2>
          <div className="flex items-center justify-center gap-2 text-lg text-gray-300">
            <MapPin className="w-5 h-5" />
            <p>222 Historic Theater Lane, Los Angeles, CA 90028</p>
          </div>
        </div>

        {/* Main Feature */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Large hero image */}
          <div className="md:col-span-1">
            <div className="aspect-video bg-gradient-to-br from-red-900 to-black rounded-lg overflow-hidden border border-red-600/50 mb-4">
              <div className="w-full h-full flex items-center justify-center">
                <Projector className="w-24 h-24 text-red-600/60" />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-3 text-red-400">Main Theater</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Historic 1928 movie palace with fully restored art deco architecture. Features include 50-foot ceiling, vintage chandeliers, and custom state-of-the-art projection and sound systems.
              </p>
              <div className="flex items-center gap-3 text-red-400">
                <Ticket className="w-5 h-5" />
                <span className="font-semibold">Perfect for film premieres, screenings & events</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-red-600/10 border border-red-600/30 rounded-lg p-4">
                <Users className="w-6 h-6 mb-2 text-red-500" />
                <p className="text-gray-400 text-sm">Seating</p>
                <p className="text-2xl font-bold text-white">850 seats</p>
              </div>
              <div className="bg-red-600/10 border border-red-600/30 rounded-lg p-4">
                <Volume2 className="w-6 h-6 mb-2 text-red-500" />
                <p className="text-gray-400 text-sm">Audio</p>
                <p className="text-2xl font-bold text-white">Dolby Atmos</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Rows */}
        <div className="space-y-4 mb-16">
          <div className="bg-gradient-to-r from-red-900/30 to-black border border-red-600/30 rounded-lg p-6 flex items-start gap-4">
            <Film className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-white mb-1">4K Digital Projection</p>
              <p className="text-gray-400">Latest DCI cinema projector with 35mm film capability</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-red-900/30 to-black border border-red-600/30 rounded-lg p-6 flex items-start gap-4">
            <Volume2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-white mb-1">Premium Sound</p>
              <p className="text-gray-400">Full Dolby Atmos surround system with orchestra pit</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 border-t border-red-600/30 pt-12">
          <div>
            <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-2">Contact</p>
            <p className="text-white font-bold text-lg">(213) 555-0123</p>
            <p className="text-gray-400 text-sm">events@paramount.la</p>
          </div>
          <div>
            <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-2">Hours</p>
            <p className="text-white font-bold text-lg">Mon-Sun, 10AM-11PM</p>
            <p className="text-gray-400 text-sm">Special late hours available</p>
          </div>
          <div>
            <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-2">Parking</p>
            <p className="text-white font-bold text-lg">Nearby garage</p>
            <p className="text-gray-400 text-sm">Valet service available</p>
          </div>
        </div>
      </div>
    </section>
  );
}
