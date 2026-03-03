import { Heart } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface WeddingPartyGridProps {
  section: Section;
}

export default function WeddingPartyGrid({ section }: WeddingPartyGridProps) {
  const party = [
    { name: 'Sarah Johnson', role: 'Maid of Honor', side: 'bride', image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg' },
    { name: 'Michael Smith', role: 'Best Man', side: 'groom', image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg' },
    { name: 'Emily Chen', role: 'Bridesmaid', side: 'bride', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg' },
    { name: 'David Lee', role: 'Groomsman', side: 'groom', image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg' },
    { name: 'Rachel Green', role: 'Bridesmaid', side: 'bride', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg' },
    { name: 'James Wilson', role: 'Groomsman', side: 'groom', image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg' },
    { name: 'Lisa Park', role: 'Bridesmaid', side: 'bride', image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg' },
    { name: 'Robert Taylor', role: 'Groomsman', side: 'groom', image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg' },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Heart className="w-12 h-12 mx-auto mb-4 text-rose-500" />
          <h2 className="text-5xl font-serif text-gray-900 mb-4">Wedding Party</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {party.map((person, idx) => (
            <div key={idx} className="text-center group">
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${person.side === 'bride' ? 'from-rose-600/80' : 'from-blue-600/80'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4`}>
                  <p className="text-white font-medium">{person.role}</p>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900">{person.name}</h4>
              <p className={person.side === 'bride' ? 'text-rose-600' : 'text-blue-600'}>{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
