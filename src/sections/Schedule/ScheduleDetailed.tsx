import { Section } from '../../types/layoutConfig';
import { Clock, MapPin, Info } from 'lucide-react';

interface ScheduleDetailedProps {
  section: Section;
}

const events = [
  {
    time: '8:00 AM',
    title: 'Bride & Groom Preparation',
    location: 'Bridal Suite & Groom Room',
    description: 'Hair, makeup, and final preparation. Photography begins.',
    details: '2 hours',
  },
  {
    time: '10:00 AM',
    title: 'Ceremony Preparation',
    location: 'Main Hall',
    description: 'Guests arrive and are seated. Bridesmaids and groomsmen assemble.',
    details: '1 hour',
  },
  {
    time: '11:00 AM',
    title: 'Wedding Ceremony',
    location: 'Main Hall',
    description: 'Officiant conducts the marriage ceremony. Exchange of vows and rings.',
    details: '30 minutes',
  },
  {
    time: '12:00 PM',
    title: 'Family & Bridal Party Photos',
    location: 'Gardens & Lawn',
    description: 'Professional photography sessions with family and wedding party.',
    details: '1 hour',
  },
  {
    time: '1:00 PM',
    title: 'Cocktail Reception & Appetizers',
    location: 'Terrace',
    description: 'Drinks, hors d\'oeuvres, and mingling. Receive line available.',
    details: '1.5 hours',
  },
  {
    time: '2:30 PM',
    title: 'Reception Dinner Service',
    location: 'Grand Ballroom',
    description: 'Seated dinner with wine service. Toasts and remarks.',
    details: '2 hours',
  },
  {
    time: '4:00 PM',
    title: 'Cake Cutting & Dessert',
    location: 'Grand Ballroom',
    description: 'Cake ceremony, dessert service, and champagne toast.',
    details: '1 hour',
  },
  {
    time: '5:00 PM',
    title: 'Dancing & Celebration',
    location: 'Grand Ballroom',
    description: 'DJ, dancing, and continued celebration with guests.',
    details: '6 hours',
  },
  {
    time: '11:00 PM',
    title: 'Guest Send-Off',
    location: 'Main Entrance',
    description: 'Farewell sparkler exit and final goodbyes to guests.',
    details: '30 minutes',
  },
];

export default function ScheduleDetailed({ section }: ScheduleDetailedProps) {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-3">
            Detailed Schedule
          </h2>
          <p className="text-lg text-gray-600">Complete timing and descriptions for all events</p>
        </div>

        <div className="space-y-4">
          {events.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-blue-100 p-6 md:p-7"
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                  <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg shrink-0">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-blue-900 text-sm">{item.time}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 text-sm border-t border-gray-200 pt-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item.location}</span>
                  </div>
                  <div className="hidden sm:block text-gray-300">•</div>
                  <div className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item.details}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
