import { Section } from '../../types/layoutConfig';
import { ChevronRight, Star } from 'lucide-react';

interface AccommodationsCompactProps {
  section: Section;
}

const compactHotels = [
  { id: 1, name: 'Swift Hotel', price: 89, rating: 4.2 },
  { id: 2, name: 'Quick Inn', price: 75, rating: 4.0 },
  { id: 3, name: 'Speedy Stays', price: 68, rating: 4.1 },
  { id: 4, name: 'Express Lodge', price: 82, rating: 4.3 },
  { id: 5, name: 'Neat Rooms', price: 71, rating: 3.9 },
  { id: 6, name: 'Tiny Luxury', price: 95, rating: 4.4 },
  { id: 7, name: 'Compact Plus', price: 78, rating: 4.2 },
  { id: 8, name: 'Pocket Suite', price: 86, rating: 4.1 },
];

export default function AccommodationsCompact({ section }: AccommodationsCompactProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Compact Hotels</h2>
          <p className="text-gray-600 text-sm mt-2">Quick overview of available options</p>
        </div>

        <div className="space-y-2">
          {compactHotels.map((hotel, idx) => (
            <div key={hotel.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-blue-100 rounded-lg transition-colors group cursor-pointer border border-gray-200 hover:border-blue-300">
              <div className="flex items-center gap-4 flex-1">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">{idx + 1}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-sm">{hotel.name}</h3>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className={i < Math.floor(hotel.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} />
                  ))}
                  <span className="text-gray-600 text-xs ml-2">{hotel.rating}</span>
                </div>
                <div className="text-right w-16">
                  <p className="font-bold text-gray-900">${hotel.price}</p>
                </div>
                <ChevronRight size={18} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-between items-center text-xs text-gray-600">
          <p>Showing {compactHotels.length} results</p>
          <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1">
            View All <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
