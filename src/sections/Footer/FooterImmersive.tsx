import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface FooterImmersiveProps {
  section: Section;
}

export default function FooterImmersive({ section }: FooterImmersiveProps) {
  return (
    <footer className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Large Header */}
        <div className="mb-20">
          <p className="text-pink-300 text-lg mb-2">Welcome</p>
          <h2 className="text-6xl md:text-7xl font-serif mb-6">Natasha & Alexander</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-pink-400 to-purple-400 mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl">
            Celebrating a love that transcends time, space, and all boundaries. Thank you for being part of our journey.
          </p>
        </div>

        {/* Three Column Rich Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-20 pb-20 border-b border-purple-500">
          {/* Column 1: Navigation */}
          <div>
            <h3 className="text-2xl font-serif mb-8 text-pink-300">Explore</h3>
            <ul className="space-y-4">
              <li><a href="#" className="flex items-center gap-2 hover:text-pink-300 transition-colors"><ArrowRight className="w-4 h-4" />Our Story</a></li>
              <li><a href="#" className="flex items-center gap-2 hover:text-pink-300 transition-colors"><ArrowRight className="w-4 h-4" />Photo Gallery</a></li>
              <li><a href="#" className="flex items-center gap-2 hover:text-pink-300 transition-colors"><ArrowRight className="w-4 h-4" />Timeline</a></li>
              <li><a href="#" className="flex items-center gap-2 hover:text-pink-300 transition-colors"><ArrowRight className="w-4 h-4" />Video</a></li>
            </ul>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h3 className="text-2xl font-serif mb-8 text-pink-300">Contact</h3>
            <div className="space-y-4">
              <p className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <a href="mailto:hello@natashaalexander.com" className="hover:text-pink-300 transition-colors">hello@natashaalexander.com</a>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <a href="tel:+1777888999" className="hover:text-pink-300 transition-colors">(777) 888-9999</a>
              </p>
              <p className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>654 Dreams Lane<br />Enchanted Valley, EV 98765</span>
              </p>
            </div>
          </div>

          {/* Column 3: Follow */}
          <div>
            <h3 className="text-2xl font-serif mb-8 text-pink-300">Follow Us</h3>
            <p className="mb-6 text-gray-300">Connect with us on social media to see more moments</p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-white/20 hover:bg-pink-500 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/20 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/20 hover:bg-sky-500 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-gray-400 text-sm mb-2">Made with love and passion</p>
            <p className="text-purple-300 text-sm">© 2025 Natasha & Alexander</p>
          </div>
          <div className="flex gap-4 mt-6 md:mt-0 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-purple-500">•</span>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
            <span className="text-purple-500">•</span>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
