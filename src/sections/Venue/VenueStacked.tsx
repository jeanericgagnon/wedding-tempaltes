import { Section } from '../../types/layoutConfig';
import { MapPin, Users, Building, Layers, Navigation, Coffee } from 'lucide-react';

interface VenueStackedProps {
  section: Section;
}

export default function VenueStacked({ section }: VenueStackedProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Top Header */}
        <div className="mb-12">
          <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-3">Modern Tower</p>
          <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">Skyrise Venue</h2>
          <div className="flex items-center gap-2 text-blue-800 mb-8">
            <MapPin className="w-5 h-5" />
            <p className="text-lg">234 Sky Tower Plaza, Miami, FL 33132</p>
          </div>
        </div>

        {/* Stacked Cards - Main Features */}
        <div className="space-y-6 mb-16">
          {/* Card 1 */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-8 hover:shadow-lg transition">
            <div className="flex items-start gap-6">
              <Building className="w-10 h-10 text-blue-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Venue on 42nd Floor</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Soaring 360-degree panoramic city views with floor-to-ceiling windows. 8,500 sq ft of sophisticated event space featuring modern architecture and premium finishes throughout.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 bg-white px-3 py-2 rounded border border-blue-200">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-semibold text-gray-900">500 guests</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-white px-3 py-2 rounded border border-blue-200">
                    <Navigation className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-semibold text-gray-900">High-rise venue</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-8 hover:shadow-lg transition">
            <div className="flex items-start gap-6">
              <Layers className="w-10 h-10 text-indigo-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Multiple Event Levels</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Three distinct event spaces across two floors with flexible configurations. Main ballroom, cocktail lounge, and VIP suite each with independent catering and AV capabilities.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white rounded p-3 border border-indigo-200">
                    <p className="text-xs text-gray-600 mb-1">Ballroom</p>
                    <p className="font-bold text-indigo-900">5,000 sq ft</p>
                  </div>
                  <div className="bg-white rounded p-3 border border-indigo-200">
                    <p className="text-xs text-gray-600 mb-1">Lounge</p>
                    <p className="font-bold text-indigo-900">2,000 sq ft</p>
                  </div>
                  <div className="bg-white rounded p-3 border border-indigo-200">
                    <p className="text-xs text-gray-600 mb-1">Suite</p>
                    <p className="font-bold text-indigo-900">1,500 sq ft</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-r from-cyan-50 to-indigo-50 border border-cyan-200 rounded-lg p-8 hover:shadow-lg transition">
            <div className="flex items-start gap-6">
              <Coffee className="w-10 h-10 text-cyan-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Amenities & Services</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Full-service venue with in-house catering, premium bar, state-of-the-art AV systems, and professional event coordination team included.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-cyan-600 rounded-full" />
                    <span className="text-sm">Michelin-trained chefs</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-cyan-600 rounded-full" />
                    <span className="text-sm">4K projection systems</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-cyan-600 rounded-full" />
                    <span className="text-sm">Wine cellar collection</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-cyan-600 rounded-full" />
                    <span className="text-sm">Valet parking included</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Why Choose Skyrise</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="font-semibold text-gray-900 mb-2">Unmatched Views</p>
              <p className="text-gray-600 text-sm">42-story elevation provides stunning panoramic backdrop for any event</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-2">Complete Solution</p>
              <p className="text-gray-600 text-sm">All-inclusive packages with catering, AV, coordination, and entertainment</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-2">Accessibility</p>
              <p className="text-gray-600 text-sm">Prime downtown location with dedicated parking and easy guest access</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 border-t border-gray-200 pt-8">
          <div>
            <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-2">Contact</p>
            <p className="text-xl font-bold text-gray-900">(305) 555-7777</p>
            <p className="text-sm text-gray-600">events@skyrisevenuecom</p>
          </div>
          <div>
            <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-2">Hours</p>
            <p className="text-xl font-bold text-gray-900">24/7 Available</p>
            <p className="text-sm text-gray-600">Custom event times welcome</p>
          </div>
          <div>
            <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-2">Packages</p>
            <p className="text-xl font-bold text-gray-900">Starting at $50K</p>
            <p className="text-sm text-gray-600">All-inclusive pricing</p>
          </div>
        </div>
      </div>
    </section>
  );
}
