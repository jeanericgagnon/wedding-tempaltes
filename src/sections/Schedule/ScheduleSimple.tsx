import { Section } from '../../types/layoutConfig';

interface ScheduleSimpleProps {
  section: Section;
}

const events = [
  '8:00 AM - Bride & Groom Preparation - Bridal Suites',
  '10:00 AM - Ceremony Preparation - Main Hall',
  '11:00 AM - Wedding Ceremony - Main Hall',
  '12:00 PM - Family Photography - Gardens',
  '1:00 PM - Cocktail Hour - Terrace',
  '2:30 PM - Reception Dinner - Grand Ballroom',
  '4:00 PM - Cake Cutting & Toasts - Grand Ballroom',
  '5:00 PM - Dancing & Celebration - Grand Ballroom',
  '11:00 PM - Guest Send-Off - Main Entrance',
];

export default function ScheduleSimple({ section }: ScheduleSimpleProps) {
  return (
    <section className="py-20 md:py-28 bg-gray-100">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-2">
            Schedule
          </h2>
          <p className="text-gray-600">Saturday, June 15, 2024</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 md:p-10">
          <ul className="space-y-4">
            {events.map((event, index) => (
              <li
                key={index}
                className="pb-4 border-b border-gray-200 last:border-b-0 last:pb-0 text-gray-700 text-base md:text-lg leading-relaxed"
              >
                {event}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
