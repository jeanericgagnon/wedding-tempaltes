import { Instagram, Linkedin, Music, Heart, Mail, Phone } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface FooterCardsProps {
  section: Section;
}

export default function FooterCards({ section }: FooterCardsProps) {
  const cards = [
    {
      icon: Heart,
      title: 'Love Story',
      description: 'Join us as we celebrate our journey together',
    },
    {
      icon: Music,
      title: 'Celebration',
      description: 'Dance, laugh, and create memories with us',
    },
    {
      icon: Mail,
      title: 'Get in Touch',
      description: 'Questions? We are here to help',
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-serif text-gray-900 mb-4">Emily & Michael</h3>
          <p className="text-xl text-gray-600">Together in love, celebrating with you</p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div key={idx} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <Icon className="w-12 h-12 text-rose-500 mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{card.title}</h4>
                <p className="text-gray-600">{card.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-12 border-t border-gray-200 pt-12">
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Contact Details</h4>
            <div className="space-y-4">
              <p className="flex items-center gap-3 text-gray-600">
                <Mail className="w-5 h-5 text-rose-500" />
                <a href="mailto:info@emilyandmichael.com" className="hover:text-rose-600 transition-colors">info@emilyandmichael.com</a>
              </p>
              <p className="flex items-center gap-3 text-gray-600">
                <Phone className="w-5 h-5 text-rose-500" />
                <a href="tel:+1987654321" className="hover:text-rose-600 transition-colors">(198) 765-4321</a>
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Follow Our Journey</h4>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-rose-50 hover:bg-rose-100 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-6 h-6 text-rose-600" />
              </a>
              <a href="#" className="w-12 h-12 bg-rose-50 hover:bg-rose-100 rounded-lg flex items-center justify-center transition-colors">
                <Music className="w-6 h-6 text-rose-600" />
              </a>
              <a href="#" className="w-12 h-12 bg-rose-50 hover:bg-rose-100 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-6 h-6 text-rose-600" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">Made with love © 2025 Emily & Michael</p>
        </div>
      </div>
    </footer>
  );
}
