import { MapPin, Plane, Clock } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface TravelPlayfulProps {
  section: Section;
}

export default function TravelPlayful({ section }: TravelPlayfulProps) {
  const venue = section.bindings?.venue || 'The Grand Ballroom';
  const location = section.bindings?.location || 'Somewhere Beautiful';

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-serif text-center text-gray-900 mb-16">
          Getting There
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-serif mb-4 text-gray-900">The Venue</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              {venue}
            </p>
            <p className="text-sm text-gray-500">
              {location}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6">
              <Plane className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-2xl font-serif mb-4 text-gray-900">Travel Info</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Easy access by car, train, or plane. Parking available on-site.
            </p>
            <p className="text-sm text-gray-500">
              We recommend arriving early
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-serif mb-4 text-gray-900">When</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              {section.bindings?.date || 'June 15, 2025'}
            </p>
            <p className="text-sm text-gray-500">
              Ceremony at 4:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
