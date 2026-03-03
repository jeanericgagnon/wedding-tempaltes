import { Section } from '../../types/layoutConfig';

interface GalleryLuxuryProps {
  section: Section;
}

const luxuryImages = [
  'https://images.pexels.com/photos/1690485/pexels-photo-1690485.jpeg',
  'https://images.pexels.com/photos/457925/pexels-photo-457925.jpeg',
  'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg',
  'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg',
  'https://images.pexels.com/photos/2789550/pexels-photo-2789550.jpeg',
  'https://images.pexels.com/photos/1321471/pexels-photo-1321471.jpeg',
  'https://images.pexels.com/photos/2269541/pexels-photo-2269541.jpeg',
  'https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg',
];

export default function GalleryLuxury({ section }: GalleryLuxuryProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-serif text-white mb-8">
            Our Wedding Gallery
          </h2>
          <div className="flex justify-center">
            <div className="h-px w-32 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {luxuryImages.map((image, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
            >
              <img
                src={image}
                alt={`Wedding moment ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
              <div className="absolute inset-0 border border-amber-400/0 group-hover:border-amber-400/50 transition-all duration-500 rounded-lg" />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 text-sm tracking-widest uppercase">
            Moments of Pure Joy
          </p>
        </div>
      </div>
    </section>
  );
}
