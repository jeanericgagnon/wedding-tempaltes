import { Heart } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface WeddingPartyCircleProps {
  section: Section;
}

export default function WeddingPartyCircle({ section }: WeddingPartyCircleProps) {
  const party = [
    { name: 'Sarah', role: 'Maid of Honor', image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg' },
    { name: 'Michael', role: 'Best Man', image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg' },
    { name: 'Emily', role: 'Bridesmaid', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg' },
    { name: 'David', role: 'Groomsman', image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg' },
    { name: 'Rachel', role: 'Bridesmaid', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg' },
    { name: 'James', role: 'Groomsman', image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg' },
    { name: 'Lisa', role: 'Bridesmaid', image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg' },
    { name: 'Robert', role: 'Groomsman', image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg' },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-rose-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-serif text-gray-900 mb-4">Our Beloved Circle</h2>
          <p className="text-xl text-gray-600">The friends who complete us</p>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Heart className="w-16 h-16 text-rose-400" />
          </div>

          <div className="grid grid-cols-4 gap-8">
            {party.map((person, idx) => (
              <div key={idx} className="text-center">
                <div className="relative mb-4 group">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto shadow-xl border-4 border-white group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">{person.name}</h4>
                <p className="text-sm text-gray-600">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
