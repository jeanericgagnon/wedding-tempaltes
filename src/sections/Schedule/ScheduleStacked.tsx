import { Section } from '../../types/layoutConfig';
import { MapPin } from 'lucide-react';

interface ScheduleStackedProps {
  section: Section;
}

const events = [
  { time: '8:00 AM', event: 'Bride & Groom Preparation', location: 'Bridal Suites', bg: 'bg-gradient-to-br from-purple-500 to-pink-500' },
  { time: '10:00 AM', event: 'Ceremony Preparation', location: 'Main Hall', bg: 'bg-gradient-to-br from-blue-500 to-cyan-500' },
  { time: '11:00 AM', event: 'Wedding Ceremony', location: 'Main Hall', bg: 'bg-gradient-to-br from-rose-500 to-pink-500', featured: true },
  { time: '12:00 PM', event: 'Family Photography', location: 'Gardens', bg: 'bg-gradient-to-br from-amber-500 to-orange-500' },
  { time: '1:00 PM', event: 'Cocktail Hour', location: 'Terrace', bg: 'bg-gradient-to-br from-yellow-500 to-amber-500' },
  { time: '2:30 PM', event: 'Reception Dinner', location: 'Grand Ballroom', bg: 'bg-gradient-to-br from-green-500 to-emerald-500' },
  { time: '4:00 PM', event: 'Cake Cutting & Toasts', location: 'Grand Ballroom', bg: 'bg-gradient-to-br from-pink-500 to-rose-500' },
  { time: '5:00 PM', event: 'Dancing & Celebration', location: 'Grand Ballroom', bg: 'bg-gradient-to-br from-purple-500 to-indigo-500' },
  { time: '11:00 PM', event: 'Guest Send-Off', location: 'Main Entrance', bg: 'bg-gradient-to-br from-indigo-500 to-purple-500' },
];

export default function ScheduleStacked({ section }: ScheduleStackedProps) {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-3">
            Wedding Day Timeline
          </h2>
          <p className="text-lg text-gray-600">Stacked card view of all events</p>
        </div>

        <div className="space-y-4">
          {events.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} rounded-xl p-6 md:p-8 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ${
                item.featured ? 'ring-4 ring-white' : ''
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {item.event}
                  </h3>
                  <div className="flex items-center gap-2 text-white/90">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm md:text-base">{item.location}</span>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="inline-block bg-white/20 px-4 py-2 rounded-lg font-bold text-sm md:text-base backdrop-blur-sm">
                    {item.time}
                  </span>
                </div>
              </div>

              {item.featured && (
                <div className="mt-4 pt-4 border-t border-white/30">
                  <p className="text-sm md:text-base font-semibold">Main Event</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
