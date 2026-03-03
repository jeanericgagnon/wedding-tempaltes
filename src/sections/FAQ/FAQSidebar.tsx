import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface FAQSidebarProps {
  section: Section;
}

const categories = [
  {
    id: 'booking',
    label: 'Booking',
    questions: [
      { q: 'How far in advance should I book?', a: 'We recommend 3-6 months in advance for peak season (May-October) to ensure availability.' },
      { q: 'Can you accommodate last-minute bookings?', a: 'Sometimes! Contact us for availability. Last-minute bookings may have limited options and premium pricing.' }
    ]
  },
  {
    id: 'pricing',
    label: 'Pricing & Payment',
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
      { q: 'What is your refund timeline?', a: 'Approved refunds are processed within 5-7 business days and appear in your original payment method.' },
      { q: 'What should I do if I need to reschedule?', a: 'Rescheduling is free if done more than 30 days in advance. Otherwise, contact our team to discuss options.' }
    ]
  },
  {
    id: 'services',
    label: 'Services',
    questions: [
      { q: 'Can you customize packages?', a: 'Yes! All our packages are fully customizable. Our team will work with you to create the perfect solution.' },
      { q: 'How many guests can you accommodate?', a: 'We handle intimate gatherings of 10 guests up to grand celebrations of 500+ guests.' },
      { q: 'Do you offer same-day rush services?', a: 'Limited same-day services are available. Call us immediately or pay a 40% rush fee for availability confirmation.' }
    ]
  }
];

export default function FAQSidebar({ section }: FAQSidebarProps) {
  const [selectedCategory, setSelectedCategory] = useState('booking');
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentCategory = categories.find(c => c.id === selectedCategory);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-4">
            Help & Support
          </h2>
          <p className="text-xl text-gray-600">
            Browse by topic
          </p>
        </div>

        <div className="md:hidden mb-6">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-full flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
          >
            <Menu size={20} />
            {sidebarOpen ? 'Hide' : 'Show'} Categories
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className={`md:block ${sidebarOpen ? 'block' : 'hidden'}`}>
            <div className="space-y-2 sticky top-6">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    selectedCategory === category.id
                      ? 'bg-rose-600 text-white font-bold'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            {currentCategory && (
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-rose-500">
                  {currentCategory.label}
                </h3>
                <div className="space-y-4">
                  {currentCategory.questions.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 border-l-4 border-gray-200 hover:border-rose-500 transition-colors rounded-r-lg overflow-hidden"
                    >
                      <button
                        onClick={() => setExpandedQuestion(expandedQuestion === item.q ? null : item.q)}
                        className="w-full px-6 py-5 text-left flex items-start justify-between hover:bg-white transition-colors"
                      >
                        <span className="font-bold text-gray-900 text-lg pr-4">
                          {item.q}
                        </span>
                        <span className={`text-rose-500 text-2xl flex-shrink-0 transition-transform ${
                          expandedQuestion === item.q ? 'rotate-180' : ''
                        }`}>
                          +
                        </span>
                      </button>
                      {expandedQuestion === item.q && (
                        <div className="px-6 py-4 bg-white border-t-2 border-rose-200">
                          <p className="text-gray-700 leading-relaxed">
                            {item.a}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
