import { Section } from '../../types/layoutConfig';
import { MapPin, Users, Waves, Umbrella, Sunset, Coffee } from 'lucide-react';

interface VenueCoastalProps {
  section: Section;
}

export default function VenueCoastal({ section }: VenueCoastalProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-50 via-blue-50 to-teal-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top banner */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-cyan-100 rounded-full">
            <Waves className="w-4 h-4 text-cyan-600" />
            <span className="text-cyan-700 text-sm font-semibold">BEACHFRONT VENUE</span>
          </div>
        </div>

        {/* Hero Section with 2 columns */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div>
              <h2 className="text-6xl md:text-7xl font-bold text-teal-900 mb-4 leading-tight">
                Sunset Cove
              </h2>
              <div className="flex items-start gap-2 text-teal-700">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p className="text-lg">456 Oceanview Drive, Malibu, CA 90265</p>
              </div>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              Stunning beachfront pavilion with direct private beach access. White sand, stunning sunset views, and tropical landscaping create the perfect coastal celebration backdrop.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border border-cyan-200">
                <Users className="w-6 h-6 text-cyan-600 mb-2" />
                <p className="text-sm text-gray-600">Max Guests</p>
                <p className="text-xl font-bold text-teal-900">300 people</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-cyan-200">
                <Sunset className="w-6 h-6 text-orange-500 mb-2" />
                <p className="text-sm text-gray-600">Best Time</p>
                <p className="text-xl font-bold text-teal-900">Sunsets</p>
              </div>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="relative aspect-square md:aspect-auto md:h-96 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <Waves className="w-32 h-32 text-cyan-400 opacity-50" />
            </div>
          </div>
        </div>

        {/* Features Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-6 border border-cyan-100 shadow-sm hover:shadow-md transition">
            <Umbrella className="w-8 h-8 text-cyan-600 mb-3" />
            <h3 className="font-bold text-gray-900 mb-2">Weather Ready</h3>
            <p className="text-gray-600 text-sm">Tent & canopy rentals available for any conditions</p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-cyan-100 shadow-sm hover:shadow-md transition">
            <Coffee className="w-8 h-8 text-orange-500 mb-3" />
            <h3 className="font-bold text-gray-900 mb-2">Full Catering</h3>
            <p className="text-gray-600 text-sm">Farm-to-table cuisine with ocean views</p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-cyan-100 shadow-sm hover:shadow-md transition">
            <Waves className="w-8 h-8 text-teal-600 mb-3" />
            <h3 className="font-bold text-gray-900 mb-2">Beach Access</h3>
            <p className="text-gray-600 text-sm">Private beach for ceremonies & activities</p>
          </div>
        </div>

        {/* Amenities Section */}
        <div className="bg-white rounded-2xl p-8 border border-cyan-200 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Amenities & Spaces</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-cyan-50 rounded-lg">
                <span className="w-2 h-2 bg-cyan-600 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">Main beachfront pavilion (2,500 sq ft)</span>
              </div>
              <div className="flex items-start gap-3 p-3 bg-cyan-50 rounded-lg">
                <span className="w-2 h-2 bg-cyan-600 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">Bridal suite with ocean view</span>
              </div>
              <div className="flex items-start gap-3 p-3 bg-cyan-50 rounded-lg">
                <span className="w-2 h-2 bg-cyan-600 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">Full commercial kitchen</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-cyan-50 rounded-lg">
                <span className="w-2 h-2 bg-cyan-600 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">WiFi & power throughout</span>
              </div>
              <div className="flex items-start gap-3 p-3 bg-cyan-50 rounded-lg">
                <span className="w-2 h-2 bg-cyan-600 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">Ample parking for 150+ vehicles</span>
              </div>
              <div className="flex items-start gap-3 p-3 bg-cyan-50 rounded-lg">
                <span className="w-2 h-2 bg-cyan-600 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">AV & lighting systems included</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="grid md:grid-cols-3 gap-8 border-t-2 border-cyan-200 pt-8">
          <div>
            <p className="text-cyan-700 text-xs font-bold uppercase tracking-widest mb-2">Phone</p>
            <p className="text-xl font-bold text-teal-900">(310) 555-6789</p>
          </div>
          <div>
            <p className="text-cyan-700 text-xs font-bold uppercase tracking-widest mb-2">Email</p>
            <p className="text-xl font-bold text-teal-900">events@sunsetcove.com</p>
          </div>
          <div>
            <p className="text-cyan-700 text-xs font-bold uppercase tracking-widest mb-2">Season</p>
            <p className="text-xl font-bold text-teal-900">Year-round events</p>
          </div>
        </div>
      </div>
    </section>
  );
}
