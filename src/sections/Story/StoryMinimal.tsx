import { Section } from '../../types/layoutConfig';

interface StoryMinimalProps {
  section: Section;
}

export default function StoryMinimal({ section }: StoryMinimalProps) {
  const bride = section.bindings?.bride || 'Sarah';
  const groom = section.bindings?.groom || 'David';

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-5xl font-serif text-center text-gray-900 mb-4">
          Our Story
        </h2>

        <div className="flex justify-center mb-16">
          <div className="h-px w-16 bg-gray-300" />
        </div>

        <div className="space-y-16">
          <div className="border-l-2 border-gray-300 pl-8 relative">
            <div className="absolute -left-5 top-0 w-8 h-8 bg-white border-2 border-gray-900 rounded-full" />
            <h3 className="text-2xl font-serif text-gray-900 mb-3">
              How We Met
            </h3>
            <p className="text-gray-600 leading-relaxed font-light">
              {bride} and {groom} met in college and instantly connected over their shared love of
              travel and adventure. What started as a chance encounter became a beautiful friendship
              that blossomed into something much more.
            </p>
          </div>

          <div className="border-l-2 border-gray-300 pl-8 relative">
            <div className="absolute -left-5 top-0 w-8 h-8 bg-white border-2 border-gray-900 rounded-full" />
            <h3 className="text-2xl font-serif text-gray-900 mb-3">
              The Proposal
            </h3>
            <p className="text-gray-600 leading-relaxed font-light">
              After years of adventures together, {groom} decided it was time to take the next step.
              On a starry night by the beach, he got down on one knee and asked {bride} to be his
              partner for life. Of course, she said yes!
            </p>
          </div>

          <div className="border-l-2 border-gray-300 pl-8 relative">
            <div className="absolute -left-5 top-0 w-8 h-8 bg-white border-2 border-gray-900 rounded-full" />
            <h3 className="text-2xl font-serif text-gray-900 mb-3">
              Today
            </h3>
            <p className="text-gray-600 leading-relaxed font-light">
              Now we celebrate the beautiful journey that led us here, surrounded by the people we love
              most. We cannot wait to embark on this new chapter together and share this special day with you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
