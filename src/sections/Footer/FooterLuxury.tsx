import { Mail, Phone, MapPin } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface FooterLuxuryProps {
  section: Section;
}

export default function FooterLuxury({ section }: FooterLuxuryProps) {
  const bride = section.bindings?.bride || 'The Couple';

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-950 text-white py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          <div>
            <h3 className="text-lg font-serif mb-8">
              {bride}'s Wedding
            </h3>
            <p className="text-gray-400 leading-relaxed font-light text-sm">
              Join us for an unforgettable celebration of love and commitment.
              We are thrilled to share this special day with you.
            </p>
          </div>

          <div>
            <h4 className="text-sm tracking-widest uppercase text-amber-300 mb-6 font-semibold">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>hello@wedding.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>The Grand Estate</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-widest uppercase text-amber-300 mb-6 font-semibold">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-amber-300 transition-colors">Home</a></li>
              <li><a href="#gallery" className="hover:text-amber-300 transition-colors">Gallery</a></li>
              <li><a href="#rsvp" className="hover:text-amber-300 transition-colors">RSVP</a></li>
              <li><a href="#faq" className="hover:text-amber-300 transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-300/20 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            With love and gratitude
          </p>
        </div>
      </div>
    </footer>
  );
}
