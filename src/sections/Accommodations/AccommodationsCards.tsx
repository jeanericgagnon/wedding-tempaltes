import { Star, MapPin, Wifi } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface AccommodationsCardsProps {
  section: Section;
}

export default function AccommodationsCards({ section }: AccommodationsCardsProps) {
  const hotels = [
    { name: 'Grand Luxury Suite', price: '$350/night', rating: 5, amenities: ['WiFi', 'Parking', 'Pool'] },
    { name: 'Boutique Garden Inn', price: '$250/night', rating: 4.5, amenities: ['WiFi', 'Breakfast', 'Spa'] },
    { name: 'Modern City Hotel', price: '$200/night', rating: 4, amenities: ['WiFi', 'Gym', 'Restaurant'] },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-serif text-center text-gray-900 mb-4">Where to Stay</h2>
        <p className="text-center text-gray-600 text-lg mb-16">Curated hotel options for our guests</p>

        <div className="grid md:grid-cols-3 gap-6">
          {hotels.map((hotel, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-blue-100 to-blue-50" />
              <div className="p-6">
                <h3 className="text-xl font-serif text-gray-900 mb-2">{hotel.name}</h3>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className={`w-4 h-4 ${j < Math.floor(hotel.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} />
                  ))}
                </div>
                <p className="text-lg font-semibold text-blue-600 mb-4">{hotel.price}</p>
                <div className="space-y-2">
                  {hotel.amenities.map((amenity, j) => (
                    <p key={j} className="text-sm text-gray-600 flex items-center gap-2">
                      <Wifi className="w-4 h-4 text-blue-500" /> {amenity}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
