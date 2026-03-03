import { ComponentType } from 'react';
import { Section } from '../types/layoutConfig';

import HeroClassic from './Hero/HeroClassic';
import HeroMinimal from './Hero/HeroMinimal';
import HeroEditorial from './Hero/HeroEditorial';
import HeroLuxury from './Hero/HeroLuxury';
import HeroGarden from './Hero/HeroGarden';
import HeroCoastal from './Hero/HeroCoastal';
import HeroPlayful from './Hero/HeroPlayful';
import HeroMoody from './Hero/HeroMoody';

import StoryClassic from './Story/StoryClassic';
import StoryTimeline from './Story/StoryTimeline';

import VenueClassic from './Venue/VenueClassic';
import VenueMinimal from './Venue/VenueMinimal';

import ScheduleClassic from './Schedule/ScheduleClassic';
import TravelClassic from './Travel/TravelClassic';
import RegistryClassic from './Registry/RegistryClassic';
import FAQClassic from './FAQ/FAQClassic';
import RSVPClassic from './RSVP/RSVPClassic';

import GalleryClassic from './Gallery/GalleryClassic';
import GalleryMasonry from './Gallery/GalleryMasonry';

import CountdownClassic from './Countdown/CountdownClassic';
import FooterClassic from './Footer/FooterClassic';

export interface SectionComponent {
  component: ComponentType<{ section: Section }>;
  name: string;
  description: string;
}

export const sectionRegistry: Record<string, Record<string, SectionComponent>> = {
  hero: {
    classic: {
      component: HeroClassic,
      name: 'Classic Hero',
      description: 'Traditional romantic hero with gradient background',
    },
    minimal: {
      component: HeroMinimal,
      name: 'Minimal Hero',
      description: 'Clean, minimalist design with typography focus',
    },
    editorial: {
      component: HeroEditorial,
      name: 'Editorial Hero',
      description: 'Bold, magazine-style hero with dark background',
    },
    luxury: {
      component: HeroLuxury,
      name: 'Luxury Hero',
      description: 'Elegant black-tie feel with gold accents',
    },
    garden: {
      component: HeroGarden,
      name: 'Garden Hero',
      description: 'Fresh garden-inspired design with botanical elements',
    },
    coastal: {
      component: HeroCoastal,
      name: 'Coastal Hero',
      description: 'Beach-inspired design with ocean colors',
    },
    playful: {
      component: HeroPlayful,
      name: 'Playful Hero',
      description: 'Fun, colorful design with animated elements',
    },
    moody: {
      component: HeroMoody,
      name: 'Moody Hero',
      description: 'Dark, cinematic hero with dramatic lighting',
    },
  },
  story: {
    classic: {
      component: StoryClassic,
      name: 'Classic Story',
      description: 'Traditional story section with meeting and proposal',
    },
    timeline: {
      component: StoryTimeline,
      name: 'Timeline Story',
      description: 'Interactive timeline of relationship milestones',
    },
  },
  venue: {
    classic: {
      component: VenueClassic,
      name: 'Classic Venue',
      description: 'Venue details with image and information',
    },
    minimal: {
      component: VenueMinimal,
      name: 'Minimal Venue',
      description: 'Simple, text-focused venue section',
    },
  },
  schedule: {
    classic: {
      component: ScheduleClassic,
      name: 'Classic Schedule',
      description: 'Timeline of wedding day events',
    },
  },
  travel: {
    classic: {
      component: TravelClassic,
      name: 'Classic Travel',
      description: 'Travel and accommodation information',
    },
  },
  registry: {
    classic: {
      component: RegistryClassic,
      name: 'Classic Registry',
      description: 'Gift registry information and links',
    },
  },
  faq: {
    classic: {
      component: FAQClassic,
      name: 'Classic FAQ',
      description: 'Frequently asked questions',
    },
  },
  rsvp: {
    classic: {
      component: RSVPClassic,
      name: 'Classic RSVP',
      description: 'RSVP form for guests',
    },
  },
  gallery: {
    classic: {
      component: GalleryClassic,
      name: 'Classic Gallery',
      description: 'Grid-based photo gallery',
    },
    masonry: {
      component: GalleryMasonry,
      name: 'Masonry Gallery',
      description: 'Pinterest-style masonry layout',
    },
  },
  countdown: {
    classic: {
      component: CountdownClassic,
      name: 'Classic Countdown',
      description: 'Wedding day countdown timer',
    },
  },
  'footer-cta': {
    classic: {
      component: FooterClassic,
      name: 'Classic Footer',
      description: 'Simple footer with thank you message',
    },
  },
};

export function getSectionComponent(type: string, variant: string): ComponentType<{ section: Section }> | null {
  return sectionRegistry[type]?.[variant]?.component || null;
}
