import { Instagram, Facebook, Youtube, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface FooterGridProps {
  section: Section;
}

export default function FooterGrid({ section }: FooterGridProps) {
  return (
    <footer className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 pb-12 border-b-2 border-slate-200">
          <div>
            <h3 className="text-3xl font-serif text-gray-900 mb-2">Victoria & Lucas</h3>
            <p className="text-gray-600">Our love story, beautifully told</p>
          </div>
          <div className="flex items-end justify-start md:justify-end">
            <Heart className="w-8 h-8 text-rose-500 fill-rose-500" />
          </div>
        </div>

        {/* Main Grid - 4 Columns */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Main</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-rose-600 transition-colors text-sm">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rose-600 transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rose-600 transition-colors text-sm">Timeline</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rose-600 transition-colors text-sm">Gallery</a></li>
            </ul>
          </div>

          {/* Column 2: Event Info */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Event</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-rose-600 transition-colors text-sm">Schedule</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rose-600 transition-colors text-sm">RSVP</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rose-600 transition-colors text-sm">Venue</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rose-600 transition-colors text-sm">Travel Tips</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-rose-600 transition-colors text-sm">Registry</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rose-600 transition-colors text-sm">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rose-600 transition-colors text-sm">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rose-600 transition-colors text-sm">Map</a></li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Social</h4>
            <div className="grid grid-cols-2 gap-3">
              <a href="#" className="w-full py-2 bg-slate-200 hover:bg-slate-300 rounded text-center transition-colors">
                <Instagram className="w-4 h-4 mx-auto" />
              </a>
              <a href="#" className="w-full py-2 bg-slate-200 hover:bg-slate-300 rounded text-center transition-colors">
                <Facebook className="w-4 h-4 mx-auto" />
              </a>
              <a href="#" className="w-full py-2 bg-slate-200 hover:bg-slate-300 rounded text-center transition-colors">
                <Twitter className="w-4 h-4 mx-auto" />
              </a>
              <a href="#" className="w-full py-2 bg-slate-200 hover:bg-slate-300 rounded text-center transition-colors">
                <Youtube className="w-4 h-4 mx-auto" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Contact Area */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 pb-12 border-b border-slate-200">
          <div className="flex gap-3">
            <Mail className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-gray-600 font-semibold">Email</p>
              <a href="mailto:hello@victorialucas.com" className="text-gray-900 hover:text-rose-600 transition-colors">hello@victorialucas.com</a>
            </div>
          </div>
          <div className="flex gap-3">
            <Phone className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-gray-600 font-semibold">Phone</p>
              <a href="tel:+1666777888" className="text-gray-900 hover:text-rose-600 transition-colors">(666) 777-8888</a>
            </div>
          </div>
          <div className="flex gap-3">
            <MapPin className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-gray-600 font-semibold">Location</p>
              <p className="text-gray-900">321 Love Lane, Destination City, DC 54321</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-sm text-gray-600">
          <p>© 2025 Victoria & Lucas. All rights reserved. Made with love.</p>
        </div>
      </div>
    </footer>
  );
}
