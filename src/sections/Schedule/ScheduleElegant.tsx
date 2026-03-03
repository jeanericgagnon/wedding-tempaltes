import { Section } from '../../types/layoutConfig';

interface ScheduleElegantProps {
  section: Section;
}

const events = [
  { time: '8:00 AM', event: 'Bride & Groom Preparation', location: 'Bridal Suite' },
  { time: '10:00 AM', event: 'Ceremony Preparation', location: 'Main Hall' },
  { time: '11:00 AM', event: 'Wedding Ceremony', location: 'Main Hall', highlight: true },
  { time: '12:00 PM', event: 'Family Photography', location: 'Gardens' },
  { time: '1:00 PM', event: 'Cocktail Hour', location: 'Terrace' },
  { time: '2:30 PM', event: 'Reception Dinner', location: 'Grand Ballroom' },
  { time: '4:00 PM', event: 'Cake Cutting', location: 'Grand Ballroom' },
  { time: '5:00 PM', event: 'Dance & Celebration', location: 'Grand Ballroom' },
  { time: '11:00 PM', event: 'Guest Send-Off', location: 'Main Entrance' },
];

export default function ScheduleElegant({ section }: ScheduleElegantProps) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-2 tracking-wider">
            Wedding Schedule
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-300"></div>
            <p className="text-sm tracking-widest text-gray-500">JUNE 15, 2024</p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gray-300"></div>
          </div>
        </div>

        <div className="space-y-0">
          {events.map((item, index) => (
            <div key={index}>
              <div
                className={`flex flex-col md:flex-row md:items-center md:justify-between py-5 md:py-6 px-6 md:px-8 ${
                  item.highlight
                    ? 'bg-gradient-to-r from-rose-50 to-pink-50 border-l-4 border-rose-400'
                    : 'hover:bg-gray-50'
                } transition-colors`}
              >
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-serif text-gray-900 mb-1">
                    {item.event}
                  </h3>
                  <p className="text-sm md:text-base text-gray-500">{item.location}</p>
                </div>
                <div className="mt-3 md:mt-0">
                  <span className="text-lg md:text-xl font-semibold text-rose-600">
                    {item.time}
                  </span>
                </div>
              </div>
              {index < events.length - 1 && (
                <div className="border-b border-gray-200"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 italic">Timing is approximate and subject to change</p>
        </div>
      </div>
    </section>
  );
}
