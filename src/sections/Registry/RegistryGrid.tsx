import { Check } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface RegistryGridProps {
  section: Section;
}

const items = [
  { name: 'Wine Glasses', price: 85, purchased: true, category: 'Glassware' },
  { name: 'Dinner Plates', price: 120, purchased: true, category: 'Dishes' },
  { name: 'Bed Pillows', price: 95, purchased: false, category: 'Bedding' },
  { name: 'Bath Towels', price: 65, purchased: true, category: 'Bath' },
  { name: 'Kitchen Knives', price: 180, purchased: false, category: 'Kitchen' },
  { name: 'Serving Bowls', price: 110, purchased: true, category: 'Dishes' },
  { name: 'Throw Blanket', price: 75, purchased: false, category: 'Decor' },
  { name: 'Bed Sheets', price: 145, purchased: true, category: 'Bedding' },
  { name: 'Mugs Set', price: 55, purchased: false, category: 'Glassware' },
  { name: 'Table Runner', size: '$40', purchased: true, category: 'Decor' },
  { name: 'Cookware Pans', price: 220, purchased: true, category: 'Kitchen' },
  { name: 'Wall Art', price: 130, purchased: false, category: 'Decor' },
];

export default function RegistryGrid({ section }: RegistryGridProps) {
  const purchasedCount = items.filter(item => item.purchased).length;
  const totalCount = items.length;
  const progressPercent = (purchasedCount / totalCount) * 100;

  return (
    <section className="py-24 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-gray-900 mb-4">
            Gift Registry Grid
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            A complete overview of all items we need for our home. Browse by category or see what's still needed.
          </p>

          <div className="inline-block bg-white rounded-lg px-8 py-6 shadow-md border border-pink-200">
            <p className="text-gray-600 text-sm font-semibold mb-2">Overall Progress</p>
            <p className="text-3xl font-bold text-pink-600 mb-3">{purchasedCount} of {totalCount} Items Secured</p>
            <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-pink-400 to-rose-500 h-full transition-all duration-700"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {items.map((item) => (
            <div
              key={item.name}
              className={`p-6 rounded-lg border-2 transition-all ${
                item.purchased
                  ? 'bg-pink-50 border-pink-300'
                  : 'bg-white border-gray-200 hover:border-pink-300'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-semibold text-gray-900 text-sm flex-1">{item.name}</h4>
                {item.purchased && <Check className="w-5 h-5 text-green-500 flex-shrink-0 ml-1" />}
              </div>
              <p className="text-xs text-gray-500 mb-3 uppercase tracking-wide">{item.category}</p>
              <p className="text-lg font-bold text-gray-900">${item.price}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {['Glassware', 'Dishes', 'Bedding', 'Kitchen'].map((category) => {
            const categoryItems = items.filter(item => item.category === category);
            const categoryPurchased = categoryItems.filter(item => item.purchased).length;
            return (
              <div key={category} className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{category}</h3>
                <p className="text-3xl font-bold text-pink-600 mb-2">{categoryPurchased}/{categoryItems.length}</p>
                <p className="text-sm text-gray-600">items complete</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-xl p-8 text-center border border-pink-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Help Us Complete Our Registry</h3>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Every item helps us build the home of our dreams. Whether you choose from our most-needed items or select something special, your contribution means the world to us.
          </p>
          <button className="px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition-colors">
            View All Items
          </button>
        </div>
      </div>
    </section>
  );
}
