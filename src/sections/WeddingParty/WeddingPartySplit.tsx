import { Heart } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface WeddingPartySplitProps {
  section: Section;
}

export default function WeddingPartySplit({ section }: WeddingPartySplitProps) {
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
    <section className="min-h-screen flex">
      <div className="flex-1 bg-rose-50 p-12 flex flex-col justify-center">
        <div className="max-w-xl mx-auto">
          <h3 className="text-4xl font-serif text-rose-900 mb-12 text-center">Bridal Party</h3>
          <div className="space-y-8">
            {bridalParty.map((person, idx) => (
              <div key={idx} className="flex items-center gap-6">
                <img src={person.image} alt={person.name} className="w-24 h-24 rounded-full object-cover shadow-lg" />
                <div>
                  <h4 className="text-2xl font-semibold text-gray-900">{person.name}</h4>
                  <p className="text-rose-700 text-lg">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center w-20 bg-white">
        <Heart className="w-10 h-10 text-rose-500" />
      </div>

      <div className="flex-1 bg-blue-50 p-12 flex flex-col justify-center">
        <div className="max-w-xl mx-auto">
          <h3 className="text-4xl font-serif text-blue-900 mb-12 text-center">Groomsmen</h3>
          <div className="space-y-8">
            {groomsmen.map((person, idx) => (
              <div key={idx} className="flex items-center gap-6">
                <img src={person.image} alt={person.name} className="w-24 h-24 rounded-full object-cover shadow-lg" />
                <div>
                  <h4 className="text-2xl font-semibold text-gray-900">{person.name}</h4>
                  <p className="text-blue-700 text-lg">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
