import { Users } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface WeddingPartyStackedProps {
  section: Section;
}

export default function WeddingPartyStacked({ section }: WeddingPartyStackedProps) {
  const party = [
    { name: 'Sarah Johnson', role: 'Maid of Honor', bio: 'Best friend since college, always there through thick and thin', image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg' },
    { name: 'Michael Smith', role: 'Best Man', bio: 'Brother and lifelong companion, the rock of this friendship', image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg' },
    { name: 'Emily Chen', role: 'Bridesmaid', bio: 'Childhood friend who knows all the secrets', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg' },
    { name: 'David Lee', role: 'Groomsman', bio: 'College roommate and adventure partner', image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg' },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <Users className="w-12 h-12 mx-auto mb-4 text-rose-500" />
          <h2 className="text-5xl font-serif text-gray-900">Wedding Party</h2>
        </div>

        <div className="space-y-12">
          {party.map((person, idx) => (
            <div key={idx} className={`flex ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8 items-center`}>
              <img src={person.image} alt={person.name} className="w-48 h-48 rounded-lg object-cover shadow-xl" />
              <div className={idx % 2 === 0 ? 'text-left' : 'text-right'}>
                <h4 className="text-3xl font-serif text-gray-900 mb-2">{person.name}</h4>
                <p className="text-rose-600 font-medium text-lg mb-3">{person.role}</p>
                <p className="text-gray-600 text-lg">{person.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
