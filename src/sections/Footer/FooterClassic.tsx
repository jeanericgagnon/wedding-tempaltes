import { Heart, Mail, Phone } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface FooterClassicProps {
  section: Section;
}

export default function FooterClassic({ section }: FooterClassicProps) {
  const message = section.bindings?.message || 'Thank you for celebrating with us';
  const email = section.bindings?.email || 'hello@wedding.com';
  const phone = section.bindings?.phone || '(555) 123-4567';
  const copyright = section.bindings?.copyright || 'All rights reserved';

  return (
    <footer className="py-16 bg-gradient-to-r from-gray-900 to-gray-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1),transparent)]" />
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.1),transparent)]" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="text-center group">
            <Heart className="w-10 h-10 mx-auto mb-4 text-rose-500 group-hover:scale-125 group-hover:animate-pulse transition-transform duration-300" fill="currentColor" />
            <p className="text-gray-300 font-light">{message}</p>
          </div>

          <div className="text-center space-y-4">
            <h3 className="text-sm uppercase tracking-widest text-gray-400 font-light">Get in Touch</h3>
            <div className="flex flex-col gap-3">
              <a href={`mailto:${email}`} className="flex items-center justify-center gap-2 text-gray-300 hover:text-rose-400 transition-colors duration-300 group">
                <Mail size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                <span className="font-light text-sm">{email}</span>
              </a>
              <a href={`tel:${phone}`} className="flex items-center justify-center gap-2 text-gray-300 hover:text-rose-400 transition-colors duration-300 group">
                <Phone size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                <span className="font-light text-sm">{phone}</span>
              </a>
            </div>
          </div>

          <div className="text-center space-y-4">
            <h3 className="text-sm uppercase tracking-widest text-gray-400 font-light">Follow Us</h3>
            <div className="flex justify-center gap-4">
              {['Instagram', 'Facebook', 'Pinterest'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-600 hover:border-rose-500 text-gray-400 hover:text-rose-400 flex items-center justify-center transition-all duration-300 hover:bg-rose-500/10"
                >
                  <span className="text-xs font-light">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-500 font-light">
            Made with <span className="text-rose-500">❤</span> • {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
