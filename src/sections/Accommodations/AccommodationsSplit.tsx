import { Section } from '../../types/layoutConfig';
import { Check, Star, MapPin } from 'lucide-react';

interface AccommodationsSplitProps {
  section: Section;
}

const splitHotels = [
  {
    id: 1,
    name: 'Oceanview Luxury Resort',
    image: 'bg-gradient-to-br from-blue-400 via-cyan-300 to-teal-400',
    highlights: ['Private Beach Access', 'Beachfront Restaurant', 'Water Sports', 'Sunset Views'],
    price: 350,
    rating: 4.9,
    description: 'Wake up to the sound of waves and endless ocean vistas. Our beachfront resort offers unparalleled access to pristine sands and crystal-clear waters, combined with world-class dining and entertainment.',
  },
  {
    id: 2,
    name: 'Mountain Peak Retreat',
    image: 'bg-gradient-to-br from-emerald-500 to-green-600',
    highlights: ['Alpine Views', 'Hiking Trails', 'Spa Services', 'Fire Pit Lounge'],
    price: 280,
    rating: 4.8,
    description: 'Escape to serenity high in the mountains. Experience breathtaking alpine vistas, rejuvenating spa treatments, and the perfect blend of adventure and relaxation in our mountain sanctuary.',
  },
  {
    id: 3,
    name: 'Urban Skyline Tower',
    image: 'bg-gradient-to-br from-purple-500 via-pink-500 to-red-500',
    highlights: ['City Views', 'Rooftop Bar', 'Business Center', 'Fine Dining'],
    price: 240,
    rating: 4.7,
    description: 'Experience the vibrant energy of the city from our luxury tower. Located in the heart of downtown, our hotel offers panoramic city views, cutting-edge amenities, and the best of urban dining.',
  },
];

export default function AccommodationsSplit({ section }: AccommodationsSplitProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-2">Signature Experiences</h2>
          <p className="text-gray-600">Premium accommodations with distinct character</p>
        </div>

        <div className="space-y-16">
          {splitHotels.map((hotel, idx) => (
            <div
              key={hotel.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch shadow-xl overflow-hidden rounded-lg ${
                idx % 2 === 0 ? '' : 'md:grid-cols-2'
              }`}
            >
              {/* Image - Order changes on odd items */}
              <div className={`${hotel.image} h-80 md:h-auto relative group overflow-hidden ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white opacity-10 group-hover:opacity-20 transition-opacity">{hotel.id}</span>
                </div>
              </div>

              {/* Content */}
              <div className={`bg-white p-8 md:p-12 flex flex-col justify-center ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="mb-6">
                  <div className="inline-block mb-4">
                    <span className="text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">Featured Property</span>
                  </div>
                  <h3 className="text-3xl font-serif text-gray-900 mb-2">{hotel.name}</h3>
                  <p className="text-gray-700 leading-relaxed">{hotel.description}</p>
                </div>

                {/* Highlights */}
                <div className="mb-8 grid grid-cols-2 gap-4">
                  {hotel.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-3">
                      <Check size={18} className="text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Footer Info */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-blue-600 mr-2">{hotel.rating}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className={i < Math.floor(hotel.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600 mb-1">From</p>
                    <p className="text-3xl font-bold text-green-600">${hotel.price}</p>
                  </div>
                </div>

                {/* CTA */}
                <button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105">
                  Book Your Stay
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-8">
          <h3 className="text-2xl font-serif text-gray-900 mb-8">Why Choose Our Signature Collection?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Unique Locations', desc: 'Each property offers a distinct geographic advantage and view' },
              { title: 'Premium Service', desc: '24/7 concierge and personalized guest experiences' },
              { title: 'Value for Money', desc: 'Competitive pricing without compromising quality' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-600">
                    <Check className="text-white" size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
