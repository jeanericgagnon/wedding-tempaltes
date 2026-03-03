import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Section } from '../../types/layoutConfig';

interface FAQSimpleProps {
  section: Section;
}

export default function FAQSimple({ section }: FAQSimpleProps) {
  const [expanded, setExpanded] = useState<number | null>(0);

  const faqs = [
    { q: 'What is the dress code?', a: 'Black tie optional. Formal cocktail attire is welcome.' },
    { q: 'Can I bring a guest?', a: 'Yes, plus-ones are included in your invitation. Please RSVP with their name.' },
    { q: 'Is there parking available?', a: 'Yes, free parking is available on-site. Valet service is also available.' },
    { q: 'What accommodations are near the venue?', a: 'Several hotels within 5km. See our accommodations page for options.' },
    { q: 'What time should I arrive?', a: 'Please arrive by 4:00 PM for a 4:30 PM ceremony start.' },
    { q: 'Can I request a specific song?', a: 'Yes! Submit your request in the RSVP form.' },
    { q: 'Will there be vegetarian options?', a: 'Absolutely. Let us know your dietary preferences in the RSVP.' },
    { q: 'Is the venue accessible?', a: 'Yes, the venue is fully ADA accessible.' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-5xl font-serif text-center text-gray-900 mb-4">Common Questions</h2>
        <p className="text-center text-gray-600 mb-16">Find answers to frequently asked questions</p>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
              >
                <span className="font-medium text-gray-900">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transition-transform ${
                    expanded === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expanded === i && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-gray-700">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
