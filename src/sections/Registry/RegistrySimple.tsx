import { ArrowRight } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface RegistrySimpleProps {
  section: Section;
}

const items = [
  'Kitchen Cookware Set - Williams Sonoma',
  'Egyptian Cotton Sheets - Pottery Barn',
  'Stainless Steel Flatware - Macy\'s',
  'Glassware Set - Sur La Table',
  'Bed Pillows - Restoration Hardware',
  'Bath Towels - Nordstrom',
  'Dinnerware Set - Bed Bath & Beyond',
  'Coffee Maker - Crate and Barrel',
  'Serving Dishes - Wayfair',
  'Area Rug - West Elm',
  'Wall Decor - Target',
  'Lighting Fixtures - IKEA',
];

export default function RegistrySimple({ section }: RegistrySimpleProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-gray-900 mb-4">
            Our Registry
          </h2>
          <p className="text-xl text-gray-600">
            We're registered at several stores for your convenience.
            Here are the items we're looking for.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-12 mb-12 border border-gray-200">
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li
                key={item}
                className="flex items-center justify-between py-3 border-b border-gray-200 last:border-0 hover:bg-white hover:px-4 hover:mx-4 hover:-ml-4 transition-colors cursor-pointer"
              >
                <span className="text-gray-900 font-medium">{item}</span>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </li>
            ))}
          </ul>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-900 mb-2">{items.length}</p>
            <p className="text-gray-600">Items</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-900 mb-2">7</p>
            <p className="text-gray-600">Retailers</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-900 mb-2">62%</p>
            <p className="text-gray-600">Complete</p>
          </div>
        </div>

        <div className="text-center">
          <button className="inline-block px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
            View Full Registry
          </button>
        </div>
      </div>
    </section>
  );
}
