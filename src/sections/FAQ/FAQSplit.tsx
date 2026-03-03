import { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface FAQSplitProps {
  section: Section;
}

const faqData = [
  {
    section: 'Getting Started',
    items: [
      { q: 'How far in advance should I book?', a: 'We recommend 3-6 months in advance for peak season to ensure availability.' },
      { q: 'Can you accommodate last-minute bookings?', a: 'Sometimes! Contact us for availability. Last-minute bookings may have limited options.' }
    ]
  },
  {
    section: 'Pricing',
    items: [
      { q: 'What payment methods do you accept?', a: 'All major credit cards, PayPal, bank transfers, and installment plans.' },
      { q: 'Do you offer discounts?', a: 'Yes! November-April bookings receive 15-20% discounts.' }
    ]
  },
  {
    section: 'Changes & Cancellations',
    items: [
      { q: 'What is your cancellation policy?', a: 'Free until 30 days before. 50% fee within 30 days, 100% within 14 days.' },
      { q: 'What if I need to reschedule?', a: 'Free rescheduling if 30+ days in advance. Otherwise, contact us.' }
    ]
  },
  {
    section: 'Services',
    items: [
      { q: 'Can you customize packages?', a: 'Yes! All packages are fully customizable to your needs.' },
      { q: 'How many guests can you handle?', a: 'From 10 intimate guests to 500+ grand celebrations.' }
    ]
  }
];

export default function FAQSplit({ section }: FAQSplitProps) {
  const [expandedIndex, setExpandedIndex] = useState<string | null>(null);

  return (
    <section className="py-24 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-white text-center mb-16">
          Questions & Answers
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <HelpCircle className="w-8 h-8 text-rose-400" />
                <h3 className="text-2xl font-bold text-white">Quick Answers</h3>
              </div>
            </div>
            {faqData.slice(0, 2).map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h4 className="text-lg font-bold text-rose-400 mb-4">{section.section}</h4>
                <div className="space-y-3">
                  {section.items.map((item, idx) => {
                    const uniqueKey = `left-${sectionIdx}-${idx}`;
                    return (
                      <button
                        key={uniqueKey}
                        onClick={() => setExpandedIndex(expandedIndex === uniqueKey ? null : uniqueKey)}
                        className="w-full text-left bg-gray-800 hover:bg-gray-750 transition-colors p-4 rounded-lg border border-gray-700 group"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <span className="text-white font-semibold group-hover:text-rose-300 transition-colors">
                            {item.q}
                          </span>
                          <ChevronDown
                            size={20}
                            className={`text-rose-400 flex-shrink-0 transition-transform ${
                              expandedIndex === uniqueKey ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                        {expandedIndex === uniqueKey && (
                          <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                            {item.a}
                          </p>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="w-8 h-8 text-blue-400" />
                <h3 className="text-2xl font-bold text-white">More Help</h3>
              </div>
            </div>
            {faqData.slice(2).map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h4 className="text-lg font-bold text-blue-400 mb-4">{section.section}</h4>
                <div className="space-y-3">
                  {section.items.map((item, idx) => {
                    const uniqueKey = `right-${sectionIdx}-${idx}`;
                    return (
                      <button
                        key={uniqueKey}
                        onClick={() => setExpandedIndex(expandedIndex === uniqueKey ? null : uniqueKey)}
                        className="w-full text-left bg-gray-800 hover:bg-gray-750 transition-colors p-4 rounded-lg border border-gray-700 group"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <span className="text-white font-semibold group-hover:text-blue-300 transition-colors">
                            {item.q}
                          </span>
                          <ChevronDown
                            size={20}
                            className={`text-blue-400 flex-shrink-0 transition-transform ${
                              expandedIndex === uniqueKey ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                        {expandedIndex === uniqueKey && (
                          <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                            {item.a}
                          </p>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-rose-600 to-pink-600 rounded-xl p-8 text-center">
          <p className="text-white text-lg mb-4">
            Can't find what you're looking for?
          </p>
          <button className="bg-white text-rose-600 hover:bg-gray-100 transition-colors font-bold py-3 px-8 rounded-lg">
            Get in Touch with Our Team
          </button>
        </div>
      </div>
    </section>
  );
}
