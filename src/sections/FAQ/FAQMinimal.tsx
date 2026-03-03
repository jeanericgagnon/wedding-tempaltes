import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Section } from '../../types/layoutConfig';

interface FAQMinimalProps {
  section: Section;
}

const faqs = [
  {
    question: 'When is the wedding?',
    answer: 'The ceremony begins at 4:00 PM, with cocktails to follow. Please arrive 15 minutes early.',
  },
  {
    question: 'What is the dress code?',
    answer: 'Black tie optional. We want you to feel comfortable and confident.',
  },
  {
    question: 'Do you have dietary restrictions?',
    answer: 'Yes, please let us know on the RSVP card or contact us directly.',
  },
  {
    question: 'Can I bring a plus one?',
    answer: 'Each invitation specifies the number of guests. Please contact us if you have questions.',
  },
];

export default function FAQMinimal({ section }: FAQMinimalProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-5xl font-serif text-center text-gray-900 mb-4">
          Questions?
        </h2>

        <div className="flex justify-center mb-16">
          <div className="h-px w-16 bg-gray-300" />
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 py-6 cursor-pointer transition-all duration-200"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-light text-gray-900">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </div>

              {openIndex === index && (
                <p className="text-gray-600 mt-4 font-light leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
