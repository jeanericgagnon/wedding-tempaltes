import { Gift, ExternalLink } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface RegistryLuxuryProps {
  section: Section;
}

const registries = [
  {
    name: 'Williams Sonoma',
    description: 'Kitchen essentials and home entertaining',
    icon: '🍽️',
  },
  {
    name: 'Pottery Barn',
    description: 'Beautiful home décor and furnishings',
    icon: '🏠',
  },
  {
    name: 'Honeyfund',
    description: 'Contribute to our honeymoon adventure',
    icon: '✈️',
  },
];

export default function RegistryLuxury({ section }: RegistryLuxuryProps) {
  return (
    <section className="py-32 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-serif text-gray-900 mb-6">
            Our Registry
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-amber-300 to-amber-500 mx-auto mb-8" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Thank you for celebrating with us. Your presence is the greatest gift,
            but if you'd like to honor us with a gift, here are some options.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {registries.map((registry) => (
            <div
              key={registry.name}
              className="bg-white rounded-lg p-8 shadow-lg border border-amber-100 hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4">{registry.icon}</div>
              <h3 className="text-2xl font-serif text-gray-900 mb-3">
                {registry.name}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed font-light">
                {registry.description}
              </p>
              <button className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold transition-colors">
                View Registry <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-12 text-center border border-amber-100">
          <Gift className="w-12 h-12 text-amber-500 mx-auto mb-6" />
          <h3 className="text-2xl font-serif text-gray-900 mb-4">
            In Lieu of Gifts
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            In lieu of gifts, we would appreciate a contribution to our chosen charity.
            Your generosity will make a real difference in the world.
          </p>
        </div>
      </div>
    </section>
  );
}
