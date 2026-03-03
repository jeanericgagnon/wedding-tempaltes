import { Heart, Sparkles, Gift, Zap } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface RegistryPlayfulProps {
  section: Section;
}

const items = [
  {
    emoji: '🍳',
    name: 'Fancy Cookware Set',
    price: 280,
    tagline: 'Turn up the heat!',
    color: 'from-orange-300 to-red-400',
  },
  {
    emoji: '🛏️',
    name: 'Luxury Bedding',
    price: 420,
    tagline: 'Cozy never felt better',
    color: 'from-pink-300 to-rose-400',
  },
  {
    emoji: '🍷',
    name: 'Wine Glass Set',
    price: 185,
    tagline: 'Pour decisions only',
    color: 'from-purple-300 to-indigo-400',
  },
  {
    emoji: '🛁',
    name: 'Spa Towels',
    price: 120,
    tagline: 'Wrap yourself in luxury',
    color: 'from-blue-300 to-cyan-400',
  },
  {
    emoji: '🕯️',
    name: 'Scented Candles',
    price: 95,
    tagline: 'Scent-sational vibes',
    color: 'from-yellow-300 to-orange-400',
  },
  {
    emoji: '🌿',
    name: 'Indoor Plants',
    price: 150,
    tagline: 'Getting our green on',
    color: 'from-green-300 to-teal-400',
  },
];

export default function RegistryPlayful({ section }: RegistryPlayfulProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-purple-600" />
            <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
              Fun Registry
            </h2>
            <Sparkles className="w-8 h-8 text-purple-600" />
          </div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            We're excited about building our home together. Help us fill it with things we love (and will actually use)!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {items.map((item) => (
            <div
              key={item.name}
              className={`group relative bg-gradient-to-br ${item.color} rounded-3xl p-8 text-white shadow-lg hover:shadow-2xl transition-all hover:scale-105 cursor-pointer overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-10 rounded-full -mr-12 -mt-12" />
              <div className="relative z-10">
                <div className="text-6xl mb-4">{item.emoji}</div>
                <h3 className="text-2xl font-black mb-2">{item.name}</h3>
                <p className="text-sm font-semibold opacity-90 mb-4 italic">"{item.tagline}"</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black">${item.price}</span>
                  <Heart className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity fill-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-xl mb-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Gift className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-black text-gray-900 mb-2">6 Categories</h3>
              <p className="text-gray-600">Everything for our new home</p>
            </div>
            <div>
              <Zap className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-black text-gray-900 mb-2">High Quality</h3>
              <p className="text-gray-600">Things we'll love forever</p>
            </div>
            <div>
              <Sparkles className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-black text-gray-900 mb-2">Fun Times</h3>
              <p className="text-gray-600">Making memories together</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-black mb-4">Why We Love These Items</h3>
            <ul className="space-y-3">
              {['Perfect for entertaining', 'Mix of practical & fun', 'Quality we trust', 'Supporting our favorites'].map((reason) => (
                <li key={reason} className="flex items-center gap-2">
                  <span className="text-2xl">✨</span>
                  <span className="font-semibold">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-black mb-4">Ready to Make Magic?</h3>
            <p className="mb-6 text-lg font-light leading-relaxed">
              Pick an item that makes you smile. We promise we'll put it to great use and think of you every time we do!
            </p>
            <button className="w-full bg-white text-purple-600 font-black py-3 rounded-xl hover:bg-gray-100 transition-colors text-lg">
              Browse Full Registry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
