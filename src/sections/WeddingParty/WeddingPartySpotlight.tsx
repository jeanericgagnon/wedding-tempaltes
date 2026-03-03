import { Star } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface WeddingPartySpotlightProps {
  section: Section;
}

export default function WeddingPartySpotlight({ section }: WeddingPartySpotlightProps) {
  const spotlight = [
    { name: 'Sarah Johnson', role: 'Maid of Honor', image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg', quote: 'Forever grateful to stand by your side' },
    { name: 'Michael Smith', role: 'Best Man', image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg', quote: 'Brothers by blood, best friends by choice' },
  ];

  const supporting = [
    { name: 'Emily', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg' },
    { name: 'David', image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg' },
    { name: 'Rachel', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg' },
    { name: 'James', image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg' },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Star className="w-12 h-12 mx-auto mb-4 text-amber-500" />
          <h2 className="text-5xl font-serif text-gray-900">In The Spotlight</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {spotlight.map((person, idx) => (
            <div key={idx} className="relative group">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-serif text-gray-900 mb-2">{person.name}</h4>
                <p className="text-amber-600 font-medium text-lg mb-4">{person.role}</p>
                <p className="text-gray-600 italic text-lg">"{person.quote}"</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-8">
          {supporting.map((person, idx) => (
            <div key={idx} className="text-center">
              <img src={person.image} alt={person.name} className="w-24 h-24 rounded-full object-cover mx-auto mb-2 shadow-lg" />
              <p className="text-gray-700 font-medium">{person.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
