import { Section } from '../../types/layoutConfig';
import { MapPin, Users, Sparkles, Utensils, Shield, Zap } from 'lucide-react';

interface VenueBoldProps {
  section: Section;
}

export default function VenueBold({ section }: VenueBoldProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Large Hero Title */}
        <div className="mb-16">
          <p className="text-slate-400 text-lg tracking-widest uppercase mb-4">Premium Ballroom</p>
          <h2 className="text-7xl md:text-8xl font-black mb-6 leading-tight">The Ritz Pavilion</h2>
          <div className="flex items-center gap-3 text-lg text-slate-300">
            <MapPin className="w-6 h-6" />
            <p>1200 Park Avenue, New York, NY 10128</p>
          </div>
        </div>

        {/* Split Layout: Image & Info */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="relative aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="w-32 h-32 text-slate-600 opacity-40" />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-3">Grand Ballroom</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Elegant 12,000 sq ft main ballroom with crystal chandeliers, soaring 35-foot ceilings, and polished marble floors. Perfect for galas, weddings, and corporate events.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur p-4 rounded-lg border border-white/20">
                <Users className="w-8 h-8 mb-2 text-blue-400" />
                <p className="text-sm text-slate-400">Capacity</p>
                <p className="text-2xl font-bold">Up to 1,500</p>
              </div>
              <div className="bg-white/10 backdrop-blur p-4 rounded-lg border border-white/20">
                <Utensils className="w-8 h-8 mb-2 text-emerald-400" />
                <p className="text-sm text-slate-400">Catering</p>
                <p className="text-2xl font-bold">5-star chef</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 hover:bg-white/15 transition">
            <Sparkles className="w-8 h-8 mb-3 text-amber-400" />
            <h4 className="font-bold mb-2 text-lg">Crystal Decor</h4>
            <p className="text-slate-300 text-sm">Professional chandeliers and lighting design</p>
          </div>
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 hover:bg-white/15 transition">
            <Shield className="w-8 h-8 mb-3 text-green-400" />
            <h4 className="font-bold mb-2 text-lg">Security 24/7</h4>
            <p className="text-slate-300 text-sm">Professional security and event coordination</p>
          </div>
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 hover:bg-white/15 transition">
            <Zap className="w-8 h-8 mb-3 text-yellow-400" />
            <h4 className="font-bold mb-2 text-lg">Tech Ready</h4>
            <p className="text-slate-300 text-sm">State-of-the-art AV and WiFi systems</p>
          </div>
        </div>

        {/* Footer Info */}
        <div className="border-t border-slate-700 pt-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <p className="text-slate-500 text-sm uppercase tracking-widest mb-2">Phone</p>
              <p className="text-xl font-bold">(212) 555-1234</p>
            </div>
            <div>
              <p className="text-slate-500 text-sm uppercase tracking-widest mb-2">Email</p>
              <p className="text-xl font-bold">events@ritzpav.com</p>
            </div>
            <div>
              <p className="text-slate-500 text-sm uppercase tracking-widest mb-2">Valet</p>
              <p className="text-xl font-bold">Included</p>
            </div>
            <div>
              <p className="text-slate-500 text-sm uppercase tracking-widest mb-2">Hours</p>
              <p className="text-xl font-bold">24/7 Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
