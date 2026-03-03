import { Section } from '../../types/layoutConfig';

interface StoryEditorialProps {
  section: Section;
}

export default function StoryEditorial({ section }: StoryEditorialProps) {
  const meetingStory = section.bindings?.meetingStory || 'Our story began on an ordinary Tuesday that became extraordinary.';
  const proposalStory = section.bindings?.proposalStory || 'The most important question ever asked received the simplest answer: yes.';
  const thinkingOfYou = section.bindings?.thinkingOfYou || 'And now we celebrate the promise of forever with all of you.';

  return (
    <section className="py-32 bg-white">
      <article className="max-w-3xl mx-auto px-4">
        <header className="mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6">Our Love Story</h2>
          <p className="text-xl text-gray-600 font-light">From meeting to forever in three perfect moments</p>
        </header>

        <div className="space-y-12 text-lg leading-relaxed">
          <section>
            <h3 className="text-2xl font-serif text-gray-900 mb-6 mt-12 pt-6 border-t border-gray-200">
              Chapter One: The Meeting
            </h3>
            <p className="text-gray-700 mb-4">
              {meetingStory}
            </p>
            <p className="text-gray-600 italic">
              In that moment, we both knew.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-serif text-gray-900 mb-6 mt-12 pt-6 border-t border-gray-200">
              Chapter Two: The Question
            </h3>
            <p className="text-gray-700 mb-4">
              {proposalStory}
            </p>
            <p className="text-gray-600 italic">
              A lifetime of moments stretching before us.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-serif text-gray-900 mb-6 mt-12 pt-6 border-t border-gray-200">
              Chapter Three: Today
            </h3>
            <p className="text-gray-700 mb-4">
              {thinkingOfYou}
            </p>
            <p className="text-gray-600 italic">
              With love and gratitude for all of you.
            </p>
          </section>
        </div>
      </article>
    </section>
  );
}
