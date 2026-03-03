import { useState } from 'react';
import { TrendingUp, Star } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface FAQPopularProps {
  section: Section;
}

const faqData = [
  {
    rank: 1,
    question: 'How far in advance should I book?',
    answer: 'We recommend 3-6 months in advance for peak season to ensure availability.',
    views: '15.2K'
  },
  {
    rank: 2,
    question: 'What is your cancellation policy?',
    answer: 'Free cancellations up to 30 days before. 50% fee within 30 days, 100% within 14 days.',
    views: '12.8K'
  },
  {
    rank: 3,
    question: 'Can you customize packages?',
    answer: 'Yes! All our packages are fully customizable to meet your specific needs.',
    views: '11.5K'
  },
  {
    rank: 4,
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, bank transfers, and installment plans.',
    views: '9.7K'
  },
  {
    rank: 5,
    question: 'How many guests can you accommodate?',
    answer: 'We handle events from 10 intimate guests to 500+ grand celebrations.',
    views: '8.9K'
  },
  {
    rank: 6,
    question: 'Do you accommodate dietary restrictions?',
    answer: 'Absolutely! We work with caterers for vegetarian, vegan, gluten-free options.',
    views: '7.3K'
  },
  {
    rank: 7,
    question: 'What is your refund timeline?',
    answer: 'Approved refunds process within 5-7 business days.',
    views: '6.1K'
  },
  {
    rank: 8,
    question: 'Do you provide photography services?',
    answer: 'We partner with professional photographers and can provide referrals.',
    views: '5.8K'
  }
];

export default function FAQPopular({ section }: FAQPopularProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <TrendingUp className="w-12 h-12 text-rose-500 mx-auto mb-4" />
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-4">
            Most Popular Questions
          </h2>
          <p className="text-xl text-gray-600">
            The 8 most-asked questions by our customers
          </p>
        </div>

        <div className="space-y-3">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`rounded-lg border-2 transition-all ${
                expandedIndex === index
                  ? 'border-rose-500 bg-gradient-to-r from-rose-50 to-pink-50'
                  : 'border-gray-200 bg-gray-50 hover:border-rose-300'
              }`}
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-start justify-between hover:text-rose-600 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-500 text-white font-bold text-sm flex-shrink-0">
                      {item.rank}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">
                      {item.question}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 ml-12 text-sm text-gray-500">
                    <TrendingUp size={16} className="text-rose-500" />
                    <span>{item.views} views</span>
                  </div>
                </div>
                <span className={`text-rose-500 text-2xl flex-shrink-0 ml-4 transition-transform ${
                  expandedIndex === index ? 'rotate-180' : ''
                }`}>
                  ∨
                </span>
              </button>

              {expandedIndex === index && (
                <div className="px-6 py-4 bg-white border-t-2 border-rose-200">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {item.answer}
                  </p>
                  <div className="mt-4 flex items-center gap-2 pt-4 border-t border-gray-200">
                    <Star size={18} className="text-amber-400 fill-amber-400" />
                    <span className="text-sm font-semibold text-gray-600">
                      Was this helpful?
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-rose-100 to-pink-100 rounded-xl p-8 border-l-4 border-rose-500">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Not finding what you need?</h3>
          <p className="text-gray-700 mb-4">
            Browse all questions or reach out to our team directly for personalized assistance.
          </p>
          <div className="flex flex-col md:flex-row gap-3">
            <button className="bg-rose-600 hover:bg-rose-700 transition-colors text-white font-bold py-2 px-6 rounded-lg">
              View All Questions
            </button>
            <button className="border-2 border-rose-600 text-rose-600 hover:bg-rose-50 font-bold py-2 px-6 rounded-lg transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
