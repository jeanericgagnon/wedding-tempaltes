import { Heart, Award } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface RegistryCuratedProps {
  section: Section;
}

const items = [
  {
    name: 'Artisan Coffee Maker',
    brand: 'Fellow',
    price: 195,
    description: 'Precision engineering meets elegant design. Perfect for coffee enthusiasts.',
    story: 'We fell in love with this at a local design shop. It\'s both beautiful and functional.',
    image: 'bg-amber-300',
  },
  {
    name: 'Luxury Linen Set',
    brand: 'Schoolhouse Electric',
    price: 620,
    description: 'European flax linen with impeccable craftsmanship. Pure comfort.',
    story: 'Every thread counts. We chose these for their quality and sustainability.',
    image: 'bg-rose-200',
  },
  {
    name: 'Handcrafted Dining Table',
    brand: 'Masaya & Co',
    price: 2400,
    description: 'Solid wood crafted by skilled artisans. A centerpiece for gatherings.',
    story: 'This table will host countless dinners, celebrations, and memories with loved ones.',
    image: 'bg-yellow-900',
  },
  {
    name: 'Premium Cookware Set',
    brand: 'Le Creuset',
    price: 850,
    description: 'Enameled cast iron with vibrant colors. Legendary durability.',
    story: 'These pieces will be passed down to our children. Timeless investment.',
    image: 'bg-orange-600',
  },
  {
    name: 'Natural Fiber Throws',
    brand: 'Reformation',
    price: 240,
    description: 'Sustainable materials, mindful production. Comfort with purpose.',
    story: 'For cozy evenings and relaxation. Supporting ethical manufacturing matters to us.',
    image: 'bg-stone-300',
  },
  {
    name: 'Sculptural Vases',
    brand: 'Heath Ceramics',
    price: 180,
    description: 'Hand-thrown ceramic art. Each piece is unique.',
    story: 'Local artisans creating timeless home accents. We adore handmade pieces.',
    image: 'bg-cyan-200',
  },
];

export default function RegistryCurated({ section }: RegistryCuratedProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-stone-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Award className="w-12 h-12 text-amber-600 mx-auto mb-4" />
          <h2 className="text-5xl font-serif text-gray-900 mb-4">
            Handpicked with Care
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each item tells a story. We've thoughtfully selected pieces we believe will bring beauty and joy to our home.
          </p>
        </div>

        <div className="space-y-12 md:space-y-24">
          {items.map((item, index) => (
            <div key={item.name} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
              <div className={`${item.image} h-96 rounded-2xl shadow-lg ${index % 2 === 1 ? 'md:col-start-2' : ''}`} />
              <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
                <div className="mb-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-amber-600">Featured Selection</span>
                </div>
                <h3 className="text-4xl font-serif text-gray-900 mb-2">{item.name}</h3>
                <p className="text-lg text-gray-500 font-light mb-4">by {item.brand}</p>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">{item.description}</p>

                <div className="bg-stone-50 border-l-4 border-amber-600 p-6 mb-8 rounded">
                  <p className="text-gray-700 italic">"{item.story}"</p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-4xl font-bold text-gray-900">${item.price}</span>
                  <button className="flex items-center gap-2 px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors">
                    <Heart className="w-5 h-5" />
                    Add to Registry
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-amber-50 to-stone-50 rounded-2xl p-12 border border-amber-200 text-center">
          <h3 className="text-3xl font-serif text-gray-900 mb-3">Our Curation Philosophy</h3>
          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
            We believe in quality over quantity. Every item on our registry has been chosen for its craftsmanship, beauty, and how it will serve our life together. We value brands that share our commitment to sustainability and ethical production.
          </p>
        </div>
      </div>
    </section>
  );
}
