import { useState } from 'react';
import { Sparkles, Heart, Star, Zap } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface FAQPlayfulProps {
  section: Section;
}

const faqData = [
  {
    emoji: '📅',
    icon: Star,
    question: 'When should we book? ASAP!',
    answer: '3-6 months ahead for peak season is perfect. Early birds get the best dates and pricing!'
  },
  {
    emoji: '💳',
    icon: Heart,
    question: 'Do you accept payment? All the ways!',
    answer: 'Credit cards, PayPal, bank transfers, and installment plans - choose what works for you!'
  },
  {
    emoji: '🚫',
    icon: Zap,
    question: 'What if plans change?',
    answer: 'No worries! Changes are free up to 30 days before. We\'re flexible because life happens!'
  },
  {
    emoji: '🎨',
    icon: Sparkles,
    question: 'Can we customize?',
    answer: 'YES! Every package is totally customizable. Your vision, our expertise = magic!'
  },
  {
    emoji: '🍽️',
    icon: Heart,
    question: 'Dietary needs?',
    answer: 'Vegan, gluten-free, kosher - you name it, we coordinate it. Just give us 2 weeks notice!'
  },
  {
    emoji: '🌧️',
    icon: Zap,
    question: 'What about rain?',
    answer: 'Rain or shine! We have backup plans for everything. Your event will be amazing regardless!'
  },
  {
    emoji: '📸',
    icon: Star,
    question: 'Photography services?',
    answer: 'We partner with awesome photographers. Your memories, beautifully captured!'
  },
  {
    emoji: '🎉',
    icon: Sparkles,
    question: 'How many guests?',
    answer: 'From cozy 10-person gatherings to epic 500+ celebrations. We handle it all with style!'
  }
];

export default function FAQPlayful({ section }: FAQPlayfulProps) {
  const [expandedIndices, setExpandedIndices] = useState<Set<number>>(new Set());

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
    <section className="py-24 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <Sparkles className="w-12 h-12 text-purple-600 mx-auto mb-4" />
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Your Questions Answered
          </h2>
          <p className="text-xl text-gray-700">
            We keep it fun and simple
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqData.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                onClick={() => toggleExpanded(index)}
                className={`text-left rounded-xl p-6 transition-all duration-300 transform hover:scale-105 ${
                  expandedIndices.has(index)
                    ? 'bg-gradient-to-br from-purple-400 to-pink-400 shadow-xl scale-100'
                    : 'bg-white shadow-md hover:shadow-lg'
                }`}
              >
                <div className="flex items-start gap-4 mb-3">
                  <span className="text-4xl flex-shrink-0">{item.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-bold text-lg leading-snug ${
                      expandedIndices.has(index) ? 'text-white' : 'text-gray-900'
                    }`}>
                      {item.question}
                    </h3>
                  </div>
                </div>

                {expandedIndices.has(index) && (
                  <div className="mt-4 pl-16">
                    <p className="text-white leading-relaxed font-medium">
                      {item.answer}
                    </p>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
          <p className="text-lg mb-6 opacity-90">
            We're here to help and we absolutely love talking about events!
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-purple-50 transition-colors">
              Chat with us
            </button>
            <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-purple-600 transition-colors">
              Schedule a call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
