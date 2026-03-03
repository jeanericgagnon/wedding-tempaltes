import { Star, ShoppingCart, ExternalLink } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface RegistryFeaturedProps {
  section: Section;
}

const featured = [
  {
    name: 'Designer Sofa',
    price: 2400,
    image: 'bg-slate-400',
    status: 'Featured Pick',
    description: 'Mid-century modern sofa with memory foam comfort',
    retailer: 'Restoration Hardware',
  },
  {
    name: 'Luxury Mattress',
    price: 3200,
    image: 'bg-indigo-300',
    status: 'Bestseller',
    description: 'Premium hybrid mattress with cooling technology',
    retailer: 'Saatva',
  },
  {
    name: 'Kitchen Island',
    price: 1800,
    image: 'bg-amber-300',
    status: 'Top Wish',
    description: 'Handcrafted butcher block with marble countertop',
    retailer: 'Custom Carpentry',
  },
];

export default function RegistryFeatured({ section }: RegistryFeaturedProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-semibold text-gray-600 uppercase">Our Top Picks</span>
          </div>
          <h2 className="text-5xl font-serif text-gray-900 mb-4">
            Featured Registry Items
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            These items are our absolute must-haves for our new life together. Most sought after pieces!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {featured.map((item, index) => (
            <div key={item.name} className="group">
              <div className={`${item.image} h-80 rounded-2xl mb-6 shadow-lg group-hover:shadow-2xl transition-all relative overflow-hidden`}>
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full text-sm font-semibold text-gray-900 shadow-lg">
                  {item.status}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-bold text-gray-900">${item.price}</span>
                <span className="text-xs font-semibold text-gray-500">{item.retailer}</span>
              </div>
              <button className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-lg transition-colors">
                <ShoppingCart className="w-5 h-5" />
                View Item
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 md:p-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Why These Items Matter
              </h3>
              <ul className="space-y-4">
                {[
                  'Chosen for quality and longevity',
                  'Essential for our new home',
                  'Investment in our future',
                  'Pieces we\'ll use every day',
                ].map((reason) => (
                  <li key={reason} className="flex items-center gap-3 text-gray-300">
                    <span className="w-2 h-2 bg-white rounded-full" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Our featured items represent the core pieces we're most excited about. These are the items that will define our home and create the foundation for our life together.
              </p>
              <button className="flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                Explore Full Registry
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
