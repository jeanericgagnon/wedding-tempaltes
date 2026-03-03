import { Navigation, MapPin, Building, Info, Fuel, Home } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface TravelDetailedProps {
  section: Section;
}

export default function TravelDetailed({ section }: TravelDetailedProps) {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Navigation className="w-6 h-6 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">DETAILED ROUTE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
            Turn-by-Turn Directions
          </h2>
        </div>

        <div className="space-y-6 mb-16">
          {[
            {
              step: 1,
              title: 'Head North on Highway 101',
              details: 'Starting from downtown area, take Highway 101 North toward the airport exit. This is a major highway with 4 lanes going north.'
            },
            {
              step: 2,
              title: 'Take Exit 42 (Spring Valley Road)',
              details: 'Exit right onto Spring Valley Road. This exit appears after approximately 8.5 miles on Highway 101. Watch for directional signs.'
            },
            {
              step: 3,
              title: 'Continue for 2 miles on Spring Valley Road',
              details: 'Follow Spring Valley Road as it winds through the valley. You\'ll pass two traffic lights and a small shopping center on your left.'
            },
            {
              step: 4,
              title: 'Turn Left onto Riverside Drive',
              details: 'At the third traffic light, turn left onto Riverside Drive. You\'ll see a bank on the corner. Continue for 1.2 miles.'
            },
            {
              step: 5,
              title: 'Turn Right at the Main Street intersection',
              details: 'Turn right at Main Street. The venue will be visible on your right side immediately after the turn. Total distance: 11.7 miles from start.'
            },
            {
              step: 6,
              title: 'Enter the parking area',
              details: 'Turn right into the parking lot entrance. Parking is available in the main lot in front of the building. Valet services also available.'
            }
          ].map((direction, idx) => (
            <div key={idx} className="flex gap-6 pb-6 border-b border-gray-200 last:border-b-0">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-10 h-10 bg-emerald-600 text-white rounded-full font-bold">
                  {direction.step}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{direction.title}</h3>
                <p className="text-gray-600 leading-relaxed">{direction.details}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900">Venue Address</h3>
            </div>
            <div className="space-y-2 text-gray-700">
              <p className="font-semibold">The Grand Event Center</p>
              <p>742 Main Street, Suite 200</p>
              <p>Springfield, CA 95032</p>
              <p className="text-sm text-gray-500 pt-2">GPS Coordinates: 37.4419°N, 122.1430°W</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <Fuel className="w-6 h-6 text-orange-600" />
              <h3 className="text-xl font-bold text-gray-900">Travel Time & Distance</h3>
            </div>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between">
                <span>From City Center:</span>
                <span className="font-semibold">11.7 miles (25 min)</span>
              </div>
              <div className="flex justify-between">
                <span>From Airport:</span>
                <span className="font-semibold">28.3 miles (45 min)</span>
              </div>
              <div className="flex justify-between">
                <span>From Train Station:</span>
                <span className="font-semibold">3.2 miles (12 min)</span>
              </div>
              <div className="flex justify-between">
                <span>From Highway 101:</span>
                <span className="font-semibold">Exit 42 (8.5 miles)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
            <div className="flex items-center gap-3 mb-6">
              <Building className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900">Parking Information</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Main lot: Free parking (300 spaces)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Valet service: $10 (recommended for events)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Accessible parking: 15 spaces near entrance</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Street parking: Available 2 blocks away (metered)</span>
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 rounded-xl p-8 border border-purple-200">
            <div className="flex items-center gap-3 mb-6">
              <Home className="w-6 h-6 text-purple-600" />
              <h3 className="text-xl font-bold text-gray-900">Nearby Accommodations</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>The Grand Hotel - 0.5 miles (5-star)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>Riverside Inn - 1.2 miles (mid-range)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>Budget Stay Motel - 2 miles (budget-friendly)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>Lakeside Resort - 3.5 miles (luxury)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
