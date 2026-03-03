import { MapPin, Navigation, Compass, Info } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface TravelSplitProps {
  section: Section;
}

export default function TravelSplit({ section }: TravelSplitProps) {
  const routes = [
    {
      name: 'Route A: Scenic Coastal',
      distance: '42 miles',
      duration: '50 minutes',
      description: 'Beautiful coastal drive with ocean views. Recommended for early arrivals to enjoy the scenery.',
      highlights: ['Ocean Overlook', 'Scenic Turnouts', 'Restaurants en route'],
      bestFor: 'Photography and sightseeing'
    },
    {
      name: 'Route B: Direct Highway',
      distance: '38 miles',
      duration: '42 minutes',
      description: 'Fast and direct route via Highway 101. Most reliable in all weather conditions.',
      highlights: ['Toll-free', 'Well-maintained', 'Clear signage'],
      bestFor: 'Convenience and speed'
    },
    {
      name: 'Route C: Downtown Loop',
      distance: '45 miles',
      duration: '55 minutes',
      description: 'Passes through downtown with local charm. Good restaurant and coffee stop options.',
      highlights: ['Local Shops', 'Coffee Stops', 'Historic Sites'],
      bestFor: 'Exploring local flavor'
    },
    {
      name: 'Route D: Mountain Pass',
      distance: '48 miles',
      duration: '60 minutes',
      description: 'Scenic mountain route with stunning views. Takes longer but offers incredible photo opportunities.',
      highlights: ['Mountain Views', 'Scenic Overlooks', 'Hiking Trails'],
      bestFor: 'Adventure seekers'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Compass className="w-8 h-8 text-indigo-600" />
          </div>
          <h2 className="text-5xl font-serif text-center text-gray-900 mb-3">Choose Your Route</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Multiple scenic and convenient routes to our venue. Choose based on your preferences and travel style.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {routes.map((route, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className={`bg-gradient-to-r ${
                idx === 0 ? 'from-indigo-500 to-indigo-600' :
                idx === 1 ? 'from-emerald-500 to-emerald-600' :
                idx === 2 ? 'from-amber-500 to-amber-600' :
                'from-rose-500 to-rose-600'
              } p-6 text-white`}>
                <h3 className="text-xl font-bold mb-2">{route.name}</h3>
                <div className="flex gap-6 text-sm">
                  <div>
                    <p className="opacity-90">Distance</p>
                    <p className="font-semibold text-lg">{route.distance}</p>
                  </div>
                  <div>
                    <p className="opacity-90">Duration</p>
                    <p className="font-semibold text-lg">{route.duration}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-700 mb-4">{route.description}</p>

                <div className="mb-4">
                  <p className="font-semibold text-gray-900 mb-2 text-sm">Highlights:</p>
                  <div className="flex flex-wrap gap-2">
                    {route.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-indigo-600" />
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold text-gray-900">Best for:</span> {route.bestFor}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-8">
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Venue Location</h3>
                <p className="text-gray-700 mb-3">
                  The Riverside Estate<br />
                  742 River Road<br />
                  Clearwater, CA 94501
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-700 font-semibold inline-flex items-center gap-2"
                >
                  Open in Maps
                  <Navigation className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-8">
            <div className="flex items-start gap-3 mb-4">
              <Info className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Travel Tips</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Allow extra time for Saturday afternoon traffic</li>
                  <li>All routes are clearly marked with GPS directions</li>
                  <li>Free parking available for all guests</li>
                  <li>Complimentary shuttle service available from major hotels</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
