import { Sparkle } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface WeddingPartyElegantProps {
  section: Section;
}

export default function WeddingPartyElegant({ section }: WeddingPartyElegantProps) {
  const party = [
    { name: 'Sarah Johnson', role: 'Maid of Honor', image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg', initial: 'S' },
    { name: 'Michael Smith', role: 'Best Man', image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg', initial: 'M' },
    { name: 'Emily Chen', role: 'Bridesmaid', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg', initial: 'E' },
    { name: 'David Lee', role: 'Groomsman', image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg', initial: 'D' },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-stone-100 to-stone-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-20">
          <Sparkle className="w-8 h-8 mx-auto mb-6 text-amber-600" />
          <h2 className="text-6xl font-serif text-stone-900 tracking-tight">Wedding Party</h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="w-16 h-px bg-stone-300" />
            <div className="w-2 h-2 bg-amber-600 rounded-full" />
            <div className="w-16 h-px bg-stone-300" />
          </div>
        </div>

        <div className="space-y-16">
          {party.map((person, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <div className="flex-shrink-0 w-32 h-32 rounded-full bg-stone-200 flex items-center justify-center">
                <span className="text-6xl font-serif text-stone-700">{person.initial}</span>
              </div>
              <div className="flex-1 border-b border-stone-300 pb-4">
                <h4 className="text-3xl font-serif text-stone-900 mb-2">{person.name}</h4>
                <p className="text-amber-700 text-lg tracking-wide">{person.role}</p>
              </div>
              <img src={person.image} alt={person.name} className="flex-shrink-0 w-48 h-48 object-cover rounded shadow-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
