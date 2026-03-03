import { Section } from '../../types/layoutConfig';
import { BookOpen, Quote } from 'lucide-react';

interface StoryNarrativeProps {
  section: Section;
}

export default function StoryNarrative({ section }: StoryNarrativeProps) {
  const bride = section.bindings?.bride || 'Isabella';
  const groom = section.bindings?.groom || 'Thomas';

  return (
    <section className="py-20 bg-gradient-to-b from-stone-50 via-white to-stone-50">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-center gap-3 mb-12">
          <BookOpen className="text-amber-700" size={28} />
          <h1 className="text-5xl md:text-6xl font-serif text-gray-900 text-center">
            Our Story
          </h1>
        </div>

        <div className="bg-white rounded-lg p-12 shadow-sm border border-stone-200">
          {/* Opening */}
          <div className="mb-12">
            <p className="text-sm uppercase tracking-widest text-amber-700 font-semibold mb-6">Prologue</p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 font-light">
              They say that fate works in mysterious ways. That somewhere in the universe, there exists a moment designed just for you. We found ours on an ordinary Tuesday evening at a bookstore in the city, when {bride} reached for the same book that {groom} had just picked up. They both laughed, apologized, and neither put it down. Instead, they traded it for something far more valuable—a conversation that would change everything.
            </p>
          </div>

          {/* Chapter 1 */}
          <div className="mb-12 pl-6 border-l-4 border-amber-300">
            <p className="text-sm uppercase tracking-widest text-amber-700 font-semibold mb-3">Chapter One</p>
            <h2 className="text-3xl font-serif text-gray-900 mb-4">The Meeting</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4 font-light">
              What started as a chance encounter became an evening that stretched into the early morning hours. They talked about books they loved, dreams they harbored, and moments that shaped them. {groom} discovered that {bride} had a way of making ordinary moments feel sacred. {bride} found that {groom}'s laughter was the sound of coming home.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 font-light">
              Neither wanted the night to end. Both knew, somehow, that this was just the beginning.
            </p>
          </div>

          {/* Quote */}
          <div className="my-12 py-8 bg-amber-50 rounded-lg border-l-4 border-amber-400 pl-6">
            <Quote className="text-amber-700 mb-3" size={24} />
            <p className="text-2xl font-serif text-gray-900 italic mb-2">
              "I knew, the moment our eyes met, that you were my person."
            </p>
            <p className="text-gray-600 text-sm">— {bride}</p>
          </div>

          {/* Chapter 2 */}
          <div className="mb-12 pl-6 border-l-4 border-amber-300">
            <p className="text-sm uppercase tracking-widest text-amber-700 font-semibold mb-3">Chapter Two</p>
            <h2 className="text-3xl font-serif text-gray-900 mb-4">The Adventure</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4 font-light">
              Their first year together was a whirlwind of discovery. Spontaneous weekend trips to mountain towns, cooking experiments that ranged from culinary success to comedic disaster, and nights spent dancing in their apartment to songs only they could hear. {groom} would leave little love notes in {bride}'s coat pockets. {bride} would learn that {groom}'s favorite way to wake up was to the smell of coffee and her smile.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 font-light">
              They built traditions out of nothing. They found infinity in each other's eyes. The world suddenly felt like it made sense.
            </p>
          </div>

          {/* Chapter 3 */}
          <div className="mb-12 pl-6 border-l-4 border-amber-300">
            <p className="text-sm uppercase tracking-widest text-amber-700 font-semibold mb-3">Chapter Three</p>
            <h2 className="text-3xl font-serif text-gray-900 mb-4">The Promise</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4 font-light">
              On a clear autumn evening, {groom} took {bride} to the garden where they had their first picnic together. The leaves were turning gold, and the sunset painted the sky in shades of rose and amber. He told her about a life he wanted to build, a future he wanted to share, a forever he couldn't imagine without her by his side. Then he asked the question that both had been waiting for.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4 font-light">
              With tears of joy streaming down her face, {bride} said yes. She had been saying yes to him in a thousand small ways since the moment they met. This was simply the moment to say it out loud.
            </p>
          </div>

          {/* Quote 2 */}
          <div className="my-12 py-8 bg-rose-50 rounded-lg border-l-4 border-rose-400 pl-6">
            <Quote className="text-rose-700 mb-3" size={24} />
            <p className="text-2xl font-serif text-gray-900 italic mb-2">
              "She is my greatest adventure, my safest harbor, my everything."
            </p>
            <p className="text-gray-600 text-sm">— {groom}</p>
          </div>

          {/* Epilogue */}
          <div className="mb-12">
            <p className="text-sm uppercase tracking-widest text-amber-700 font-semibold mb-6">Epilogue</p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4 font-light">
              Standing here today, surrounded by everyone who has loved and supported us, we celebrate not just the moment we found each other, but every moment since. The quiet mornings, the spirited debates, the inside jokes that make no sense to anyone but us, the way we fit together like we were always meant to.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4 font-light">
              This isn't the end of our story—it's the chapter where we promise forever. Where we commit to growing together, supporting each other's dreams, and building a love that lasts a lifetime.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 font-light italic">
              Forever, it turns out, starts now.
            </p>
          </div>

          {/* Signature */}
          <div className="mt-16 pt-8 border-t border-stone-300 text-center">
            <p className="text-gray-600 font-light mb-2">With all our love,</p>
            <p className="text-2xl font-serif text-gray-900 mb-8">{bride} & {groom}</p>
            <p className="text-sm text-gray-500 font-light">A story that continues, chapter by chapter, day by day, forever.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
