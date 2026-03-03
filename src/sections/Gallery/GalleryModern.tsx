import { Section } from '../../types/layoutConfig';

interface GalleryModernProps {
  section: Section;
}

export default function GalleryModern({ section }: GalleryModernProps) {
  const images = [
    'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg',
    'https://images.pexels.com/photos/169208/pexels-photo-169208.jpeg',
    'https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg',
    'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg',
    'https://images.pexels.com/photos/39691/fresh-water-portrait-blue-natural-1.jpeg',
    'https://images.pexels.com/photos/325521/pexels-photo-325521.jpeg',
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-6xl font-serif text-slate-900 mb-6">Our Memories</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-slate-900 to-slate-500" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div key={i} className="relative h-96 rounded-lg overflow-hidden group">
              <img src={img} alt="Memory" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
