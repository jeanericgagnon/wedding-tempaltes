import { Section } from '../../types/layoutConfig';
import { Clock, MapPin } from 'lucide-react';

interface ScheduleMinimalProps {
  section: Section;
}

export default function ScheduleMinimal({ section }: ScheduleMinimalProps) {
  const events = [
    { time: '3:30 PM', title: 'Guest Arrival', location: 'Main Hall', icon: 'arrival' },
    { time: '4:00 PM', title: 'Ceremony', location: 'The Grand Ballroom', icon: 'ceremony' },
    { time: '5:00 PM', title: 'Cocktail Hour', location: 'Terrace & Garden', icon: 'cocktail' },
    { time: '6:00 PM', title: 'Reception & Dinner', location: 'Grand Ballroom', icon: 'reception' },
    { time: '9:30 PM', title: 'Dancing & Celebration', location: 'Grand Ballroom', icon: 'dancing' },
    { time: '11:30 PM', title: 'Send Off', location: 'Main Entrance', icon: 'sendoff' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-light text-gray-900 mb-3">Order of Events</h2>
          <p className="text-gray-600">Sunday, June 15, 2025</p>
        </div>

        <div className="space-y-0">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative py-8 px-6 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors duration-300"
            >
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 pt-1">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-rose-100 to-pink-100 group-hover:from-rose-200 group-hover:to-pink-200 transition-colors">
                    <Clock size={18} className="text-rose-600" />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
                    <div>
                      <h3 className="text-2xl font-serif font-light text-gray-900">{event.title}</h3>
                    </div>
                    <span className="text-lg font-mono text-rose-600 font-semibold tracking-wide">
                      {event.time}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600 text-sm md:text-base">
                    <MapPin size={16} className="text-gray-400 flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>

              {index < events.length - 1 && (
                <div className="absolute left-14 top-full w-0.5 h-4 bg-gradient-to-b from-rose-200 to-transparent" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg border border-rose-100">
          <p className="text-center text-gray-700 text-sm md:text-base">
            <span className="font-semibold text-rose-600">Pro tip:</span> Plan to arrive 15 minutes early for smooth guest check-in
          </p>
        </div>
      </div>
    </section>
  );
}
