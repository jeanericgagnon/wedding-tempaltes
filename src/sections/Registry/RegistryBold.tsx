import { ShoppingCart, CheckCircle2 } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface RegistryBoldProps {
  section: Section;
}

const categories = [
  {
    name: 'Dinnerware & Serveware',
    items: [
      { name: 'Royal Doulton Fine China Set', price: 450, purchased: true },
      { name: 'Waterford Crystal Glasses', price: 320, purchased: false },
      { name: 'Williams Sonoma Serving Platter', price: 185, purchased: true },
    ],
  },
  {
    name: 'Bedding & Linens',
    items: [
      { name: 'Frette Egyptian Cotton Sheets', price: 580, purchased: false },
      { name: 'Pottery Barn Down Comforter', price: 425, purchased: true },
      { name: 'Decorative Pillow Set', price: 220, purchased: true },
    ],
  },
  {
    name: 'Kitchen Essentials',
    items: [
      { name: 'All-Clad Cookware Set', price: 795, purchased: false },
      { name: 'KitchenAid Stand Mixer', price: 445, purchased: true },
      { name: 'Sous Vide Cooker', price: 199, purchased: false },
    ],
  },
];

export default function RegistryBold({ section }: RegistryBoldProps) {
  const totalItems = categories.reduce((sum, cat) => sum + cat.items.length, 0);
  const purchasedItems = categories.reduce(
    (sum, cat) => sum + cat.items.filter(item => item.purchased).length,
    0
  );
  const progressPercent = (purchasedItems / totalItems) * 100;

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-7xl font-black text-white mb-4">
            Our Gift Registry
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-blue-500 mb-8" />
          <p className="text-2xl text-gray-300 font-light max-w-2xl">
            Building our new home together. Help us create the perfect foundation for our life.
          </p>
        </div>

        <div className="bg-gray-800 rounded-2xl p-8 mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-4xl font-black text-white mb-2">
                {purchasedItems}/{totalItems} Items
              </h3>
              <p className="text-gray-400 text-lg">Secured {progressPercent.toFixed(0)}% of your gift list</p>
            </div>
            <ShoppingCart className="w-16 h-16 text-cyan-400" />
          </div>
          <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
            <div
              className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.name}>
              <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">
                {category.name}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className={`p-6 rounded-xl border-2 transition-all ${
                      item.purchased
                        ? 'bg-cyan-950 border-cyan-500'
                        : 'bg-gray-800 border-gray-700 hover:border-blue-500'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-black text-white flex-1">{item.name}</h4>
                      {item.purchased && <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 ml-2" />}
                    </div>
                    <p className="text-3xl font-black text-cyan-400 mb-4">${item.price}</p>
                    <button
                      className={`w-full py-3 rounded-lg font-bold text-lg transition-all ${
                        item.purchased
                          ? 'bg-cyan-500 text-white cursor-default'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      {item.purchased ? 'Purchased' : 'Contribute'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
