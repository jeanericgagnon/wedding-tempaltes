import { Section } from '../../types/layoutConfig';
import { Tag, TrendingDown, Star, Check } from 'lucide-react';

interface AccommodationsBudgetProps {
  section: Section;
}

const budgetHotels = [
  { id: 1, name: 'Economy Express', original: 120, current: 65, discount: 46, rating: 4.2, type: 'Budget' },
  { id: 2, name: 'Smart Stay', original: 140, current: 75, discount: 46, rating: 4.4, type: 'Economy' },
  { id: 3, name: 'Value Inn', original: 100, current: 55, discount: 45, rating: 4.1, type: 'Budget' },
  { id: 4, name: 'Quick Rest', original: 110, current: 62, discount: 44, rating: 4.3, type: 'Economy' },
  { id: 5, name: 'Thrifty Hotels', original: 95, current: 50, discount: 47, rating: 4.0, type: 'Budget' },
  { id: 6, name: 'Affordable Comfort', original: 130, current: 72, discount: 45, rating: 4.2, type: 'Economy' },
];

export default function AccommodationsBudget({ section }: AccommodationsBudgetProps) {
  return (
    <section className="py-24 bg-gradient-to-r from-orange-50 via-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Tag className="text-red-600" size={32} />
            <h2 className="text-4xl font-serif text-gray-900">Budget-Friendly Deals</h2>
          </div>
          <p className="text-gray-600 text-lg">Incredible savings on quality accommodations</p>
        </div>

        <div className="space-y-4">
          {budgetHotels.map((hotel) => (
            <div key={hotel.id} className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all p-6 border-l-4 border-red-500">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{hotel.name}</h3>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">{hotel.type}</span>
                  <div className="flex items-center mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className={i < Math.floor(hotel.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} />
                    ))}
                    <span className="ml-2 text-gray-600 text-sm">{hotel.rating} ({Math.floor(Math.random() * 100) + 50} reviews)</span>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-gray-500 line-through text-lg">${hotel.original}</p>
                  <p className="text-4xl font-bold text-red-600 mt-1">${hotel.current}</p>
                  <p className="text-xs text-gray-600">per night</p>
                </div>

                <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4">
                  <div className="flex items-center justify-center mb-2">
                    <TrendingDown className="text-green-600 mr-1" size={20} />
                    <span className="text-2xl font-bold text-green-600">{hotel.discount}%</span>
                  </div>
                  <p className="text-xs text-green-700">Save ${hotel.original - hotel.current}</p>
                  <button className="mt-3 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold text-sm transition-colors">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-green-900 mb-4">Why Choose Budget Options?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Check, title: 'Best Price Guarantee', desc: 'Lowest rates in the market' },
              { icon: Star, title: 'Quality Assured', desc: 'Verified reviews from guests' },
              { icon: Tag, title: 'Extra Savings', desc: 'Loyalty discounts available' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <item.icon className="text-green-600 mb-2" size={32} />
                <h4 className="font-semibold text-green-900 mb-1">{item.title}</h4>
                <p className="text-green-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
