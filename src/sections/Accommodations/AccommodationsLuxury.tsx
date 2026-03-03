import { Star, MapPin, Phone } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface AccommodationsLuxuryProps {
  section: Section;
}

const hotels = [
  {
    name: 'The Ritz Carlton',
    description: 'Just 5 minutes from the venue. Special wedding rate available.',
    rate: '$250/night',
    address: '123 Luxury Lane',
    phone: '(555) 111-1111',
  },
  {
    name: 'Grand Hyatt',
    description: 'Premier accommodations with world-class amenities.',
    rate: '$200/night',
    address: '456 Estate Drive',
    phone: '(555) 222-2222',
  },
  {
    name: 'The Peninsula',
    description: 'Timeless elegance and exceptional service.',
    rate: '$220/night',
    address: '789 Park Avenue',
    phone: '(555) 333-3333',
  },
];

export default function AccommodationsLuxury({ section }: AccommodationsLuxuryProps) {
  return (
    <section className="py-32 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-serif text-gray-900 mb-6">
            Where to Stay
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-amber-300 to-amber-500 mx-auto mb-8" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We've arranged special rates with luxury hotels near our venue.
            Mention our wedding code "LOVE2025" for additional discounts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {hotels.map((hotel) => (
            <div
              key={hotel.name}
              className="bg-white rounded-lg overflow-hidden shadow-lg border border-amber-100 hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-br from-amber-400/10 to-amber-600/10 h-48 border-b border-amber-100" />

              <div className="p-8">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <h3 className="text-xl font-serif text-gray-900 mb-2">
                  {hotel.name}
                </h3>

                <p className="text-gray-600 text-sm mb-6 leading-relaxed font-light">
                  {hotel.description}
                </p>

                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin className="w-4 h-4 text-amber-600" />
                    <span className="font-light">{hotel.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Phone className="w-4 h-4 text-amber-600" />
                    <span className="font-light">{hotel.phone}</span>
                  </div>
                </div>

                <div className="text-2xl font-bold text-amber-600">
                  {hotel.rate}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-12 text-center border border-amber-100">
          <h3 className="text-2xl font-serif text-gray-900 mb-4">
            Transportation
          </h3>
          <p className="text-gray-600 leading-relaxed font-light max-w-2xl mx-auto">
            Complimentary shuttle service will be provided from all partner hotels
            to the venue and back. Pickup times will be announced in your welcome packet.
          </p>
        </div>
      </div>
    </section>
  );
}
