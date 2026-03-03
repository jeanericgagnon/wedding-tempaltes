import { Users as Users2 } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface WeddingPartyModernProps {
  section: Section;
}

export default function WeddingPartyModern({ section }: WeddingPartyModernProps) {
  const party = [
    { name: 'Sarah Johnson', role: 'Maid of Honor', image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg', color: 'rose' },
    { name: 'Michael Smith', role: 'Best Man', image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg', color: 'blue' },
    { name: 'Emily Chen', role: 'Bridesmaid', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg', color: 'rose' },
    { name: 'David Lee', role: 'Groomsman', image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg', color: 'blue' },
    { name: 'Rachel Green', role: 'Bridesmaid', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg', color: 'rose' },
    { name: 'James Wilson', role: 'Groomsman', image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg', color: 'blue' },
  ];

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-16">
          <Users2 className="w-10 h-10" />
          <h2 className="text-6xl font-bold">WEDDING PARTY</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {party.map((person, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full aspect-[3/4] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className={`absolute inset-0 bg-${person.color}-600/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
              <h4 className="text-xl font-bold mb-1">{person.name}</h4>
              <p className={`text-${person.color}-400 uppercase text-sm tracking-wider`}>{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
