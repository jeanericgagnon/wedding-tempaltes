import { Section } from '../../types/layoutConfig';
import { MapPin, Navigation, Zap } from 'lucide-react';

interface AccommodationsNearbyProps {
  section: Section;
}

const nearbyHotels = [
  { id: 1, name: 'Front & Center Hotel', distance: 0.2, price: 295, rating: 4.9 },
  { id: 2, name: 'Adjacent Luxury', distance: 0.5, price: 260, rating: 4.8 },
  { id: 3, name: 'Quick Walk Resort', distance: 1.2, price: 185, rating: 4.6 },
  { id: 4, name: 'Close Proximity Inn', distance: 1.8, price: 165, rating: 4.5 },
  { id: 5, name: 'Nearby Comfort', distance: 2.3, price: 145, rating: 4.4 },
  { id: 6, name: 'Accessible Stay', distance: 3.1, price: 125, rating: 4.2 },
];

export default function AccommodationsNearby({ section }: AccommodationsNearbyProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-green-50 to-emerald-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Navigation className="text-green-600" size={32} />
            <h2 className="text-4xl font-serif text-gray-900">Hotels Nearby</h2>
          </div>
          <p className="text-gray-600">Find accommodations by proximity to venue</p>
        </div>

        {/* Distance Guide */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="font-semibold text-gray-900 mb-4">Distance Reference</h3>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-600"></div>
              <span className="text-sm text-gray-700">Walking Distance (0-1 km)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-700">Short Ride (1-2 km)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span className="text-sm text-gray-700">Brief Drive (2+ km)</span>
            </div>
          </div>
        </div>

        {/* Distance Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-600 via-green-500 to-green-400 md:transform md:-translate-x-1/2"></div>

          {/* Hotels */}
          <div className="space-y-8">
            {nearbyHotels.map((hotel, idx) => {
              const distanceColor = hotel.distance < 1 ? 'bg-green-600' : hotel.distance < 2 ? 'bg-green-500' : 'bg-green-400';
              const bgGradient = hotel.distance < 1 ? 'from-green-50 to-white' : hotel.distance < 2 ? 'from-emerald-50 to-white' : 'from-lime-50 to-white';

              return (
                <div key={hotel.id} className={`md:grid md:grid-cols-2 md:gap-8 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 top-4 md:top-8 transform -translate-x-1/2 z-10">
                    <div className={`w-6 h-6 rounded-full ${distanceColor} border-4 border-white shadow-lg flex items-center justify-center`}>
                      <span className="text-white text-xs font-bold">{idx + 1}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 bg-gradient-to-br ${bgGradient} rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-green-200`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{hotel.name}</h3>
                        <div className="flex items-center gap-2 mt-2">
                          <MapPin size={16} className="text-green-600" />
                          <span className="text-sm font-semibold text-green-700">{hotel.distance} km from venue</span>
                        </div>
                      </div>
                      {hotel.distance < 1 && (
                        <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded-lg">
                          <Zap size={14} className="text-green-600" />
                          <span className="text-xs font-bold text-green-700">Closest</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={`text-lg ${i < Math.floor(hotel.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="text-sm font-semibold text-gray-700">{hotel.rating}</span>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-green-600">${hotel.price}</p>
                        <p className="text-xs text-gray-600">per night</p>
                      </div>
                    </div>

                    <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Walking Distance', value: '3', desc: 'Hotels within 1 km' },
            { label: 'Short Ride', value: '2', desc: 'Hotels 1-2 km away' },
            { label: 'Brief Drive', value: '1', desc: 'Hotels 2+ km away' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-lg p-6 shadow-md text-center border-t-4 border-green-500">
              <p className="text-gray-600 text-sm mb-2">{item.label}</p>
              <p className="text-4xl font-bold text-green-600 mb-1">{item.value}</p>
              <p className="text-xs text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
