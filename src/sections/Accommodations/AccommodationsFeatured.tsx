import { Section } from '../../types/layoutConfig';
import { Star, Heart, Zap, MapPin } from 'lucide-react';

interface AccommodationsFeaturedProps {
  section: Section;
}

const featured = {
  id: 1,
  name: 'The Paramount Plaza',
  tagline: 'Our Top Pick This Season',
  price: 275,
  rating: 4.95,
  image: 'bg-gradient-to-br from-purple-500 to-pink-500',
  badge: 'Bestseller',
  highlights: ['Award-Winning Spa', 'Michelin-Star Restaurant', 'Infinity Pool', 'Smart Rooms'],
  description: 'Experience unparalleled luxury at our featured property, combining contemporary design with timeless elegance.',
};

const otherHotels = [
  { id: 2, name: 'Urban Modern Hub', price: 165, rating: 4.6, badge: 'Trendy' },
  { id: 3, name: 'Coastal Escape Resort', price: 195, rating: 4.7, badge: 'Beachfront' },
  { id: 4, name: 'Mountain Peak Lodge', price: 145, rating: 4.5, badge: 'Nature' },
  { id: 5, name: 'City Center Gateway', price: 155, rating: 4.4, badge: 'Central' },
  { id: 6, name: 'Heritage Mansion', price: 215, rating: 4.8, badge: 'Historic' },
];

export default function AccommodationsFeatured({ section }: AccommodationsFeaturedProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-2">Featured Accommodation</h2>
          <p className="text-gray-600">Specially curated for your next getaway</p>
        </div>

        {/* Featured Hotel */}
        <div className="mb-16 bg-white rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className={`h-96 md:h-full ${featured.image} flex items-center justify-center relative overflow-hidden group`}>
              <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-10 transition-opacity"></div>
              <Zap className="text-white text-6xl opacity-30" />
            </div>

            <div className="p-10 md:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <span className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs font-bold px-4 py-2 rounded-full mb-4">
                  {featured.badge}
                </span>
                <h3 className="text-4xl font-serif text-gray-900 mb-2">{featured.name}</h3>
                <p className="text-purple-600 font-semibold">{featured.tagline}</p>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">{featured.description}</p>

              <div className="mb-8 pb-8 border-b border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Highlights</h4>
                <div className="grid grid-cols-2 gap-4">
                  {featured.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Guest Rating</p>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-purple-600">{featured.rating}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={18} className={i < 5 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600 mb-1">From</p>
                  <p className="text-3xl font-bold text-green-600">${featured.price}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all">
                  Book Now
                </button>
                <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold py-3 px-6 rounded-lg transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Other Options */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Other Great Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherHotels.map((hotel) => (
              <div key={hotel.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden group">
                <div className="h-40 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden">
                  <span className="text-4xl font-bold text-gray-500 opacity-30">{hotel.id}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold text-gray-900">{hotel.name}</h4>
                    <Heart size={20} className="text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
                  </div>
                  <span className="inline-block text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded mb-4">{hotel.badge}</span>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-semibold text-gray-900">{hotel.rating}</span>
                      <span className="text-yellow-400">★★★★</span>
                    </div>
                    <p className="font-bold text-green-600">${hotel.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
