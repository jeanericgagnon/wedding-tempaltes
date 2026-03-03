import { useState } from 'react';
import { Calendar, DollarSign, Truck, Users } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface FAQCategorizedProps {
  section: Section;
}

const categories = [
  {
    id: 'booking',
    label: 'Booking & Dates',
    icon: Calendar,
    color: 'bg-pink-100 text-pink-700',
    questions: [
      { q: 'How far in advance should I book?', a: 'We recommend booking 3-6 months in advance for peak season (May-October) to ensure availability.' },
      { q: 'Can you accommodate last-minute bookings?', a: 'Sometimes! Contact us for availability. Last-minute bookings may have limited options and premium pricing.' },
      { q: 'What should I do if I need to reschedule?', a: 'Rescheduling is free if done more than 30 days in advance. Otherwise, contact our team to discuss options.' }
    ]
  },
  {
    id: 'pricing',
    label: 'Pricing & Payments',
    icon: DollarSign,
    color: 'bg-green-100 text-green-700',
    questions: [
      { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, PayPal, bank transfers, and installment plans available for orders over $2,000.' },
      { q: 'Is there a deposit required?', a: 'Yes, a 50% deposit is required to secure your date. The remainder is due 14 days before your event.' },
      { q: 'Do you offer discounts for off-season bookings?', a: 'Yes! November-April bookings receive 15-20% discounts. Contact us for specific pricing.' }
    ]
  },
  {
    id: 'policies',
    label: 'Policies & Changes',
    icon: Truck,
    color: 'bg-blue-100 text-blue-700',
    questions: [
      { q: 'What is your cancellation policy?', a: 'Free cancellations up to 30 days before your event. Within 30 days: 50% fee. Within 14 days: 100% non-refundable.' },
      { q: 'What is your refund timeline?', a: 'Approved refunds are processed within 5-7 business days and appear in your original payment method.' },
      { q: 'Do you offer international shipping?', a: 'Yes! We ship worldwide. International orders typically arrive within 7-14 business days.' }
    ]
  },
  {
    id: 'services',
    label: 'Services & Options',
    icon: Users,
    color: 'bg-purple-100 text-purple-700',
    questions: [
      { q: 'Can you customize packages?', a: 'Yes! All our packages are fully customizable. Our team will work with you to create the perfect solution.' },
      { q: 'How many guests can you accommodate?', a: 'We handle intimate gatherings of 10 guests up to grand celebrations of 500+ guests.' },
      { q: 'Do you offer same-day rush services?', a: 'Limited same-day services available. Call immediately or pay 40% rush fee for availability.' }
    ]
  }
];

export default function FAQCategorized({ section }: FAQCategorizedProps) {
  const [selectedCategory, setSelectedCategory] = useState('booking');
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);
  const currentCategory = categories.find(c => c.id === selectedCategory);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-4">
            Questions by Category
          </h2>
          <p className="text-xl text-gray-600">
            Browse FAQs organized by topic
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-lg transition-all ${
                  selectedCategory === category.id
                    ? `${category.color} shadow-lg scale-105`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon className="w-6 h-6 mx-auto mb-2" />
                <p className="font-semibold text-sm">{category.label}</p>
              </button>
            );
          })}
        </div>

        {currentCategory && (
          <div className="space-y-4">
            {currentCategory.questions.map((item, index) => (
              <div
                key={index}
                className="border-l-4 border-gray-200 hover:border-rose-500 transition-colors bg-gray-50 hover:bg-rose-50"
              >
                <button
                  onClick={() => setExpandedQuestion(expandedQuestion === item.q ? null : item.q)}
                  className="w-full text-left p-6 flex items-start justify-between hover:bg-opacity-100"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {item.q}
                  </span>
                  <span className={`text-rose-500 font-bold text-2xl flex-shrink-0 ml-4 transition-transform ${
                    expandedQuestion === item.q ? 'rotate-180' : ''
                  }`}>
                    +
                  </span>
                </button>
                {expandedQuestion === item.q && (
                  <div className="px-6 py-4 bg-white border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
