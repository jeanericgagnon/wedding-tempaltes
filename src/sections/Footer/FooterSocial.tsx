import { Instagram, Facebook, Twitter, Music, Youtube, Linkedin, Heart } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface FooterSocialProps {
  section: Section;
}

export default function FooterSocial({ section }: FooterSocialProps) {
  const socials = [
    { icon: Instagram, label: 'Instagram', link: '#', color: 'hover:bg-pink-600' },
    { icon: Facebook, label: 'Facebook', link: '#', color: 'hover:bg-blue-600' },
    { icon: Twitter, label: 'Twitter', link: '#', color: 'hover:bg-sky-500' },
    { icon: Music, label: 'TikTok', link: '#', color: 'hover:bg-black' },
    { icon: Youtube, label: 'YouTube', link: '#', color: 'hover:bg-red-600' },
    { icon: Linkedin, label: 'LinkedIn', link: '#', color: 'hover:bg-blue-700' },
  ];

  return (
    <footer className="bg-gradient-to-b from-rose-50 to-pink-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-serif text-gray-900 mb-3">Rebecca & Nathan</h3>
          <p className="text-gray-600 mb-2">Follow our love story across all platforms</p>
          <Heart className="w-6 h-6 text-rose-600 fill-rose-600 mx-auto" />
        </div>

        {/* Social Icons - Large Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {socials.map((social, idx) => {
            const Icon = social.icon;
            return (
              <a
                key={idx}
                href={social.link}
                className="group flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-rose-100"
              >
                <div className={`w-16 h-16 bg-rose-100 ${social.color} rounded-full flex items-center justify-center transition-colors mb-3`}>
                  <Icon className="w-8 h-8 text-rose-600 group-hover:text-white transition-colors" />
                </div>
                <p className="font-semibold text-gray-900 text-sm">{social.label}</p>
              </a>
            );
          })}
        </div>

        {/* Social Stats - Optional */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 pb-16 border-b-2 border-rose-200">
          <div className="text-center">
            <p className="text-3xl font-bold text-rose-600">15.2K</p>
            <p className="text-gray-600">Total Followers</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-rose-600">2.4K</p>
            <p className="text-gray-600">Engagement</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-rose-600">892</p>
            <p className="text-gray-600">Posts</p>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div>
            <p className="text-gray-700 font-semibold mb-1">Get in Touch</p>
            <p className="text-gray-600 text-sm">contact@rebeccanathan.com</p>
          </div>
          <div className="text-gray-600 text-sm">
            © 2025 Rebecca & Nathan. All moments captured with love.
          </div>
        </div>
      </div>
    </footer>
  );
}
