import { Section } from '../../types/layoutConfig';
import { MapPin, Users, Sparkles, Utensils, Camera, Zap } from 'lucide-react';

interface VenueMagazineProps {
  section: Section;
}

export default function VenueMagazine({ section }: VenueMagazineProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Magazine Cover Style Header */}
        <div className="mb-16 grid md:grid-cols-2 gap-12 items-center">
          {/* Large Feature Image */}
          <div className="relative aspect-square bg-gradient-to-br from-rose-200 to-pink-300 rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <Camera className="w-32 h-32 text-white/40" />
            </div>
          </div>

          {/* Magazine Text */}
          <div className="space-y-6">
            <div>
              <p className="text-rose-600 text-xs font-bold uppercase tracking-[0.2em] mb-4">Feature Venue</p>
              <h2 className="text-6xl md:text-7xl font-serif font-bold text-gray-900 mb-4 leading-tight">
                The Studio
              </h2>
              <div className="flex items-center gap-2 text-gray-700 mb-6">
                <MapPin className="w-5 h-5" />
                <p className="text-lg">145 Fashion District Ave, New York, NY 10018</p>
              </div>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed max-w-lg">
              Chic 8,000 sq ft downtown loft with soaring ceilings, massive windows, and Instagram-worthy interiors. Perfect for fashion shows, photo shoots, product launches, and high-end celebrations.
            </p>

            <div className="flex gap-3">
              <div className="bg-rose-50 rounded-lg p-4 flex-1">
                <Users className="w-6 h-6 text-rose-600 mb-2" />
                <p className="text-xs text-gray-600 uppercase font-semibold mb-1">Guests</p>
                <p className="text-xl font-bold text-gray-900">400+</p>
              </div>
              <div className="bg-rose-50 rounded-lg p-4 flex-1">
                <Sparkles className="w-6 h-6 text-rose-600 mb-2" />
                <p className="text-xs text-gray-600 uppercase font-semibold mb-1">Style</p>
                <p className="text-xl font-bold text-gray-900">Modern Chic</p>
              </div>
            </div>
          </div>
        </div>

        {/* Three-column layout */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Main Story */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <p className="text-rose-600 text-xs font-bold uppercase tracking-widest mb-3 font-serif">Inside Story</p>
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">Designed for Tastemakers</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                This award-winning venue combines industrial aesthetics with luxury finishes. Floor-to-ceiling windows flood the space with natural light, while custom architectural elements create distinct zones for different event experiences.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The open floor plan accommodates everything from intimate dinner parties to large-scale fashion presentations. Full commercial kitchen, premium bar, and state-of-the-art AV systems ensure every detail is flawless.
              </p>
            </div>

            {/* Features List */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-4">Standout Features</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-rose-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">25-foot soaring ceilings</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-rose-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Exposed brick walls</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-rose-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Natural light from skyline</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-rose-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Stage with professional lighting</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Amenities Card */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-6 border border-rose-200">
              <Utensils className="w-6 h-6 text-rose-600 mb-3" />
              <p className="text-xs font-bold text-rose-700 uppercase tracking-widest mb-2">Catering</p>
              <p className="text-gray-800 font-semibold text-sm">On-site kitchen, full bar, customizable menus</p>
            </div>

            {/* Tech Card */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-6 border border-rose-200">
              <Zap className="w-6 h-6 text-rose-600 mb-3" />
              <p className="text-xs font-bold text-rose-700 uppercase tracking-widest mb-2">Technology</p>
              <p className="text-gray-800 font-semibold text-sm">4K projectors, surround sound, WiFi throughout</p>
            </div>

            {/* Quick Facts */}
            <div className="bg-gray-900 text-white rounded-lg p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Quick Facts</p>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-400">Hours</p>
                  <p className="font-semibold">Flexible, by appointment</p>
                </div>
                <div>
                  <p className="text-gray-400">Parking</p>
                  <p className="font-semibold">Nearby paid garage</p>
                </div>
                <div>
                  <p className="text-gray-400">Contact</p>
                  <p className="font-semibold">(212) 555-5432</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Room Breakdown */}
        <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg border border-rose-200 p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Space Configuration</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-rose-100">
              <p className="font-serif text-lg font-bold text-gray-900 mb-2">Main Floor</p>
              <p className="text-gray-600 text-sm mb-3">5,000 sq ft open space | Up to 350 guests standing | Customizable layouts</p>
              <p className="text-xs text-rose-700 font-semibold">Primary event space</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-rose-100">
              <p className="font-serif text-lg font-bold text-gray-900 mb-2">Lounge Area</p>
              <p className="text-gray-600 text-sm mb-3">1,500 sq ft | Comfortable seating | Separate bar area</p>
              <p className="text-xs text-rose-700 font-semibold">Breakout space</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-rose-100">
              <p className="font-serif text-lg font-bold text-gray-900 mb-2">VIP Suite</p>
              <p className="text-gray-600 text-sm mb-3">1,500 sq ft | Premium finishes | Exclusive views</p>
              <p className="text-xs text-rose-700 font-semibold">Private entertaining</p>
            </div>
          </div>
        </div>

        {/* Contact Footer */}
        <div className="text-center border-t border-gray-200 pt-12">
          <p className="text-rose-600 text-xs font-bold uppercase tracking-widest mb-3">Get in Touch</p>
          <p className="text-3xl font-bold text-gray-900 mb-2">(212) 555-5432</p>
          <p className="text-gray-600">info@thestudiony.com</p>
        </div>
      </div>
    </section>
  );
}
