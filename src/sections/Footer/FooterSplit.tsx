import { Mail, Phone, MapPin, Instagram, Facebook, ArrowUpRight } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface FooterSplitProps {
  section: Section;
}

export default function FooterSplit({ section }: FooterSplitProps) {
  return (
    <footer className="bg-white">
      <div className="grid md:grid-cols-2 min-h-96">
        {/* Left Column - Dark */}
        <div className="bg-gray-900 text-white p-12 flex flex-col justify-between">
          <div>
            <h3 className="text-4xl font-serif mb-2">Eleanor & Richard</h3>
            <p className="text-gray-400 mb-8">Where love meets elegance</p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-rose-500" />
                <a href="mailto:info@eleanorrichard.com" className="text-gray-300 hover:text-white transition-colors">info@eleanorrichard.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-rose-500" />
                <a href="tel:+1333444555" className="text-gray-300 hover:text-white transition-colors">(333) 444-5555</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rose-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300">258 Forever St<br />Timeless Valley, TV 86420</span>
              </div>
            </div>
          </div>

          {/* Social Bottom Left */}
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-rose-600 rounded-full flex items-center justify-center transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-rose-600 rounded-full flex items-center justify-center transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Column - Light */}
        <div className="bg-gradient-to-b from-rose-50 to-pink-50 p-12 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-serif text-gray-900 mb-6">Explore</h3>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Main</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-700 hover:text-rose-600 flex items-center gap-2 transition-colors text-sm"><ArrowUpRight className="w-3 h-3" />Home</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-rose-600 flex items-center gap-2 transition-colors text-sm"><ArrowUpRight className="w-3 h-3" />Story</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-rose-600 flex items-center gap-2 transition-colors text-sm"><ArrowUpRight className="w-3 h-3" />Gallery</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-rose-600 flex items-center gap-2 transition-colors text-sm"><ArrowUpRight className="w-3 h-3" />Events</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Plan</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-700 hover:text-rose-600 flex items-center gap-2 transition-colors text-sm"><ArrowUpRight className="w-3 h-3" />RSVP</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-rose-600 flex items-center gap-2 transition-colors text-sm"><ArrowUpRight className="w-3 h-3" />Registry</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-rose-600 flex items-center gap-2 transition-colors text-sm"><ArrowUpRight className="w-3 h-3" />Venue</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-rose-600 flex items-center gap-2 transition-colors text-sm"><ArrowUpRight className="w-3 h-3" />Contact</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Right */}
          <p className="text-gray-600 text-xs">© 2025 Eleanor & Richard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
