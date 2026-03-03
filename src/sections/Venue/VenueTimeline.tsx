import { Section } from '../../types/layoutConfig';
import { MapPin, Users, Clock, Music, Zap, Trophy } from 'lucide-react';

interface VenueTimelineProps {
  section: Section;
}

export default function VenueTimeline({ section }: VenueTimelineProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-violet-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-violet-100 border border-violet-300 rounded-full">
            <Clock className="w-4 h-4 text-violet-700" />
            <span className="text-violet-800 text-sm font-semibold">PROGRESSIVE VENUE</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-bold text-violet-950 mb-4">The Timeline</h2>
          <div className="flex justify-center items-center gap-2 text-violet-900 mb-8">
            <MapPin className="w-5 h-5" />
            <p className="text-lg">789 Evolution Street, Nashville, TN 37201</p>
          </div>
          <p className="max-w-2xl mx-auto text-gray-700 text-lg">
            Innovative multi-stage venue designed to evolve with your event. Transform from intimate gathering to full production experience across connected spaces on a single floor.
          </p>
        </div>

        {/* Timeline Structure */}
        <div className="space-y-8 mb-16">
          {/* Timeline Item 1 */}
          <div className="flex gap-8 items-stretch">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center text-white font-bold text-lg">1</div>
              <div className="w-1 h-20 bg-gradient-to-b from-violet-600 to-purple-600" />
            </div>
            <div className="bg-white rounded-lg border border-violet-200 p-8 pb-12 flex-1">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-6 h-6 text-violet-600" />
                <h3 className="text-2xl font-bold text-gray-900">Intimate Start: Welcome Lounge</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Begin your event in the elegant 1,200 sq ft welcome lounge. Perfect for cocktails, light bites, and guest mingling. Features floor-to-ceiling wine display and premium bar setup.
              </p>
              <div className="bg-violet-50 rounded p-3 text-sm text-gray-700">
                Capacity: 100-150 people standing | Ambiance: Sophisticated & social
              </div>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="flex gap-8 items-stretch">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">2</div>
              <div className="w-1 h-20 bg-gradient-to-b from-purple-600 to-indigo-600" />
            </div>
            <div className="bg-white rounded-lg border border-purple-200 p-8 pb-12 flex-1">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-6 h-6 text-purple-600" />
                <h3 className="text-2xl font-bold text-gray-900">Grow & Connect: Main Floor</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Open connecting doors to expand into the 3,000 sq ft main floor. Modular seating and tables adapt to cocktail, banquet, or theater-style configurations. Perfect for presentations.
              </p>
              <div className="bg-purple-50 rounded p-3 text-sm text-gray-700">
                Capacity: 300-400 people | Flexibility: Multiple setup options
              </div>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="flex gap-8 items-stretch">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">3</div>
              <div className="w-1 h-20 bg-gradient-to-b from-indigo-600 to-blue-600" />
            </div>
            <div className="bg-white rounded-lg border border-indigo-200 p-8 pb-12 flex-1">
              <div className="flex items-center gap-3 mb-3">
                <Music className="w-6 h-6 text-indigo-600" />
                <h3 className="text-2xl font-bold text-gray-900">Energize: Entertainment Hall</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Transition to the adjacent 2,500 sq ft entertainment hall with professional stage, sound, and lighting. Built-in bar, dance floor, and VIP booth seating. Full production capabilities.
              </p>
              <div className="bg-indigo-50 rounded p-3 text-sm text-gray-700">
                Capacity: 200-300 dancing guests | Features: Stage, DJ booth, dance floor
              </div>
            </div>
          </div>

          {/* Timeline Item 4 */}
          <div className="flex gap-8 items-stretch">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">4</div>
              <div className="w-1 h-0" />
            </div>
            <div className="bg-white rounded-lg border border-blue-200 p-8 flex-1">
              <div className="flex items-center gap-3 mb-3">
                <Trophy className="w-6 h-6 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Grand Finale: Full Venue Experience</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Open all doors to create one magnificent 6,700 sq ft space. Seamlessly combine lounge sophistication with entertainment energy. Perfect for large-scale celebrations and awards.
              </p>
              <div className="bg-blue-50 rounded p-3 text-sm text-gray-700">
                Total Capacity: 800+ people | Layout: Open concept with distinct zones
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-white rounded-lg border border-violet-200 p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Universal Amenities Across All Spaces</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <Zap className="w-6 h-6 text-violet-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Technology</h4>
                <p className="text-gray-600 text-sm">4K projectors, wireless mics, full WiFi, smartphone controls</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Music className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Audio/Visual</h4>
                <p className="text-gray-600 text-sm">Professional sound system, stage lighting, video walls available</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Users className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Service</h4>
                <p className="text-gray-600 text-sm">Dedicated event coordinator, catering kitchen, bar staff included</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact & Details */}
        <div className="grid md:grid-cols-3 gap-8 border-t-2 border-violet-200 pt-8">
          <div>
            <p className="text-violet-700 text-xs font-bold uppercase tracking-widest mb-2">Phone</p>
            <p className="text-xl font-bold text-violet-950">(615) 555-3333</p>
            <p className="text-sm text-gray-600">events@thetimeline.com</p>
          </div>
          <div>
            <p className="text-violet-700 text-xs font-bold uppercase tracking-widest mb-2">Catering</p>
            <p className="text-xl font-bold text-violet-950">Full Service</p>
            <p className="text-sm text-gray-600">In-house or preferred partners</p>
          </div>
          <div>
            <p className="text-violet-700 text-xs font-bold uppercase tracking-widest mb-2">Available</p>
            <p className="text-xl font-bold text-violet-950">Daily</p>
            <p className="text-sm text-gray-600">Flexible event scheduling</p>
          </div>
        </div>
      </div>
    </section>
  );
}
