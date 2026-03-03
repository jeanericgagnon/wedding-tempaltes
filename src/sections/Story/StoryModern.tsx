import { Section } from '../../types/layoutConfig';

interface StoryModernProps {
  section: Section;
}

export default function StoryModern({ section }: StoryModernProps) {
  const meetingStory = section.bindings?.meetingStory || 'A chance encounter that felt like destiny. In that moment, we both knew we\'d found our person.';
  const proposalStory = section.bindings?.proposalStory || 'A simple question with the most profound answer. Yes to forever, yes to us, yes to everything.';

  return (
    <section className="py-32 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-6">
            Our Journey
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div className="relative">
            <div className="absolute -left-8 top-0 text-6xl opacity-20 text-cyan-400">"</div>
            <h3 className="text-2xl font-serif text-cyan-400 mb-6 mt-4">How We Met</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6 text-justify">
              {meetingStory}
            </p>
            <div className="inline-block px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded">
              <span className="text-sm text-cyan-300 font-medium">The Beginning</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-0 text-6xl opacity-20 text-blue-400">"</div>
            <h3 className="text-2xl font-serif text-blue-400 mb-6 mt-4">Forever Starts Now</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6 text-justify">
              {proposalStory}
            </p>
            <div className="inline-block px-4 py-2 bg-blue-400/10 border border-blue-400/30 rounded">
              <span className="text-sm text-blue-300 font-medium">The Question</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
