import { useState } from 'react';
import { BookOpen, Lightbulb } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface FAQDetailedProps {
  section: Section;
}

const faqData = [
  {
    question: 'What is included in your comprehensive wedding package?',
    answer: 'Our comprehensive wedding package includes venue selection assistance, decoration design and installation, lighting and sound setup, catering coordination, photography partner connections, day-of coordination, and complete setup/teardown. You get a dedicated event manager for your entire planning process.',
    tip: 'Pro tip: Start planning 3-4 months in advance to maximize vendor availability and options.'
  },
  {
    question: 'How do you handle changes to my event details?',
    answer: 'We understand plans change! Up to 30 days before your event, you can make changes at no cost. Between 14-30 days, minor changes are free but major changes may incur fees. Within 14 days, all changes are billable at our standard rates. Always contact us as soon as you know about changes.',
    tip: 'Key insight: The earlier you communicate changes, the easier we can accommodate them without additional costs.'
  },
  {
    question: 'Can you work with my existing vendors or catering partners?',
    answer: 'Absolutely! We work seamlessly with existing vendors. We coordinate timelines, requirements, and logistics to ensure everything runs smoothly. We just need their contact information and event requirements early in the planning process. This actually helps us create a more cohesive event.',
    tip: 'Money saver: Bringing your own vendors can reduce costs while we handle coordination.'
  },
  {
    question: 'What happens if there\'s bad weather on my event day?',
    answer: 'We have contingency plans for all weather scenarios. If your event is outdoors, we recommend a backup date or indoor venue option. We provide weather monitoring and can quickly pivot to alternative setups. For indoor events, weather is not a concern. Discuss your specific situation during consultation.',
    tip: 'Smart planning: May-October typically has the most predictable weather in most regions.'
  },
  {
    question: 'How is your pricing structured and what factors affect costs?',
    answer: 'Pricing depends on guest count, event duration, location, date (peak/off-season), customization level, and add-on services. We start with a base package price and adjust based on your specific needs. Get a detailed quote during our consultation. Transparent pricing with no hidden fees is our guarantee.',
    tip: 'Budget insight: Off-season events (Nov-Apr) can save you 15-20% compared to peak season.'
  },
  {
    question: 'Do you provide event insurance or liability coverage?',
    answer: 'We carry comprehensive liability insurance for our team and services. We recommend clients also obtain event insurance that covers cancellation, vendor non-performance, and other contingencies. We can provide recommendations for insurance providers. Your venue may also require specific coverage types.',
    tip: 'Protection: Event insurance costs 1-2% of your budget but can save thousands in unexpected situations.'
  },
  {
    question: 'How do you ensure my vision is executed correctly?',
    answer: 'We conduct detailed consultation meetings, create written specifications, provide mood boards and mock-ups for approval, and do regular check-ins throughout the planning process. Your dedicated event manager presents options and gets your approval at every stage. We view collaboration as essential to success.',
    tip: 'Best practice: Attend venue walkthroughs and provide detailed written requirements.'
  },
  {
    question: 'What is your experience with events of my size and style?',
    answer: 'Our team has handled events from 10 to 500+ guests across all styles: weddings, corporate events, galas, intimate celebrations, and more. During consultation, we\'ll share relevant portfolio examples and client testimonials for your event type. You\'ll speak directly with the coordinator who would manage your event.',
    tip: 'Confidence builder: Ask for references from events similar to yours.'
  }
];

export default function FAQDetailed({ section }: FAQDetailedProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <BookOpen className="w-12 h-12 text-rose-500 mx-auto mb-4" />
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-4">
            Detailed Q&A
          </h2>
          <p className="text-xl text-gray-600">
            In-depth answers with planning insights
          </p>
        </div>

        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-start justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg md:text-xl font-bold text-gray-900 pr-4">
                  {item.question}
                </span>
                <span className={`text-rose-500 text-3xl flex-shrink-0 transition-transform ${
                  expandedIndex === index ? 'rotate-180' : ''
                }`}>
                  ∨
                </span>
              </button>
              {expandedIndex === index && (
                <div className="px-8 py-6 bg-gradient-to-br from-gray-50 to-white border-t-2 border-rose-100">
                  <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                    {item.answer}
                  </p>
                  <div className="flex gap-3 items-start bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <Lightbulb size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-blue-900 font-semibold">
                      {item.tip}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-8 border-2 border-rose-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Plan Your Event?</h3>
          <p className="text-gray-700 mb-6">
            Our team is ready to answer your specific questions and create a custom proposal for your event.
          </p>
          <button className="bg-rose-600 hover:bg-rose-700 transition-colors text-white font-bold py-3 px-8 rounded-lg">
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
