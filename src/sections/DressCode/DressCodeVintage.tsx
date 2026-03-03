import { Clock } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface DressCodeVintageProps {
  section: Section;
}

export default function DressCodeVintage({ section }: DressCodeVintageProps) {
  return (
    <section className="py-24 bg-amber-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <Clock className="w-12 h-12 mx-auto mb-6 text-amber-700" />
          <h2 className="text-5xl font-serif text-gray-900 mb-4">Dress Code</h2>
          <p className="text-2xl text-amber-800 font-light">Vintage Glamour - 1920s Inspired</p>
        </div>

        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 p-8 text-center">
            <p className="text-xl text-gray-800 leading-relaxed">
              Step back in time with us! We're celebrating with roaring twenties glamour and vintage elegance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-12 border-r border-gray-200">
              <h3 className="text-3xl font-serif text-gray-900 mb-6">For the Ladies</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Flapper dresses with fringe</li>
                <li>• Drop-waist gowns</li>
                <li>• Art deco accessories</li>
                <li>• Feathers, pearls, and headbands</li>
                <li>• T-strap heels or Mary Janes</li>
              </ul>
            </div>

            <div className="p-12">
              <h3 className="text-3xl font-serif text-gray-900 mb-6">For the Gentlemen</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Three-piece suits</li>
                <li>• Suspenders and bow ties</li>
                <li>• Fedoras or newsboy caps</li>
                <li>• Pocket watches</li>
                <li>• Wingtip or Oxford shoes</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 p-6 text-center">
            <p className="text-gray-700 italic">Vintage attire encouraged but not required - formal wear always welcome!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
