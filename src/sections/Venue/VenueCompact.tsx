import { Section } from '../../types/layoutConfig';
import { MapPin, Users, Building, Wifi, Clock, Phone } from 'lucide-react';

interface VenueCompactProps {
  section: Section;
}

export default function VenueCompact({ section }: VenueCompactProps) {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Main Card */}
          <div className="md:col-span-2 bg-white rounded-xl border border-amber-200 p-6 md:p-8">
            <div className="mb-6">
              <p className="text-amber-700 text-xs font-bold uppercase tracking-widest mb-2">Urban Loft</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">The Warehouse</h2>
              <div className="flex items-start gap-2 text-amber-900">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <p className="text-sm">789 Industrial Avenue, Chicago, IL 60654</p>
              </div>
            </div>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
              Industrial-chic loft space with exposed brick, soaring ceilings, and modern amenities. Ideal for intimate gatherings, corporate functions, and creative events.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-amber-50 rounded-lg p-3 border border-amber-100">
                <Users className="w-5 h-5 text-amber-600 mb-1" />
                <p className="text-xs text-gray-600">Capacity</p>
                <p className="text-sm font-bold text-gray-900">75-150</p>
              </div>
              <div className="bg-amber-50 rounded-lg p-3 border border-amber-100">
                <Building className="w-5 h-5 text-amber-600 mb-1" />
                <p className="text-xs text-gray-600">Square Feet</p>
                <p className="text-sm font-bold text-gray-900">4,200</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-700 p-2 bg-orange-50 rounded">
                <Wifi className="w-4 h-4 text-orange-600" />
                <span>High-speed WiFi & power</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700 p-2 bg-orange-50 rounded">
                <Building className="w-4 h-4 text-orange-600" />
                <span>Climate controlled</span>
              </div>
            </div>
          </div>

          {/* Side Cards */}
          <div className="flex flex-col gap-4">
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-lg p-4">
              <Clock className="w-6 h-6 mb-2 opacity-80" />
              <p className="text-xs font-semibold opacity-75 mb-1">HOURS</p>
              <p className="text-sm font-bold">Mon-Fri, 9AM-10PM</p>
              <p className="text-xs opacity-75 mt-1">Weekends available</p>
            </div>

            <div className="bg-white rounded-lg border border-amber-200 p-4">
              <Phone className="w-6 h-6 text-amber-600 mb-2" />
              <p className="text-xs font-semibold text-gray-600 mb-1">CONTACT</p>
              <p className="text-sm font-bold text-gray-900">(312) 555-9876</p>
              <p className="text-xs text-gray-500 mt-1">events@warehouse.chi</p>
            </div>

            <div className="bg-white rounded-lg border border-amber-200 p-4">
              <MapPin className="w-6 h-6 text-amber-600 mb-2" />
              <p className="text-xs font-semibold text-gray-600 mb-1">PARKING</p>
              <p className="text-sm font-bold text-gray-900">Lot included</p>
              <p className="text-xs text-gray-500 mt-1">50+ spaces</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
