import { ChevronDown, Info } from 'lucide-react';
import React from 'react';
import { Section } from '../../types/layoutConfig';

interface RegistryDetailedProps {
  section: Section;
}

const items = [
  {
    name: 'Waterford Lead Crystal Stemware',
    price: 520,
    category: 'Glassware',
    quantity: '12 pieces',
    specs: ['Handcrafted lead crystal', 'Capacity: 8 oz', 'Made in Ireland', 'Dishwasher safe'],
    description: 'Elegant stemware perfect for special occasions. Each glass is individually crafted with precision.',
    purchased: 9,
    total: 12,
  },
  {
    name: 'Frette Sateen Sheet Set',
    price: 650,
    category: 'Bedding',
    quantity: '1 queen set',
    specs: ['1000 thread count', 'Egyptian cotton', '14" pocket depth', 'Machine washable'],
    description: 'Luxurious Italian sheets with premium sateen weave for ultimate comfort.',
    purchased: 8,
    total: 8,
  },
  {
    name: 'Staub Cocotte Braiser',
    price: 380,
    category: 'Cookware',
    quantity: '3.5 qt',
    specs: ['Enameled cast iron', 'Induction ready', 'Color: Cherry', 'Lifetime warranty'],
    description: 'Professional-grade cookware suitable for stovetop and oven. Heat-safe to 500°F.',
    purchased: 3,
    total: 3,
  },
  {
    name: 'Ralph Lauren Bath Towel Set',
    price: 280,
    category: 'Bath',
    quantity: '6-piece set',
    specs: ['100% cotton', 'Plush construction', 'Color: Cream', 'OEKO-TEX certified'],
    description: 'Supremely soft and absorbent towels that maintain quality wash after wash.',
    purchased: 4,
    total: 6,
  },
];

export default function RegistryDetailed({ section }: RegistryDetailedProps) {
  const [expandedItem, setExpandedItem] = React.useState<string | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-gray-900 mb-4">
            Detailed Registry Items
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every item is carefully selected with complete specifications so you know exactly what you're purchasing.
          </p>
        </div>

        <div className="space-y-6">
          {items.map((item) => {
            const isExpanded = expandedItem === item.name;
            const purchasePercent = (item.purchased / item.total) * 100;

            return (
              <div key={item.name} className="bg-white rounded-xl border border-blue-200 overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <button
                  onClick={() => setExpandedItem(isExpanded ? null : item.name)}
                  className="w-full p-6 text-left hover:bg-blue-50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                        {item.purchased === item.total && (
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Complete</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 mb-3">{item.category} • {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-600">${item.price}</p>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 mt-2 transition-transform ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="w-full mr-4">
                      <p className="text-xs text-gray-600 mb-1">{item.purchased} of {item.total} secured</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-blue-600 h-full transition-all duration-500"
                          style={{ width: `${purchasePercent}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </button>

                {isExpanded && (
                  <div className="border-t border-blue-200 p-6 bg-gradient-to-b from-blue-50 to-white">
                    <p className="text-gray-700 mb-6 leading-relaxed">{item.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Info className="w-4 h-4 text-blue-600" />
                        Specifications
                      </h4>
                      <ul className="space-y-2">
                        {item.specs.map((spec) => (
                          <li key={spec} className="text-gray-700 text-sm flex items-start gap-3">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">
                      {item.purchased === item.total ? 'All Secured!' : 'Contribute to Complete'}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-blue-50 rounded-xl p-8 border border-blue-200 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Complete Specifications for Every Item</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We've included detailed specifications so guests can make informed decisions. Click on any item to see full details and contribute.
          </p>
        </div>
      </div>
    </section>
  );
}
