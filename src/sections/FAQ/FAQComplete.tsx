import { useState } from 'react';
import { ChevronRight, Mail, Phone, MessageSquare } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface FAQCompleteProps {
  section: Section;
}

const faqSections = [
  {
    title: 'Getting Started',
    questions: [
      {
        q: 'How do I get started with your services?',
        a: 'Contact our team with your event details. We\'ll discuss your needs, budget, and timeline. Once you\'re ready, we\'ll send you a customized proposal and arrange a consultation.'
      },
      {
        q: 'How far in advance should I book?',
        a: 'We recommend booking 3-6 months in advance for peak season (May-October). This ensures we have maximum availability and can give your event the attention it deserves. Off-season bookings can sometimes be arranged with shorter notice.'
      },
      {
        q: 'Can you accommodate last-minute bookings?',
        a: 'Sometimes! Last-minute bookings depend on our current schedule. We do accept rush bookings with a 40% rush fee. Contact us immediately to check availability.'
      }
    ]
  },
  {
    title: 'Pricing & Payment',
    questions: [
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, bank transfers, and installment plans for orders over $2,000. We also offer flexible payment schedules to help with budgeting.'
      },
      {
        q: 'Is there a deposit required?',
        a: 'Yes, a 50% deposit is required to secure your event date. This is non-refundable except in our cancellation policy terms. The remaining 50% is due 14 days before your event.'
      },
      {
        q: 'Do you offer discounts for off-season bookings?',
        a: 'Yes! November through April bookings receive 15-20% discounts. Additionally, we offer group discounts and loyalty programs for repeat customers.'
      }
    ]
  },
  {
    title: 'Policies & Changes',
    questions: [
      {
        q: 'What is your cancellation policy?',
        a: 'We offer free cancellations up to 30 days before your event. Cancellations 14-30 days before are subject to a 50% fee. Cancellations within 14 days are 100% non-refundable due to resource allocation.'
      },
      {
        q: 'What is your refund timeline?',
        a: 'Approved refunds are processed within 5-7 business days and will appear in your original payment method. You\'ll receive a confirmation email with your refund status and expected arrival date.'
      },
      {
        q: 'What should I do if I need to reschedule?',
        a: 'Rescheduling is completely free if done more than 30 days in advance. For rescheduling within 30 days, contact our team to discuss options. We\'ll work with you to find a solution.'
      }
    ]
  },
  {
    title: 'Services & Customization',
    questions: [
      {
        q: 'Can you customize packages?',
        a: 'Absolutely! All our packages are fully customizable. Our team works closely with you to understand your vision, budget, and requirements. We create tailored solutions that perfectly match your needs.'
      },
      {
        q: 'How many guests can you accommodate?',
        a: 'We handle everything from intimate gatherings of 10 guests to grand celebrations of 500+ guests. Each event is customized for your specific space and requirements.'
      },
      {
        q: 'Do you provide photography services?',
        a: 'We don\'t directly provide photography, but we partner with professional photographers in most locations. We can provide referrals and coordinate with your chosen photographer for seamless integration.'
      },
      {
        q: 'Can you accommodate dietary restrictions?',
        a: 'Yes! We work with caterers to accommodate vegetarian, vegan, gluten-free, kosher, halal, and other dietary needs. Please notify us at least 2 weeks in advance so we can coordinate with our catering partners.'
      }
    ]
  }
];

export default function FAQComplete({ section }: FAQCompleteProps) {
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set());

  const toggleQuestion = (key: string) => {
    const newSet = new Set(expandedQuestions);
    if (newSet.has(key)) {
      newSet.delete(key);
    } else {
      newSet.add(key);
    }
    setExpandedQuestions(newSet);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-4">
            Complete Guide
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive answers to all your questions
          </p>
        </div>

        <div className="space-y-12">
          {faqSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-rose-500">
                {section.title}
              </h3>
              <div className="space-y-4">
                {section.questions.map((item, qIndex) => {
                  const key = `${sectionIndex}-${qIndex}`;
                  return (
                    <div
                      key={key}
                      className="bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleQuestion(key)}
                        className="w-full p-6 flex items-start justify-between text-left hover:text-rose-600 transition-colors"
                      >
                        <span className="text-lg font-semibold text-gray-900 pr-4">
                          {item.q}
                        </span>
                        <ChevronRight
                          size={24}
                          className={`text-rose-500 flex-shrink-0 transition-transform ${
                            expandedQuestions.has(key) ? 'rotate-90' : ''
                          }`}
                        />
                      </button>
                      {expandedQuestions.has(key) && (
                        <div className="px-6 py-4 bg-white border-t border-gray-200">
                          <p className="text-gray-700 leading-relaxed">
                            {item.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t-2 border-gray-200">
          <div className="text-center">
            <Mail className="w-8 h-8 text-rose-500 mx-auto mb-3" />
            <h4 className="font-bold text-gray-900 mb-2">Email Us</h4>
            <p className="text-gray-600">support@example.com</p>
          </div>
          <div className="text-center">
            <Phone className="w-8 h-8 text-rose-500 mx-auto mb-3" />
            <h4 className="font-bold text-gray-900 mb-2">Call Us</h4>
            <p className="text-gray-600">1-800-WEDDING</p>
          </div>
          <div className="text-center">
            <MessageSquare className="w-8 h-8 text-rose-500 mx-auto mb-3" />
            <h4 className="font-bold text-gray-900 mb-2">Live Chat</h4>
            <p className="text-gray-600">Available 9am-5pm EST</p>
          </div>
        </div>
      </div>
    </section>
  );
}
