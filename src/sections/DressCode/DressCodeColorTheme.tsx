import { Palette } from 'lucide-react';
import { Section } from '../../types/layoutConfig';

interface DressCodeColorThemeProps {
  section: Section;
}

export default function DressCodeColorTheme({ section }: DressCodeColorThemeProps) {
  const colors = [
    { name: 'Sage Green', hex: '#9CAF88', description: 'Soft and natural' },
    { name: 'Dusty Rose', hex: '#DCAE96', description: 'Romantic and warm' },
    { name: 'Champagne', hex: '#F7E7CE', description: 'Elegant and subtle' },
    { name: 'Terracotta', hex: '#C65D3B', description: 'Rich and earthy' },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-amber-50 to-rose-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Palette className="w-14 h-14 mx-auto mb-6 text-amber-700" />
          <h2 className="text-5xl font-serif text-gray-900 mb-4">Dress Code</h2>
          <p className="text-xl text-gray-600">Semi-Formal with Color Palette</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-12 mb-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-serif text-gray-900 mb-4">Our Color Story</h3>
            <p className="text-lg text-gray-600">
              We'd love for our guests to complement our wedding colors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {colors.map((color, idx) => (
              <div key={idx} className="text-center">
                <div
                  className="w-full aspect-square rounded-full mb-4 shadow-lg mx-auto"
                  style={{ backgroundColor: color.hex }}
                />
                <h4 className="font-semibold text-gray-900 mb-1">{color.name}</h4>
                <p className="text-sm text-gray-600">{color.description}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-8">
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Attire Level</h4>
                <p className="text-gray-700">
                  Semi-formal to cocktail attire in or complementing our color palette
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Please Avoid</h4>
                <p className="text-gray-700">
                  White, ivory, cream, and bright neon colors
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-600 italic">
          Colors are suggestions, not requirements - wear what makes you feel wonderful!
        </p>
      </div>
    </section>
  );
}
