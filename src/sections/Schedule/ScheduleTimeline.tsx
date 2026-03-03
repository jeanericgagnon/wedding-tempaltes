import { Section } from '../../types/layoutConfig';

interface ScheduleTimelineProps {
  section: Section;
}

const timeline = [
  { time: '08:00', event: 'Preparations Begin', desc: 'Hair, makeup, final touches' },
  { time: '10:00', event: 'Ceremony Setup', desc: 'Guests arrive, seating arrangements' },
  { time: '11:00', event: 'The Ceremony', desc: 'Exchange of vows and rings', main: true },
  { time: '12:00', event: 'Photography Session', desc: 'Family and bridal party photos' },
  { time: '13:00', event: 'Cocktail Hour', desc: 'Drinks and appetizers' },
  { time: '14:30', event: 'Dinner Service', desc: 'Seated dinner with wine' },
  { time: '16:00', event: 'Cake & Toasts', desc: 'Dessert and champagne toast' },
  { time: '17:00', event: 'Dancing Begins', desc: 'Music and celebration' },
  { time: '23:00', event: 'Farewell', desc: 'Send-off and goodbyes' },
];

export default function ScheduleTimeline({ section }: ScheduleTimelineProps) {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-3">
            Timeline
          </h2>
          <p className="text-lg text-gray-600">From dawn to dusk - our journey</p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-300 via-rose-400 to-rose-300 md:transform md:-translate-x-1/2"></div>

          {/* Timeline items */}
          <div className="space-y-8 md:space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative md:flex md:gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 w-12 h-12 bg-white border-4 border-rose-400 rounded-full flex items-center justify-center text-xs font-bold text-rose-600 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 ${
                  item.main ? 'ring-4 ring-rose-200' : ''
                }`}>
                  {item.time}
                </div>

                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className={`${
                    item.main
                      ? 'bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-300'
                      : 'bg-white border border-gray-200'
                  } rounded-lg p-5 md:p-6 hover:shadow-lg transition-shadow`}>
                    <h3 className={`text-lg md:text-xl font-semibold mb-2 ${
                      item.main ? 'text-rose-900' : 'text-gray-900'
                    }`}>
                      {item.event}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
