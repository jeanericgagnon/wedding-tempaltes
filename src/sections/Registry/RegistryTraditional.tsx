import { ExternalLink } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface RegistryTraditionalProps {
  section: Section;
}

const registries = [
  {
    name: 'Williams Sonoma',
    description: 'Kitchen essentials and home entertaining',
    url: '#',
    items: 'View Registry',
  },
  {
    name: 'Pottery Barn',
    description: 'Beautiful home décor and furnishings',
    url: '#',
    items: 'View Registry',
  },
  {
    name: 'Crate and Barrel',
    description: 'Modern furniture and housewares',
    url: '#',
    items: 'View Registry',
  },
  {
    name: 'Zola',
    description: 'Complete registry management',
    url: '#',
    items: 'View Registry',
  },
];

export default function RegistryTraditional({ section }: RegistryTraditionalProps) {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-serif text-gray-900 mb-6">
            Our Gift Registry
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-rose-400 to-rose-600 mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Your presence at our wedding is the greatest gift. If you wish to honor us with a gift,
            we are registered at the following locations.
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {registries.map((registry, index) => (
            <div
              key={registry.name}
              className="border-b border-gray-300 pb-8 last:border-0"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-2xl font-serif text-gray-900 mb-2">
                    {registry.name}
                  </h3>
                  <p className="text-gray-600">{registry.description}</p>
                </div>
                <span className="text-sm font-semibold text-gray-500">
                  #{index + 1}
                </span>
              </div>
              <a
                href={registry.url}
                className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 font-semibold transition-colors"
              >
                {registry.items}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="bg-rose-50 rounded-lg p-12 border-2 border-rose-200 text-center mb-12">
          <h3 className="text-2xl font-serif text-gray-900 mb-3">
            In Lieu of Gifts
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            In lieu of gifts, we would appreciate a contribution to our chosen charities.
            Your generosity in supporting causes close to our hearts means the world to us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
          <div>
            <p className="text-4xl font-bold text-rose-600 mb-2">4</p>
            <p className="text-gray-600">Registry Partners</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-rose-600 mb-2">250+</p>
            <p className="text-gray-600">Registered Items</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-rose-600 mb-2">100%</p>
            <p className="text-gray-600">Easy to Shop</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Thank you for celebrating with us and for your thoughtfulness in selecting a gift from our registry.
            We look forward to creating memories with you.
          </p>
          <button className="px-8 py-3 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-lg transition-colors">
            View All Registries
          </button>
        </div>
      </div>
    </section>
  );
}
