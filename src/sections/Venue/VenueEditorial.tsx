import { Section } from '../../types/layoutConfig';
import { MapPin, Users, Newspaper, BookOpen, Lightbulb, Utensils } from 'lucide-react';

interface VenueEditorialProps {
  section: Section;
}

export default function VenueEditorial({ section }: VenueEditorialProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Masthead */}
        <div className="mb-16 pb-8 border-b-4 border-gray-900">
          <div className="text-sm font-bold tracking-[0.2em] text-gray-500 uppercase mb-4">
            Publication Space
          </div>
          <h2 className="text-6xl md:text-7xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            The Press Rooms
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-1">
              <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Location</p>
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-gray-700 flex-shrink-0 mt-1" />
                <p className="text-gray-800 leading-relaxed">234 Publishing Drive, Boston, MA 02115</p>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Established</p>
              <p className="text-gray-900 font-bold text-lg">Historic 1920s landmark</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Type</p>
              <p className="text-gray-900 font-bold text-lg">Literary & Media Events</p>
            </div>
          </div>
        </div>

        {/* Feature Layout */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Column: Image */}
          <div className="relative aspect-square md:aspect-auto md:h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-none md:rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <Newspaper className="w-32 h-32 text-gray-400 opacity-40" />
            </div>
          </div>

          {/* Right Column: Description */}
          <div className="space-y-8">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-3">THE VENUE</p>
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">Storied Spaces for Creative Minds</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Beautifully restored 1920s publishing headquarters featuring original hardwood floors, soaring ceilings, and period architectural details. Four distinct rooms configured for readings, exhibitions, and media conferences.
              </p>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-gray-900 pl-4">
                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Main Hall</p>
                <p className="text-gray-800 font-medium">450 people standing reception</p>
              </div>
              <div className="border-l-4 border-gray-900 pl-4">
                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Library Lounge</p>
                <p className="text-gray-800 font-medium">Intimate 80-person room with built-in bookshelves</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-gray-100 p-4 rounded-sm">
                <Users className="w-6 h-6 text-gray-700 mb-2" />
                <p className="text-xs text-gray-600 uppercase tracking-widest mb-1">Capacity</p>
                <p className="text-lg font-bold text-gray-900">200-450</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-sm">
                <BookOpen className="w-6 h-6 text-gray-700 mb-2" />
                <p className="text-xs text-gray-600 uppercase tracking-widest mb-1">Rooms</p>
                <p className="text-lg font-bold text-gray-900">4 Unique</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="border border-gray-300 p-6">
            <Lightbulb className="w-6 h-6 text-gray-700 mb-3" />
            <h4 className="font-serif text-lg font-bold text-gray-900 mb-2">Natural Lighting</h4>
            <p className="text-gray-600 text-sm">Abundant skylights and architectural windows</p>
          </div>
          <div className="border border-gray-300 p-6">
            <Utensils className="w-6 h-6 text-gray-700 mb-3" />
            <h4 className="font-serif text-lg font-bold text-gray-900 mb-2">Catering Available</h4>
            <p className="text-gray-600 text-sm">Full kitchen and beverage service included</p>
          </div>
          <div className="border border-gray-300 p-6">
            <BookOpen className="w-6 h-6 text-gray-700 mb-3" />
            <h4 className="font-serif text-lg font-bold text-gray-900 mb-2">AV Systems</h4>
            <p className="text-gray-600 text-sm">Professional projectors and sound setup</p>
          </div>
        </div>

        {/* Details Footer */}
        <div className="border-t-4 border-gray-900 pt-12">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-[0.15em] font-bold mb-3">Contact</p>
              <p className="text-gray-900 font-bold text-lg leading-relaxed">(617) 555-8765</p>
              <p className="text-gray-600 text-sm">press@pressrooms.com</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-[0.15em] font-bold mb-3">Availability</p>
              <p className="text-gray-900 font-bold text-lg leading-relaxed">Tuesday - Sunday</p>
              <p className="text-gray-600 text-sm">6 PM - Midnight events</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-[0.15em] font-bold mb-3">Parking</p>
              <p className="text-gray-900 font-bold text-lg leading-relaxed">Multiple options</p>
              <p className="text-gray-600 text-sm">Validated garage nearby</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
