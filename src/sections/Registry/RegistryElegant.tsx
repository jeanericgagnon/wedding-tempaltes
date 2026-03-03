import { Heart } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface RegistryElegantProps {
  section: Section;
}

const collections = [
  {
    name: 'Fine Dining Collection',
    items: [
      'Lenox Bellina Fine China',
      'Baccarat Crystal Glasses',
      'Versace Serving Platters',
      'Villeroy & Boch Serveware',
    ],
    price: 3200,
  },
  {
    name: 'Luxe Bedding',
    items: [
      'Frette Italian Linens',
      'Sferra Sheets & Pillows',
      'Loro Piana Cashmere Throw',
      'Down Alternative Pillows',
    ],
    price: 2850,
  },
  {
    name: 'Elegant Kitchen',
    items: [
      'All-Clad Cookware Set',
      'Wolff Knife Set',
      'Sub-Zero Refrigerator',
      'Miele Dishwasher',
    ],
    price: 8500,
  },
  {
    name: 'Home Furnishings',
    items: [
      'Italian Leather Sofa',
      'Murano Glass Lighting',
      'Handwoven Area Rugs',
      'Contemporary Art Pieces',
    ],
    price: 12000,
  },
];

export default function RegistryElegant({ section }: RegistryElegantProps) {
  const totalValue = collections.reduce((sum, col) => sum + col.price, 0);

  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">Curated for Elegance</span>
          </div>
          <h2 className="text-6xl font-serif text-white mb-6">
            Registry Collections
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8" />
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light">
            Carefully assembled collections representing luxury, craftsmanship, and timeless elegance for the discerning couple.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {collections.map((collection) => (
            <div
              key={collection.name}
              className="group bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-amber-500 border-opacity-30 hover:border-opacity-60 transition-all hover:shadow-2xl hover:shadow-amber-500/20"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-serif text-white">{collection.name}</h3>
                <Heart className="w-6 h-6 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <ul className="space-y-3 mb-8">
                {collection.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-slate-600 pt-6 mb-6">
                <p className="text-slate-400 text-sm mb-2">Collection Value</p>
                <p className="text-3xl font-bold text-amber-400">${collection.price.toLocaleString()}</p>
              </div>

              <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-900 font-semibold py-3 rounded-lg transition-all shadow-lg hover:shadow-xl">
                View Collection
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-12 text-slate-900 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3">Total Registry Value</p>
          <h3 className="text-5xl font-bold mb-4">${totalValue.toLocaleString()}</h3>
          <p className="text-slate-800 max-w-2xl mx-auto font-light">
            Thoughtfully selected items representing our vision for an elegant home filled with timeless pieces we'll cherish for years to come.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-5xl font-bold text-amber-400 mb-2">{collections.length}</p>
            <p className="text-slate-400">Collections</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-amber-400 mb-2">{collections.reduce((sum, col) => sum + col.items.length, 0)}</p>
            <p className="text-slate-400">Premium Items</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-amber-400 mb-2">100%</p>
            <p className="text-slate-400">Curated Quality</p>
          </div>
        </div>
      </div>
    </section>
  );
}
