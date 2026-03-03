import { Section } from '../../types/layoutConfig';
import { Crown, Clock } from 'lucide-react';

interface ScheduleLuxuryProps {
  section: Section;
}

const events = [
  { time: '08:00', event: 'Private Preparations', location: 'Bridal Suite Deluxe' },
  { time: '11:00', event: 'Grand Ceremony', location: 'Main Hall' },
  { time: '12:00', event: 'Exclusive Photography', location: 'Private Gardens' },
  { time: '13:00', event: 'Aperitif & Canapés', location: 'Champagne Lounge' },
  { time: '14:30', event: 'Five-Course Dinner', location: 'Crystal Ballroom' },
  { time: '17:00', event: 'Celebration & Dancing', location: 'Crystal Ballroom' },
];

export default function ScheduleLuxury({ section }: ScheduleLuxuryProps) {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Crown className="w-8 h-8 text-amber-400" />
            <h2 className="text-4xl md:text-5xl font-serif text-white">
              Luxury Schedule
            </h2>
            <Crown className="w-8 h-8 text-amber-400" />
          </div>
          <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-amber-400 to-transparent mt-4"></div>
          <p className="text-amber-200 text-lg mt-4 tracking-widest">JUNE 15, 2024</p>
        </div>

        <div className="space-y-4">
          {events.map((item, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-r from-slate-700 to-slate-800 border border-amber-700/50 rounded-lg hover:border-amber-400/80 transition-all duration-300 p-6 md:p-8 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/5 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-serif text-white mb-2 group-hover:text-amber-200 transition-colors">
                    {item.event}
                  </h3>
                  <p className="text-amber-100/80 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    {item.location}
                  </p>
                </div>

                <div className="flex items-center gap-3 bg-slate-900/50 px-6 py-3 rounded-lg shrink-0 border border-amber-700/30">
                  <Clock className="w-5 h-5 text-amber-400" />
                  <span className="text-2xl font-semibold text-amber-300">{item.time}</span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-400 via-amber-300 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-amber-100/60 italic">An evening of elegance and celebration</p>
        </div>
      </div>
    </section>
  );
}
