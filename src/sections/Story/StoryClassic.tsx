import { Section } from '../../types/layoutConfig';
import { Heart } from 'lucide-react';

interface StoryClassicProps {
  section: Section;
}

export default function StoryClassic({ section }: StoryClassicProps) {
  const meetingStory = section.bindings?.meetingStory || 'We met on a beautiful spring day...';
  const proposalStory = section.bindings?.proposalStory || 'The proposal was magical...';
  const meetingTitle = section.bindings?.meetingTitle || 'How We Met';
  const proposalTitle = section.bindings?.proposalTitle || 'The Proposal';

  const stories = [
    { title: meetingTitle, content: meetingStory, icon: Heart, delay: '0s' },
    { title: proposalTitle, content: proposalStory, icon: Heart, delay: '0.1s' },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-4">Our Story</h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-1 w-12 bg-rose-400" />
            <Heart size={20} className="text-rose-500" />
            <div className="h-1 w-12 bg-rose-400" />
          </div>
        </div>

        <div className="space-y-12">
          {stories.map((story, index) => (
            <div
              key={index}
              className="group text-center animate-fade-in"
              style={{ animationDelay: story.delay }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-3 rounded-full bg-gradient-to-br from-rose-100 to-pink-100 group-hover:from-rose-200 group-hover:to-pink-200 transition-all duration-300 transform group-hover:scale-110">
                  <Heart className="w-6 h-6 text-rose-600" />
                </div>
              </div>

              <h3 className="text-3xl font-serif font-light text-gray-900 mb-6 group-hover:text-rose-600 transition-colors duration-300">
                {story.title}
              </h3>

              <div className="relative mb-8">
                <div className="h-1 w-0 mx-auto bg-gradient-to-r from-rose-400 to-pink-400 group-hover:w-16 transition-all duration-500" />
              </div>

              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto font-light group-hover:text-gray-900 transition-colors duration-300">
                {story.content}
              </p>

              {index < stories.length - 1 && (
                <div className="mt-12 flex justify-center">
                  <div className="w-1 h-12 bg-gradient-to-b from-rose-300 to-transparent rounded-full" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 pt-16 border-t border-gray-200">
          <p className="text-center text-gray-600 font-light italic">
            Every love story is beautiful, and ours is just beginning
          </p>
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
