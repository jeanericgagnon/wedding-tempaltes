import { Section } from '../../types/layoutConfig';

interface StoryGridProps {
  section: Section;
}

export default function StoryGrid({ section }: StoryGridProps) {
  const stories = [
    {
      title: 'First Meeting',
      description: section.bindings?.meetingStory || 'We met by chance and stayed by choice.',
      emoji: '✨'
    },
    {
      title: 'First Date',
      description: 'Coffee turned into dinner, dinner turned into forever.',
      emoji: '☕'
    },
    {
      title: 'The Proposal',
      description: section.bindings?.proposalStory || 'On one knee, with a simple yes, everything changed.',
      emoji: '💍'
    },
    {
      title: 'Today',
      description: 'Celebrating the journey that led us here.',
      emoji: '💕'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-serif text-center text-gray-900 mb-4">Our Story</h2>
        <p className="text-center text-gray-600 text-lg mb-16">A journey of two hearts becoming one</p>

        <div className="grid md:grid-cols-2 gap-6">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="text-4xl mb-4">{story.emoji}</div>
              <h3 className="text-2xl font-serif text-gray-900 mb-3">{story.title}</h3>
              <p className="text-gray-600 leading-relaxed">{story.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
