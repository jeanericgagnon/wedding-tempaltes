import { Camera } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface WeddingPartyPolaroidProps {
  section: Section;
}

export default function WeddingPartyPolaroid({ section }: WeddingPartyPolaroidProps) {
  const party = [
    { name: 'Sarah', role: 'Maid of Honor', image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg', note: 'My rock' },
    { name: 'Michael', role: 'Best Man', image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg', note: 'True brother' },
    { name: 'Emily', role: 'Bridesmaid', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg', note: 'Always fun' },
    { name: 'David', role: 'Groomsman', image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg', note: 'Adventure buddy' },
    { name: 'Rachel', role: 'Bridesmaid', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg', note: 'Office bestie' },
    { name: 'James', role: 'Groomsman', image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg', note: 'Team captain' },
  ];

  return (
    <section className="py-24 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Camera className="w-12 h-12 mx-auto mb-4 text-amber-700" />
          <h2 className="text-5xl font-serif text-gray-900">Our Squad</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {party.map((person, idx) => (
            <div
              key={idx}
              className="bg-white p-4 shadow-2xl transform hover:rotate-0 transition-transform duration-300"
              style={{ transform: `rotate(${(idx % 2 === 0 ? 1 : -1) * (idx % 3 + 1) * 2}deg)` }}
            >
              <img src={person.image} alt={person.name} className="w-full aspect-square object-cover mb-4" />
              <div className="text-center">
                <h4 className="text-xl font-handwriting text-gray-900 mb-1">{person.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{person.role}</p>
                <p className="text-sm font-handwriting text-amber-700 italic">{person.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
