import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface FooterContactProps {
  section: Section;
}

export default function FooterContact({ section }: FooterContactProps) {
  return (
    <footer className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Contact Info */}
          <div className="bg-rose-50 rounded-lg p-8">
            <h3 className="text-2xl font-serif text-gray-900 mb-8">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-rose-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a href="mailto:contact@sophiajames.com" className="text-gray-600 hover:text-rose-600 transition-colors">contact@sophiajames.com</a>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-rose-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <a href="tel:+1555123456" className="text-gray-600 hover:text-rose-600 transition-colors">(555) 123-4567</a>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-rose-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Address</p>
                  <p className="text-gray-600">456 Happiness Ave<br />Blissful Valley, BV 67890</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-indigo-50 rounded-lg p-8">
            <h3 className="text-2xl font-serif text-gray-900 mb-8">Hours</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 mb-3">Available</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>Monday - Friday: 9am - 6pm</li>
                    <li>Saturday: 10am - 4pm</li>
                    <li>Sunday: By appointment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Message Form */}
          <div className="bg-purple-50 rounded-lg p-8">
            <h3 className="text-2xl font-serif text-gray-900 mb-8">Quick Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              />
              <textarea
                placeholder="Your message"
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              />
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-colors flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-600 mb-2">Made with love by Sophia & James</p>
          <p className="text-gray-500 text-sm">© 2025 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
