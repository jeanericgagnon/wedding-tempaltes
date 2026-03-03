import { Section } from '../../types/layoutConfig';

interface GalleryBoldProps {
  section: Section;
}

export default function GalleryBold({ section }: GalleryBoldProps) {
  const featured = 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg';
  const gallery = [
    'https://images.pexels.com/photos/169208/pexels-photo-169208.jpeg',
    'https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg',
    'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg',
    'https://images.pexels.com/photos/39691/fresh-water-portrait-blue-natural-1.jpeg',
  ];

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-7xl md:text-8xl font-serif mb-20 leading-tight">
          Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className="md:col-span-2 md:row-span-2 relative h-96 md:h-full overflow-hidden rounded-lg group">
            <img src={featured} alt="Featured" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          {gallery.map((img, i) => (
            <div key={i} className="relative h-96 overflow-hidden rounded-lg group">
              <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
