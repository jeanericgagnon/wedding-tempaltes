import { Mail, Heart, Instagram, Facebook } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface FooterNewsletterProps {
  section: Section;
}

export default function FooterNewsletter({ section }: FooterNewsletterProps) {
  return (
    <footer className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-rose-50 to-red-50 rounded-xl p-12 mb-16 border-2 border-rose-200">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-serif text-gray-900 mb-4">Stay Updated</h3>
              <p className="text-gray-600 mb-6">
                Get the latest updates from our journey. Subscribe to our newsletter for photos, stories, and special announcements.
              </p>
              <p className="text-sm text-gray-500">Unsubscribe anytime. We respect your privacy.</p>
            </div>
            <form className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-lg transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-gray-200">
          {/* Left: Branding */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-rose-600" fill="currentColor" />
              <h3 className="text-2xl font-serif text-gray-900">Grace & Thomas</h3>
            </div>
            <p className="text-gray-600 mb-6">Our wedding website & celebration hub</p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-rose-100 hover:bg-rose-600 rounded-full flex items-center justify-center transition-colors text-rose-600 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-rose-100 hover:bg-rose-600 rounded-full flex items-center justify-center transition-colors text-rose-600 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Center: Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">Our Story</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">Gallery</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">RSVP</a></li>
              <li><a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Right: Details */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-600">
              <li>Email: hello@gracethomas.com</li>
              <li>Phone: (555) 321-9876</li>
              <li>Address: 789 Eternal Lane<br />Joyful City, JC 11111</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">© 2025 Grace & Thomas. All rights reserved. | <a href="#" className="hover:text-rose-600 transition-colors">Privacy</a> | <a href="#" className="hover:text-rose-600 transition-colors">Terms</a></p>
        </div>
      </div>
    </footer>
  );
}
