import { Gift, MapPin, Mail, Phone, Instagram, Twitter, Smartphone } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface FooterRichProps {
  section: Section;
}

export default function FooterRich({ section }: FooterRichProps) {
  return (
    <footer className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section - Rich Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Section 1: Registry */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <Gift className="w-7 h-7 text-purple-600" />
              <h3 className="text-xl font-serif text-gray-900">Registry & Gifts</h3>
            </div>
            <p className="text-gray-600 mb-4">Find our curated registry and wishlist at your favorite stores</p>
            <ul className="space-y-2">
              <li><a href="#" className="text-purple-600 hover:text-purple-700 text-sm font-semibold">Target Registry</a></li>
              <li><a href="#" className="text-purple-600 hover:text-purple-700 text-sm font-semibold">Williams Sonoma</a></li>
              <li><a href="#" className="text-purple-600 hover:text-purple-700 text-sm font-semibold">Crate and Barrel</a></li>
              <li><a href="#" className="text-purple-600 hover:text-purple-700 text-sm font-semibold">Honeyfund</a></li>
            </ul>
          </div>

          {/* Section 2: Contact */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <Smartphone className="w-7 h-7 text-blue-600" />
              <h3 className="text-xl font-serif text-gray-900">Contact Info</h3>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <a href="mailto:event@luciahenry.com" className="text-blue-600 hover:text-blue-700">event@luciahenry.com</a>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <a href="tel:+1444555666" className="text-blue-600 hover:text-blue-700">(444) 555-6666</a>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Location */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-7 h-7 text-green-600" />
              <h3 className="text-xl font-serif text-gray-900">Location</h3>
            </div>
            <p className="text-gray-600 mb-3">Join us at our celebration venue</p>
            <p className="font-semibold text-gray-900 mb-2">The Grand Ballroom</p>
            <p className="text-gray-600 text-sm mb-4">
              987 Celebration Way<br />
              Dream City, DC 54321
            </p>
            <a href="#" className="text-green-600 hover:text-green-700 text-sm font-semibold">Get Directions</a>
          </div>
        </div>

        {/* Middle Section - Main Links */}
        <div className="grid md:grid-cols-4 gap-8 mb-16 pb-16 border-b-2 border-gray-200">
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Our Story</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Engagement</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Timeline</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Event Details</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Schedule</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Itinerary</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">RSVP</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Accommodations</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Planning</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Travel Info</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Parking</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Dining</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="text-center">
          <h3 className="text-2xl font-serif text-gray-900 mb-2">Lucia & Henry</h3>
          <p className="text-gray-600 mb-4">Celebrating our love with you</p>
          <p className="text-gray-500 text-xs">© 2025 Lucia & Henry. All rights reserved. | <a href="#" className="hover:text-gray-700">Privacy Policy</a> | <a href="#" className="hover:text-gray-700">Terms of Service</a></p>
        </div>
      </div>
    </footer>
  );
}
