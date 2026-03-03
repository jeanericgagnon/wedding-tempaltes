import { MapPin, Users, Clock } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface VenuePlayfulProps {
  section: Section;
}

export default function VenuePlayful({ section }: VenuePlayfulProps) {
  const venue = section.bindings?.venue || 'The Grand Ballroom';
  const description = section.bindings?.venueDescription || 'An elegant space perfect for celebrating love with those closest to us.';

  return (
    <section className="py-24 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-serif text-center text-gray-900 mb-8">
          Our Venue
        </h2>
        <p className="text-center text-gray-600 text-lg mb-16">{venue}</p>

        <div className="bg-white rounded-3xl overflow-hidden shadow-xl mb-12">
          <div className="h-96 bg-gradient-to-br from-rose-200 to-pink-200 flex items-center justify-center">
            <MapPin className="w-32 h-32 text-rose-300 opacity-50" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Users className="w-12 h-12 text-rose-500 mx-auto mb-4" />
            <h3 className="text-xl font-serif text-gray-900 mb-2">Capacity</h3>
            <p className="text-gray-600">200+ Guests</p>
          </div>
          <div className="text-center">
            <Clock className="w-12 h-12 text-rose-500 mx-auto mb-4" />
            <h3 className="text-xl font-serif text-gray-900 mb-2">Hours</h3>
            <p className="text-gray-600">4:00 PM - 11:00 PM</p>
          </div>
          <div className="text-center">
            <MapPin className="w-12 h-12 text-rose-500 mx-auto mb-4" />
            <h3 className="text-xl font-serif text-gray-900 mb-2">Location</h3>
            <p className="text-gray-600">{section.bindings?.location || 'Somewhere Beautiful'}</p>
          </div>
        </div>

        <p className="text-center text-gray-700 text-lg mt-12 leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
