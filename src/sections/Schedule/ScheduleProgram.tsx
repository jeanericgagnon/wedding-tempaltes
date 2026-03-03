import { Section } from '../../types/layoutConfig';

interface ScheduleProgramProps {
  section: Section;
}

const program = [
  { time: '08:00 AM', title: 'Bridal Party Preparation', location: 'Bridal Suites' },
  { time: '10:00 AM', title: 'Final Preparations', location: 'Ceremony Venue' },
  { time: '11:00 AM', title: 'Processional - Wedding Ceremony', location: 'Main Hall', section: 'CEREMONY' },
  { time: '11:30 AM', title: 'Recessional and Greeting', location: 'Main Hall' },
  { time: '12:00 PM', title: 'Formal Family and Wedding Party Photographs', location: 'Grounds' },
  { time: '01:00 PM', title: 'Cocktail Reception', location: 'Terrace Lounge', section: 'RECEPTION' },
  { time: '02:30 PM', title: 'Dinner Service Begins', location: 'Grand Ballroom' },
  { time: '03:00 PM', title: 'Welcome Remarks & Toasts', location: 'Grand Ballroom' },
  { time: '04:00 PM', title: 'Cake Cutting Ceremony', location: 'Grand Ballroom' },
  { time: '05:00 PM', title: 'Dancing and Entertainment', location: 'Grand Ballroom', section: 'CELEBRATION' },
  { time: '11:00 PM', title: 'Farewell and Guest Send-Off', location: 'Entrance' },
];

export default function ScheduleProgram({ section }: ScheduleProgramProps) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16 pb-8 border-b-2 border-gray-900">
          <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-4 tracking-wide">
            WEDDING PROGRAM
          </h2>
          <p className="text-xl text-gray-700 font-light">Saturday, the Fifteenth of June</p>
          <p className="text-xl text-gray-700 font-light">Two Thousand Twenty-Four</p>
        </div>

        <div className="space-y-0">
          {program.map((item, index) => (
            <div key={index}>
              {item.section && (
                <div className="my-8 pt-6 border-t-2 border-gray-400">
                  <h3 className="text-center text-xs tracking-[0.3em] font-semibold text-gray-900 uppercase">
                    {item.section}
                  </h3>
                  <div className="h-0.5 w-16 mx-auto mt-3 bg-gray-900"></div>
                </div>
              )}

              <div className="py-5 border-b border-gray-200 hover:bg-gray-50 transition-colors px-4 md:px-6">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-3">
                  <div className="flex-1">
                    <h4 className="text-lg md:text-xl font-serif text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm md:text-base text-gray-600 italic">
                      {item.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-base md:text-lg font-semibold text-gray-900 whitespace-nowrap">
                      {item.time}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t-2 border-gray-900 text-center">
          <p className="text-gray-700 font-light text-sm md:text-base">
            Reception to follow immediately after the ceremony
          </p>
          <p className="text-gray-600 font-light text-xs md:text-sm mt-3">
            Timing is approximate and subject to change
          </p>
        </div>
      </div>
    </section>
  );
}
