import { Section } from '../../types/layoutConfig';
import { MapPin, Users, Trees, Flower, Sun, Leaf } from 'lucide-react';

interface VenueGardenProps {
  section: Section;
}

export default function VenueGarden({ section }: VenueGardenProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-emerald-50 via-green-50 to-teal-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-green-100 rounded-full border border-green-300">
            <Trees className="w-4 h-4 text-green-700" />
            <span className="text-green-800 text-sm font-semibold">GARDEN VENUE</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-serif font-bold text-emerald-900 mb-4">Eden Gardens</h2>
          <div className="flex justify-center items-center gap-2 text-green-900 mb-8">
            <MapPin className="w-5 h-5" />
            <p className="text-lg">678 Botanical Lane, Portland, OR 97214</p>
          </div>
          <p className="max-w-2xl mx-auto text-gray-700 text-lg leading-relaxed">
            Sprawling 5-acre botanical estate with manicured gardens, ancient oak trees, and natural water features. Perfect for outdoor ceremonies and enchanted garden celebrations.
          </p>
        </div>

        {/* Main Image & Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2 relative aspect-video md:aspect-auto md:h-80 bg-gradient-to-br from-emerald-200 to-green-300 rounded-2xl overflow-hidden shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              <Trees className="w-32 h-32 text-green-500 opacity-50" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 border border-green-200 shadow-sm">
              <Users className="w-8 h-8 text-emerald-600 mb-3" />
              <p className="text-sm text-gray-600 mb-1">Capacity</p>
              <p className="text-3xl font-bold text-emerald-900">500+</p>
              <p className="text-xs text-gray-500 mt-2">Seated or standing</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-green-200 shadow-sm">
              <Leaf className="w-8 h-8 text-green-600 mb-3" />
              <p className="text-sm text-gray-600 mb-1">Total Area</p>
              <p className="text-3xl font-bold text-emerald-900">5 acres</p>
              <p className="text-xs text-gray-500 mt-2">Fully landscaped</p>
            </div>
          </div>
        </div>

        {/* Garden Spaces */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 border border-green-200 shadow-sm hover:shadow-md transition">
            <Flower className="w-7 h-7 text-pink-500 mb-3" />
            <h3 className="font-bold text-gray-900 mb-2">Rose Garden</h3>
            <p className="text-gray-600 text-sm mb-3">Stunning rose arbor with ceremony seating for 200</p>
            <p className="text-xs text-green-700 font-semibold">Perfect for ceremonies</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-green-200 shadow-sm hover:shadow-md transition">
            <Trees className="w-7 h-7 text-green-700 mb-3" />
            <h3 className="font-bold text-gray-900 mb-2">Oak Grove</h3>
            <p className="text-gray-600 text-sm mb-3">Ancient trees, natural seating, perfect for receptions</p>
            <p className="text-xs text-green-700 font-semibold">Shade for up to 300</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-green-200 shadow-sm hover:shadow-md transition">
            <Sun className="w-7 h-7 text-yellow-600 mb-3" />
            <h3 className="font-bold text-gray-900 mb-2">Meadow Pavilion</h3>
            <p className="text-gray-600 text-sm mb-3">Open-air pavilion with optional tent coverage</p>
            <p className="text-xs text-green-700 font-semibold">Flexible seating</p>
          </div>
        </div>

        {/* Amenities */}
        <div className="bg-white rounded-2xl border border-green-200 p-8 shadow-sm mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Amenities & Features</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
                <span className="w-2 h-2 bg-emerald-600 rounded-full" />
                <span className="text-gray-700">On-site catering facilities</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
                <span className="w-2 h-2 bg-emerald-600 rounded-full" />
                <span className="text-gray-700">Bridging and pathways</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
                <span className="w-2 h-2 bg-emerald-600 rounded-full" />
                <span className="text-gray-700">Lighting and sound systems</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
                <span className="w-2 h-2 bg-emerald-600 rounded-full" />
                <span className="text-gray-700">Climate control tents available</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
                <span className="w-2 h-2 bg-emerald-600 rounded-full" />
                <span className="text-gray-700">Ample parking for 200+ cars</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
                <span className="w-2 h-2 bg-emerald-600 rounded-full" />
                <span className="text-gray-700">Professional event coordination</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 border-t-2 border-green-200 pt-8">
          <div>
            <p className="text-green-700 text-xs font-bold uppercase tracking-widest mb-2">Contact</p>
            <p className="text-xl font-bold text-emerald-900">(503) 555-7654</p>
            <p className="text-sm text-gray-600">events@edengardens.com</p>
          </div>
          <div>
            <p className="text-green-700 text-xs font-bold uppercase tracking-widest mb-2">Season</p>
            <p className="text-xl font-bold text-emerald-900">April - October</p>
            <p className="text-sm text-gray-600">Winter events available</p>
          </div>
          <div>
            <p className="text-green-700 text-xs font-bold uppercase tracking-widest mb-2">Hours</p>
            <p className="text-xl font-bold text-emerald-900">6AM - 11PM</p>
            <p className="text-sm text-gray-600">Custom event times</p>
          </div>
        </div>
      </div>
    </section>
  );
}
