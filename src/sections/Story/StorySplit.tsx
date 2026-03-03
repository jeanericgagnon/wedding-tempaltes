import { Section } from '../../types/layoutConfig';
import { Heart } from 'lucide-react';

interface StorySplitProps {
  section: Section;
}

export default function StorySplit({ section }: StorySplitProps) {
  const meetingStory = section.bindings?.meetingStory || 'We met on a beautiful spring day...';
  const proposalStory = section.bindings?.proposalStory || 'The proposal was magical...';
  const meetingDate = section.bindings?.meetingDate || 'Spring 2018';
  const proposalDate = section.bindings?.proposalDate || 'December 2023';

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif mb-4 text-gray-900">Our Love Story</h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-1 w-12 bg-rose-400" />
            <Heart size={24} className="text-rose-500" />
            <div className="h-1 w-12 bg-rose-400" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-0 mb-16 group overflow-hidden">
          <div className="relative h-[500px] overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg"
              alt="Chapter One"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500" />
          </div>
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 md:p-12 flex items-center group-hover:shadow-inner transition-all duration-500">
            <div className="space-y-6 animate-fade-in">
              <div>
                <span className="inline-block px-4 py-1 bg-rose-100 text-rose-700 text-sm font-light tracking-widest uppercase rounded-full mb-4">
                  {meetingDate}
                </span>
                <h3 className="text-4xl font-serif mb-4 text-gray-900">Chapter One</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mb-6" />
              </div>
              <p className="text-lg text-gray-700 leading-relaxed font-light">{meetingStory}</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-0 group overflow-hidden">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 md:p-12 flex items-center order-2 md:order-1 group-hover:shadow-inner transition-all duration-500">
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div>
                <span className="inline-block px-4 py-1 bg-amber-100 text-amber-700 text-sm font-light tracking-widest uppercase rounded-full mb-4">
                  {proposalDate}
                </span>
                <h3 className="text-4xl font-serif mb-4 text-gray-900">Chapter Two</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mb-6" />
              </div>
              <p className="text-lg text-gray-700 leading-relaxed font-light">{proposalStory}</p>
            </div>
          </div>
          <div className="relative h-[500px] overflow-hidden order-1 md:order-2">
            <img
              src="https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg"
              alt="Chapter Two"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
