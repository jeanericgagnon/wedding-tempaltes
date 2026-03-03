import { Section } from '../../types/layoutConfig';

interface StoryBoldProps {
  section: Section;
}

export default function StoryBold({ section }: StoryBoldProps) {
  const meetingStory = section.bindings?.meetingStory || 'Two souls colliding at exactly the right moment, creating a spark that would ignite the rest of our lives together.';
  const proposalStory = section.bindings?.proposalStory || 'On one knee, with the world holding its breath, we committed to forever. Yes, a thousand times, yes.';
  const thinkingOfYou = section.bindings?.thinkingOfYou || 'Every day since has been a privilege, a gift, a beautiful reminder of why we chose each other.';

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-7xl md:text-8xl font-serif text-center mb-24 leading-tight">
          Our<br />Story
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="border-t-2 border-white pt-8">
            <p className="text-xl leading-relaxed text-gray-300 mb-6">
              {meetingStory}
            </p>
            <div className="text-sm font-serif text-gray-500">The Beginning</div>
          </div>

          <div className="border-t-2 border-white pt-8">
            <p className="text-xl leading-relaxed text-gray-300 mb-6">
              {proposalStory}
            </p>
            <div className="text-sm font-serif text-gray-500">The Question</div>
          </div>

          <div className="border-t-2 border-white pt-8">
            <p className="text-xl leading-relaxed text-gray-300 mb-6">
              {thinkingOfYou}
            </p>
            <div className="text-sm font-serif text-gray-500">Our Path</div>
          </div>
        </div>
      </div>
    </section>
  );
}
