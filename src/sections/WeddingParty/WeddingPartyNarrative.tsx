import { BookHeart } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface WeddingPartyNarrativeProps {
  section: Section;
}

export default function WeddingPartyNarrative({ section }: WeddingPartyNarrativeProps) {
  const stories = [
    {
      name: 'Sarah Johnson',
      role: 'Maid of Honor',
      story: 'We met on the first day of college, both lost trying to find the dining hall. From that moment, we became inseparable. Sarah has been there through every triumph and heartbreak, always knowing exactly what to say.',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg',
    },
    {
      name: 'Michael Smith',
      role: 'Best Man',
      story: 'My brother, my first friend, my forever supporter. Growing up together meant sharing everything - toys, secrets, dreams. Today, he stands beside me as I start my own family, just as I will always stand beside him.',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
    },
  ];

  return (
    <section className="py-24 bg-amber-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <BookHeart className="w-12 h-12 mx-auto mb-4 text-amber-700" />
          <h2 className="text-5xl font-serif text-gray-900">Their Stories</h2>
        </div>

        <div className="space-y-20">
          {stories.map((person, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full md:w-1/3 h-64 md:h-auto object-cover"
                />
                <div className="p-8 md:p-12">
                  <h4 className="text-3xl font-serif text-gray-900 mb-2">{person.name}</h4>
                  <p className="text-amber-700 font-medium text-lg mb-6">{person.role}</p>
                  <p className="text-gray-700 text-lg leading-relaxed">{person.story}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
