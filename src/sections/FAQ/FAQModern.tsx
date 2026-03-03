import { useState } from 'react';
import { Search, CheckCircle } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface FAQModernProps {
  section: Section;
}

const faqData = [
  { question: 'How far in advance should I book?', answer: 'We recommend 3-6 months for peak season.' },
  { question: 'What payment methods do you accept?', answer: 'All major cards, PayPal, bank transfers, and installment plans.' },
  { question: 'What is your cancellation policy?', answer: 'Free until 30 days before. 50% fee within 30 days, 100% within 14 days.' },
  { question: 'Can you customize packages?', answer: 'Yes, all packages are fully customizable to your needs.' },
  { question: 'Do you accommodate dietary restrictions?', answer: 'Absolutely. Notify us 2 weeks in advance.' },
  { question: 'What is your refund timeline?', answer: 'Refunds process within 5-7 business days.' },
  { question: 'Do you offer same-day services?', answer: 'Limited availability. Call us or pay 40% rush fee.' },
  { question: 'How many guests can you accommodate?', answer: 'From 10 to 500+ guests with full customization.' },
  { question: 'Do you provide photography?', answer: 'We partner with professional photographers in most locations.' },
  { question: 'How do I reschedule?', answer: 'Free rescheduling if 30+ days in advance.' },
  { question: 'Can I use my own vendors?', answer: 'Yes, we coordinate seamlessly with your vendors.' },
  { question: 'What about weather contingencies?', answer: 'We have full contingency plans for all weather scenarios.' }
];

export default function FAQModern({ section }: FAQModernProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedIndices, setExpandedIndices] = useState<Set<number>>(new Set());

  const filteredFaqs = faqData.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Help Center
          </h2>
          <p className="text-xl text-purple-200 mb-10">
            Find answers instantly
          </p>

          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-3.5 text-purple-300" size={20} />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/10 border border-purple-400 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:border-purple-300 focus:ring-2 focus:ring-purple-500/50"
            />
          </div>
        </div>

        {filteredFaqs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredFaqs.map((item, index) => (
              <button
                key={index}
                onClick={() => toggleExpanded(index)}
                className={`text-left p-6 rounded-lg backdrop-blur-sm transition-all duration-300 ${
                  expandedIndices.has(index)
                    ? 'bg-gradient-to-br from-purple-500/30 to-pink-500/30 border border-purple-400'
                    : 'bg-white/10 border border-purple-400/30 hover:bg-white/15 hover:border-purple-400'
                }`}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-purple-300 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-bold text-white text-lg">
                      {item.question}
                    </p>
                    {expandedIndices.has(index) && (
                      <p className="text-purple-100 mt-4 leading-relaxed">
                        {item.answer}
                      </p>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-purple-200 text-lg">
              No results found for "{searchTerm}"
            </p>
            <p className="text-purple-300 mt-2">
              Try different keywords
            </p>
          </div>
        )}

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-purple-500/30">
          <div className="text-center">
            <div className="inline-block bg-purple-500/20 p-3 rounded-full mb-4">
              <CheckCircle size={24} className="text-purple-300" />
            </div>
            <h3 className="font-bold text-white mb-2">Instant Answers</h3>
            <p className="text-purple-200 text-sm">Find quick solutions</p>
          </div>
          <div className="text-center">
            <div className="inline-block bg-purple-500/20 p-3 rounded-full mb-4">
              <CheckCircle size={24} className="text-purple-300" />
            </div>
            <h3 className="font-bold text-white mb-2">Easy Search</h3>
            <p className="text-purple-200 text-sm">Search across all topics</p>
          </div>
          <div className="text-center">
            <div className="inline-block bg-purple-500/20 p-3 rounded-full mb-4">
              <CheckCircle size={24} className="text-purple-300" />
            </div>
            <h3 className="font-bold text-white mb-2">Always Updated</h3>
            <p className="text-purple-200 text-sm">Latest information</p>
          </div>
        </div>
      </div>
    </section>
  );
}
