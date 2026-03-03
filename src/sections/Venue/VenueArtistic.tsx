import { Section } from '../../types/layoutConfig';
import { MapPin, Users, Palette, Wifi, Wine, Music } from 'lucide-react';

interface VenueArtisticProps {
  section: Section;
}

export default function VenueArtistic({ section }: VenueArtisticProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero with Image */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative aspect-square md:aspect-auto md:h-96 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <Palette className="w-24 h-24 text-purple-400 opacity-50" />
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-purple-600 font-semibold text-sm tracking-widest mb-2">ARTISTIC SPACE</p>
              <h2 className="text-5xl font-bold text-gray-900 mb-4">The Gallery Loft</h2>
              <div className="flex items-start gap-2 text-gray-600">
                <MapPin className="w-5 h-5 mt-1 text-purple-500 flex-shrink-0" />
                <p className="text-lg">457 Arts District Boulevard, Denver, CO 80202</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              A vibrant contemporary art gallery transformed into an intimate event space. Features soaring 30-foot ceilings, exposed brick, and rotating artist installations.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-purple-500" />
                <div>
                  <p className="text-sm text-gray-500">Capacity</p>
                  <p className="font-semibold text-gray-900">50-200 guests</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Music className="w-6 h-6 text-indigo-500" />
                <div>
                  <p className="text-sm text-gray-500">Premium Sound</p>
                  <p className="font-semibold text-gray-900">Professional system</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">Amenities</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-purple-100">
                <Wifi className="w-5 h-5 text-purple-500" />
                <span className="text-gray-700">High-speed WiFi throughout</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-purple-100">
                <Wine className="w-5 h-5 text-purple-500" />
                <span className="text-gray-700">Full bar with premium beverages</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-purple-100">
                <Users className="w-5 h-5 text-purple-500" />
                <span className="text-gray-700">Professional catering kitchen</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">Rooms & Spaces</h3>
            <div className="space-y-3">
              <div className="p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border border-purple-200">
                <p className="font-semibold text-gray-900 mb-1">Main Gallery</p>
                <p className="text-sm text-gray-600">3,500 sq ft with adjustable lighting</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border border-purple-200">
                <p className="font-semibold text-gray-900 mb-1">Artist Lounge</p>
                <p className="text-sm text-gray-600">Intimate 800 sq ft breakout space</p>
              </div>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">Hours</p>
              <p className="text-gray-900 font-semibold">Wed-Sun, 6PM-Midnight</p>
              <p className="text-sm text-gray-600 mt-1">Private events available</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">Contact</p>
              <p className="text-gray-900 font-semibold">(303) 555-0147</p>
              <p className="text-sm text-gray-600 mt-1">events@galleryloft.com</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">Parking</p>
              <p className="text-gray-900 font-semibold">Street & garage</p>
              <p className="text-sm text-gray-600 mt-1">Complimentary for events</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
