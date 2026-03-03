import { Film } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface WeddingPartyFilmstripProps {
  section: Section;
}

export default function WeddingPartyFilmstrip({ section }: WeddingPartyFilmstripProps) {
  const party = [
    { name: 'Sarah', role: 'MOH', image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg' },
    { name: 'Michael', role: 'Best Man', image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg' },
    { name: 'Emily', role: 'Bridesmaid', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg' },
    { name: 'David', role: 'Groomsman', image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg' },
    { name: 'Rachel', role: 'Bridesmaid', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg' },
    { name: 'James', role: 'Groomsman', image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg' },
    { name: 'Lisa', role: 'Bridesmaid', image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg' },
    { name: 'Robert', role: 'Groomsman', image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg' },
  ];

  return (
    <section className="py-24 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Film className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-5xl font-serif">Our Cast</h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-zinc-800 border-l-4 border-r-4 border-zinc-700">
            <div className="flex flex-col justify-around h-full p-1">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-full h-4 bg-zinc-700 rounded-sm" />
              ))}
            </div>
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-8 bg-zinc-800 border-l-4 border-r-4 border-zinc-700">
            <div className="flex flex-col justify-around h-full p-1">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-full h-4 bg-zinc-700 rounded-sm" />
              ))}
            </div>
          </div>

          <div className="mx-12 overflow-x-auto">
            <div className="flex gap-4 pb-4">
              {party.map((person, idx) => (
                <div key={idx} className="flex-shrink-0 w-48 bg-zinc-800 p-2">
                  <img src={person.image} alt={person.name} className="w-full aspect-[3/4] object-cover mb-2" />
                  <div className="text-center">
                    <p className="text-white font-medium">{person.name}</p>
                    <p className="text-zinc-400 text-sm">{person.role}</p>
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
