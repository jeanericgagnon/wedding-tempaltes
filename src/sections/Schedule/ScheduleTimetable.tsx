import { Section } from '../../types/layoutConfig';

interface ScheduleTimetableProps {
  section: Section;
}

const timetable = [
  { time: '08:00 - 10:00', event: 'Preparations', location: 'Bridal Suites', guest: 'Bride & Groom' },
  { time: '10:00 - 11:00', event: 'Ceremony Setup', location: 'Main Hall', guest: 'All Guests' },
  { time: '11:00 - 11:30', event: 'Ceremony', location: 'Main Hall', guest: 'All Guests', highlight: true },
  { time: '12:00 - 01:00', event: 'Photography', location: 'Gardens', guest: 'Wedding Party' },
  { time: '01:00 - 02:30', event: 'Cocktail Hour', location: 'Terrace', guest: 'All Guests' },
  { time: '02:30 - 04:00', event: 'Dinner Service', location: 'Ballroom', guest: 'All Guests' },
  { time: '04:00 - 05:00', event: 'Cake & Toasts', location: 'Ballroom', guest: 'All Guests' },
  { time: '05:00 - 11:00', event: 'Dancing', location: 'Ballroom', guest: 'All Guests' },
  { time: '11:00 - 11:30', event: 'Send-Off', location: 'Entrance', guest: 'All Guests' },
];

export default function ScheduleTimetable({ section }: ScheduleTimetableProps) {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-2">
            Wedding Day Timetable
          </h2>
          <p className="text-lg text-gray-600">Saturday, June 15, 2024</p>
        </div>

        <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-rose-600 to-pink-600 text-white">
                <th className="px-4 md:px-6 py-4 text-left font-semibold text-sm md:text-base">Time</th>
                <th className="px-4 md:px-6 py-4 text-left font-semibold text-sm md:text-base">Event</th>
                <th className="px-4 md:px-6 py-4 text-left font-semibold text-sm md:text-base">Location</th>
                <th className="px-4 md:px-6 py-4 text-left font-semibold text-sm md:text-base">Guests</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {timetable.map((row, index) => (
                <tr
                  key={index}
                  className={`hover:bg-gray-50 transition-colors ${
                    row.highlight ? 'bg-gradient-to-r from-rose-50 to-pink-50 font-semibold' : ''
                  }`}
                >
                  <td className={`px-4 md:px-6 py-4 text-sm md:text-base font-semibold ${
                    row.highlight ? 'text-rose-700' : 'text-gray-700'
                  }`}>
                    {row.time}
                  </td>
                  <td className={`px-4 md:px-6 py-4 text-sm md:text-base ${
                    row.highlight ? 'text-rose-900' : 'text-gray-900'
                  }`}>
                    {row.event}
                  </td>
                  <td className="px-4 md:px-6 py-4 text-sm md:text-base text-gray-600">
                    {row.location}
                  </td>
                  <td className="px-4 md:px-6 py-4 text-sm md:text-base text-gray-600">
                    {row.guest}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="font-semibold text-gray-900 mb-2">Total Duration</h3>
            <p className="text-2xl font-bold text-rose-600">15 Hours</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="font-semibold text-gray-900 mb-2">Event Highlights</h3>
            <p className="text-2xl font-bold text-rose-600">9 Events</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="font-semibold text-gray-900 mb-2">Venues</h3>
            <p className="text-2xl font-bold text-rose-600">5 Locations</p>
          </div>
        </div>
      </div>
    </section>
  );
}
