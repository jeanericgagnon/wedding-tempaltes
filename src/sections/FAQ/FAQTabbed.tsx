import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface FAQTabbedProps {
  section: Section;
}

const tabs = [
  {
    id: 'booking',
    label: 'Booking',
    questions: [
      { q: 'How far in advance should I book?', a: 'We recommend 3-6 months in advance for peak season (May-October) to ensure availability and access to premium options.' },
      { q: 'Can you accommodate last-minute bookings?', a: 'Sometimes! Contact us for availability. Last-minute bookings may have limited options and premium pricing.' },
      { q: 'What is your booking process?', a: 'Contact us with your details, discuss your needs, receive a proposal, sign the contract with 50% deposit, then we start planning.' }
    ]
  },
  {
    id: 'pricing',
    label: 'Pricing & Payments',
    questions: [
      { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, PayPal, bank transfers, and installment plans for orders over $2,000.' },
      { q: 'Is there a deposit required?', a: 'Yes, a 50% deposit is required to secure your date. The remainder is due 14 days before your event.' },
      { q: 'Do you offer discounts for off-season bookings?', a: 'Yes! November-April bookings receive 15-20% discounts. Contact us for specific pricing.' }
    ]
  },
  {
    id: 'policies',
    label: 'Policies',
    questions: [
      { q: 'What is your cancellation policy?', a: 'Free cancellations up to 30 days before your event. Within 30 days: 50% fee. Within 14 days: 100% non-refundable.' },
      { q: 'What is your refund timeline?', a: 'Approved refunds are processed within 5-7 business days and will appear in your original payment method.' },
      { q: 'What should I do if I need to reschedule?', a: 'Rescheduling is free if done more than 30 days in advance. Otherwise, contact our team to discuss options and any applicable fees.' }
    ]
  },
  {
    id: 'services',
    label: 'Services',
    questions: [
      { q: 'Can you customize packages?', a: 'Yes! All our packages are fully customizable. Our team will work with you to create the perfect solution for your needs.' },
      { q: 'How many guests can you accommodate?', a: 'We handle intimate gatherings of 10 guests up to grand celebrations of 500+ guests. Each is customized for your space.' },
      { q: 'Do you offer same-day rush services?', a: 'Limited same-day services are available. Call us immediately or pay a 40% rush fee for availability confirmation.' }
    ]
  }
];

export default function FAQTabbed({ section }: FAQTabbedProps) {
  const [activeTab, setActiveTab] = useState('booking');
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set());

  const toggleQuestion = (questionKey: string) => {
    const newSet = new Set(expandedQuestions);
    if (newSet.has(questionKey)) {
      newSet.delete(questionKey);
    } else {
      newSet.add(questionKey);
    }
    setExpandedQuestions(newSet);
  };

  const currentTab = tabs.find(t => t.id === activeTab);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Select a category to explore
          </p>
        </div>

        <div className="mb-12 overflow-x-auto">
          <div className="flex gap-2 md:gap-4 min-w-max md:justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 md:px-8 py-3 rounded-lg font-semibold transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {currentTab && (
          <div className="space-y-4">
            {currentTab.questions.map((item, index) => {
              const questionKey = `${activeTab}-${index}`;
              return (
                <div
                  key={index}
                  className={`rounded-lg overflow-hidden transition-all ${
                    expandedQuestions.has(questionKey)
                      ? 'bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-300'
                      : 'bg-gray-50 border-2 border-gray-200 hover:border-rose-200'
                  }`}
                >
                  <button
                    onClick={() => toggleQuestion(questionKey)}
                    className="w-full px-6 py-5 text-left flex items-start justify-between hover:bg-opacity-75 transition-all"
                  >
                    <span className="text-lg md:text-xl font-bold text-gray-900 pr-4">
                      {item.q}
                    </span>
                    <ChevronDown
                      size={24}
                      className={`text-rose-600 flex-shrink-0 transition-transform ${
                        expandedQuestions.has(questionKey) ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {expandedQuestions.has(questionKey) && (
                    <div className="px-6 py-4 bg-white border-t-2 border-rose-300">
                      <p className="text-gray-700 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-16 bg-gradient-to-r from-rose-100 to-pink-100 rounded-xl p-8 text-center border-l-4 border-rose-500">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Need More Help?</h3>
          <p className="text-gray-700 mb-6">
            Our support team is ready to answer your specific questions
          </p>
          <button className="bg-rose-600 hover:bg-rose-700 transition-colors text-white font-bold py-3 px-8 rounded-lg">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
