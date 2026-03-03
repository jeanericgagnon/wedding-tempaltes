import { Sparkles } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface StoryPlayfulProps {
  section: Section;
}

export default function StoryPlayful({ section }: StoryPlayfulProps) {
  const meetingStory = section.bindings?.meetingStory || 'We met at a cozy coffee shop on a rainy afternoon. Our eyes locked over steaming cups, and we knew instantly this was the beginning of something special.';
  const proposalStory = section.bindings?.proposalStory || 'Under a canopy of stars at our favorite park, with trembling hands and a heart full of love, the question was finally asked. The answer was the easiest yes we\'ve ever known.';
  const engagementStory = section.bindings?.engagementStory || 'Surrounded by loved ones, we celebrated the promise of forever together. Every laugh, every tear, every moment leading to this day has been pure magic.';

  return (
    <section className="py-32 bg-gradient-to-b from-rose-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <Sparkles className="w-8 h-8 text-amber-400 animate-bounce" />
          </div>
          <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-4">
            Our Love Story
          </h2>
          <p className="text-lg text-gray-600">A journey written in moments of joy</p>
        </div>

        <div className="space-y-12">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-rose-400">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-3xl">☕</div>
              <div>
                <h3 className="text-2xl font-serif text-rose-600 mb-3">The Meeting</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {meetingStory}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="h-12 w-px bg-gradient-to-b from-rose-300 to-transparent" />
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-amber-400">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-3xl">💍</div>
              <div>
                <h3 className="text-2xl font-serif text-amber-600 mb-3">The Proposal</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {proposalStory}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="h-12 w-px bg-gradient-to-b from-amber-300 to-transparent" />
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-400">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-3xl">🎉</div>
              <div>
                <h3 className="text-2xl font-serif text-blue-600 mb-3">The Engagement</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {engagementStory}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
