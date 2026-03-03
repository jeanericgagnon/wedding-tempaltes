import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface FooterBoldProps {
  section: Section;
}

export default function FooterBold({ section }: FooterBoldProps) {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Branding */}
          <div>
            <h3 className="text-3xl font-bold mb-2">Sarah & James</h3>
            <p className="text-gray-400 mb-6">Forever starts today</p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-rose-600 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-rose-600 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-rose-600 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors"><ChevronRight className="w-4 h-4" />Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors"><ChevronRight className="w-4 h-4" />Our Story</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors"><ChevronRight className="w-4 h-4" />Gallery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors"><ChevronRight className="w-4 h-4" />Events</a></li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Info</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors"><ChevronRight className="w-4 h-4" />Registry</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors"><ChevronRight className="w-4 h-4" />RSVP</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors"><ChevronRight className="w-4 h-4" />Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors"><ChevronRight className="w-4 h-4" />FAQs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              <p className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5" />
                <a href="mailto:hello@sarahjames.com" className="hover:text-white transition-colors">hello@sarahjames.com</a>
              </p>
              <p className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">(123) 456-7890</a>
              </p>
              <p className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>123 Love Lane<br />Romance City, RC 12345</span>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">Copyright © 2025 Sarah & James. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
