import { Section } from '../../types/layoutConfig';
import { Sun, Moon } from 'lucide-react';

interface ScheduleSplitProps {
  section: Section;
}

const morning = [
  { time: '8:00 AM', event: 'Bride & Groom Preparation', location: 'Bridal Suites' },
  { time: '10:00 AM', event: 'Ceremony Preparation', location: 'Main Hall' },
  { time: '11:00 AM', event: 'Wedding Ceremony', location: 'Main Hall' },
  { time: '12:00 PM', event: 'Family Photography', location: 'Gardens' },
];

const afternoon = [
  { time: '1:00 PM', event: 'Cocktail Hour', location: 'Terrace' },
  { time: '2:30 PM', event: 'Reception Dinner', location: 'Grand Ballroom' },
  { time: '4:00 PM', event: 'Cake Cutting & Toasts', location: 'Grand Ballroom' },
  { time: '5:00 PM', event: 'Dancing & Celebration', location: 'Grand Ballroom' },
  { time: '11:00 PM', event: 'Guest Send-Off', location: 'Main Entrance' },
];

export default function ScheduleSplit({ section }: ScheduleSplitProps) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-3">
            Schedule at a Glance
          </h2>
          <p className="text-lg text-gray-600">Day & Evening Events</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Morning Section */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 md:p-10 shadow-lg">
            <div className="flex items-center gap-3 mb-8">
              <Sun className="w-7 h-7 text-amber-600" />
              <h3 className="text-2xl md:text-3xl font-serif text-gray-900">
                Morning & Afternoon
              </h3>
            </div>

            <div className="space-y-5">
              {morning.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 border-l-4 border-amber-400 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-base md:text-lg">
                        {item.event}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">{item.location}</p>
                    </div>
                    <span className="text-amber-600 font-bold text-sm whitespace-nowrap">
                      {item.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Evening Section */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 md:p-10 shadow-lg">
            <div className="flex items-center gap-3 mb-8">
              <Moon className="w-7 h-7 text-indigo-600" />
              <h3 className="text-2xl md:text-3xl font-serif text-gray-900">
                Evening
              </h3>
            </div>

            <div className="space-y-5">
              {afternoon.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 border-l-4 border-indigo-400 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-base md:text-lg">
                        {item.event}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">{item.location}</p>
                    </div>
                    <span className="text-indigo-600 font-bold text-sm whitespace-nowrap">
                      {item.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
