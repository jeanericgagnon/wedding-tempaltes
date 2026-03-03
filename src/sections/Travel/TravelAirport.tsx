import { Plane, Clock, MapPin, DollarSign, Users } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface TravelAirportProps {
  section: Section;
}

export default function TravelAirport({ section }: TravelAirportProps) {
  const airports = [
    {
      name: 'Metropolitan International Airport',
      code: 'MIA',
      distance: '25 miles',
      time: '35-45 min',
      price: '$55-75',
      airlines: 'Delta, United, American, Southwest'
    },
    {
      name: 'Regional Airport',
      code: 'RGN',
      distance: '12 miles',
      time: '20-30 min',
      price: '$40-50',
      airlines: 'Southwest, United, American'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-blue-100 px-4 py-2 rounded-full mb-6">
            <Plane className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">FLIGHT INFORMATION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
            Getting Here by Air
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Direct flights available from major cities. Multiple airport options for your convenience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {airports.map((airport, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-sm font-semibold text-blue-600 mb-1">{airport.code}</div>
                  <h3 className="text-xl font-bold text-gray-900">{airport.name}</h3>
                </div>
                <Plane className="w-8 h-8 text-blue-500" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 pb-4 border-b border-gray-200">
                  <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">Distance from venue</p>
                    <p className="font-semibold text-gray-900">{airport.distance}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 pb-4 border-b border-gray-200">
                  <Clock className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">Travel time by car</p>
                    <p className="font-semibold text-gray-900">{airport.time}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 pb-4 border-b border-gray-200">
                  <DollarSign className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">Estimated taxi fare</p>
                    <p className="font-semibold text-gray-900">{airport.price}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-2">
                  <Users className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Major airlines</p>
                    <p className="text-sm font-medium text-gray-700">{airport.airlines}</p>
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                Book Flights
              </button>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 text-white rounded-xl p-8 md:p-10">
          <h3 className="text-2xl font-bold mb-4">Travel Tips</h3>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="font-bold">•</span>
              <span>Book flights 4-6 weeks in advance for the best rates</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">•</span>
              <span>Allow 2-3 hours for international arrivals, 1-2 hours for domestic</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">•</span>
              <span>Ride-sharing services (Uber, Lyft) available from all airports</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">•</span>
              <span>Consider rental car for flexibility; note parking fees at hotel</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
