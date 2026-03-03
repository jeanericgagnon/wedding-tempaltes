import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface FAQSearchProps {
  section: Section;
}

const faqData = [
  { question: 'How far in advance should I book?', answer: 'We recommend 3-6 months in advance for peak season.', keywords: ['booking', 'advance', 'dates'] },
  { question: 'What payment methods do you accept?', answer: 'All major credit cards, PayPal, bank transfers, and installment plans.', keywords: ['payment', 'methods', 'credit'] },
  { question: 'What is your cancellation policy?', answer: 'Free until 30 days before. 50% within 30 days, 100% within 14 days.', keywords: ['cancel', 'cancellation', 'refund'] },
  { question: 'Can you customize packages?', answer: 'Yes! All packages are fully customizable to your needs.', keywords: ['customize', 'packages', 'custom'] },
  { question: 'Do you accommodate dietary restrictions?', answer: 'Absolutely. Notify us 2 weeks in advance for dietary needs.', keywords: ['dietary', 'vegetarian', 'vegan', 'gluten'] },
  { question: 'What is your refund timeline?', answer: 'Refunds process within 5-7 business days.', keywords: ['refund', 'timeline', 'money'] },
  { question: 'Do you offer same-day services?', answer: 'Limited availability available. Call us or pay 40% rush fee.', keywords: ['same-day', 'rush', 'emergency'] },
  { question: 'How many guests can you accommodate?', answer: 'From 10 intimate guests to 500+ grand celebrations.', keywords: ['guests', 'capacity', 'size'] },
  { question: 'Do you provide photography?', answer: 'We partner with professional photographers in most locations.', keywords: ['photography', 'photos', 'pictures'] },
  { question: 'How do I reschedule?', answer: 'Free rescheduling if 30+ days in advance.', keywords: ['reschedule', 'reschedule', 'change'] }
];

export default function FAQSearch({ section }: FAQSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const filteredFaqs = faqData.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.keywords.some(k => k.includes(searchTerm.toLowerCase()))
  );

  const clearSearch = () => {
    setSearchTerm('');
    setExpandedIndex(null);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-4">
            Search Our FAQs
          </h2>
          <p className="text-xl text-gray-600">
            Type to find answers instantly
          </p>
        </div>

        <div className="relative mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-4 text-indigo-500" size={20} />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-12 py-4 text-lg border-2 border-indigo-300 rounded-xl focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 bg-white"
            />
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            )}
          </div>
          {searchTerm && (
            <p className="text-sm text-gray-600 mt-2">
              Found {filteredFaqs.length} result{filteredFaqs.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        {filteredFaqs.length > 0 ? (
          <div className="space-y-4">
            {filteredFaqs.map((item, index) => {
              const originalIndex = faqData.findIndex(f => f.question === item.question);
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === originalIndex ? null : originalIndex)}
                    className="w-full px-6 py-5 text-left flex items-start justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1 min-w-0 pr-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {item.question}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-1">
                        {item.answer}
                      </p>
                    </div>
                    <span className={`text-indigo-600 text-2xl flex-shrink-0 transition-transform ${
                      expandedIndex === originalIndex ? 'rotate-180' : ''
                    }`}>
                      ∨
                    </span>
                  </button>

                  {expandedIndex === originalIndex && (
                    <div className="px-6 py-4 bg-indigo-50 border-t-2 border-indigo-200">
                      <p className="text-gray-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : searchTerm ? (
          <div className="text-center py-12 bg-white rounded-lg">
            <p className="text-gray-600 text-lg mb-2">
              No results found for "{searchTerm}"
            </p>
            <p className="text-gray-500 mb-6">
              Try different keywords or browse all questions
            </p>
            <button
              onClick={clearSearch}
              className="bg-indigo-600 hover:bg-indigo-700 transition-colors text-white font-bold py-2 px-6 rounded-lg"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg">
            <p className="text-gray-600 text-lg mb-4">
              Start typing to search our FAQ database
            </p>
            <p className="text-sm text-gray-500">
              Try searching for: booking, payment, cancellation, or customize
            </p>
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still can't find what you need?</p>
          <button className="bg-indigo-600 hover:bg-indigo-700 transition-colors text-white font-bold py-3 px-8 rounded-lg">
            Contact Our Support Team
          </button>
        </div>
      </div>
    </section>
  );
}
