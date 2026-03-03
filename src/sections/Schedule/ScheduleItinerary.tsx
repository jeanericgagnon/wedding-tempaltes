import { Section } from '../../types/layoutConfig';
import { ChevronRight } from 'lucide-react';

interface ScheduleItineraryProps {
  section: Section;
}

const itinerary = [
  { hour: '8:00–10:00 AM', activity: 'Bride & Groom Hair & Makeup', notes: 'Bridal Suite, Groom Room' },
  { hour: '10:00–11:00 AM', activity: 'Final Preparations & Guest Arrival', notes: 'Main Hall, Ceremony Space' },
  { hour: '11:00–11:30 AM', activity: 'Wedding Ceremony', notes: 'Main Hall - Main Event', highlight: true },
  { hour: '11:30 AM–12:00 PM', activity: 'Ceremony Conclusion & Recessional', notes: 'Main Hall' },
  { hour: '12:00–1:00 PM', activity: 'Family & Bridal Party Photos', notes: 'Gardens, Lawn, Scenic Locations' },
  { hour: '1:00–2:30 PM', activity: 'Cocktail Hour & Appetizers', notes: 'Terrace - Open Bar & Hors d\'oeuvres' },
  { hour: '2:30–4:00 PM', activity: 'Seated Dinner Service', notes: 'Grand Ballroom - Multiple Courses' },
  { hour: '4:00–5:00 PM', activity: 'Cake Cutting, Toasts & Dessert', notes: 'Grand Ballroom - Champagne Service' },
  { hour: '5:00–11:00 PM', activity: 'Dancing, Music & Celebration', notes: 'Grand Ballroom - DJ Performance' },
  { hour: '11:00–11:30 PM', activity: 'Guest Send-Off', notes: 'Main Entrance - Sparkler Exit' },
];

export default function ScheduleItinerary({ section }: ScheduleItineraryProps) {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-emerald-50 to-teal-50">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-2">
            Hour-by-Hour Itinerary
          </h2>
          <p className="text-lg text-gray-600">Complete breakdown of your wedding day</p>
        </div>

        <div className="space-y-1 bg-white rounded-2xl overflow-hidden shadow-lg">
          {itinerary.map((item, index) => (
            <div
              key={index}
              className={`border-b border-gray-100 last:border-b-0 transition-all hover:bg-gray-50 ${
                item.highlight ? 'bg-gradient-to-r from-rose-100 to-pink-100' : ''
              }`}
            >
              <div className="p-5 md:p-6 flex gap-4">
                <div className="pt-1">
                  <ChevronRight className="w-5 h-5 text-teal-500 flex-shrink-0" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                    <span className="text-sm md:text-base font-bold text-teal-700 tracking-wide shrink-0">
                      {item.hour}
                    </span>
                    <h3 className={`text-lg md:text-xl font-semibold ${
                      item.highlight ? 'text-rose-900' : 'text-gray-900'
                    }`}>
                      {item.activity}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 ml-0">
                    {item.notes}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 md:p-8 bg-white rounded-xl border border-gray-200 text-center">
          <p className="text-gray-600">
            <span className="font-semibold">Total Event Duration:</span> 15 hours of celebration and joy
          </p>
        </div>
      </div>
    </section>
  );
}
