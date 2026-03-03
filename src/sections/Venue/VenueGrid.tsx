import { Section } from '../../types/layoutConfig';
import { MapPin, Users, Grid3x3, Zap, Coffee, Award } from 'lucide-react';

interface VenueGridProps {
  section: Section;
}

export default function VenueGrid({ section }: VenueGridProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-indigo-100 rounded-full">
            <Grid3x3 className="w-4 h-4 text-indigo-700" />
            <span className="text-indigo-800 text-sm font-semibold">MODULAR VENUE</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-bold text-indigo-900 mb-4">The Grid Space</h2>
          <div className="flex justify-center items-center gap-2 text-indigo-800 mb-8">
            <MapPin className="w-5 h-5" />
            <p className="text-lg">901 Tech Hub Road, Austin, TX 78701</p>
          </div>
          <p className="max-w-2xl mx-auto text-gray-700 text-lg">
            Flexible 15,000 sq ft modular event space with movable walls. Create custom configurations for breakout sessions, exhibitions, receptions, and networking events.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-4 mb-16">
          <div className="bg-white rounded-lg p-6 border border-indigo-200 text-center">
            <Users className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
            <p className="text-sm text-gray-600 mb-1">Max Capacity</p>
            <p className="text-2xl font-bold text-indigo-900">1,000+</p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-indigo-200 text-center">
            <Grid3x3 className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <p className="text-sm text-gray-600 mb-1">Spaces</p>
            <p className="text-2xl font-bold text-indigo-900">4-6</p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-indigo-200 text-center">
            <Zap className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <p className="text-sm text-gray-600 mb-1">Setup Time</p>
            <p className="text-2xl font-bold text-indigo-900">2 hours</p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-indigo-200 text-center">
            <Award className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
            <p className="text-sm text-gray-600 mb-1">Experience</p>
            <p className="text-2xl font-bold text-indigo-900">25 years</p>
          </div>
        </div>

        {/* Grid of Spaces */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-indigo-900 mb-8">Configurable Spaces</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg border border-indigo-200 overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="aspect-video bg-gradient-to-br from-indigo-200 to-blue-200 flex items-center justify-center">
                <Grid3x3 className="w-16 h-16 text-indigo-400 opacity-50" />
              </div>
              <div className="p-6">
                <h4 className="font-bold text-indigo-900 mb-2">Main Hall</h4>
                <p className="text-gray-600 text-sm mb-4">5,000 sq ft | Up to 500 guests | Divisible into 2 sections</p>
                <div className="flex gap-2 text-xs text-indigo-700 font-semibold">
                  <span className="px-2 py-1 bg-indigo-50 rounded">Theater</span>
                  <span className="px-2 py-1 bg-indigo-50 rounded">Banquet</span>
                  <span className="px-2 py-1 bg-indigo-50 rounded">Reception</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-indigo-200 overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="aspect-video bg-gradient-to-br from-blue-200 to-cyan-200 flex items-center justify-center">
                <Grid3x3 className="w-16 h-16 text-blue-400 opacity-50" />
              </div>
              <div className="p-6">
                <h4 className="font-bold text-indigo-900 mb-2">Breakout Rooms</h4>
                <p className="text-gray-600 text-sm mb-4">4x 2,000 sq ft | 50-100 guests each | Full AV included</p>
                <div className="flex gap-2 text-xs text-indigo-700 font-semibold">
                  <span className="px-2 py-1 bg-indigo-50 rounded">Conference</span>
                  <span className="px-2 py-1 bg-indigo-50 rounded">Meetings</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-indigo-200 overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="aspect-video bg-gradient-to-br from-cyan-200 to-blue-200 flex items-center justify-center">
                <Grid3x3 className="w-16 h-16 text-cyan-400 opacity-50" />
              </div>
              <div className="p-6">
                <h4 className="font-bold text-indigo-900 mb-2">Foyer & Circulation</h4>
                <p className="text-gray-600 text-sm mb-4">2,000 sq ft | Registration | Networking | Refreshments</p>
                <div className="flex gap-2 text-xs text-indigo-700 font-semibold">
                  <span className="px-2 py-1 bg-indigo-50 rounded">Flexible</span>
                  <span className="px-2 py-1 bg-indigo-50 rounded">Open plan</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="bg-white rounded-2xl border border-indigo-200 p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Standard Amenities</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Zap className="w-8 h-8 text-indigo-600 mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Technology</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>- 4K projectors in all spaces</li>
                <li>- Professional sound systems</li>
                <li>- Gigabit internet throughout</li>
              </ul>
            </div>
            <div>
              <Coffee className="w-8 h-8 text-indigo-600 mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Catering</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>- Full service kitchen</li>
                <li>- Bar service available</li>
                <li>- Preferred vendors list</li>
              </ul>
            </div>
            <div>
              <Award className="w-8 h-8 text-indigo-600 mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Services</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>- Event coordination team</li>
                <li>- Setup & breakdown included</li>
                <li>- Security available</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Footer */}
        <div className="grid md:grid-cols-3 gap-8 border-t-2 border-indigo-200 pt-8">
          <div>
            <p className="text-indigo-700 text-xs font-bold uppercase tracking-widest mb-2">Phone</p>
            <p className="text-xl font-bold text-indigo-900">(512) 555-4321</p>
            <p className="text-sm text-gray-600">24/7 support</p>
          </div>
          <div>
            <p className="text-indigo-700 text-xs font-bold uppercase tracking-widest mb-2">Email</p>
            <p className="text-xl font-bold text-indigo-900">hello@gridspace.com</p>
            <p className="text-sm text-gray-600">Quick response</p>
          </div>
          <div>
            <p className="text-indigo-700 text-xs font-bold uppercase tracking-widest mb-2">Hours</p>
            <p className="text-xl font-bold text-indigo-900">24/7 Available</p>
            <p className="text-sm text-gray-600">Flexible scheduling</p>
          </div>
        </div>
      </div>
    </section>
  );
}
