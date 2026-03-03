import { BookOpen } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface WeddingPartyMagazineProps {
  section: Section;
}

export default function WeddingPartyMagazine({ section }: WeddingPartyMagazineProps) {
  const featured = { name: 'Sarah & Michael', role: 'Maid of Honor & Best Man', image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg' };

  const others = [
    { name: 'Emily Chen', role: 'Bridesmaid', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg' },
    { name: 'David Lee', role: 'Groomsman', image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg' },
    { name: 'Rachel Green', role: 'Bridesmaid', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg' },
    { name: 'James Wilson', role: 'Groomsman', image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg' },
    { name: 'Lisa Park', role: 'Bridesmaid', image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg' },
    { name: 'Robert Taylor', role: 'Groomsman', image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <BookOpen className="w-8 h-8 text-gray-900 mb-2" />
          <h2 className="text-7xl font-serif text-gray-900 leading-none">Wedding Party</h2>
          <div className="w-24 h-1 bg-gray-900 mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="relative aspect-[4/5]">
            <img src={featured.image} alt={featured.name} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-6 text-white">
              <p className="text-sm uppercase tracking-widest mb-2">Feature</p>
              <h3 className="text-3xl font-serif mb-2">{featured.name}</h3>
              <p className="text-lg">{featured.role}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {others.map((person, idx) => (
              <div key={idx} className="space-y-2">
                <img src={person.image} alt={person.name} className="w-full aspect-square object-cover" />
                <h4 className="font-semibold text-gray-900">{person.name}</h4>
                <p className="text-sm text-gray-600 uppercase tracking-wide">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
