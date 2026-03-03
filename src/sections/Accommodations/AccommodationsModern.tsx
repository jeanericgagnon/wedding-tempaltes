import { Section } from '../../types/layoutConfig';
import { Zap, Shield, Palette } from 'lucide-react';

interface AccommodationsModernProps {
  section: Section;
}

const modernHotels = [
  { id: 1, name: 'Neon Edge Hotel', price: 265, rating: 4.8, tag: 'Tech Forward' },
  { id: 2, name: 'Slate & Steel', price: 245, rating: 4.7, tag: 'Industrial' },
  { id: 3, name: 'Digital Pulse', price: 195, rating: 4.6, tag: 'Smart' },
  { id: 4, name: 'Urban Volt', price: 225, rating: 4.9, tag: 'Contemporary' },
];

export default function AccommodationsModern({ section }: AccommodationsModernProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="text-cyan-400" size={32} />
            <h2 className="text-4xl font-bold text-white">Modern Hotels</h2>
          </div>
          <p className="text-slate-400">Contemporary design meets cutting-edge comfort</p>
          <div className="flex gap-2 mt-4">
            <span className="text-xs bg-cyan-500 bg-opacity-20 text-cyan-300 px-3 py-1 rounded-full">Future Ready</span>
            <span className="text-xs bg-purple-500 bg-opacity-20 text-purple-300 px-3 py-1 rounded-full">Design Focused</span>
            <span className="text-xs bg-blue-500 bg-opacity-20 text-blue-300 px-3 py-1 rounded-full">Smart Amenities</span>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {modernHotels.map((hotel) => (
            <div
              key={hotel.id}
              className="group relative"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

              {/* Card */}
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden border border-slate-700 hover:border-cyan-400 transition-colors p-8">
                {/* Top Border Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>

                {/* Content */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{hotel.name}</h3>
                      <span className="text-xs bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">{hotel.tag}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-cyan-400">${hotel.price}</p>
                      <p className="text-xs text-slate-500">per night</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-lg ${i < Math.floor(hotel.rating) ? 'text-yellow-400' : 'text-slate-600'}`}>
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-cyan-400 font-semibold">{hotel.rating}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6 pb-6 border-b border-slate-700 space-y-2">
                  <div className="flex items-center gap-2 text-slate-300 text-sm">
                    <Zap size={14} className="text-cyan-400" />
                    <span>High-speed connectivity</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 text-sm">
                    <Shield size={14} className="text-blue-400" />
                    <span>Advanced security</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 text-sm">
                    <Palette size={14} className="text-purple-400" />
                    <span>Designer interiors</span>
                  </div>
                </div>

                {/* Button */}
                <button className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-600 text-white font-bold py-3 px-4 rounded-lg transition-all transform group-hover:scale-105 shadow-lg">
                  Explore Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="bg-slate-800 bg-opacity-50 rounded-lg p-8 border border-slate-700">
          <h3 className="text-xl font-bold text-white mb-6">What Makes Us Modern</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: 'Smart Automation', desc: 'IoT-enabled rooms with voice control' },
              { icon: Shield, title: 'Security First', desc: 'State-of-the-art safety systems' },
              { icon: Palette, title: 'Design Edge', desc: 'Contemporary aesthetics throughout' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500">
                    <item.icon className="text-white" size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
