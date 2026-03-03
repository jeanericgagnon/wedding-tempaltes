import { Section } from '../../types/layoutConfig';
import { ArrowRight, Eye } from 'lucide-react';

interface AccommodationsShowcaseProps {
  section: Section;
}

const showcaseHotels = [
  {
    id: 1,
    name: 'Grand Exposition Palace',
    tagline: 'The Ultimate Luxury Experience',
    price: 425,
    rating: 4.95,
    image: 'bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600',
    featured: true,
  },
  { id: 2, name: 'Scenic Valley Resort', price: 280, rating: 4.8, image: 'bg-gradient-to-br from-emerald-500 to-teal-600' },
  { id: 3, name: 'Urban Pulse Hotel', price: 225, rating: 4.7, image: 'bg-gradient-to-br from-blue-500 to-cyan-600' },
  { id: 4, name: 'Heritage Manor Inn', price: 195, rating: 4.6, image: 'bg-gradient-to-br from-amber-500 to-orange-600' },
];

export default function AccommodationsShowcase({ section }: AccommodationsShowcaseProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Featured Showcase */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Main Featured Hotel */}
            <div className="lg:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-2xl shadow-2xl">
              <div className={`absolute inset-0 ${showcaseHotels[0].image}`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

              <div className="relative h-96 md:h-full flex flex-col justify-end p-8 md:p-12 text-white">
                <div className="mb-6">
                  <p className="text-sm font-semibold text-yellow-300 mb-2">Featured</p>
                  <h2 className="text-4xl md:text-5xl font-serif mb-2">{showcaseHotels[0].name}</h2>
                  <p className="text-lg text-gray-200 italic">{showcaseHotels[0].tagline}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-300 mb-1">Starting from</p>
                    <p className="text-4xl font-bold text-yellow-300">${showcaseHotels[0].price}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-3xl font-bold">{showcaseHotels[0].rating}</span>
                      <span className="text-2xl">★★★★★</span>
                    </div>
                    <button className="flex items-center gap-2 bg-white text-gray-900 font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors">
                      Explore <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </div>

            {/* Secondary Showcases */}
            {showcaseHotels.slice(1, 3).map((hotel) => (
              <div key={hotel.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all h-56 cursor-pointer">
                <div className={`absolute inset-0 ${hotel.image}`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                <div className="relative h-full flex flex-col justify-end p-6 text-white hover:scale-105 transition-transform">
                  <h3 className="text-2xl font-serif mb-2">{hotel.name}</h3>
                  <p className="text-sm text-gray-300 mb-4">${hotel.price}/night</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold">{hotel.rating} ★</span>
                    <Eye size={20} className="text-yellow-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mb-12">
          <h3 className="text-3xl font-serif text-gray-900 mb-8">More Showcases</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {showcaseHotels.slice(3).map((hotel) => (
              <div key={hotel.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
                <div className={`h-64 ${hotel.image} relative`}>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
                <div className="p-8 bg-white">
                  <h4 className="text-2xl font-serif text-gray-900 mb-2">{hotel.name}</h4>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Starting from</p>
                      <p className="text-3xl font-bold text-gray-900">${hotel.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-yellow-500 font-bold mb-2">{hotel.rating} ★</p>
                      <button className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-colors text-sm font-semibold">
                        Reserve
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-serif mb-4">Discover Your Perfect Stay</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Browse through our carefully curated collection of premium accommodations and find the ideal hotel that matches your travel needs and style.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-gray-900 hover:bg-gray-100 font-bold px-8 py-3 rounded-lg transition-colors">
              View All Hotels
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-8 py-3 rounded-lg transition-colors">
              Browse by Category
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
