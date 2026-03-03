import { Section } from '../../types/layoutConfig';
import { Heart, Sparkles } from 'lucide-react';

interface StoryCompactProps {
  section: Section;
}

export default function StoryCompact({ section }: StoryCompactProps) {
  const meetingStory = section.bindings?.meetingStory || 'A chance meeting that changed everything.';
  const proposalStory = section.bindings?.proposalStory || 'When the moment was finally right, the answer was instant.';

  const stories = [
    {
      title: 'How We Met',
      content: meetingStory,
      icon: Heart,
      color: 'from-rose-400 to-pink-400',
      bgColor: 'from-rose-50 to-pink-50',
    },
    {
      title: 'The Proposal',
      content: proposalStory,
      icon: Sparkles,
      color: 'from-amber-400 to-orange-400',
      bgColor: 'from-amber-50 to-orange-50',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-5xl font-serif text-center text-gray-900 mb-3">Our Story</h2>
        <p className="text-center text-gray-600 font-light mb-12">Two hearts, one beautiful journey</p>

        <div className="space-y-6">
          {stories.map((story, index) => {
            const Icon = story.icon;
            return (
              <div
                key={index}
                className={`group relative border-l-4 border-transparent bg-gradient-to-r ${story.bgColor} rounded-r-xl p-6 hover:shadow-md transition-all duration-300 cursor-default overflow-hidden animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s`, borderLeftColor: 'currentColor' }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-black transition-opacity duration-300" />

                <div className="relative z-10 flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <div className={`p-2.5 rounded-lg bg-gradient-to-br ${story.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-lg font-serif font-light text-gray-900 mb-2 group-hover:text-gray-950 transition-colors duration-300">
                      {story.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed font-light group-hover:text-gray-800 transition-colors duration-300">
                      {story.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 pt-8 text-center border-t border-gray-200">
          <p className="text-gray-600 font-light italic">
            "Love is not just about finding the right person, but being the right person for someone."
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
