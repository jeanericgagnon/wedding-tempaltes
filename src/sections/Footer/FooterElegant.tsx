import { Instagram, Facebook, Heart, Sparkles } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface FooterElegantProps {
  section: Section;
}

export default function FooterElegant({ section }: FooterElegantProps) {
  return (
    <footer className="bg-gradient-to-b from-amber-50 to-amber-100 py-20 border-t-8 border-amber-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Elegant Header */}
        <div className="text-center mb-20">
          <Sparkles className="w-8 h-8 mx-auto text-amber-700 mb-4" />
          <h2 className="text-5xl font-serif text-amber-900 mb-2">Amelia & Edward</h2>
          <div className="flex justify-center gap-1 mb-4">
            <span className="text-amber-600">•</span>
            <p className="text-amber-700 italic">A love most refined</p>
            <span className="text-amber-600">•</span>
          </div>
        </div>

        {/* Three Column Layout */}
        <div className="grid md:grid-cols-3 gap-12 mb-16 pb-16 border-b-2 border-amber-300">
          {/* Left: About */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-serif text-amber-900 mb-4">About Our Love</h3>
            <p className="text-amber-800 leading-relaxed">
              Two souls, perfectly united in matrimony. Join us as we embark on this timeless journey together.
            </p>
          </div>

          {/* Center: Decorative */}
          <div className="flex flex-col items-center justify-center">
            <Heart className="w-12 h-12 text-amber-700 mb-4" fill="currentColor" />
            <p className="text-sm text-amber-600 font-serif">~ Forever ~</p>
          </div>

          {/* Right: Details */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-serif text-amber-900 mb-4">Contact Information</h3>
            <div className="space-y-2 text-amber-800">
              <p>amelia.edward@luxury.com</p>
              <p>(555) 246-8135</p>
              <p>One Paradise Lane, Elegance Town, ET 24680</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Social Links */}
          <div className="flex gap-6">
            <a href="#" className="w-10 h-10 bg-amber-300 hover:bg-amber-700 rounded-full flex items-center justify-center transition-colors text-amber-900 hover:text-white">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-amber-300 hover:bg-amber-700 rounded-full flex items-center justify-center transition-colors text-amber-900 hover:text-white">
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          {/* Navigation */}
          <nav className="flex gap-6 text-sm font-semibold text-amber-800">
            <a href="#" className="hover:text-amber-600 transition-colors">Gallery</a>
            <a href="#" className="hover:text-amber-600 transition-colors">RSVP</a>
            <a href="#" className="hover:text-amber-600 transition-colors">Registry</a>
            <a href="#" className="hover:text-amber-600 transition-colors">Travel</a>
          </nav>

          {/* Copyright */}
          <p className="text-center md:text-right text-sm text-amber-700">
            © 2025 Amelia & Edward. All moments preserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
