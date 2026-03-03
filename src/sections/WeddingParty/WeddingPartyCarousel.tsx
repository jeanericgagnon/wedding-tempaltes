import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface WeddingPartyCarouselProps {
  section: Section;
}

export default function WeddingPartyCarousel({ section }: WeddingPartyCarouselProps) {
  const party = [
    { name: 'Sarah Johnson', role: 'Maid of Honor', bio: 'Best friend since college', image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg' },
    { name: 'Michael Smith', role: 'Best Man', bio: 'Brother and confidant', image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg' },
    { name: 'Emily Chen', role: 'Bridesmaid', bio: 'Childhood companion', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg' },
    { name: 'David Lee', role: 'Groomsman', bio: 'College roommate', image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg' },
  ];

  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-serif text-center text-gray-900 mb-16">Meet The Wedding Party</h2>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex gap-6 pb-4">
              {party.map((person, idx) => (
                <div key={idx} className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg overflow-hidden">
                  <img src={person.image} alt={person.name} className="w-full h-96 object-cover" />
                  <div className="p-6">
                    <h4 className="text-2xl font-serif text-gray-900 mb-1">{person.name}</h4>
                    <p className="text-rose-600 font-medium mb-3">{person.role}</p>
                    <p className="text-gray-600">{person.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
}
