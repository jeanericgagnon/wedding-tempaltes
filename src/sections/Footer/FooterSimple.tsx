import { Heart, Mail } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface FooterSimpleProps {
  section: Section;
}

export default function FooterSimple({ section }: FooterSimpleProps) {
  return (
    <footer className="bg-white border-t-2 border-rose-300 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* One Column Simple Layout */}
        <div className="text-center">
          {/* Name with Heart */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
            <h3 className="text-3xl font-serif text-gray-900">Melissa & Joshua</h3>
            <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-6">Two hearts, one love, forever together</p>

          {/* Simple Links */}
          <div className="flex justify-center gap-6 mb-6 flex-wrap">
            <a href="#" className="text-gray-700 hover:text-rose-600 transition-colors text-sm">Home</a>
            <span className="text-gray-300">•</span>
            <a href="#" className="text-gray-700 hover:text-rose-600 transition-colors text-sm">Story</a>
            <span className="text-gray-300">•</span>
            <a href="#" className="text-gray-700 hover:text-rose-600 transition-colors text-sm">Gallery</a>
            <span className="text-gray-300">•</span>
            <a href="#" className="text-gray-700 hover:text-rose-600 transition-colors text-sm">RSVP</a>
            <span className="text-gray-300">•</span>
            <a href="#" className="text-gray-700 hover:text-rose-600 transition-colors text-sm">Contact</a>
          </div>

          {/* Contact Email */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <Mail className="w-4 h-4 text-rose-500" />
            <a href="mailto:hello@melissajoshua.com" className="text-gray-700 hover:text-rose-600 transition-colors">hello@melissajoshua.com</a>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-xs">© 2025 Melissa & Joshua. Made with love.</p>
        </div>
      </div>
    </footer>
  );
}
