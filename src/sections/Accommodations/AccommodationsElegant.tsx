import { Section } from '../../types/layoutConfig';
import { Sparkles, Crown } from 'lucide-react';

interface AccommodationsElegantProps {
  section: Section;
}

const elegantHotels = [
  { id: 1, name: 'Opulent Palace', tagline: 'Finest Luxury Experience', price: 450, rating: 5.0, badge: 'Michelin Rated' },
  { id: 2, name: 'Diamond Suites', tagline: 'Exclusive Elegance', price: 380, rating: 4.9, badge: 'Award Winner' },
  { id: 3, name: 'Golden Essence', tagline: 'Ultimate Refinement', price: 420, rating: 4.9, badge: 'Forbes 5-Star' },
];

export default function AccommodationsElegant({ section }: AccommodationsElegantProps) {
  return (
    <section className="py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="text-amber-300" size={32} />
            <h2 className="text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-100 to-amber-200">
              Luxury Collection
            </h2>
            <Sparkles className="text-amber-300" size={32} />
          </div>
          <p className="text-slate-400 text-lg italic">Curated experiences for the discerning traveler</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {elegantHotels.map((hotel, idx) => (
            <div key={hotel.id} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity"></div>

              <div className="relative bg-gradient-to-br from-slate-800 via-slate-850 to-slate-900 rounded-2xl overflow-hidden border border-amber-400 border-opacity-30 hover:border-opacity-50 transition-all group-hover:shadow-2xl group-hover:shadow-amber-500/20">
                <div className="h-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300"></div>

                <div className="p-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Crown className="text-amber-300" size={20} />
                        <h3 className="text-2xl font-serif text-amber-50">{hotel.name}</h3>
                      </div>
                      <p className="text-amber-100 text-sm italic">{hotel.tagline}</p>
                    </div>
                  </div>

                  <div className="mb-6 pb-6 border-b border-slate-700">
                    <span className="inline-block bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full">
                      {hotel.badge}
                    </span>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-baseline justify-between">
                      <span className="text-slate-400 text-sm">Rates from</span>
                      <div className="text-right">
                        <span className="text-4xl font-bold text-amber-300">${hotel.price}</span>
                        <span className="text-slate-500 text-sm ml-2">per night</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400 text-sm">Guest Rating</span>
                      <span className="text-2xl font-bold text-amber-400">{hotel.rating}</span>
                      <span className="text-xl text-amber-300">★★★★★</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-900 font-serif font-semibold py-3 px-6 rounded-lg transition-all transform group-hover:scale-105 shadow-lg hover:shadow-xl">
                    Reserve Now
                  </button>

                  <button className="w-full mt-3 text-amber-300 hover:text-amber-200 font-semibold py-2 px-4 border border-amber-400 border-opacity-30 hover:border-opacity-50 rounded-lg transition-colors">
                    Explore Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-slate-400 mb-6">Experience luxury redefined</p>
          <button className="bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-900 font-bold py-3 px-8 rounded-lg hover:shadow-2xl hover:shadow-amber-500/50 transition-all">
            View All Luxury Properties
          </button>
        </div>
      </div>
    </section>
  );
}
