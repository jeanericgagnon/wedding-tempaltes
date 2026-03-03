import { Sparkles } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface WeddingPartyShowcaseProps {
  section: Section;
}

export default function WeddingPartyShowcase({ section }: WeddingPartyShowcaseProps) {
  const featured = [
    { name: 'Sarah Johnson', role: 'Maid of Honor', image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg', quote: 'Honored to stand beside my best friend on her special day' },
    { name: 'Michael Smith', role: 'Best Man', image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg', quote: 'Proud to support my brother in this new chapter' },
  ];

  const others = [
    { name: 'Emily Chen', role: 'Bridesmaid', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg' },
    { name: 'David Lee', role: 'Groomsman', image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg' },
    { name: 'Rachel Green', role: 'Bridesmaid', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg' },
    { name: 'James Wilson', role: 'Groomsman', image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg' },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Sparkles className="w-12 h-12 mx-auto mb-4 text-amber-500" />
          <h2 className="text-5xl font-serif text-gray-900">Wedding Party</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {featured.map((person, idx) => (
            <div key={idx} className="relative group">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 rounded-b-2xl">
                <h4 className="text-3xl font-serif text-white mb-1">{person.name}</h4>
                <p className="text-amber-400 font-medium text-lg mb-3">{person.role}</p>
                <p className="text-white/90 italic">{person.quote}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {others.map((person, idx) => (
            <div key={idx} className="text-center">
              <img src={person.image} alt={person.name} className="w-full aspect-square object-cover rounded-lg mb-3" />
              <h4 className="text-lg font-semibold text-gray-900">{person.name}</h4>
              <p className="text-gray-600">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
