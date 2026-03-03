import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface FAQCompactProps {
  section: Section;
}

const faqData = [
  { q: 'How far in advance should I book?', a: 'We recommend 3-6 months in advance for peak season.' },
  { q: 'What payment methods do you accept?', a: 'All major credit cards, PayPal, bank transfers, and installment plans.' },
  { q: 'What is your cancellation policy?', a: 'Free until 30 days before. 50% fee within 30 days. 100% within 14 days.' },
  { q: 'Can you customize packages?', a: 'Yes! All packages are fully customizable to your needs.' },
  { q: 'Do you accommodate dietary restrictions?', a: 'Absolutely. Notify us 2 weeks in advance for vegetarian, vegan, gluten-free options.' },
  { q: 'What is your refund timeline?', a: 'Refunds are processed within 5-7 business days.' },
  { q: 'Do you offer same-day services?', a: 'Limited availability. Call us or pay 40% rush fee.' },
  { q: 'How many guests can you accommodate?', a: 'From 10 intimate guests to 500+ grand celebrations.' },
  { q: 'Do you provide photography?', a: 'We partner with professional photographers in most locations.' },
  { q: 'How do I reschedule?', a: 'Free rescheduling if 30+ days in advance. Otherwise contact us.' }
];

export default function FAQCompact({ section }: FAQCompactProps) {
  const [expandedIndices, setExpandedIndices] = useState<Set<number>>(new Set());

  const toggleExpanded = (index: number) => {
    const newSet = new Set(expandedIndices);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setExpandedIndices(newSet);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-2">
            FAQs
          </h2>
          <p className="text-gray-600">
            Quick answers to common questions
          </p>
        </div>

        <div className="space-y-2">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`border border-gray-200 rounded-md transition-all ${
                expandedIndices.has(index) ? 'bg-white' : 'bg-gray-50 hover:bg-white'
              }`}
            >
              <button
                onClick={() => toggleExpanded(index)}
                className="w-full px-4 py-3 flex items-center justify-between hover:text-rose-600 transition-colors"
              >
                <span className="text-sm md:text-base font-semibold text-gray-900 text-left">
                  {item.q}
                </span>
                <div className="ml-3 flex-shrink-0">
                  {expandedIndices.has(index) ? (
                    <Minus size={18} className="text-rose-500" />
                  ) : (
                    <Plus size={18} className="text-gray-400" />
                  )}
                </div>
              </button>
              {expandedIndices.has(index) && (
                <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-sm text-gray-600">
          <p>Need more help? <a href="#contact" className="text-rose-600 hover:text-rose-700 font-semibold">Get in touch</a></p>
        </div>
      </div>
    </section>
  );
}
