import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, Star } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface FooterDetailedProps {
  section: Section;
}

export default function FooterDetailed({ section }: FooterDetailedProps) {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Grid */}
        <div className="grid md:grid-cols-5 gap-8 mb-16">
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-2xl font-serif mb-4 text-white">Isabella & Marco</h3>
            <p className="text-gray-400 mb-6">Journey together, forever in love</p>
            <div className="flex gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Photos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Videos</a></li>
            </ul>
          </div>

          {/* Column 3: Information */}
          <div>
            <h4 className="font-semibold text-white mb-4">Information</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">RSVP</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Registry</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Schedule</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Accommodations</a></li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Directions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Parking</a></li>
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <p className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer">
                <Mail className="w-4 h-4" />
                wedding@isabella.com
              </p>
              <p className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer">
                <Phone className="w-4 h-4" />
                (555) 987-6543
              </p>
              <p className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>789 Romance St<br />Forever City, FC 13579</span>
              </p>
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex gap-4 mb-6 md:mb-0">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-sky-600 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">© 2025 Isabella & Marco. Handcrafted with love.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
