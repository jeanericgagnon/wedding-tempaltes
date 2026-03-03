import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface FooterCompactProps {
  section: Section;
}

export default function FooterCompact({ section }: FooterCompactProps) {
  return (
    <footer className="bg-slate-100 py-8 border-t-4 border-rose-500">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Name & Tagline */}
          <div>
            <p className="text-2xl font-serif text-gray-900">Olivia & David</p>
            <p className="text-sm text-gray-600">Celebrating our love story</p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-700 hover:text-rose-600 transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-rose-600 transition-colors">Gallery</a>
            <a href="#" className="text-gray-700 hover:text-rose-600 transition-colors">RSVP</a>
            <a href="#" className="text-gray-700 hover:text-rose-600 transition-colors">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            <a href="#" className="w-8 h-8 bg-rose-500 hover:bg-rose-600 rounded-full flex items-center justify-center transition-colors text-white">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 bg-rose-500 hover:bg-rose-600 rounded-full flex items-center justify-center transition-colors text-white">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 bg-rose-500 hover:bg-rose-600 rounded-full flex items-center justify-center transition-colors text-white">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-6 pt-6 border-t border-gray-300 text-center text-xs text-gray-600">
          <p>Copyright © 2025 Olivia & David | hello@oliviadavid.com</p>
        </div>
      </div>
    </footer>
  );
}
