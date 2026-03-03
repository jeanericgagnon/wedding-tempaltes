import { Crown } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface WeddingPartyLuxuryProps {
  section: Section;
}

export default function WeddingPartyLuxury({ section }: WeddingPartyLuxuryProps) {
  const party = [
    { name: 'Sarah Johnson', role: 'Maid of Honor', image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg' },
    { name: 'Michael Smith', role: 'Best Man', image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg' },
    { name: 'Emily Chen', role: 'Bridesmaid', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg' },
    { name: 'David Lee', role: 'Groomsman', image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg' },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-20">
          <Crown className="w-16 h-16 mx-auto mb-6 text-amber-400" />
          <h2 className="text-6xl font-serif mb-4">Wedding Party</h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {party.map((person, idx) => (
            <div key={idx} className="group">
              <div className="relative overflow-hidden mb-6">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full aspect-[3/4] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 border-2 border-amber-400/0 group-hover:border-amber-400/100 transition-all duration-700" />
              </div>
              <h4 className="text-2xl font-serif text-white mb-2">{person.name}</h4>
              <p className="text-amber-400 uppercase tracking-widest text-sm">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
