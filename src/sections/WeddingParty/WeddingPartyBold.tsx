import { Zap } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface WeddingPartyBoldProps {
  section: Section;
}

export default function WeddingPartyBold({ section }: WeddingPartyBoldProps) {
  const party = [
    { name: 'SARAH', role: 'Maid of Honor', image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg' },
    { name: 'MICHAEL', role: 'Best Man', image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg' },
    { name: 'EMILY', role: 'Bridesmaid', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg' },
    { name: 'DAVID', role: 'Groomsman', image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg' },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Zap className="w-16 h-16 mx-auto mb-4 animate-pulse" />
          <h2 className="text-7xl md:text-8xl font-black tracking-tighter mb-4">THE SQUAD</h2>
          <p className="text-2xl font-bold uppercase tracking-widest">Wedding Party 2025</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {party.map((person, idx) => (
            <div key={idx} className="group">
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-3xl font-black tracking-tight mb-1">{person.name}</h4>
                  <p className="text-yellow-400 font-bold uppercase text-sm tracking-widest">{person.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
