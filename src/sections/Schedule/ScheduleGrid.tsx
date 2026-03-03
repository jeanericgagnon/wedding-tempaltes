import { Section } from '../../types/layoutConfig';
import { Clock, MapPin, Utensils, Music, Camera } from 'lucide-react';

interface ScheduleGridProps {
  section: Section;
}

const events = [
  { time: '8:00 AM', title: 'Preparations', icon: Clock, color: 'purple', location: 'Bridal Suites' },
  { time: '11:00 AM', title: 'Ceremony', icon: Music, color: 'rose', location: 'Main Hall' },
  { time: '12:00 PM', title: 'Photography', icon: Camera, color: 'amber', location: 'Gardens' },
  { time: '1:00 PM', title: 'Cocktails', icon: Utensils, color: 'blue', location: 'Terrace' },
  { time: '2:30 PM', title: 'Dinner', icon: Utensils, color: 'indigo', location: 'Ballroom' },
  { time: '5:00 PM', title: 'Dancing', icon: Music, color: 'pink', location: 'Ballroom' },
];

const colorMap = {
  purple: 'bg-purple-100 border-purple-300 text-purple-900',
  rose: 'bg-rose-100 border-rose-300 text-rose-900',
  amber: 'bg-amber-100 border-amber-300 text-amber-900',
  blue: 'bg-blue-100 border-blue-300 text-blue-900',
  indigo: 'bg-indigo-100 border-indigo-300 text-indigo-900',
  pink: 'bg-pink-100 border-pink-300 text-pink-900',
};

const colorBorder = {
  purple: 'border-purple-400',
  rose: 'border-rose-400',
  amber: 'border-amber-400',
  blue: 'border-blue-400',
  indigo: 'border-indigo-400',
  pink: 'border-pink-400',
};

export default function ScheduleGrid({ section }: ScheduleGridProps) {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-3">
            Schedule Grid
          </h2>
          <p className="text-gray-300">Saturday, June 15 - Complete Wedding Day Timeline</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {events.map((item, index) => {
            const IconComponent = item.icon;
            const colorClass = colorMap[item.color as keyof typeof colorMap];
            const borderClass = colorBorder[item.color as keyof typeof colorBorder];

            return (
              <div
                key={index}
                className={`${colorClass} border-2 ${borderClass} rounded-xl p-6 md:p-7 transform hover:scale-105 transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-4">
                  <IconComponent className="w-6 h-6 md:w-7 md:h-7" />
                  <span className="text-xs md:text-sm font-bold uppercase tracking-widest bg-white bg-opacity-20 px-3 py-1 rounded-full">
                    {item.time}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-sm opacity-90">
                  <MapPin className="w-4 h-4" />
                  <span>{item.location}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
