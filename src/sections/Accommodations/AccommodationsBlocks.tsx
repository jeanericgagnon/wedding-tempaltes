import { Section } from '../../types/layoutConfig';
import { Star, MapPin, Wifi, Utensils, AirVent } from 'lucide-react';

interface AccommodationsBlocksProps {
  section: Section;
}

const hotels = [
  { id: 1, name: 'Grand Plaza Hotel', price: 180, rating: 4.8, image: 'bg-blue-100', amenities: ['WiFi', 'Restaurant', 'Pool'] },
  { id: 2, name: 'Riverside Suites', price: 150, rating: 4.6, image: 'bg-emerald-100', amenities: ['WiFi', 'Gym', 'Spa'] },
  { id: 3, name: 'Downtown Comfort', price: 120, rating: 4.5, image: 'bg-amber-100', amenities: ['WiFi', 'Breakfast', 'Lounge'] },
  { id: 4, name: 'Luxury Tower', price: 280, rating: 4.9, image: 'bg-purple-100', amenities: ['WiFi', 'Concierge', 'Bar'] },
  { id: 5, name: 'Boutique Inn', price: 140, rating: 4.7, image: 'bg-pink-100', amenities: ['WiFi', 'Library', 'Patio'] },
  { id: 6, name: 'Central Station', price: 95, rating: 4.3, image: 'bg-cyan-100', amenities: ['WiFi', 'Express Check-in'] },
];

export default function AccommodationsBlocks({ section }: AccommodationsBlocksProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Masonry Hotel Selection</h2>
          <p className="text-gray-600 text-lg">Discover our curated collection of premium accommodations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {hotels.map((hotel, idx) => (
            <div key={hotel.id} className={`${idx % 3 === 0 ? 'lg:row-span-2' : ''}`}>
              <div className="h-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`h-48 ${hotel.image} flex items-center justify-center`}>
                  <span className="text-6xl font-bold text-gray-300">{hotel.id}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{hotel.name}</h3>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill={i < Math.floor(hotel.rating) ? 'currentColor' : 'none'} />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600 text-sm">{hotel.rating}</span>
                  </div>
                  <div className="mb-4">
                    <p className="text-3xl font-bold text-green-600">${hotel.price}</p>
                    <p className="text-gray-500 text-sm">per night</p>
                  </div>
                  <div className="space-y-2">
                    {hotel.amenities.map((amenity) => (
                      <p key={amenity} className="text-gray-700 text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        {amenity}
                      </p>
                    ))}
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
