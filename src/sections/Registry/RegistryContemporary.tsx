import React from 'react';
import { Package, Filter, Star } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface RegistryContemporaryProps {
  section: Section;
}

const items = [
  { name: 'Minimalist Pendant Lights', category: 'Lighting', price: 280, rating: 5, image: 'bg-indigo-400' },
  { name: 'Modern Area Rug', category: 'Decor', price: 420, rating: 5, image: 'bg-sky-400' },
  { name: 'Sleek Coffee Table', category: 'Furniture', price: 550, rating: 4, image: 'bg-slate-400' },
  { name: 'Geometric Wall Art Set', category: 'Decor', price: 180, rating: 5, image: 'bg-purple-400' },
  { name: 'Contemporary Sofa', category: 'Furniture', price: 1200, rating: 5, image: 'bg-rose-400' },
  { name: 'Designer Vases', category: 'Decor', price: 150, rating: 4, image: 'bg-amber-400' },
];

const categories = ['All', 'Furniture', 'Decor', 'Lighting'];

export default function RegistryContemporary({ section }: RegistryContemporaryProps) {
  const [selected, setSelected] = React.useState('All');
  const filtered = selected === 'All' ? items : items.filter(item => item.category === selected);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-6xl font-black text-gray-900 mb-3">
            Our Registry
          </h2>
          <p className="text-xl text-gray-600 max-w-xl">
            Curated pieces for our new home. Contemporary design meets functional elegance.
          </p>
        </div>

        <div className="flex gap-3 mb-12 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-6 py-3 rounded-full font-semibold transition-all whitespace-nowrap ${
                selected === cat
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Filter className="w-4 h-4 inline mr-2" />
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {filtered.map((item) => (
            <div key={item.name} className="group cursor-pointer">
              <div className={`${item.image} h-64 rounded-2xl mb-4 group-hover:shadow-xl transition-all`} />
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-gray-500 uppercase">{item.category}</span>
                <div className="flex gap-0.5">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">${item.price}</span>
                <button className="bg-gray-900 text-white p-3 rounded-full hover:bg-gray-800 transition-colors">
                  <Package className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-black text-gray-900 mb-3">View Full Registry</h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Browse our complete selection across multiple retailers and experience categories.
          </p>
          <button className="inline-block px-8 py-4 bg-gray-900 text-white font-bold rounded-full hover:shadow-lg transition-all">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
}
