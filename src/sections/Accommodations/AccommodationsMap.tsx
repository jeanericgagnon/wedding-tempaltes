import { Section } from '../../types/layoutConfig';
import { MapPin, Info } from 'lucide-react';

interface AccommodationsMapProps {
  section: Section;
}

const locations = [
  { id: 1, name: 'Downtown Palace', price: 245, rating: 4.8, x: '20%', y: '30%', zone: 'Downtown' },
  { id: 2, name: 'Riverside Retreat', price: 180, rating: 4.6, x: '60%', y: '50%', zone: 'Waterfront' },
  { id: 3, name: 'Uptown Suites', price: 210, rating: 4.7, x: '75%', y: '25%', zone: 'Uptown' },
  { id: 4, name: 'Midtown Express', price: 155, rating: 4.5, x: '45%', y: '60%', zone: 'Midtown' },
  { id: 5, name: 'Airport Gateway', price: 125, rating: 4.3, x: '15%', y: '75%', zone: 'Airport' },
  { id: 6, name: 'Harbor View', price: 220, rating: 4.9, x: '80%', y: '70%', zone: 'Harbor' },
];

export default function AccommodationsMap({ section }: AccommodationsMapProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-serif text-gray-900 mb-2">Hotels by Location</h2>
          <p className="text-gray-600">Find accommodations near your desired area</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Area */}
          <div className="lg:col-span-2">
            <div className="relative bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl overflow-hidden shadow-2xl aspect-video border-4 border-blue-200">
              {/* Map Grid */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(5)].map((_, i) => (
                  <div key={`h-${i}`} className="absolute w-full border-t border-gray-400" style={{ top: `${i * 25}%` }}></div>
                ))}
                {[...Array(5)].map((_, i) => (
                  <div key={`v-${i}`} className="absolute h-full border-l border-gray-400" style={{ left: `${i * 25}%` }}></div>
                ))}
              </div>

              {/* Location Pins */}
              {locations.map((location) => (
                <div
                  key={location.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10"
                  style={{ left: location.x, top: location.y }}
                >
                  {/* Animated Ring */}
                  <div className="absolute inset-0 animate-pulse">
                    <div className="w-12 h-12 rounded-full bg-red-400 opacity-30 transform scale-150"></div>
                  </div>

                  {/* Main Pin */}
                  <div className="relative flex flex-col items-center">
                    <div className="bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow-lg transform group-hover:scale-125 transition-transform">
                      <MapPin size={20} fill="currentColor" />
                    </div>
                  </div>

                  {/* Tooltip */}
                  <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-xs whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                    <p className="font-semibold">{location.name}</p>
                    <p className="text-yellow-300">${location.price}/night</p>
                  </div>
                </div>
              ))}

              {/* Legend */}
              <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 rounded-lg p-3 text-xs">
                <p className="font-semibold text-gray-900 mb-2">Click pins to see details</p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span className="text-gray-700">Available Hotels</span>
                </div>
              </div>
            </div>
          </div>

          {/* Details Panel */}
          <div className="lg:col-span-1">
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {locations.map((location) => (
                <div
                  key={location.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all p-4 border-l-4 border-blue-500 cursor-pointer group hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-sm">{location.name}</h3>
                      <p className="text-xs text-gray-600 mt-1">{location.zone}</p>
                    </div>
                    <MapPin size={16} className="text-red-500 flex-shrink-0 ml-2" />
                  </div>

                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-semibold text-yellow-500">★</span>
                      <span className="text-xs text-gray-700">{location.rating}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-green-600">${location.price}</p>
                    </div>
                  </div>

                  <button className="w-full mt-3 text-xs bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold py-1.5 rounded transition-colors">
                    View Details
                  </button>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="mt-6 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3 text-sm">Coverage Summary</h4>
              <div className="text-xs space-y-2 text-gray-700">
                <p>Total Hotels: <span className="font-bold">{locations.length}</span></p>
                <p>Zones Covered: <span className="font-bold">{new Set(locations.map(l => l.zone)).size}</span></p>
                <p>Avg Rating: <span className="font-bold">{(locations.reduce((sum, l) => sum + l.rating, 0) / locations.length).toFixed(1)}</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
