import { Section } from '../../types/layoutConfig';
import { MapPin, Users, Phone, Mail } from 'lucide-react';

interface VenueMinimalProps {
  section: Section;
}

export default function VenueMinimal({ section }: VenueMinimalProps) {
  return (
    <section className="py-32 md:py-40 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Minimalist Center */}
        <div className="text-center mb-20">
          <div className="text-xs tracking-[0.4em] text-gray-400 uppercase mb-8 font-semibold">Venue</div>
          <h2 className="text-7xl md:text-8xl font-light mb-6 text-gray-900 tracking-tight">Whitespace</h2>
          <p className="text-lg text-gray-500 font-light tracking-wide mb-2">389 Minimalist Terrace</p>
          <p className="text-lg text-gray-500 font-light tracking-wide">Seattle, WA 98101</p>
        </div>

        {/* Subtle Divider */}
        <div className="w-16 h-px bg-gray-300 mx-auto mb-20" />

        {/* Information Grid - Minimal */}
        <div className="grid md:grid-cols-4 gap-12">
          <div className="text-center">
            <Users className="w-6 h-6 text-gray-400 mx-auto mb-4" />
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Capacity</p>
            <p className="text-2xl text-gray-900 font-light">250</p>
          </div>
          <div className="text-center">
            <MapPin className="w-6 h-6 text-gray-400 mx-auto mb-4" />
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Area</p>
            <p className="text-2xl text-gray-900 font-light">3,500 sq ft</p>
          </div>
          <div className="text-center">
            <Phone className="w-6 h-6 text-gray-400 mx-auto mb-4" />
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Contact</p>
            <p className="text-2xl text-gray-900 font-light">(206) 555-1111</p>
          </div>
          <div className="text-center">
            <Mail className="w-6 h-6 text-gray-400 mx-auto mb-4" />
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Email</p>
            <p className="text-xl text-gray-900 font-light">info@whitespace.co</p>
          </div>
        </div>

        {/* Second Divider */}
        <div className="w-16 h-px bg-gray-300 mx-auto my-20" />

        {/* Minimal Description */}
        <div className="max-w-xl mx-auto text-center space-y-8">
          <div>
            <h3 className="text-xs text-gray-400 uppercase tracking-[0.3em] mb-3 font-semibold">Design</h3>
            <p className="text-gray-600 font-light leading-relaxed">Uncluttered contemporary space with clean lines, neutral palette, and natural materials. Flexible walls allow any configuration.</p>
          </div>
          <div>
            <h3 className="text-xs text-gray-400 uppercase tracking-[0.3em] mb-3 font-semibold">Amenities</h3>
            <p className="text-gray-600 font-light leading-relaxed">Full kitchen, WiFi, climate control, professional lighting. Outdoor terrace available for additional space.</p>
          </div>
          <div>
            <h3 className="text-xs text-gray-400 uppercase tracking-[0.3em] mb-3 font-semibold">Availability</h3>
            <p className="text-gray-600 font-light leading-relaxed">Monday through Sunday. Hours flexible by arrangement. Parking available nearby.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
