import { Section } from '../../types/layoutConfig';

interface StoryLuxuryProps {
  section: Section;
}

export default function StoryLuxury({ section }: StoryLuxuryProps) {
  const bride = section.bindings?.bride || 'Victoria';
  const groom = section.bindings?.groom || 'Alexander';

  return (
    <section className="py-32 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-serif text-gray-900 mb-6">
            A Love Story
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-amber-300 to-amber-500 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="bg-white rounded-lg p-12 shadow-lg border border-amber-100">
            <h3 className="text-2xl font-serif text-gray-900 mb-4">
              Chapter One
            </h3>
            <h4 className="text-amber-600 font-semibold mb-4 tracking-wide uppercase text-sm">
              How We Met
            </h4>
            <p className="text-gray-600 leading-relaxed font-light mb-6">
              Our story began under the stars at a summer wedding in the Hamptons. {bride} caught {groom}'s
              eye from across the room, and after an evening of laughter and conversation, they knew something
              special had begun.
            </p>
            <p className="text-gray-600 leading-relaxed font-light">
              What started as a dance under the moonlight became the beginning of a lifelong journey together.
            </p>
          </div>

          <div className="relative h-96 bg-gradient-to-br from-amber-400/10 to-amber-600/10 rounded-lg border border-amber-200/50" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative h-96 bg-gradient-to-br from-amber-600/10 to-amber-400/10 rounded-lg border border-amber-200/50" />

          <div className="bg-white rounded-lg p-12 shadow-lg border border-amber-100">
            <h3 className="text-2xl font-serif text-gray-900 mb-4">
              Chapter Two
            </h3>
            <h4 className="text-amber-600 font-semibold mb-4 tracking-wide uppercase text-sm">
              The Proposal
            </h4>
            <p className="text-gray-600 leading-relaxed font-light mb-6">
              After two years of unforgettable adventures across the globe, {groom} knew he had found his
              forever person. He planned an intimate moment at the exact same venue where they first met.
            </p>
            <p className="text-gray-600 leading-relaxed font-light">
              With tears of joy, {bride} said yes, and their greatest adventure was about to begin.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-12 shadow-lg border border-amber-100 text-center">
          <h3 className="text-2xl font-serif text-gray-900 mb-4">
            Chapter Three
          </h3>
          <h4 className="text-amber-600 font-semibold mb-8 tracking-wide uppercase text-sm">
            Today
          </h4>
          <p className="text-gray-600 leading-relaxed font-light max-w-2xl mx-auto">
            Today, we celebrate the love that brought us together and the commitment we make to each other.
            As we stand before you, surrounded by family and friends, we embark on the next chapter of our
            story—a lifetime of love, laughter, and endless possibilities.
          </p>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 tracking-widest uppercase">
              Forever Begins Today
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
