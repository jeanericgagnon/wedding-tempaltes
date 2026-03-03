import { Section } from '../../types/layoutConfig';

interface FAQLuxuryProps {
  section: Section;
}

export default function FAQLuxury({ section }: FAQLuxuryProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-amber-300 to-amber-500 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              q: 'When and where is the reception?',
              a: 'The reception will be held at the Grand Ballroom from 6 PM onwards, featuring dinner, dancing, and celebrations.',
            },
            {
              q: 'What should I wear?',
              a: 'Black tie optional. Our wedding celebrates elegance and comfort, so dress in a way that makes you feel confident.',
            },
            {
              q: 'How do I accommodate dietary needs?',
              a: 'Please specify any dietary restrictions when you RSVP. We want to ensure every guest enjoys the celebration.',
            },
            {
              q: 'Are children welcome?',
              a: 'Yes! We love having children at our wedding. Please indicate their names on your RSVP.',
            },
            {
              q: 'Can I bring a guest?',
              a: 'Each invitation specifies whether a plus-one is included. Please contact us if you have questions.',
            },
            {
              q: 'What is the parking situation?',
              a: 'Complimentary valet parking will be available. If you prefer self-parking, please let us know in advance.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-amber-100"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {item.q}
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
