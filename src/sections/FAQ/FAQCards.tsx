import { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface FAQCardsProps {
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

export default function FAQCards({ section }: FAQCardsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-4">
            Common Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to your most pressing questions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 p-6 cursor-pointer ${
                hoveredIndex === index ? 'scale-105' : ''
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <HelpCircle className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 leading-snug">
                  {item.question}
                </h3>
              </div>
              <p className={`text-gray-600 leading-relaxed transition-all duration-300 ${
                hoveredIndex === index ? 'opacity-100' : 'opacity-0 hidden md:block md:opacity-60'
              }`}>
                {hoveredIndex === index && item.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
          <button className="bg-indigo-600 hover:bg-indigo-700 transition-colors text-white font-semibold py-3 px-8 rounded-lg">
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
}
