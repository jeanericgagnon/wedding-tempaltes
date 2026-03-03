import { Section } from '../../types/layoutConfig';
import { MapPin, Users, Crown, Flower, Wine, Utensils } from 'lucide-react';

interface VenueRefinedProps {
  section: Section;
}

export default function VenueRefined({ section }: VenueRefinedProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-amber-50 via-white to-amber-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Elegant Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-2 bg-amber-100 border border-amber-300 rounded-full">
            <Crown className="w-4 h-4 text-amber-700" />
            <span className="text-amber-900 text-sm font-semibold">LUXURY ESTATE</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-serif font-bold text-amber-950 mb-4">The Courtyard Manor</h2>
          <div className="flex justify-center items-center gap-2 text-amber-900 mb-8">
            <MapPin className="w-5 h-5" />
            <p className="text-lg">1000 Estate Drive, Charleston, SC 29401</p>
          </div>
        </div>

        {/* Split Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image placeholder */}
          <div className="relative aspect-square md:h-96 bg-gradient-to-br from-amber-200 to-yellow-100 rounded-3xl overflow-hidden shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              <Crown className="w-32 h-32 text-amber-300 opacity-40" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <p className="text-amber-700 text-sm font-semibold tracking-widest uppercase">Historic 1890s Plantation</p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Exquisitely restored antebellum mansion set on 12 acres of manicured gardens. Grand ballrooms, period architecture, and refined luxury spaces ideal for destination weddings, galas, and sophisticated celebrations.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 border border-amber-200 shadow-sm">
                <Users className="w-7 h-7 text-amber-700 mb-3" />
                <p className="text-xs text-gray-600 uppercase font-semibold mb-2">Capacity</p>
                <p className="text-2xl font-bold text-amber-950">350</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-amber-200 shadow-sm">
                <Flower className="w-7 h-7 text-amber-700 mb-3" />
                <p className="text-xs text-gray-600 uppercase font-semibold mb-2">Gardens</p>
                <p className="text-2xl font-bold text-amber-950">12 acres</p>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
              <h4 className="font-semibold text-amber-950 mb-3">Signature Features</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>- Grand staircase and chandeliers</li>
                <li>- Original hardwood and marble floors</li>
                <li>- Multiple ceremony and reception spaces</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Rooms Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-serif font-bold text-amber-950 mb-8">Elegantly Appointed Rooms</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg border border-amber-200 p-6 shadow-sm hover:shadow-md transition">
              <h4 className="font-serif text-lg font-bold text-amber-950 mb-2">Grand Ballroom</h4>
              <p className="text-gray-700 text-sm mb-3">4,500 sq ft | 250-350 guests | Crystal chandeliers, hand-painted ceilings</p>
              <p className="text-xs text-amber-700 font-semibold">Primary reception</p>
            </div>
            <div className="bg-white rounded-lg border border-amber-200 p-6 shadow-sm hover:shadow-md transition">
              <h4 className="font-serif text-lg font-bold text-amber-950 mb-2">Garden Room</h4>
              <p className="text-gray-700 text-sm mb-3">2,000 sq ft | French doors to gardens | Natural light, intimate setting</p>
              <p className="text-xs text-amber-700 font-semibold">Cocktail space</p>
            </div>
            <div className="bg-white rounded-lg border border-amber-200 p-6 shadow-sm hover:shadow-md transition">
              <h4 className="font-serif text-lg font-bold text-amber-950 mb-2">Library Lounge</h4>
              <p className="text-gray-700 text-sm mb-3">1,200 sq ft | Floor-to-ceiling bookshelves | Intimate ambiance</p>
              <p className="text-xs text-amber-700 font-semibold">Breakout area</p>
            </div>
          </div>
        </div>

        {/* Amenities Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg p-6 border border-amber-200">
            <Wine className="w-8 h-8 text-amber-700 mb-3" />
            <h4 className="font-semibold text-amber-950 mb-2">Premium Beverage</h4>
            <p className="text-gray-700 text-sm">Fully stocked wine cellar, premium spirits, curated cocktails</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg p-6 border border-amber-200">
            <Utensils className="w-8 h-8 text-amber-700 mb-3" />
            <h4 className="font-semibold text-amber-950 mb-2">Fine Dining</h4>
            <p className="text-gray-700 text-sm">Michelin-trained chef, custom menus, multiple course presentations</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg p-6 border border-amber-200">
            <Crown className="w-8 h-8 text-amber-700 mb-3" />
            <h4 className="font-semibold text-amber-950 mb-2">Concierge</h4>
            <p className="text-gray-700 text-sm">Professional coordination, valet service, guest accommodations</p>
          </div>
        </div>

        {/* Contact Footer */}
        <div className="border-t-2 border-amber-200 pt-12">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <p className="text-amber-700 text-xs font-bold uppercase tracking-widest mb-3">Inquiries</p>
              <p className="text-2xl font-serif font-bold text-amber-950">(843) 555-2000</p>
              <p className="text-sm text-gray-600">events@courtyardmanor.com</p>
            </div>
            <div>
              <p className="text-amber-700 text-xs font-bold uppercase tracking-widest mb-3">Accommodations</p>
              <p className="text-2xl font-serif font-bold text-amber-950">Available</p>
              <p className="text-sm text-gray-600">Guest suites on grounds</p>
            </div>
            <div>
              <p className="text-amber-700 text-xs font-bold uppercase tracking-widest mb-3">Availability</p>
              <p className="text-2xl font-serif font-bold text-amber-950">Year-round</p>
              <p className="text-sm text-gray-600">Private bookings only</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
