import { useState } from 'react';
import { Crown } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface FAQElegantProps {
  section: Section;
}

const faqData = [
  {
    question: 'How far in advance should we schedule our event?',
    answer: 'We recommend booking 3-6 months prior to ensure optimal availability and comprehensive planning.'
  },
  {
    question: 'What payment arrangements do you offer?',
    answer: 'We extend credit to valued clients and accept all major payment methods with flexible installment options.'
  },
  {
    question: 'What is your policy regarding event modifications?',
    answer: 'Changes are accommodated gracefully up to 30 days prior. We work with you on timing adjustments thereafter.'
  },
  {
    question: 'Can our preferred vendors be integrated into the service?',
    answer: 'Certainly. We collaborate seamlessly with your chosen vendors to create a unified, cohesive experience.'
  },
  {
    question: 'How do you handle unforeseen weather circumstances?',
    answer: 'Our sophisticated contingency protocols ensure your event proceeds flawlessly regardless of conditions.'
  },
  {
    question: 'What customization options are available?',
    answer: 'Our services are entirely bespoke. We craft custom solutions that reflect your unique vision and preferences.'
  },
  {
    question: 'How many guests can be accommodated?',
    answer: 'From intimate soirées of 10 to grand galas of 500+, we execute each event with meticulous attention.'
  },
  {
    question: 'Can you coordinate with premium photography services?',
    answer: 'Yes, we partner with distinguished photographers and ensure seamless artistic direction throughout.'
  }
];

export default function FAQElegant({ section }: FAQElegantProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-gradient-to-br from-amber-50 via-white to-amber-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <Crown className="w-12 h-12 text-amber-600 mx-auto mb-6" />
          <h2 className="text-6xl md:text-7xl font-serif font-light text-gray-900 mb-4 tracking-wide">
            Frequently Asked Inquiries
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-rose-600 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-6 font-light tracking-wide">
            Essential information for our distinguished clients
          </p>
        </div>

        <div className="space-y-0.5">
          {faqData.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className={`w-full px-8 py-5 text-left font-serif text-lg transition-all duration-300 flex items-center justify-between border-b-2 ${
                  expandedIndex === index
                    ? 'bg-gradient-to-r from-amber-100 to-rose-50 border-amber-300 text-gray-900'
                    : 'bg-white border-gray-200 text-gray-800 hover:text-amber-700'
                }`}
              >
                <span className="font-light tracking-wide">
                  {item.question}
                </span>
                <span className={`text-amber-600 font-serif text-2xl transition-transform ${
                  expandedIndex === index ? 'rotate-180' : ''
                }`}>
                  ›
                </span>
              </button>
              {expandedIndex === index && (
                <div className="px-8 py-6 bg-gradient-to-br from-amber-50 to-white border-b-2 border-amber-200">
                  <p className="text-gray-700 font-light text-lg leading-relaxed tracking-wide">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="font-serif text-gray-600 mb-4 tracking-wide">Require additional information?</p>
          <button className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-serif px-8 py-3 transition-all duration-300 tracking-wide">
            Request a Private Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
