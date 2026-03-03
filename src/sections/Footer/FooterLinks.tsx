import { Mail, Zap } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface FooterLinksProps {
  section: Section;
}

export default function FooterLinks({ section }: FooterLinksProps) {
  const linkGroups = [
    {
      title: 'Main',
      links: ['Home', 'Story', 'Gallery', 'Timeline']
    },
    {
      title: 'Event',
      links: ['Schedule', 'RSVP', 'Venue', 'Accommodations']
    },
    {
      title: 'Details',
      links: ['Registry', 'Travel', 'FAQ', 'Contact']
    },
    {
      title: 'Legal',
      links: ['Privacy', 'Terms', 'Cookies', 'Sitemap']
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-cyan-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-6 h-6 text-cyan-600" />
            <h3 className="text-3xl font-serif text-gray-900">Charlotte & Benjamin</h3>
            <Zap className="w-6 h-6 text-cyan-600" />
          </div>
          <p className="text-gray-600">Your complete guide to our celebration</p>
        </div>

        {/* Links Grid - 4 Columns */}
        <div className="grid md:grid-cols-4 gap-8 mb-16 pb-16 border-b-2 border-cyan-300">
          {linkGroups.map((group, idx) => (
            <div key={idx}>
              <h4 className="font-bold text-gray-900 mb-4 text-lg">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href="#" className="text-gray-700 hover:text-cyan-600 hover:underline transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-cyan-600" />
            <a href="mailto:info@charlottebenjamin.com" className="text-gray-700 hover:text-cyan-600 transition-colors">
              info@charlottebenjamin.com
            </a>
          </div>
          <p className="text-gray-600 text-sm">© 2025 Charlotte & Benjamin. Built with love.</p>
        </div>
      </div>
    </footer>
  );
}
