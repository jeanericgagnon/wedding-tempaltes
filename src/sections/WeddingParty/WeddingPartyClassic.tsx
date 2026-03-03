import { Users } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface WeddingPartyClassicProps {
  section: Section;
}

export default function WeddingPartyClassic({ section }: WeddingPartyClassicProps) {
  const bridalParty = [
    { name: 'Sarah Johnson', role: 'Maid of Honor', image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg' },
    { name: 'Emily Chen', role: 'Bridesmaid', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg' },
    { name: 'Rachel Green', role: 'Bridesmaid', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg' },
    { name: 'Lisa Park', role: 'Bridesmaid', image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg' },
  ];

  const groomsmen = [
    { name: 'Michael Smith', role: 'Best Man', image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg' },
    { name: 'David Lee', role: 'Groomsman', image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg' },
    { name: 'James Wilson', role: 'Groomsman', image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg' },
    { name: 'Robert Taylor', role: 'Groomsman', image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Users className="w-12 h-12 mx-auto mb-4 text-rose-500" />
          <h2 className="text-5xl font-serif text-gray-900 mb-4">Our Wedding Party</h2>
          <p className="text-xl text-gray-600">The amazing people standing by our side</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-serif text-center mb-8 text-rose-600">Bridal Party</h3>
            <div className="space-y-6">
              {bridalParty.map((person, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-rose-50 p-4 rounded-lg">
                  <img src={person.image} alt={person.name} className="w-20 h-20 rounded-full object-cover" />
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">{person.name}</h4>
                    <p className="text-rose-600">{person.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-serif text-center mb-8 text-blue-600">Groomsmen</h3>
            <div className="space-y-6">
              {groomsmen.map((person, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-blue-50 p-4 rounded-lg">
                  <img src={person.image} alt={person.name} className="w-20 h-20 rounded-full object-cover" />
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">{person.name}</h4>
                    <p className="text-blue-600">{person.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
