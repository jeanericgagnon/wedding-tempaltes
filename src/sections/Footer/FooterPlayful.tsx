import { Mail, Heart, MapPin } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface FooterPlayfulProps {
  section: Section;
}

export default function FooterPlayful({ section }: FooterPlayfulProps) {
  const year = new Date().getFullYear();
  const bride = section.bindings?.bride || 'Jane';
  const groom = section.bindings?.groom || 'John';

  return (
    <footer className="bg-gradient-to-br from-rose-100 to-pink-100">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-serif text-gray-900 mb-4">Love & Joy</h3>
            <p className="text-gray-600 leading-relaxed">
              Thank you for being part of our love story. Your presence means the world to us.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-serif text-gray-900 mb-6 flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-500" />
              Connect
            </h3>
            <div className="space-y-3 text-gray-600">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-rose-500" />
                hello@wedding.com
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-500" />
                {section.bindings?.location || 'Somewhere Beautiful'}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif text-gray-900 mb-4">Our Celebration</h3>
            <p className="text-gray-600">
              {bride} & {groom}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              June 15, 2025
            </p>
          </div>
        </div>

        <div className="border-t border-rose-300 pt-8 text-center text-gray-600">
          <p className="text-sm">
            With love & gratitude © {year} | {bride} & {groom}
          </p>
        </div>
      </div>
    </footer>
  );
}
