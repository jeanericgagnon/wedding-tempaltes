import { Plus, Minus } from 'lucide-react';
import React from 'react';
import { Section } from '../../types/layoutConfig';

interface RegistryModernProps {
  section: Section;
}

const categories = [
  {
    name: 'Kitchen',
    color: 'from-orange-400 to-red-500',
    items: 8,
    progress: 62,
  },
  {
    name: 'Bedroom',
    color: 'from-purple-400 to-pink-500',
    items: 6,
    progress: 85,
  },
  {
    name: 'Living Room',
    color: 'from-blue-400 to-cyan-500',
    items: 5,
    progress: 40,
  },
  {
    name: 'Bathroom',
    color: 'from-green-400 to-teal-500',
    items: 4,
    progress: 100,
  },
];

export default function RegistryModern({ section }: RegistryModernProps) {
  const [selectedCategory, setSelectedCategory] = React.useState('Kitchen');
  const totalItems = categories.reduce((sum, cat) => sum + cat.items, 0);
  const totalProgress = categories.reduce((sum, cat) => sum + cat.progress * cat.items, 0) / (totalItems * 100);

  return (
    <section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-20">
          <h2 className="text-6xl font-black text-white mb-4">
            Modern Registry
          </h2>
          <p className="text-xl text-gray-400">
            Everything we need for our home, organized by room.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Categories</h3>
            <div className="space-y-4">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`w-full p-6 rounded-2xl transition-all ${
                    selectedCategory === cat.name
                      ? 'bg-white text-black'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <p className="text-sm font-semibold opacity-70 mb-1">
                        {cat.items} Items
                      </p>
                      <h4 className="text-xl font-black">{cat.name}</h4>
                    </div>
                    <div className={`text-3xl font-black bg-gradient-to-br ${cat.color} bg-clip-text text-transparent`}>
                      {cat.progress}%
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-gray-900 rounded-3xl p-8 mb-8">
              <h3 className="text-2xl font-black text-white mb-8">Overall Progress</h3>
              <div className="space-y-4">
                {categories.map((cat) => (
                  <div key={cat.name}>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-semibold text-gray-400">{cat.name}</p>
                      <p className="text-sm font-bold text-white">{cat.progress}%</p>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${cat.color}`}
                        style={{ width: `${cat.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-center">
                <p className="text-gray-400 text-sm font-semibold mb-2">Total Items</p>
                <p className="text-4xl font-black text-white">{totalItems}</p>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-center">
                <p className="text-gray-400 text-sm font-semibold mb-2">Avg. Complete</p>
                <p className="text-4xl font-black text-white">{Math.round(totalProgress * 100)}%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 border border-gray-800">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-gray-400 text-sm font-semibold uppercase mb-3">Status</p>
              <div className="inline-block px-6 py-3 bg-gray-800 rounded-full">
                <p className="text-white font-black text-lg">78% Complete</p>
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-sm font-semibold uppercase mb-3">Last Update</p>
              <div className="inline-block px-6 py-3 bg-gray-800 rounded-full">
                <p className="text-white font-black text-lg">Today</p>
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-sm font-semibold uppercase mb-3">Total Value</p>
              <div className="inline-block px-6 py-3 bg-gray-800 rounded-full">
                <p className="text-white font-black text-lg">$12,450</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
