import { Section } from '../../types/layoutConfig';

interface AccommodationsGridProps {
  section: Section;
}

export default function AccommodationsGrid({ section }: AccommodationsGridProps) {
  const hotels = Array(6).fill(null).map((_, i) => ({
    name: `Hotel Option ${i + 1}`,
    distance: `${2 + i} km from venue`,
    price: `$${200 + i * 50}`,
    type: ['Luxury', 'Boutique', 'Modern', 'Classic', 'Garden', 'Urban'][i],
  }));

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-serif text-center text-gray-900 mb-4">Hotel Options</h2>
        <p className="text-center text-gray-600 mb-16">Browse our recommended accommodations</p>

        <div className="grid md:grid-cols-3 gap-6">
          {hotels.map((hotel, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-6 hover:border-gray-400 transition-colors">
              <div className="w-full h-32 bg-gray-100 rounded mb-4" />
              <h3 className="text-lg font-serif text-gray-900 mb-2">{hotel.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{hotel.type}</p>
              <p className="text-sm text-gray-600 mb-3">{hotel.distance}</p>
              <p className="text-xl font-semibold text-gray-900">{hotel.price}/night</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
