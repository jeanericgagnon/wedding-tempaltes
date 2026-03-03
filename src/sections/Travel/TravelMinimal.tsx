import { MapPin, Plane, Train, Car } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface TravelMinimalProps {
  section: Section;
}

export default function TravelMinimal({ section }: TravelMinimalProps) {
  const location = section.bindings?.location || '742 Main Street, Springfield, CA';

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6">
            Visit Us
          </h2>

          <div className="flex justify-center mb-8">
            <div className="h-1 w-12 bg-gray-300" />
          </div>

          <p className="text-2xl font-serif text-gray-800 mb-4">
            {location}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Easily accessible by car, train, or plane. Complimentary parking available on-site.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Plane className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-sm text-gray-600">
              <span className="block font-semibold text-gray-900 mb-1">By Air</span>
              35-45 minutes from airport
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Train className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-sm text-gray-600">
              <span className="block font-semibold text-gray-900 mb-1">By Train</span>
              10 minutes from station
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Car className="w-6 h-6 text-orange-600" />
            </div>
            <p className="text-sm text-gray-600">
              <span className="block font-semibold text-gray-900 mb-1">By Car</span>
              Free parking on-site
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-8">
          <div className="flex justify-center mb-4">
            <MapPin className="w-6 h-6 text-gray-400" />
          </div>
          <p className="text-sm text-gray-600 uppercase tracking-widest font-semibold mb-2">
            Contact us
          </p>
          <p className="text-gray-700 mb-1">Phone: (555) 123-4567</p>
          <p className="text-gray-700">Email: travel@venue.com</p>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 font-light tracking-wide">
            For comprehensive travel information and booking assistance, contact our travel team.
          </p>
        </div>
      </div>
    </section>
  );
}
