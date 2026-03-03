const fs = require('fs');
const path = require('path');

const componentTemplate = (sectionName, variantName, sectionType) => `import { Section } from '../../types/layoutConfig';

interface ${sectionName}${variantName}Props {
  section: Section;
}

export default function ${sectionName}${variantName}({ section }: ${sectionName}${variantName}Props) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-serif text-center text-gray-900 mb-8">
          ${sectionName} - ${variantName} Variant
        </h2>
        <p className="text-center text-gray-600">
          This is the ${variantName.toLowerCase()} variant of the ${sectionName.toLowerCase()} section.
        </p>
      </div>
    </section>
  );
}
`;

const variantsBySection = {
  Accommodations: ['Classic', 'Cards', 'Minimal', 'Grid', 'Split', 'Luxury', 'Compact', 'Map', 'List', 'Detailed', 'Modern', 'Elegant', 'Showcase', 'Featured', 'Budget', 'Nearby', 'Blocks', 'Timeline', 'Recommendations', 'Interactive'],
  Hero: ['Cinematic', 'Asymmetric', 'Centered', 'Floating', 'Layered', 'Bold', 'Refined', 'Artistic', 'Magazine'],
  Story: ['Minimal', 'Narrative', 'Stacked', 'Editorial', 'Carousel', 'Cinematic', 'Scrapbook', 'Grid', 'Polaroid', 'Immersive', 'Modern', 'Magazine', 'Luxury', 'Playful', 'Compact', 'Bold'],
  Venue: ['Editorial', 'Luxury', 'Modern', 'Stacked', 'Cinematic', 'Compact', 'Grid', 'Immersive', 'Timeline', 'Playful', 'Bold', 'Refined', 'Garden', 'Coastal', 'Magazine', 'Artistic'],
  Schedule: ['Timeline', 'Grid', 'Split', 'Stacked', 'Compact', 'Modern', 'Luxury', 'Playful', 'Bold', 'Elegant', 'Detailed', 'Simple', 'Itinerary', 'Agenda', 'Program', 'Timetable', 'Planner'],
  Travel: ['Grid', 'Cards', 'Split', 'Detailed', 'Modern', 'Minimal', 'Luxury', 'Playful', 'Bold', 'Elegant', 'Directions', 'Transportation', 'Routes', 'Getting', 'Parking', 'Airport', 'Shuttle'],
  Registry: ['Grid', 'Split', 'Modern', 'Luxury', 'Playful', 'Bold', 'Elegant', 'Detailed', 'Simple', 'Featured', 'Curated', 'Honeymoon', 'Cash', 'Charity', 'Experiences', 'Traditional', 'Contemporary'],
  FAQ: ['Split', 'Cards', 'Modern', 'Minimal', 'Luxury', 'Playful', 'Bold', 'Elegant', 'Compact', 'Detailed', 'Simple', 'Sidebar', 'Tabbed', 'Categorized', 'Search', 'Popular', 'Complete'],
  RSVP: ['Cards', 'Split', 'Modern', 'Luxury', 'Playful', 'Bold', 'Elegant', 'Detailed', 'Quick', 'Interactive', 'Wizard', 'Inline', 'Floating', 'Sidebar', 'Fullscreen', 'Compact', 'Extended'],
  Gallery: ['Grid', 'Split', 'Timeline', 'Spotlight', 'Featured', 'Modern', 'Minimal', 'Luxury', 'Playful', 'Bold', 'Elegant', 'Polaroid', 'Filmstrip', 'Slideshow', 'Lightbox', 'Instagram'],
  Countdown: ['Minimal', 'Cards', 'Split', 'Modern', 'Luxury', 'Playful', 'Bold', 'Elegant', 'Compact', 'Detailed', 'Animated', 'Floating', 'Inline', 'Sidebar', 'Hero', 'Ticker', 'Flip', 'Circle', 'Progress'],
  Footer: ['Cards', 'Split', 'Grid', 'Modern', 'Luxury', 'Playful', 'Bold', 'Elegant', 'Compact', 'Detailed', 'Newsletter', 'Social', 'Contact', 'Links', 'Simple', 'Rich', 'Immersive'],
};

for (const [section, variants] of Object.entries(variantsBySection)) {
  const sectionDir = path.join(__dirname, 'src', 'sections', section);

  if (!fs.existsSync(sectionDir)){
    fs.mkdirSync(sectionDir, { recursive: true });
  }

  for (const variant of variants) {
    const fileName = `${section}${variant}.tsx`;
    const filePath = path.join(sectionDir, fileName);

    if (!fs.existsSync(filePath)) {
      const content = componentTemplate(section, variant, section.toLowerCase());
      fs.writeFileSync(filePath, content);
      console.log(`Created: ${filePath}`);
    }
  }
}

console.log('Done generating variant files!');
