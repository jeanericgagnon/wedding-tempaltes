import { Section } from '../../types/layoutConfig';
import { Wifi, Coffee, Dumbbell, Tv, Users, Car, Shield, Wind } from 'lucide-react';

interface AccommodationsDetailedProps {
  section: Section;
}

const detailedHotels = [
  {
    id: 1,
    name: 'Premier Executive Suite',
    price: 285,
    rating: 4.9,
    area: 'Downtown District',
    features: [
      { icon: Wifi, label: 'High-Speed WiFi', desc: '1Gbps internet access' },
      { icon: Coffee, label: 'Fine Dining', desc: '5-star restaurant & bar' },
      { icon: Dumbbell, label: 'Fitness Center', desc: 'State-of-the-art gym' },
      { icon: Tv, label: 'Smart Entertainment', desc: '65" 4K TV with streaming' },
      { icon: Users, label: 'Business Center', desc: 'Meeting rooms available' },
      { icon: Car, label: 'Valet Parking', desc: 'Premium parking included' },
    ]
  },
];

export default function AccommodationsDetailed({ section }: AccommodationsDetailedProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-2">Detailed Hotel Information</h2>
          <p className="text-gray-600">Comprehensive feature-by-feature breakdown</p>
        </div>

        <div className="space-y-8">
          {detailedHotels.map((hotel) => (
            <div key={hotel.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 h-2"></div>

              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 pb-8 border-b border-gray-200">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{hotel.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">{hotel.area}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Guest Rating</p>
                      <p className="text-3xl font-bold text-indigo-600">{hotel.rating}</p>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-2xl text-yellow-400">{'★'}</span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Starting From</p>
                    <p className="text-3xl font-bold text-green-600">${hotel.price}</p>
                    <p className="text-xs text-gray-500">per night</p>
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-gray-900 mb-6">Premium Amenities</h4>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {hotel.features.map((feature, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-5 border border-indigo-200 hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-indigo-600 text-white rounded-lg">
                          <feature.icon size={20} />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-900">{feature.label}</h5>
                          <p className="text-sm text-gray-600 mt-1">{feature.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                    View More Details
                  </button>
                  <button className="bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold py-3 px-6 rounded-lg transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Additional Hotels */}
          {[
            { name: 'Luxury Residence Tower', price: 320, rating: 4.8, area: 'Business Hub' },
            { name: 'Comfort Classic Inn', price: 145, rating: 4.5, area: 'Central Quarter' },
          ].map((hotel, idx) => (
            <div key={`alt-${idx}`} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-indigo-400">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{hotel.name}</h3>
                  <p className="text-gray-600 text-sm">{hotel.area}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl font-bold text-indigo-600">{hotel.rating}</span>
                    <span className="text-yellow-400">★★★★★</span>
                  </div>
                  <p className="text-2xl font-bold text-green-600">${hotel.price}/night</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
