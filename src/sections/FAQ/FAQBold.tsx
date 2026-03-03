import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface FAQBoldProps {
  section: Section;
}

const faqData = [
  {
    question: 'What is your cancellation policy?',
    answer: 'We offer free cancellations up to 30 days before your wedding date. Cancellations within 30 days are subject to a 50% fee. Within 14 days, 100% of fees are non-refundable.'
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Yes! We ship worldwide. International orders typically arrive within 7-14 business days. Shipping costs vary based on destination and order size.'
  },
  {
    question: 'Can you accommodate dietary restrictions?',
    answer: 'Absolutely. We work with caterers to accommodate vegetarian, vegan, gluten-free, and other dietary needs. Please notify us at least 2 weeks in advance.'
  },
  {
    question: 'What is your refund timeline?',
    answer: 'Approved refunds are processed within 5-7 business days and will appear in your original payment method.'
  },
  {
    question: 'Do you provide photography services?',
    answer: 'We partner with professional photographers in most locations. Contact us for referrals and package details.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, bank transfers, and installment plans available for orders over $2,000.'
  },
  {
    question: 'How far in advance should I book?',
    answer: 'We recommend booking 3-6 months in advance for peak season (May-October) to ensure availability.'
  },
  {
    question: 'Can you customize packages?',
    answer: 'Yes! All our packages are fully customizable. Our team will work with you to create the perfect solution for your needs.'
  },
  {
    question: 'What is included in the setup and teardown?',
    answer: 'Our team handles complete setup, including decoration placement, lighting adjustments, and full cleanup after your event.'
  },
  {
    question: 'Do you offer same-day rush services?',
    answer: 'Limited same-day services are available. Call us immediately or pay a 40% rush fee for availability confirmation.'
  },
  {
    question: 'How many guests can you accommodate?',
    answer: 'We handle intimate gatherings of 10 guests up to grand celebrations of 500+ guests. Each is customized for your space.'
  },
  {
    question: 'What should I do if I need to reschedule?',
    answer: 'Rescheduling is free if done more than 30 days in advance. Otherwise, contact our team to discuss options and any applicable fees.'
  }
];

export default function FAQBold({ section }: FAQBoldProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to know about our services
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border-l-4 border-rose-500">
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full bg-gray-800 hover:bg-gray-750 transition-colors py-6 px-6 flex items-start justify-between"
              >
                <span className="text-left text-lg md:text-xl font-bold text-white">
                  {item.question}
                </span>
                <ChevronDown
                  size={24}
                  className={`text-rose-500 flex-shrink-0 ml-4 transition-transform ${
                    expandedIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedIndex === index && (
                <div className="bg-gray-750 px-6 py-6 border-t border-gray-700">
                  <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
