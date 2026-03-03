import { Section } from '../../types/layoutConfig';

interface GalleryPlayfulProps {
  section: Section;
}

export default function GalleryPlayful({ section }: GalleryPlayfulProps) {
  const images = [
    { url: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg', alt: 'Engagement Moment' },
    { url: 'https://images.pexels.com/photos/169208/pexels-photo-169208.jpeg', alt: 'Us Together' },
    { url: 'https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg', alt: 'Our Love' },
    { url: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg', alt: 'Celebration' },
    { url: 'https://images.pexels.com/photos/39691/fresh-water-portrait-blue-natural-1.jpeg', alt: 'Adventure' },
    { url: 'https://images.pexels.com/photos/325521/pexels-photo-325521.jpeg', alt: 'Memories' },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-serif text-center text-gray-900 mb-4">Photo Gallery</h2>
        <p className="text-center text-gray-600 text-lg mb-16">Moments we treasure</p>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="group relative h-80 overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <img src={img.url} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
