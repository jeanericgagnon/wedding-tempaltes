import { Section } from '../../types/layoutConfig';

interface StoryMagazineProps {
  section: Section;
}

export default function StoryMagazine({ section }: StoryMagazineProps) {
  const meetingStory = section.bindings?.meetingStory || 'A serendipitous encounter at a mutual friend\'s gathering.';
  const proposalStory = section.bindings?.proposalStory || 'A moment under the stars we\'ll never forget.';
  const futureStory = section.bindings?.futureStory || 'The beginning of our forever adventure.';

  return (
    <section className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-24">
          <span className="text-sm font-semibold tracking-widest text-gray-500 uppercase">Our Story</span>
          <h2 className="text-6xl md:text-7xl font-serif text-gray-900 mt-2 mb-8 leading-tight">
            A Tale of<br />Two Hearts
          </h2>
          <div className="w-16 h-1 bg-rose-400" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h3 className="text-2xl font-serif text-gray-900 mb-4">How We Met</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {meetingStory}
            </p>
            <p className="text-sm text-gray-500 font-semibold tracking-wider uppercase">
              The Beginning
            </p>
          </div>
          <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
            <span className="text-5xl">✨</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
            <span className="text-5xl">💍</span>
          </div>
          <div>
            <h3 className="text-2xl font-serif text-gray-900 mb-4">The Proposal</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {proposalStory}
            </p>
            <p className="text-sm text-gray-500 font-semibold tracking-wider uppercase">
              Forever Starts Here
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
