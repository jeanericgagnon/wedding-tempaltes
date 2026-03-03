import { Section } from '../../types/layoutConfig';

interface StoryCompactProps {
  section: Section;
}

export default function StoryCompact({ section }: StoryCompactProps) {
  const meetingStory = section.bindings?.meetingStory || 'A chance meeting that changed everything.';
  const proposalStory = section.bindings?.proposalStory || 'When the moment was finally right, the answer was instant.';

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center text-gray-900 mb-12">Our Story</h2>

        <div className="space-y-8">
          <div className="border-l-4 border-rose-400 pl-6">
            <h3 className="text-lg font-serif text-gray-900 mb-2">How We Met</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{meetingStory}</p>
          </div>

          <div className="border-l-4 border-rose-400 pl-6">
            <h3 className="text-lg font-serif text-gray-900 mb-2">The Proposal</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{proposalStory}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
