import { Section } from '../../types/layoutConfig';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { useState } from 'react';

interface StoryCarouselProps {
  section: Section;
}

const storySlides = [
  {
    id: 1,
    title: 'The Beginning',
    subtitle: 'Summer 2021',
    description: 'Sofia caught Marcus\'s eye at a gallery opening in Brooklyn. While everyone admired the artwork, their eyes met over a glass of champagne, sparking a conversation that wouldn\'t end for hours. Two souls discovering they\'d been searching for each other all along.',
    icon: '🎨',
    gradient: 'from-rose-100 to-pink-100',
    textColor: 'text-rose-900'
  },
  {
    id: 2,
    title: 'First Adventure',
    subtitle: 'Fall 2021',
    description: 'Their first road trip took them up the coastal highway with no destination in mind. Marcus surprised Sofia with a spontaneous picnic at sunset overlooking the ocean. It was in that moment, surrounded by golden light and endless possibilities, that Marcus realized Sofia was the one.',
    icon: '🌅',
    gradient: 'from-amber-100 to-orange-100',
    textColor: 'text-amber-900'
  },
  {
    id: 3,
    title: 'The Question',
    subtitle: 'Spring 2023',
    description: 'Marcus planned the perfect proposal back at their favorite overlook. He recreated their first picnic, complete with Sofia\'s favorite pastries and that same golden hour light. As she turned around with champagne in hand, Marcus dropped to one knee with his grandmother\'s diamond ring.',
    icon: '💍',
    gradient: 'from-purple-100 to-pink-100',
    textColor: 'text-purple-900'
  },
  {
    id: 4,
    title: 'Wedding Day',
    subtitle: 'Today',
    description: 'Surrounded by everyone who matters most, Sofia and Marcus stand ready to write their greatest chapter together. Two lives, one love, infinite tomorrows. Their journey continues, and today marks the beginning of forever.',
    icon: '💕',
    gradient: 'from-red-100 to-rose-100',
    textColor: 'text-red-900'
  }
];

export default function StoryCarousel({ section }: StoryCarouselProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const bride = section.bindings?.bride || 'Sofia';
  const groom = section.bindings?.groom || 'Marcus';

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % storySlides.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + storySlides.length) % storySlides.length);

  const currentSlide = storySlides[activeSlide];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-gray-900 mb-2">
            Our Story
          </h2>
          <p className="text-lg text-gray-600 font-light">A journey through moments that matter</p>
        </div>

        <div className="relative">
          <div className={`bg-gradient-to-br ${currentSlide.gradient} rounded-2xl p-12 md:p-16 min-h-96 flex flex-col justify-center shadow-lg transition-all duration-500`}>
            <div className="text-5xl mb-6">{currentSlide.icon}</div>

            <div className="mb-8">
              <h3 className={`text-4xl font-serif mb-2 ${currentSlide.textColor}`}>
                {currentSlide.title}
              </h3>
              <p className={`text-lg font-semibold tracking-widest uppercase ${currentSlide.textColor} opacity-70`}>
                {currentSlide.subtitle}
              </p>
            </div>

            <p className={`text-lg leading-relaxed font-light max-w-2xl ${currentSlide.textColor}`}>
              {currentSlide.description}
            </p>

            <div className="mt-8 pt-8 border-t border-current opacity-30 flex items-center gap-2">
              <Heart size={16} className={currentSlide.textColor} fill="currentColor" />
              <span className={`text-sm font-semibold uppercase tracking-wide ${currentSlide.textColor}`}>
                {bride} & {groom}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between absolute -left-4 -right-4 top-1/2 -translate-y-1/2 md:-left-6 md:-right-6">
            <button
              onClick={prevSlide}
              className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl hover:scale-110 transition-all z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="text-gray-900" size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl hover:scale-110 transition-all z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="text-gray-900" size={24} />
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {storySlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-3 rounded-full transition-all ${
                index === activeSlide
                  ? 'bg-rose-500 w-8'
                  : 'bg-gray-300 w-3 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
