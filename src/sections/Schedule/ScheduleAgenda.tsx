import { Section } from '../../types/layoutConfig';
import { Clock, MapPin, Users, Music, Cake, Sparkles } from 'lucide-react';

interface ScheduleAgendaProps {
  section: Section;
}

const events = [
  { time: '8:00 AM', event: 'Bride & Groom Preparation', location: 'Bridal Suite', icon: Sparkles },
  { time: '10:00 AM', event: 'Ceremony Preparation', location: 'Main Hall Entrance', icon: Users },
  { time: '11:00 AM', event: 'Ceremony', location: 'Main Hall', icon: Music, duration: '30 mins' },
  { time: '12:00 PM', event: 'Photo Session', location: 'Gardens & Lawn', icon: Clock },
  { time: '1:00 PM', event: 'Cocktail Hour', location: 'Terrace', icon: Users },
  { time: '2:30 PM', event: 'Reception Dinner', location: 'Grand Ballroom', icon: Users },
  { time: '4:00 PM', event: 'Toasts & Cake Cutting', location: 'Grand Ballroom', icon: Cake },
  { time: '5:00 PM', event: 'Dancing & Celebration', location: 'Grand Ballroom', icon: Music },
  { time: '11:00 PM', event: 'Guest Send-Off', location: 'Main Entrance', icon: Sparkles },
];

export default function ScheduleAgenda({ section }: ScheduleAgendaProps) {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-3">
            Wedding Day Agenda
          </h2>
          <p className="text-lg text-gray-600">Saturday, June 15, 2024</p>
        </div>

        <div className="space-y-3">
          {events.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white border-l-4 border-rose-400 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 md:p-5 flex items-start gap-4"
              >
                <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-rose-500 flex-shrink-0 mt-1" />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                      {item.event}
                    </h3>
                    <div className="flex items-center gap-2 text-rose-600 font-semibold text-sm md:text-base">
                      <Clock className="w-4 h-4" />
                      {item.time}
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mt-2 text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{item.location}</span>
                    </div>
                    {item.duration && (
                      <>
                        <span className="hidden md:inline text-gray-400">•</span>
                        <span className="text-sm">{item.duration}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
