import { Section } from '../../types/layoutConfig';

interface ScheduleCompactProps {
  section: Section;
}

const events = [
  { time: '8:00', event: 'Preparations' },
  { time: '10:00', event: 'Ceremony Prep' },
  { time: '11:00', event: 'Ceremony' },
  { time: '12:00', event: 'Photos' },
  { time: '1:00', event: 'Cocktails' },
  { time: '2:30', event: 'Dinner' },
  { time: '4:00', event: 'Cake & Toasts' },
  { time: '5:00', event: 'Dancing' },
  { time: '11:00', event: 'Send-Off' },
];

export default function ScheduleCompact({ section }: ScheduleCompactProps) {
  return (
    <section className="py-12 md:py-16 bg-neutral-950">
      <div className="max-w-2xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-light text-white text-center mb-10 tracking-wide">
          DAY OF EVENTS
        </h2>

        <div className="space-y-2">
          {events.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-2 md:py-3 px-3 md:px-4 hover:bg-neutral-800 transition-colors border-b border-neutral-700"
            >
              <span className="text-sm md:text-base font-semibold text-rose-400 tracking-wider">
                {item.time} PM
              </span>
              <span className="text-sm md:text-base text-neutral-200 font-light">
                {item.event}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
