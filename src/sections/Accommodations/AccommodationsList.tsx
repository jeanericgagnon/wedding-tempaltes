import { Section } from '../../types/layoutConfig';
import { MapPin, Users, DollarSign, TrendingUp } from 'lucide-react';

interface AccommodationsListProps {
  section: Section;
}

const hotels = [
  { id: 1, name: 'Stellar Heights Hotel', rating: 4.9, reviews: 2847, price: 285, guests: 4, trend: 'up' },
  { id: 2, name: 'Riverside Luxury Resort', rating: 4.8, reviews: 2156, price: 245, guests: 6, trend: 'up' },
  { id: 3, name: 'Metropolitan Grand', rating: 4.7, reviews: 1934, price: 215, guests: 2, trend: 'stable' },
  { id: 4, name: 'Coastal Paradise Inn', rating: 4.6, reviews: 1567, price: 195, guests: 5, trend: 'up' },
  { id: 5, name: 'Urban Premium Stays', rating: 4.5, reviews: 1432, price: 175, guests: 2, trend: 'down' },
  { id: 6, name: 'Boutique Heritage Hotel', rating: 4.7, reviews: 1289, price: 225, guests: 3, trend: 'up' },
  { id: 7, name: 'Modern City Center', rating: 4.4, reviews: 987, price: 155, guests: 4, trend: 'stable' },
  { id: 8, name: 'Mountain View Lodge', rating: 4.6, reviews: 1456, price: 185, guests: 6, trend: 'up' },
];

export default function AccommodationsList({ section }: AccommodationsListProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-serif text-gray-900 mb-2">Top Rated Hotels</h2>
          <p className="text-gray-600">Comprehensive list of our most popular accommodations</p>
        </div>

        <div className="space-y-3">
          {hotels.map((hotel, idx) => (
            <div key={hotel.id} className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all border border-gray-200 hover:border-blue-400 overflow-hidden">
              <div className="p-6 flex items-center gap-6">
                {/* Rank */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center font-bold text-lg">
                    {idx + 1}
                  </div>
                </div>

                {/* Hotel Info */}
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{hotel.name}</h3>
                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} className="text-gray-400" />
                      <span className="text-xs text-gray-600">Premium Location</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={14} className="text-gray-400" />
                      <span className="text-xs text-gray-600">Up to {hotel.guests} guests</span>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex-shrink-0 text-center">
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-blue-600">{hotel.rating}</span>
                  </div>
                  <div className="flex justify-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`${i < Math.floor(hotel.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-600">{hotel.reviews.toLocaleString()} reviews</p>
                </div>

                {/* Price */}
                <div className="flex-shrink-0 text-right">
                  <div className="flex items-baseline gap-1 mb-2">
                    <DollarSign size={16} className="text-green-600" />
                    <span className="text-2xl font-bold text-green-600">{hotel.price}</span>
                  </div>
                  <p className="text-xs text-gray-600">per night</p>
                </div>

                {/* Trend */}
                <div className="flex-shrink-0">
                  <div className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 ${
                    hotel.trend === 'up'
                      ? 'bg-green-100 text-green-700'
                      : hotel.trend === 'down'
                      ? 'bg-red-100 text-red-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {hotel.trend === 'up' ? (
                      <>
                        <TrendingUp size={14} /> Popular
                      </>
                    ) : hotel.trend === 'down' ? (
                      <>
                        <TrendingUp size={14} className="rotate-180" /> Trending
                      </>
                    ) : (
                      'Stable'
                    )}
                  </div>
                </div>

                {/* CTA */}
                <button className="flex-shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-all transform group-hover:scale-105">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-lg p-6 text-center border border-blue-200">
            <p className="text-sm text-blue-600 mb-2">Total Hotels</p>
            <p className="text-3xl font-bold text-blue-900">{hotels.length}</p>
          </div>
          <div className="bg-yellow-50 rounded-lg p-6 text-center border border-yellow-200">
            <p className="text-sm text-yellow-600 mb-2">Average Rating</p>
            <p className="text-3xl font-bold text-yellow-900">{(hotels.reduce((sum, h) => sum + h.rating, 0) / hotels.length).toFixed(1)}</p>
          </div>
          <div className="bg-green-50 rounded-lg p-6 text-center border border-green-200">
            <p className="text-sm text-green-600 mb-2">Avg. Price/Night</p>
            <p className="text-3xl font-bold text-green-900">${Math.round(hotels.reduce((sum, h) => sum + h.price, 0) / hotels.length)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
