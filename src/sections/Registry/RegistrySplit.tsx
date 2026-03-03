import { Heart, ShoppingBag } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface RegistrySplitProps {
  section: Section;
}

export default function RegistrySplit({ section }: RegistrySplitProps) {
  return (
    <section className="py-0 bg-white">
      <div className="grid md:grid-cols-2 min-h-screen">
        {/* Left Side - Home Essentials */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-12 md:p-16 flex flex-col justify-center">
          <div className="mb-8">
            <Heart className="w-12 h-12 text-blue-600 mb-4" />
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Home Essentials
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Everything we need to build our nest together. From kitchen to bedroom, we've thoughtfully selected practical items that will serve us well.
            </p>
          </div>

          <div className="space-y-4 mb-8">
            {[
              'Cookware & Bakeware',
              'Dinnerware & Glassware',
              'Bedding & Pillows',
              'Bath Accessories',
              'Kitchen Gadgets',
              'Home Decor',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full" />
                <span className="text-gray-800 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <div className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
              $7,450 • 24 Items
            </div>
          </div>

          <button className="flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors">
            <ShoppingBag className="w-5 h-5" />
            Browse Home Registry
          </button>
        </div>

        {/* Right Side - Experiences */}
        <div className="bg-gradient-to-br from-rose-50 to-rose-100 p-12 md:p-16 flex flex-col justify-center">
          <div className="mb-8">
            <Heart className="w-12 h-12 text-rose-600 mb-4 fill-rose-600" />
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Experiences
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              We'd love to create unforgettable memories together. Help us explore the world and try new adventures as a couple.
            </p>
          </div>

          <div className="space-y-4 mb-8">
            {[
              'Honeymoon Fund',
              'Weekend Getaways',
              'Adventure Activities',
              'Dining Experiences',
              'Wellness & Spa',
              'Travel Opportunities',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="w-2 h-2 bg-rose-600 rounded-full" />
                <span className="text-gray-800 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <div className="inline-block bg-rose-600 text-white px-6 py-3 rounded-lg font-semibold">
              $8,000 • Priceless Memories
            </div>
          </div>

          <button className="flex items-center gap-2 px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-lg transition-colors">
            <ShoppingBag className="w-5 h-5" />
            Browse Experience Fund
          </button>
        </div>
      </div>

      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Start Your Journey</h3>
          <p className="text-lg text-gray-300 mb-8">
            Choose from our home essentials and experience fund, or explore both. Your gift will help us build the life we dream of.
          </p>
          <button className="px-8 py-3 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors">
            View Complete Registry
          </button>
        </div>
      </div>
    </section>
  );
}
