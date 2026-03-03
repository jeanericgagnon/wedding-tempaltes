import { Section } from '../../types/layoutConfig';
import { Phone, Mail, Globe, MapPin } from 'lucide-react';

interface AccommodationsClassicProps {
  section: Section;
}

const classicHotels = [
  { id: 1, name: 'Heritage Grand Hotel', desc: 'A timeless establishment featuring elegant rooms, fine dining, and personalized service. Perfect for business and leisure travelers seeking classic luxury.', price: 210, rating: 4.8, contact: '+1 (555) 123-4567', email: 'info@heritage-grand.com' },
  { id: 2, name: 'Majestic Plaza Resort', desc: 'Offering contemporary comfort with traditional hospitality. Our spacious suites, world-class facilities, and dedicated staff ensure an unforgettable stay.', price: 195, rating: 4.7, contact: '+1 (555) 234-5678', email: 'reservations@majestic.com' },
  { id: 3, name: 'Crown Heights Inn', desc: 'Situated at the heart of the city with stunning views. Experience refined elegance, gourmet cuisine, and exceptional customer care in every interaction.', price: 185, rating: 4.6, contact: '+1 (555) 345-6789', email: 'hello@crownheights.com' },
  { id: 4, name: 'Royal Star Suites', desc: 'Premium accommodations combining sophisticated design with comfort. Featuring rooftop lounges, spa facilities, and award-winning culinary experiences.', price: 220, rating: 4.9, contact: '+1 (555) 456-7890', email: 'concierge@royalstar.com' },
];

export default function AccommodationsClassic({ section }: AccommodationsClassicProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-serif text-white mb-4">Classic Hotel Collection</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-500"></div>
          <p className="text-slate-300 text-lg mt-4">Timeless elegance and superior hospitality</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {classicHotels.map((hotel) => (
            <div key={hotel.id} className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all group">
              <div className="h-2 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500"></div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-serif text-white mb-2">{hotel.name}</h3>
                    <div className="flex items-center">
                      <span className="text-amber-400 text-lg font-bold">{hotel.rating} ★</span>
                      <span className="text-slate-400 text-sm ml-2">(Premium Rated)</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-4xl font-bold text-amber-400">${hotel.price}</p>
                    <p className="text-slate-400 text-sm">per night</p>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed mb-6 text-sm">{hotel.desc}</p>

                <div className="space-y-3 mb-6 pt-6 border-t border-slate-600">
                  <div className="flex items-center text-slate-300">
                    <Phone size={18} className="mr-3 text-amber-400" />
                    <span className="text-sm">{hotel.contact}</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <Mail size={18} className="mr-3 text-amber-400" />
                    <span className="text-sm">{hotel.email}</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <Globe size={18} className="mr-3 text-amber-400" />
                    <span className="text-sm">www.{hotel.name.toLowerCase().replace(/\s+/g, '')}.com</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-3 px-4 rounded-lg transition-all transform group-hover:scale-105">
                  Learn More & Reserve
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
