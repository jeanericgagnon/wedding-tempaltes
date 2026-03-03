import { Users } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface WeddingPartyCardsProps {
  section: Section;
}

export default function WeddingPartyCards({ section }: WeddingPartyCardsProps) {
  const party = [
    { name: 'Sarah Johnson', role: 'Maid of Honor', bio: 'Best friend since college', image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg' },
    { name: 'Michael Smith', role: 'Best Man', bio: 'Brother and lifelong friend', image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg' },
    { name: 'Emily Chen', role: 'Bridesmaid', bio: 'Childhood friend', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg' },
    { name: 'David Lee', role: 'Groomsman', bio: 'College roommate', image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg' },
    { name: 'Rachel Green', role: 'Bridesmaid', bio: 'Work bestie', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg' },
    { name: 'James Wilson', role: 'Groomsman', bio: 'Teammate and friend', image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Users className="w-12 h-12 mx-auto mb-4 text-rose-500" />
          <h2 className="text-5xl font-serif text-gray-900">Meet Our Wedding Party</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {party.map((person, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img src={person.image} alt={person.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h4 className="text-2xl font-serif text-gray-900 mb-1">{person.name}</h4>
                <p className="text-rose-600 font-medium mb-3">{person.role}</p>
                <p className="text-gray-600">{person.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
