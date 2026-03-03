import { Section } from '../../types/layoutConfig';
import { Minus, Plus } from 'lucide-react';

interface AccommodationsMinimalProps {
  section: Section;
}

const minimalHotels = [
  { id: 1, name: 'Pure Stay', price: 129 },
  { id: 2, name: 'Simple Rest', price: 145 },
  { id: 3, name: 'Essence Rooms', price: 159 },
  { id: 4, name: 'Clean Haven', price: 172 },
];

export default function AccommodationsMinimal({ section }: AccommodationsMinimalProps) {
  return (
    <section className="py-32 bg-white flex items-center justify-center min-h-screen md:min-h-auto">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="mb-16">
          <h2 className="text-5xl font-serif text-gray-900 mb-4">Accommodations</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gray-300 to-gray-400 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">Elegant simplicity in our hotel selection</p>
        </div>

        <div className="space-y-6">
          {minimalHotels.map((hotel) => (
            <div key={hotel.id} className="flex items-center justify-between p-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg hover:shadow-md transition-shadow group cursor-pointer">
              <div className="flex-1 text-left">
                <h3 className="text-xl font-serif text-gray-900 group-hover:text-gray-600 transition-colors">{hotel.name}</h3>
                <p className="text-gray-600 text-sm mt-1">Per night</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-serif text-gray-900">${hotel.price}</p>
              </div>
              <div className="ml-6 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 bg-gray-300 hover:bg-gray-400 rounded-full transition-colors">
                  <Plus size={20} className="text-gray-800" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-12 border-t border-gray-300">
          <p className="text-gray-600 mb-6">Selected accommodations</p>
          <button className="bg-gray-900 hover:bg-gray-800 text-white font-serif px-12 py-3 rounded-lg transition-colors">
            Proceed to Booking
          </button>
        </div>
      </div>
    </section>
  );
}
