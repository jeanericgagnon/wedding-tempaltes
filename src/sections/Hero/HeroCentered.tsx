import { Section } from '../../types/layoutConfig';
import { Flower, Zap } from 'lucide-react';

interface HeroCenteredProps {
  section: Section;
}

export default function HeroCentered({ section }: HeroCenteredProps) {
  return (
    <section className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50 relative overflow-hidden">
      {/* Subtle background patterns */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-radial from-amber-200 to-transparent rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-yellow-100 to-transparent rounded-full blur-2xl opacity-40"></div>

      {/* Decorative lines */}
      <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent opacity-50"></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {/* Top decorative element */}
            <div className="flex justify-center mb-12">
              <div className="flex items-center gap-3">
                <Flower size={24} className="text-amber-600" />
                <div className="w-12 h-px bg-gradient-to-r from-amber-400 to-yellow-400"></div>
                <span className="text-sm font-medium tracking-widest text-amber-700 uppercase">Together</span>
                <div className="w-12 h-px bg-gradient-to-r from-yellow-400 to-amber-400"></div>
                <Flower size={24} className="text-amber-600" />
              </div>
            </div>

            {/* Main content */}
            <div className="text-center space-y-6">
              <h1 className="text-6xl md:text-8xl font-serif text-gray-900 leading-tight">
                <span className="block">Jessica</span>
                <span className="block text-amber-600">&</span>
                <span className="block">David</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-700 font-light max-w-2xl mx-auto">
                Forever starts with a single moment, and ours is on
              </p>

              <div className="pt-6">
                <p className="text-3xl md:text-4xl font-serif text-amber-800">
                  September 7, 2024
                </p>
              </div>

              <p className="text-lg text-gray-600 italic">
                Chapel of Saint Grace, Vineyard Estates
              </p>
            </div>

            {/* Decorative divider */}
            <div className="flex justify-center gap-2 py-8">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-4 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors text-lg">
                RSVP
              </button>
              <button className="px-10 py-4 bg-white text-amber-600 border-2 border-amber-400 rounded-lg font-semibold hover:bg-amber-50 transition-colors text-lg">
                Details
              </button>
            </div>

            {/* Bottom message */}
            <p className="text-center text-sm text-gray-500 pt-8">
              We can't wait to celebrate with you
            </p>
          </div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="text-amber-300/50 animate-pulse">
          <Zap size={20} />
        </div>
      </div>
    </section>
  );
}
