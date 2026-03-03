import { Mail, Heart, MapPin, Smile, Sparkles, Instagram, Github } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface FooterPlayfulProps {
  section: Section;
}

export default function FooterPlayful({ section }: FooterPlayfulProps) {
  return (
    <footer className="bg-gradient-to-br from-purple-300 via-pink-300 to-orange-300 py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-4 left-6 text-4xl opacity-20">
        <Sparkles />
      </div>
      <div className="absolute bottom-8 right-8 text-5xl opacity-20">
        <Smile />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Fun Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-8 h-8 text-red-600 fill-red-600 animate-pulse" />
            <h3 className="text-4xl md:text-5xl font-serif text-gray-900">Natalie & Alex</h3>
            <Heart className="w-8 h-8 text-red-600 fill-red-600 animate-pulse" />
          </div>
          <p className="text-xl text-gray-800 font-bold">Two misfits, one love story!</p>
          <p className="text-sm text-gray-700 mt-1">Swiped right in 2019, married in 2025</p>
        </div>

        {/* Fun Content Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Fun Fact 1 */}
          <div className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-md border-4 border-purple-200 hover:scale-105 transition-transform">
            <p className="text-2xl mb-2">⚡</p>
            <h4 className="font-bold text-gray-900 mb-2">How We Met</h4>
            <p className="text-gray-700 text-sm">Through an app, but the chemistry was very real!</p>
          </div>

          {/* Fun Fact 2 */}
          <div className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-md border-4 border-pink-200 hover:scale-105 transition-transform">
            <p className="text-2xl mb-2">🎉</p>
            <h4 className="font-bold text-gray-900 mb-2">Our Vibe</h4>
            <p className="text-gray-700 text-sm">Laughter, adventures, and terrible dance moves</p>
          </div>

          {/* Fun Fact 3 */}
          <div className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-md border-4 border-orange-200 hover:scale-105 transition-transform">
            <p className="text-2xl mb-2">🚀</p>
            <h4 className="font-bold text-gray-900 mb-2">The Plan</h4>
            <p className="text-gray-700 text-sm">Forever adventures with this amazing human</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white/90 rounded-xl p-8 mb-16 border-4 border-yellow-300">
          <h3 className="text-2xl font-serif text-gray-900 mb-6 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-purple-600" />
            Want to Celebrate With Us?
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <Mail className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-gray-900">Email</p>
                <a href="mailto:hello@nataliealex.com" className="text-gray-700 hover:text-pink-600 transition-colors">hello@nataliealex.com</a>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-gray-900">Location</p>
                <p className="text-gray-700">Celebration City, Party State 99999</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social & Links */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 pb-12 border-b-4 border-white">
          {/* Social Media */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-gray-900 mb-4">Follow Our Shenanigans</h4>
            <div className="flex gap-3 justify-center md:justify-start">
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md">
                <Instagram className="w-6 h-6 text-pink-600" />
              </a>
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md">
                <Github className="w-6 h-6 text-gray-900" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <h4 className="font-bold text-gray-900 mb-4">The Goods</h4>
            <div className="flex gap-4 justify-center md:justify-end text-sm font-semibold flex-wrap">
              <a href="#" className="text-gray-800 hover:text-purple-600">Home</a>
              <a href="#" className="text-gray-800 hover:text-purple-600">Our Story</a>
              <a href="#" className="text-gray-800 hover:text-purple-600">Gallery</a>
              <a href="#" className="text-gray-800 hover:text-purple-600">RSVP</a>
              <a href="#" className="text-gray-800 hover:text-purple-600">Registry</a>
            </div>
          </div>
        </div>

        {/* Fun Footer */}
        <div className="text-center">
          <p className="text-gray-800 font-bold mb-2">© 2025 Natalie & Alex - Made with laughs and love</p>
          <p className="text-gray-700 text-sm">P.S. - If you came here looking for drama, wrong website. If you came for the love vibes, welcome!</p>
        </div>
      </div>
    </footer>
  );
}
