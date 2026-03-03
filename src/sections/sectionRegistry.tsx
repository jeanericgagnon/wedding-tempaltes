import { ComponentType } from 'react';
import { Section } from '../types/layoutConfig';

import AccommodationsBlocks from './Accommodations/AccommodationsBlocks';
import AccommodationsBudget from './Accommodations/AccommodationsBudget';
import AccommodationsCards from './Accommodations/AccommodationsCards';
import AccommodationsClassic from './Accommodations/AccommodationsClassic';
import AccommodationsCompact from './Accommodations/AccommodationsCompact';
import AccommodationsDetailed from './Accommodations/AccommodationsDetailed';
import AccommodationsElegant from './Accommodations/AccommodationsElegant';
import AccommodationsFeatured from './Accommodations/AccommodationsFeatured';
import AccommodationsGrid from './Accommodations/AccommodationsGrid';
import AccommodationsInteractive from './Accommodations/AccommodationsInteractive';
import AccommodationsList from './Accommodations/AccommodationsList';
import AccommodationsLuxury from './Accommodations/AccommodationsLuxury';
import AccommodationsMap from './Accommodations/AccommodationsMap';
import AccommodationsMinimal from './Accommodations/AccommodationsMinimal';
import AccommodationsModern from './Accommodations/AccommodationsModern';
import AccommodationsNearby from './Accommodations/AccommodationsNearby';
import AccommodationsRecommendations from './Accommodations/AccommodationsRecommendations';
import AccommodationsShowcase from './Accommodations/AccommodationsShowcase';
import AccommodationsSplit from './Accommodations/AccommodationsSplit';
import AccommodationsTimeline from './Accommodations/AccommodationsTimeline';
import CountdownAnimated from './Countdown/CountdownAnimated';
import CountdownBold from './Countdown/CountdownBold';
import CountdownCards from './Countdown/CountdownCards';
import CountdownCircle from './Countdown/CountdownCircle';
import CountdownClassic from './Countdown/CountdownClassic';
import CountdownCompact from './Countdown/CountdownCompact';
import CountdownDetailed from './Countdown/CountdownDetailed';
import CountdownElegant from './Countdown/CountdownElegant';
import CountdownFlip from './Countdown/CountdownFlip';
import CountdownFloating from './Countdown/CountdownFloating';
import CountdownHero from './Countdown/CountdownHero';
import CountdownInline from './Countdown/CountdownInline';
import CountdownLuxury from './Countdown/CountdownLuxury';
import CountdownMinimal from './Countdown/CountdownMinimal';
import CountdownModern from './Countdown/CountdownModern';
import CountdownPlayful from './Countdown/CountdownPlayful';
import CountdownProgress from './Countdown/CountdownProgress';
import CountdownSidebar from './Countdown/CountdownSidebar';
import CountdownSplit from './Countdown/CountdownSplit';
import CountdownTicker from './Countdown/CountdownTicker';
import DressCodeBeach from './DressCode/DressCodeBeach';
import DressCodeBoho from './DressCode/DressCodeBoho';
import DressCodeCards from './DressCode/DressCodeCards';
import DressCodeCasual from './DressCode/DressCodeCasual';
import DressCodeClassic from './DressCode/DressCodeClassic';
import DressCodeCocktail from './DressCode/DressCodeCocktail';
import DressCodeColorTheme from './DressCode/DressCodeColorTheme';
import DressCodeCreative from './DressCode/DressCodeCreative';
import DressCodeElegant from './DressCode/DressCodeElegant';
import DressCodeFestive from './DressCode/DressCodeFestive';
import DressCodeGarden from './DressCode/DressCodeGarden';
import DressCodeLuxury from './DressCode/DressCodeLuxury';
import DressCodeMinimal from './DressCode/DressCodeMinimal';
import DressCodeModern from './DressCode/DressCodeModern';
import DressCodePlayful from './DressCode/DressCodePlayful';
import DressCodeRustic from './DressCode/DressCodeRustic';
import DressCodeSplit from './DressCode/DressCodeSplit';
import DressCodeTropical from './DressCode/DressCodeTropical';
import DressCodeVintage from './DressCode/DressCodeVintage';
import DressCodeWinter from './DressCode/DressCodeWinter';
import FAQAccordion from './FAQ/FAQAccordion';
import FAQBold from './FAQ/FAQBold';
import FAQCards from './FAQ/FAQCards';
import FAQCategorized from './FAQ/FAQCategorized';
import FAQClassic from './FAQ/FAQClassic';
import FAQCompact from './FAQ/FAQCompact';
import FAQComplete from './FAQ/FAQComplete';
import FAQDetailed from './FAQ/FAQDetailed';
import FAQElegant from './FAQ/FAQElegant';
import FAQGrid from './FAQ/FAQGrid';
import FAQLuxury from './FAQ/FAQLuxury';
import FAQMinimal from './FAQ/FAQMinimal';
import FAQModern from './FAQ/FAQModern';
import FAQPlayful from './FAQ/FAQPlayful';
import FAQPopular from './FAQ/FAQPopular';
import FAQSearch from './FAQ/FAQSearch';
import FAQSidebar from './FAQ/FAQSidebar';
import FAQSimple from './FAQ/FAQSimple';
import FAQSplit from './FAQ/FAQSplit';
import FAQTabbed from './FAQ/FAQTabbed';
import FooterBold from './Footer/FooterBold';
import FooterCards from './Footer/FooterCards';
import FooterClassic from './Footer/FooterClassic';
import FooterCompact from './Footer/FooterCompact';
import FooterContact from './Footer/FooterContact';
import FooterDetailed from './Footer/FooterDetailed';
import FooterElegant from './Footer/FooterElegant';
import FooterExpanded from './Footer/FooterExpanded';
import FooterGrid from './Footer/FooterGrid';
import FooterImmersive from './Footer/FooterImmersive';
import FooterLinks from './Footer/FooterLinks';
import FooterLuxury from './Footer/FooterLuxury';
import FooterMinimal from './Footer/FooterMinimal';
import FooterModern from './Footer/FooterModern';
import FooterNewsletter from './Footer/FooterNewsletter';
import FooterPlayful from './Footer/FooterPlayful';
import FooterRich from './Footer/FooterRich';
import FooterSimple from './Footer/FooterSimple';
import FooterSocial from './Footer/FooterSocial';
import FooterSplit from './Footer/FooterSplit';
import GalleryBold from './Gallery/GalleryBold';
import GalleryCarousel from './Gallery/GalleryCarousel';
import GalleryClassic from './Gallery/GalleryClassic';
import GalleryElegant from './Gallery/GalleryElegant';
import GalleryFeatured from './Gallery/GalleryFeatured';
import GalleryFilmstrip from './Gallery/GalleryFilmstrip';
import GalleryFullwidth from './Gallery/GalleryFullwidth';
import GalleryGrid from './Gallery/GalleryGrid';
import GalleryInstagram from './Gallery/GalleryInstagram';
import GalleryLightbox from './Gallery/GalleryLightbox';
import GalleryLuxury from './Gallery/GalleryLuxury';
import GalleryMasonry from './Gallery/GalleryMasonry';
import GalleryMinimal from './Gallery/GalleryMinimal';
import GalleryModern from './Gallery/GalleryModern';
import GalleryPlayful from './Gallery/GalleryPlayful';
import GalleryPolaroid from './Gallery/GalleryPolaroid';
import GallerySlideshow from './Gallery/GallerySlideshow';
import GallerySplit from './Gallery/GallerySplit';
import GallerySpotlight from './Gallery/GallerySpotlight';
import GalleryTimeline from './Gallery/GalleryTimeline';
import HeroArtistic from './Hero/HeroArtistic';
import HeroAsymmetric from './Hero/HeroAsymmetric';
import HeroBold from './Hero/HeroBold';
import HeroCentered from './Hero/HeroCentered';
import HeroCinematic from './Hero/HeroCinematic';
import HeroClassic from './Hero/HeroClassic';
import HeroCoastal from './Hero/HeroCoastal';
import HeroEditorial from './Hero/HeroEditorial';
import HeroFloating from './Hero/HeroFloating';
import HeroFullscreen from './Hero/HeroFullscreen';
import HeroGarden from './Hero/HeroGarden';
import HeroLayered from './Hero/HeroLayered';
import HeroLuxury from './Hero/HeroLuxury';
import HeroMagazine from './Hero/HeroMagazine';
import HeroMinimal from './Hero/HeroMinimal';
import HeroMoody from './Hero/HeroMoody';
import HeroPlayful from './Hero/HeroPlayful';
import HeroRefined from './Hero/HeroRefined';
import HeroSplit from './Hero/HeroSplit';
import HeroStacked from './Hero/HeroStacked';
import RSVPBold from './RSVP/RSVPBold';
import RSVPCards from './RSVP/RSVPCards';
import RSVPClassic from './RSVP/RSVPClassic';
import RSVPCompact from './RSVP/RSVPCompact';
import RSVPDetailed from './RSVP/RSVPDetailed';
import RSVPElegant from './RSVP/RSVPElegant';
import RSVPExtended from './RSVP/RSVPExtended';
import RSVPFloating from './RSVP/RSVPFloating';
import RSVPForm from './RSVP/RSVPForm';
import RSVPFullscreen from './RSVP/RSVPFullscreen';
import RSVPInline from './RSVP/RSVPInline';
import RSVPInteractive from './RSVP/RSVPInteractive';
import RSVPLuxury from './RSVP/RSVPLuxury';
import RSVPMinimal from './RSVP/RSVPMinimal';
import RSVPModern from './RSVP/RSVPModern';
import RSVPPlayful from './RSVP/RSVPPlayful';
import RSVPQuick from './RSVP/RSVPQuick';
import RSVPSidebar from './RSVP/RSVPSidebar';
import RSVPSplit from './RSVP/RSVPSplit';
import RSVPWizard from './RSVP/RSVPWizard';
import RegistryBold from './Registry/RegistryBold';
import RegistryCards from './Registry/RegistryCards';
import RegistryCash from './Registry/RegistryCash';
import RegistryCharity from './Registry/RegistryCharity';
import RegistryClassic from './Registry/RegistryClassic';
import RegistryContemporary from './Registry/RegistryContemporary';
import RegistryCurated from './Registry/RegistryCurated';
import RegistryDetailed from './Registry/RegistryDetailed';
import RegistryElegant from './Registry/RegistryElegant';
import RegistryExperiences from './Registry/RegistryExperiences';
import RegistryFeatured from './Registry/RegistryFeatured';
import RegistryGrid from './Registry/RegistryGrid';
import RegistryHoneymoon from './Registry/RegistryHoneymoon';
import RegistryLuxury from './Registry/RegistryLuxury';
import RegistryMinimal from './Registry/RegistryMinimal';
import RegistryModern from './Registry/RegistryModern';
import RegistryPlayful from './Registry/RegistryPlayful';
import RegistrySimple from './Registry/RegistrySimple';
import RegistrySplit from './Registry/RegistrySplit';
import RegistryTraditional from './Registry/RegistryTraditional';
import ScheduleAgenda from './Schedule/ScheduleAgenda';
import ScheduleBold from './Schedule/ScheduleBold';
import ScheduleCards from './Schedule/ScheduleCards';
import ScheduleClassic from './Schedule/ScheduleClassic';
import ScheduleCompact from './Schedule/ScheduleCompact';
import ScheduleDetailed from './Schedule/ScheduleDetailed';
import ScheduleElegant from './Schedule/ScheduleElegant';
import ScheduleGrid from './Schedule/ScheduleGrid';
import ScheduleItinerary from './Schedule/ScheduleItinerary';
import ScheduleLuxury from './Schedule/ScheduleLuxury';
import ScheduleMinimal from './Schedule/ScheduleMinimal';
import ScheduleModern from './Schedule/ScheduleModern';
import SchedulePlanner from './Schedule/SchedulePlanner';
import SchedulePlayful from './Schedule/SchedulePlayful';
import ScheduleProgram from './Schedule/ScheduleProgram';
import ScheduleSimple from './Schedule/ScheduleSimple';
import ScheduleSplit from './Schedule/ScheduleSplit';
import ScheduleStacked from './Schedule/ScheduleStacked';
import ScheduleTimeline from './Schedule/ScheduleTimeline';
import ScheduleTimetable from './Schedule/ScheduleTimetable';
import StoryBold from './Story/StoryBold';
import StoryCards from './Story/StoryCards';
import StoryCarousel from './Story/StoryCarousel';
import StoryCinematic from './Story/StoryCinematic';
import StoryClassic from './Story/StoryClassic';
import StoryCompact from './Story/StoryCompact';
import StoryEditorial from './Story/StoryEditorial';
import StoryGrid from './Story/StoryGrid';
import StoryImmersive from './Story/StoryImmersive';
import StoryLuxury from './Story/StoryLuxury';
import StoryMagazine from './Story/StoryMagazine';
import StoryMinimal from './Story/StoryMinimal';
import StoryModern from './Story/StoryModern';
import StoryNarrative from './Story/StoryNarrative';
import StoryPlayful from './Story/StoryPlayful';
import StoryPolaroid from './Story/StoryPolaroid';
import StoryScrapbook from './Story/StoryScrapbook';
import StorySplit from './Story/StorySplit';
import StoryStacked from './Story/StoryStacked';
import StoryTimeline from './Story/StoryTimeline';
import TravelAirport from './Travel/TravelAirport';
import TravelBold from './Travel/TravelBold';
import TravelCards from './Travel/TravelCards';
import TravelClassic from './Travel/TravelClassic';
import TravelCompact from './Travel/TravelCompact';
import TravelDetailed from './Travel/TravelDetailed';
import TravelDirections from './Travel/TravelDirections';
import TravelElegant from './Travel/TravelElegant';
import TravelGetting from './Travel/TravelGetting';
import TravelGrid from './Travel/TravelGrid';
import TravelLuxury from './Travel/TravelLuxury';
import TravelMap from './Travel/TravelMap';
import TravelMinimal from './Travel/TravelMinimal';
import TravelModern from './Travel/TravelModern';
import TravelParking from './Travel/TravelParking';
import TravelPlayful from './Travel/TravelPlayful';
import TravelRoutes from './Travel/TravelRoutes';
import TravelShuttle from './Travel/TravelShuttle';
import TravelSplit from './Travel/TravelSplit';
import TravelTransportation from './Travel/TravelTransportation';
import VenueArtistic from './Venue/VenueArtistic';
import VenueBold from './Venue/VenueBold';
import VenueCards from './Venue/VenueCards';
import VenueCinematic from './Venue/VenueCinematic';
import VenueClassic from './Venue/VenueClassic';
import VenueCoastal from './Venue/VenueCoastal';
import VenueCompact from './Venue/VenueCompact';
import VenueEditorial from './Venue/VenueEditorial';
import VenueGarden from './Venue/VenueGarden';
import VenueGrid from './Venue/VenueGrid';
import VenueImmersive from './Venue/VenueImmersive';
import VenueLuxury from './Venue/VenueLuxury';
import VenueMagazine from './Venue/VenueMagazine';
import VenueMinimal from './Venue/VenueMinimal';
import VenueModern from './Venue/VenueModern';
import VenuePlayful from './Venue/VenuePlayful';
import VenueRefined from './Venue/VenueRefined';
import VenueSplit from './Venue/VenueSplit';
import VenueStacked from './Venue/VenueStacked';
import VenueTimeline from './Venue/VenueTimeline';
import WeddingPartyBold from './WeddingParty/WeddingPartyBold';
import WeddingPartyCards from './WeddingParty/WeddingPartyCards';
import WeddingPartyCarousel from './WeddingParty/WeddingPartyCarousel';
import WeddingPartyCircle from './WeddingParty/WeddingPartyCircle';
import WeddingPartyClassic from './WeddingParty/WeddingPartyClassic';
import WeddingPartyCompact from './WeddingParty/WeddingPartyCompact';
import WeddingPartyElegant from './WeddingParty/WeddingPartyElegant';
import WeddingPartyFilmstrip from './WeddingParty/WeddingPartyFilmstrip';
import WeddingPartyGrid from './WeddingParty/WeddingPartyGrid';
import WeddingPartyLuxury from './WeddingParty/WeddingPartyLuxury';
import WeddingPartyMagazine from './WeddingParty/WeddingPartyMagazine';
import WeddingPartyMinimal from './WeddingParty/WeddingPartyMinimal';
import WeddingPartyModern from './WeddingParty/WeddingPartyModern';
import WeddingPartyNarrative from './WeddingParty/WeddingPartyNarrative';
import WeddingPartyPolaroid from './WeddingParty/WeddingPartyPolaroid';
import WeddingPartyRoster from './WeddingParty/WeddingPartyRoster';
import WeddingPartyShowcase from './WeddingParty/WeddingPartyShowcase';
import WeddingPartySplit from './WeddingParty/WeddingPartySplit';
import WeddingPartySpotlight from './WeddingParty/WeddingPartySpotlight';
import WeddingPartyStacked from './WeddingParty/WeddingPartyStacked';

export interface SectionComponent {
  component: ComponentType<{ section: Section }>;
  name: string;
  description: string;
}

export const sectionRegistry: Record<string, Record<string, SectionComponent>> = {
  'accommodations': {
    'blocks': {
      component: AccommodationsBlocks,
      name: 'Blocks Accommodations',
      description: 'Blocks variant of the Accommodations section',
    },
    'budget': {
      component: AccommodationsBudget,
      name: 'Budget Accommodations',
      description: 'Budget variant of the Accommodations section',
    },
    'cards': {
      component: AccommodationsCards,
      name: 'Cards Accommodations',
      description: 'Cards variant of the Accommodations section',
    },
    'classic': {
      component: AccommodationsClassic,
      name: 'Classic Accommodations',
      description: 'Classic variant of the Accommodations section',
    },
    'compact': {
      component: AccommodationsCompact,
      name: 'Compact Accommodations',
      description: 'Compact variant of the Accommodations section',
    },
    'detailed': {
      component: AccommodationsDetailed,
      name: 'Detailed Accommodations',
      description: 'Detailed variant of the Accommodations section',
    },
    'elegant': {
      component: AccommodationsElegant,
      name: 'Elegant Accommodations',
      description: 'Elegant variant of the Accommodations section',
    },
    'featured': {
      component: AccommodationsFeatured,
      name: 'Featured Accommodations',
      description: 'Featured variant of the Accommodations section',
    },
    'grid': {
      component: AccommodationsGrid,
      name: 'Grid Accommodations',
      description: 'Grid variant of the Accommodations section',
    },
    'interactive': {
      component: AccommodationsInteractive,
      name: 'Interactive Accommodations',
      description: 'Interactive variant of the Accommodations section',
    },
    'list': {
      component: AccommodationsList,
      name: 'List Accommodations',
      description: 'List variant of the Accommodations section',
    },
    'luxury': {
      component: AccommodationsLuxury,
      name: 'Luxury Accommodations',
      description: 'Luxury variant of the Accommodations section',
    },
    'map': {
      component: AccommodationsMap,
      name: 'Map Accommodations',
      description: 'Map variant of the Accommodations section',
    },
    'minimal': {
      component: AccommodationsMinimal,
      name: 'Minimal Accommodations',
      description: 'Minimal variant of the Accommodations section',
    },
    'modern': {
      component: AccommodationsModern,
      name: 'Modern Accommodations',
      description: 'Modern variant of the Accommodations section',
    },
    'nearby': {
      component: AccommodationsNearby,
      name: 'Nearby Accommodations',
      description: 'Nearby variant of the Accommodations section',
    },
    'recommendations': {
      component: AccommodationsRecommendations,
      name: 'Recommendations Accommodations',
      description: 'Recommendations variant of the Accommodations section',
    },
    'showcase': {
      component: AccommodationsShowcase,
      name: 'Showcase Accommodations',
      description: 'Showcase variant of the Accommodations section',
    },
    'split': {
      component: AccommodationsSplit,
      name: 'Split Accommodations',
      description: 'Split variant of the Accommodations section',
    },
    'timeline': {
      component: AccommodationsTimeline,
      name: 'Timeline Accommodations',
      description: 'Timeline variant of the Accommodations section',
    },
  },
  'countdown': {
    'animated': {
      component: CountdownAnimated,
      name: 'Animated Countdown',
      description: 'Animated variant of the Countdown section',
    },
    'bold': {
      component: CountdownBold,
      name: 'Bold Countdown',
      description: 'Bold variant of the Countdown section',
    },
    'cards': {
      component: CountdownCards,
      name: 'Cards Countdown',
      description: 'Cards variant of the Countdown section',
    },
    'circle': {
      component: CountdownCircle,
      name: 'Circle Countdown',
      description: 'Circle variant of the Countdown section',
    },
    'classic': {
      component: CountdownClassic,
      name: 'Classic Countdown',
      description: 'Classic variant of the Countdown section',
    },
    'compact': {
      component: CountdownCompact,
      name: 'Compact Countdown',
      description: 'Compact variant of the Countdown section',
    },
    'detailed': {
      component: CountdownDetailed,
      name: 'Detailed Countdown',
      description: 'Detailed variant of the Countdown section',
    },
    'elegant': {
      component: CountdownElegant,
      name: 'Elegant Countdown',
      description: 'Elegant variant of the Countdown section',
    },
    'flip': {
      component: CountdownFlip,
      name: 'Flip Countdown',
      description: 'Flip variant of the Countdown section',
    },
    'floating': {
      component: CountdownFloating,
      name: 'Floating Countdown',
      description: 'Floating variant of the Countdown section',
    },
    'hero': {
      component: CountdownHero,
      name: 'Hero Countdown',
      description: 'Hero variant of the Countdown section',
    },
    'inline': {
      component: CountdownInline,
      name: 'Inline Countdown',
      description: 'Inline variant of the Countdown section',
    },
    'luxury': {
      component: CountdownLuxury,
      name: 'Luxury Countdown',
      description: 'Luxury variant of the Countdown section',
    },
    'minimal': {
      component: CountdownMinimal,
      name: 'Minimal Countdown',
      description: 'Minimal variant of the Countdown section',
    },
    'modern': {
      component: CountdownModern,
      name: 'Modern Countdown',
      description: 'Modern variant of the Countdown section',
    },
    'playful': {
      component: CountdownPlayful,
      name: 'Playful Countdown',
      description: 'Playful variant of the Countdown section',
    },
    'progress': {
      component: CountdownProgress,
      name: 'Progress Countdown',
      description: 'Progress variant of the Countdown section',
    },
    'sidebar': {
      component: CountdownSidebar,
      name: 'Sidebar Countdown',
      description: 'Sidebar variant of the Countdown section',
    },
    'split': {
      component: CountdownSplit,
      name: 'Split Countdown',
      description: 'Split variant of the Countdown section',
    },
    'ticker': {
      component: CountdownTicker,
      name: 'Ticker Countdown',
      description: 'Ticker variant of the Countdown section',
    },
  },
  'dresscode': {
    'beach': {
      component: DressCodeBeach,
      name: 'Beach DressCode',
      description: 'Beach variant of the DressCode section',
    },
    'boho': {
      component: DressCodeBoho,
      name: 'Boho DressCode',
      description: 'Boho variant of the DressCode section',
    },
    'cards': {
      component: DressCodeCards,
      name: 'Cards DressCode',
      description: 'Cards variant of the DressCode section',
    },
    'casual': {
      component: DressCodeCasual,
      name: 'Casual DressCode',
      description: 'Casual variant of the DressCode section',
    },
    'classic': {
      component: DressCodeClassic,
      name: 'Classic DressCode',
      description: 'Classic variant of the DressCode section',
    },
    'cocktail': {
      component: DressCodeCocktail,
      name: 'Cocktail DressCode',
      description: 'Cocktail variant of the DressCode section',
    },
    'colorTheme': {
      component: DressCodeColorTheme,
      name: 'ColorTheme DressCode',
      description: 'ColorTheme variant of the DressCode section',
    },
    'creative': {
      component: DressCodeCreative,
      name: 'Creative DressCode',
      description: 'Creative variant of the DressCode section',
    },
    'elegant': {
      component: DressCodeElegant,
      name: 'Elegant DressCode',
      description: 'Elegant variant of the DressCode section',
    },
    'festive': {
      component: DressCodeFestive,
      name: 'Festive DressCode',
      description: 'Festive variant of the DressCode section',
    },
    'garden': {
      component: DressCodeGarden,
      name: 'Garden DressCode',
      description: 'Garden variant of the DressCode section',
    },
    'luxury': {
      component: DressCodeLuxury,
      name: 'Luxury DressCode',
      description: 'Luxury variant of the DressCode section',
    },
    'minimal': {
      component: DressCodeMinimal,
      name: 'Minimal DressCode',
      description: 'Minimal variant of the DressCode section',
    },
    'modern': {
      component: DressCodeModern,
      name: 'Modern DressCode',
      description: 'Modern variant of the DressCode section',
    },
    'playful': {
      component: DressCodePlayful,
      name: 'Playful DressCode',
      description: 'Playful variant of the DressCode section',
    },
    'rustic': {
      component: DressCodeRustic,
      name: 'Rustic DressCode',
      description: 'Rustic variant of the DressCode section',
    },
    'split': {
      component: DressCodeSplit,
      name: 'Split DressCode',
      description: 'Split variant of the DressCode section',
    },
    'tropical': {
      component: DressCodeTropical,
      name: 'Tropical DressCode',
      description: 'Tropical variant of the DressCode section',
    },
    'vintage': {
      component: DressCodeVintage,
      name: 'Vintage DressCode',
      description: 'Vintage variant of the DressCode section',
    },
    'winter': {
      component: DressCodeWinter,
      name: 'Winter DressCode',
      description: 'Winter variant of the DressCode section',
    },
  },
  'faq': {
    'accordion': {
      component: FAQAccordion,
      name: 'Accordion FAQ',
      description: 'Accordion variant of the FAQ section',
    },
    'bold': {
      component: FAQBold,
      name: 'Bold FAQ',
      description: 'Bold variant of the FAQ section',
    },
    'cards': {
      component: FAQCards,
      name: 'Cards FAQ',
      description: 'Cards variant of the FAQ section',
    },
    'categorized': {
      component: FAQCategorized,
      name: 'Categorized FAQ',
      description: 'Categorized variant of the FAQ section',
    },
    'classic': {
      component: FAQClassic,
      name: 'Classic FAQ',
      description: 'Classic variant of the FAQ section',
    },
    'compact': {
      component: FAQCompact,
      name: 'Compact FAQ',
      description: 'Compact variant of the FAQ section',
    },
    'complete': {
      component: FAQComplete,
      name: 'Complete FAQ',
      description: 'Complete variant of the FAQ section',
    },
    'detailed': {
      component: FAQDetailed,
      name: 'Detailed FAQ',
      description: 'Detailed variant of the FAQ section',
    },
    'elegant': {
      component: FAQElegant,
      name: 'Elegant FAQ',
      description: 'Elegant variant of the FAQ section',
    },
    'grid': {
      component: FAQGrid,
      name: 'Grid FAQ',
      description: 'Grid variant of the FAQ section',
    },
    'luxury': {
      component: FAQLuxury,
      name: 'Luxury FAQ',
      description: 'Luxury variant of the FAQ section',
    },
    'minimal': {
      component: FAQMinimal,
      name: 'Minimal FAQ',
      description: 'Minimal variant of the FAQ section',
    },
    'modern': {
      component: FAQModern,
      name: 'Modern FAQ',
      description: 'Modern variant of the FAQ section',
    },
    'playful': {
      component: FAQPlayful,
      name: 'Playful FAQ',
      description: 'Playful variant of the FAQ section',
    },
    'popular': {
      component: FAQPopular,
      name: 'Popular FAQ',
      description: 'Popular variant of the FAQ section',
    },
    'search': {
      component: FAQSearch,
      name: 'Search FAQ',
      description: 'Search variant of the FAQ section',
    },
    'sidebar': {
      component: FAQSidebar,
      name: 'Sidebar FAQ',
      description: 'Sidebar variant of the FAQ section',
    },
    'simple': {
      component: FAQSimple,
      name: 'Simple FAQ',
      description: 'Simple variant of the FAQ section',
    },
    'split': {
      component: FAQSplit,
      name: 'Split FAQ',
      description: 'Split variant of the FAQ section',
    },
    'tabbed': {
      component: FAQTabbed,
      name: 'Tabbed FAQ',
      description: 'Tabbed variant of the FAQ section',
    },
  },
  'footer': {
    'bold': {
      component: FooterBold,
      name: 'Bold Footer',
      description: 'Bold variant of the Footer section',
    },
    'cards': {
      component: FooterCards,
      name: 'Cards Footer',
      description: 'Cards variant of the Footer section',
    },
    'classic': {
      component: FooterClassic,
      name: 'Classic Footer',
      description: 'Classic variant of the Footer section',
    },
    'compact': {
      component: FooterCompact,
      name: 'Compact Footer',
      description: 'Compact variant of the Footer section',
    },
    'contact': {
      component: FooterContact,
      name: 'Contact Footer',
      description: 'Contact variant of the Footer section',
    },
    'detailed': {
      component: FooterDetailed,
      name: 'Detailed Footer',
      description: 'Detailed variant of the Footer section',
    },
    'elegant': {
      component: FooterElegant,
      name: 'Elegant Footer',
      description: 'Elegant variant of the Footer section',
    },
    'expanded': {
      component: FooterExpanded,
      name: 'Expanded Footer',
      description: 'Expanded variant of the Footer section',
    },
    'grid': {
      component: FooterGrid,
      name: 'Grid Footer',
      description: 'Grid variant of the Footer section',
    },
    'immersive': {
      component: FooterImmersive,
      name: 'Immersive Footer',
      description: 'Immersive variant of the Footer section',
    },
    'links': {
      component: FooterLinks,
      name: 'Links Footer',
      description: 'Links variant of the Footer section',
    },
    'luxury': {
      component: FooterLuxury,
      name: 'Luxury Footer',
      description: 'Luxury variant of the Footer section',
    },
    'minimal': {
      component: FooterMinimal,
      name: 'Minimal Footer',
      description: 'Minimal variant of the Footer section',
    },
    'modern': {
      component: FooterModern,
      name: 'Modern Footer',
      description: 'Modern variant of the Footer section',
    },
    'newsletter': {
      component: FooterNewsletter,
      name: 'Newsletter Footer',
      description: 'Newsletter variant of the Footer section',
    },
    'playful': {
      component: FooterPlayful,
      name: 'Playful Footer',
      description: 'Playful variant of the Footer section',
    },
    'rich': {
      component: FooterRich,
      name: 'Rich Footer',
      description: 'Rich variant of the Footer section',
    },
    'simple': {
      component: FooterSimple,
      name: 'Simple Footer',
      description: 'Simple variant of the Footer section',
    },
    'social': {
      component: FooterSocial,
      name: 'Social Footer',
      description: 'Social variant of the Footer section',
    },
    'split': {
      component: FooterSplit,
      name: 'Split Footer',
      description: 'Split variant of the Footer section',
    },
  },
  'gallery': {
    'bold': {
      component: GalleryBold,
      name: 'Bold Gallery',
      description: 'Bold variant of the Gallery section',
    },
    'carousel': {
      component: GalleryCarousel,
      name: 'Carousel Gallery',
      description: 'Carousel variant of the Gallery section',
    },
    'classic': {
      component: GalleryClassic,
      name: 'Classic Gallery',
      description: 'Classic variant of the Gallery section',
    },
    'elegant': {
      component: GalleryElegant,
      name: 'Elegant Gallery',
      description: 'Elegant variant of the Gallery section',
    },
    'featured': {
      component: GalleryFeatured,
      name: 'Featured Gallery',
      description: 'Featured variant of the Gallery section',
    },
    'filmstrip': {
      component: GalleryFilmstrip,
      name: 'Filmstrip Gallery',
      description: 'Filmstrip variant of the Gallery section',
    },
    'fullwidth': {
      component: GalleryFullwidth,
      name: 'Fullwidth Gallery',
      description: 'Fullwidth variant of the Gallery section',
    },
    'grid': {
      component: GalleryGrid,
      name: 'Grid Gallery',
      description: 'Grid variant of the Gallery section',
    },
    'instagram': {
      component: GalleryInstagram,
      name: 'Instagram Gallery',
      description: 'Instagram variant of the Gallery section',
    },
    'lightbox': {
      component: GalleryLightbox,
      name: 'Lightbox Gallery',
      description: 'Lightbox variant of the Gallery section',
    },
    'luxury': {
      component: GalleryLuxury,
      name: 'Luxury Gallery',
      description: 'Luxury variant of the Gallery section',
    },
    'masonry': {
      component: GalleryMasonry,
      name: 'Masonry Gallery',
      description: 'Masonry variant of the Gallery section',
    },
    'minimal': {
      component: GalleryMinimal,
      name: 'Minimal Gallery',
      description: 'Minimal variant of the Gallery section',
    },
    'modern': {
      component: GalleryModern,
      name: 'Modern Gallery',
      description: 'Modern variant of the Gallery section',
    },
    'playful': {
      component: GalleryPlayful,
      name: 'Playful Gallery',
      description: 'Playful variant of the Gallery section',
    },
    'polaroid': {
      component: GalleryPolaroid,
      name: 'Polaroid Gallery',
      description: 'Polaroid variant of the Gallery section',
    },
    'slideshow': {
      component: GallerySlideshow,
      name: 'Slideshow Gallery',
      description: 'Slideshow variant of the Gallery section',
    },
    'split': {
      component: GallerySplit,
      name: 'Split Gallery',
      description: 'Split variant of the Gallery section',
    },
    'spotlight': {
      component: GallerySpotlight,
      name: 'Spotlight Gallery',
      description: 'Spotlight variant of the Gallery section',
    },
    'timeline': {
      component: GalleryTimeline,
      name: 'Timeline Gallery',
      description: 'Timeline variant of the Gallery section',
    },
  },
  'hero': {
    'artistic': {
      component: HeroArtistic,
      name: 'Artistic Hero',
      description: 'Artistic variant of the Hero section',
    },
    'asymmetric': {
      component: HeroAsymmetric,
      name: 'Asymmetric Hero',
      description: 'Asymmetric variant of the Hero section',
    },
    'bold': {
      component: HeroBold,
      name: 'Bold Hero',
      description: 'Bold variant of the Hero section',
    },
    'centered': {
      component: HeroCentered,
      name: 'Centered Hero',
      description: 'Centered variant of the Hero section',
    },
    'cinematic': {
      component: HeroCinematic,
      name: 'Cinematic Hero',
      description: 'Cinematic variant of the Hero section',
    },
    'classic': {
      component: HeroClassic,
      name: 'Classic Hero',
      description: 'Classic variant of the Hero section',
    },
    'coastal': {
      component: HeroCoastal,
      name: 'Coastal Hero',
      description: 'Coastal variant of the Hero section',
    },
    'editorial': {
      component: HeroEditorial,
      name: 'Editorial Hero',
      description: 'Editorial variant of the Hero section',
    },
    'floating': {
      component: HeroFloating,
      name: 'Floating Hero',
      description: 'Floating variant of the Hero section',
    },
    'fullscreen': {
      component: HeroFullscreen,
      name: 'Fullscreen Hero',
      description: 'Fullscreen variant of the Hero section',
    },
    'garden': {
      component: HeroGarden,
      name: 'Garden Hero',
      description: 'Garden variant of the Hero section',
    },
    'layered': {
      component: HeroLayered,
      name: 'Layered Hero',
      description: 'Layered variant of the Hero section',
    },
    'luxury': {
      component: HeroLuxury,
      name: 'Luxury Hero',
      description: 'Luxury variant of the Hero section',
    },
    'magazine': {
      component: HeroMagazine,
      name: 'Magazine Hero',
      description: 'Magazine variant of the Hero section',
    },
    'minimal': {
      component: HeroMinimal,
      name: 'Minimal Hero',
      description: 'Minimal variant of the Hero section',
    },
    'moody': {
      component: HeroMoody,
      name: 'Moody Hero',
      description: 'Moody variant of the Hero section',
    },
    'playful': {
      component: HeroPlayful,
      name: 'Playful Hero',
      description: 'Playful variant of the Hero section',
    },
    'refined': {
      component: HeroRefined,
      name: 'Refined Hero',
      description: 'Refined variant of the Hero section',
    },
    'split': {
      component: HeroSplit,
      name: 'Split Hero',
      description: 'Split variant of the Hero section',
    },
    'stacked': {
      component: HeroStacked,
      name: 'Stacked Hero',
      description: 'Stacked variant of the Hero section',
    },
  },
  'rsvp': {
    'bold': {
      component: RSVPBold,
      name: 'Bold RSVP',
      description: 'Bold variant of the RSVP section',
    },
    'cards': {
      component: RSVPCards,
      name: 'Cards RSVP',
      description: 'Cards variant of the RSVP section',
    },
    'classic': {
      component: RSVPClassic,
      name: 'Classic RSVP',
      description: 'Classic variant of the RSVP section',
    },
    'compact': {
      component: RSVPCompact,
      name: 'Compact RSVP',
      description: 'Compact variant of the RSVP section',
    },
    'detailed': {
      component: RSVPDetailed,
      name: 'Detailed RSVP',
      description: 'Detailed variant of the RSVP section',
    },
    'elegant': {
      component: RSVPElegant,
      name: 'Elegant RSVP',
      description: 'Elegant variant of the RSVP section',
    },
    'extended': {
      component: RSVPExtended,
      name: 'Extended RSVP',
      description: 'Extended variant of the RSVP section',
    },
    'floating': {
      component: RSVPFloating,
      name: 'Floating RSVP',
      description: 'Floating variant of the RSVP section',
    },
    'form': {
      component: RSVPForm,
      name: 'Form RSVP',
      description: 'Form variant of the RSVP section',
    },
    'fullscreen': {
      component: RSVPFullscreen,
      name: 'Fullscreen RSVP',
      description: 'Fullscreen variant of the RSVP section',
    },
    'inline': {
      component: RSVPInline,
      name: 'Inline RSVP',
      description: 'Inline variant of the RSVP section',
    },
    'interactive': {
      component: RSVPInteractive,
      name: 'Interactive RSVP',
      description: 'Interactive variant of the RSVP section',
    },
    'luxury': {
      component: RSVPLuxury,
      name: 'Luxury RSVP',
      description: 'Luxury variant of the RSVP section',
    },
    'minimal': {
      component: RSVPMinimal,
      name: 'Minimal RSVP',
      description: 'Minimal variant of the RSVP section',
    },
    'modern': {
      component: RSVPModern,
      name: 'Modern RSVP',
      description: 'Modern variant of the RSVP section',
    },
    'playful': {
      component: RSVPPlayful,
      name: 'Playful RSVP',
      description: 'Playful variant of the RSVP section',
    },
    'quick': {
      component: RSVPQuick,
      name: 'Quick RSVP',
      description: 'Quick variant of the RSVP section',
    },
    'sidebar': {
      component: RSVPSidebar,
      name: 'Sidebar RSVP',
      description: 'Sidebar variant of the RSVP section',
    },
    'split': {
      component: RSVPSplit,
      name: 'Split RSVP',
      description: 'Split variant of the RSVP section',
    },
    'wizard': {
      component: RSVPWizard,
      name: 'Wizard RSVP',
      description: 'Wizard variant of the RSVP section',
    },
  },
  'registry': {
    'bold': {
      component: RegistryBold,
      name: 'Bold Registry',
      description: 'Bold variant of the Registry section',
    },
    'cards': {
      component: RegistryCards,
      name: 'Cards Registry',
      description: 'Cards variant of the Registry section',
    },
    'cash': {
      component: RegistryCash,
      name: 'Cash Registry',
      description: 'Cash variant of the Registry section',
    },
    'charity': {
      component: RegistryCharity,
      name: 'Charity Registry',
      description: 'Charity variant of the Registry section',
    },
    'classic': {
      component: RegistryClassic,
      name: 'Classic Registry',
      description: 'Classic variant of the Registry section',
    },
    'contemporary': {
      component: RegistryContemporary,
      name: 'Contemporary Registry',
      description: 'Contemporary variant of the Registry section',
    },
    'curated': {
      component: RegistryCurated,
      name: 'Curated Registry',
      description: 'Curated variant of the Registry section',
    },
    'detailed': {
      component: RegistryDetailed,
      name: 'Detailed Registry',
      description: 'Detailed variant of the Registry section',
    },
    'elegant': {
      component: RegistryElegant,
      name: 'Elegant Registry',
      description: 'Elegant variant of the Registry section',
    },
    'experiences': {
      component: RegistryExperiences,
      name: 'Experiences Registry',
      description: 'Experiences variant of the Registry section',
    },
    'featured': {
      component: RegistryFeatured,
      name: 'Featured Registry',
      description: 'Featured variant of the Registry section',
    },
    'grid': {
      component: RegistryGrid,
      name: 'Grid Registry',
      description: 'Grid variant of the Registry section',
    },
    'honeymoon': {
      component: RegistryHoneymoon,
      name: 'Honeymoon Registry',
      description: 'Honeymoon variant of the Registry section',
    },
    'luxury': {
      component: RegistryLuxury,
      name: 'Luxury Registry',
      description: 'Luxury variant of the Registry section',
    },
    'minimal': {
      component: RegistryMinimal,
      name: 'Minimal Registry',
      description: 'Minimal variant of the Registry section',
    },
    'modern': {
      component: RegistryModern,
      name: 'Modern Registry',
      description: 'Modern variant of the Registry section',
    },
    'playful': {
      component: RegistryPlayful,
      name: 'Playful Registry',
      description: 'Playful variant of the Registry section',
    },
    'simple': {
      component: RegistrySimple,
      name: 'Simple Registry',
      description: 'Simple variant of the Registry section',
    },
    'split': {
      component: RegistrySplit,
      name: 'Split Registry',
      description: 'Split variant of the Registry section',
    },
    'traditional': {
      component: RegistryTraditional,
      name: 'Traditional Registry',
      description: 'Traditional variant of the Registry section',
    },
  },
  'schedule': {
    'agenda': {
      component: ScheduleAgenda,
      name: 'Agenda Schedule',
      description: 'Agenda variant of the Schedule section',
    },
    'bold': {
      component: ScheduleBold,
      name: 'Bold Schedule',
      description: 'Bold variant of the Schedule section',
    },
    'cards': {
      component: ScheduleCards,
      name: 'Cards Schedule',
      description: 'Cards variant of the Schedule section',
    },
    'classic': {
      component: ScheduleClassic,
      name: 'Classic Schedule',
      description: 'Classic variant of the Schedule section',
    },
    'compact': {
      component: ScheduleCompact,
      name: 'Compact Schedule',
      description: 'Compact variant of the Schedule section',
    },
    'detailed': {
      component: ScheduleDetailed,
      name: 'Detailed Schedule',
      description: 'Detailed variant of the Schedule section',
    },
    'elegant': {
      component: ScheduleElegant,
      name: 'Elegant Schedule',
      description: 'Elegant variant of the Schedule section',
    },
    'grid': {
      component: ScheduleGrid,
      name: 'Grid Schedule',
      description: 'Grid variant of the Schedule section',
    },
    'itinerary': {
      component: ScheduleItinerary,
      name: 'Itinerary Schedule',
      description: 'Itinerary variant of the Schedule section',
    },
    'luxury': {
      component: ScheduleLuxury,
      name: 'Luxury Schedule',
      description: 'Luxury variant of the Schedule section',
    },
    'minimal': {
      component: ScheduleMinimal,
      name: 'Minimal Schedule',
      description: 'Minimal variant of the Schedule section',
    },
    'modern': {
      component: ScheduleModern,
      name: 'Modern Schedule',
      description: 'Modern variant of the Schedule section',
    },
    'planner': {
      component: SchedulePlanner,
      name: 'Planner Schedule',
      description: 'Planner variant of the Schedule section',
    },
    'playful': {
      component: SchedulePlayful,
      name: 'Playful Schedule',
      description: 'Playful variant of the Schedule section',
    },
    'program': {
      component: ScheduleProgram,
      name: 'Program Schedule',
      description: 'Program variant of the Schedule section',
    },
    'simple': {
      component: ScheduleSimple,
      name: 'Simple Schedule',
      description: 'Simple variant of the Schedule section',
    },
    'split': {
      component: ScheduleSplit,
      name: 'Split Schedule',
      description: 'Split variant of the Schedule section',
    },
    'stacked': {
      component: ScheduleStacked,
      name: 'Stacked Schedule',
      description: 'Stacked variant of the Schedule section',
    },
    'timeline': {
      component: ScheduleTimeline,
      name: 'Timeline Schedule',
      description: 'Timeline variant of the Schedule section',
    },
    'timetable': {
      component: ScheduleTimetable,
      name: 'Timetable Schedule',
      description: 'Timetable variant of the Schedule section',
    },
  },
  'story': {
    'bold': {
      component: StoryBold,
      name: 'Bold Story',
      description: 'Bold variant of the Story section',
    },
    'cards': {
      component: StoryCards,
      name: 'Cards Story',
      description: 'Cards variant of the Story section',
    },
    'carousel': {
      component: StoryCarousel,
      name: 'Carousel Story',
      description: 'Carousel variant of the Story section',
    },
    'cinematic': {
      component: StoryCinematic,
      name: 'Cinematic Story',
      description: 'Cinematic variant of the Story section',
    },
    'classic': {
      component: StoryClassic,
      name: 'Classic Story',
      description: 'Classic variant of the Story section',
    },
    'compact': {
      component: StoryCompact,
      name: 'Compact Story',
      description: 'Compact variant of the Story section',
    },
    'editorial': {
      component: StoryEditorial,
      name: 'Editorial Story',
      description: 'Editorial variant of the Story section',
    },
    'grid': {
      component: StoryGrid,
      name: 'Grid Story',
      description: 'Grid variant of the Story section',
    },
    'immersive': {
      component: StoryImmersive,
      name: 'Immersive Story',
      description: 'Immersive variant of the Story section',
    },
    'luxury': {
      component: StoryLuxury,
      name: 'Luxury Story',
      description: 'Luxury variant of the Story section',
    },
    'magazine': {
      component: StoryMagazine,
      name: 'Magazine Story',
      description: 'Magazine variant of the Story section',
    },
    'minimal': {
      component: StoryMinimal,
      name: 'Minimal Story',
      description: 'Minimal variant of the Story section',
    },
    'modern': {
      component: StoryModern,
      name: 'Modern Story',
      description: 'Modern variant of the Story section',
    },
    'narrative': {
      component: StoryNarrative,
      name: 'Narrative Story',
      description: 'Narrative variant of the Story section',
    },
    'playful': {
      component: StoryPlayful,
      name: 'Playful Story',
      description: 'Playful variant of the Story section',
    },
    'polaroid': {
      component: StoryPolaroid,
      name: 'Polaroid Story',
      description: 'Polaroid variant of the Story section',
    },
    'scrapbook': {
      component: StoryScrapbook,
      name: 'Scrapbook Story',
      description: 'Scrapbook variant of the Story section',
    },
    'split': {
      component: StorySplit,
      name: 'Split Story',
      description: 'Split variant of the Story section',
    },
    'stacked': {
      component: StoryStacked,
      name: 'Stacked Story',
      description: 'Stacked variant of the Story section',
    },
    'timeline': {
      component: StoryTimeline,
      name: 'Timeline Story',
      description: 'Timeline variant of the Story section',
    },
  },
  'travel': {
    'airport': {
      component: TravelAirport,
      name: 'Airport Travel',
      description: 'Airport variant of the Travel section',
    },
    'bold': {
      component: TravelBold,
      name: 'Bold Travel',
      description: 'Bold variant of the Travel section',
    },
    'cards': {
      component: TravelCards,
      name: 'Cards Travel',
      description: 'Cards variant of the Travel section',
    },
    'classic': {
      component: TravelClassic,
      name: 'Classic Travel',
      description: 'Classic variant of the Travel section',
    },
    'compact': {
      component: TravelCompact,
      name: 'Compact Travel',
      description: 'Compact variant of the Travel section',
    },
    'detailed': {
      component: TravelDetailed,
      name: 'Detailed Travel',
      description: 'Detailed variant of the Travel section',
    },
    'directions': {
      component: TravelDirections,
      name: 'Directions Travel',
      description: 'Directions variant of the Travel section',
    },
    'elegant': {
      component: TravelElegant,
      name: 'Elegant Travel',
      description: 'Elegant variant of the Travel section',
    },
    'getting': {
      component: TravelGetting,
      name: 'Getting Travel',
      description: 'Getting variant of the Travel section',
    },
    'grid': {
      component: TravelGrid,
      name: 'Grid Travel',
      description: 'Grid variant of the Travel section',
    },
    'luxury': {
      component: TravelLuxury,
      name: 'Luxury Travel',
      description: 'Luxury variant of the Travel section',
    },
    'map': {
      component: TravelMap,
      name: 'Map Travel',
      description: 'Map variant of the Travel section',
    },
    'minimal': {
      component: TravelMinimal,
      name: 'Minimal Travel',
      description: 'Minimal variant of the Travel section',
    },
    'modern': {
      component: TravelModern,
      name: 'Modern Travel',
      description: 'Modern variant of the Travel section',
    },
    'parking': {
      component: TravelParking,
      name: 'Parking Travel',
      description: 'Parking variant of the Travel section',
    },
    'playful': {
      component: TravelPlayful,
      name: 'Playful Travel',
      description: 'Playful variant of the Travel section',
    },
    'routes': {
      component: TravelRoutes,
      name: 'Routes Travel',
      description: 'Routes variant of the Travel section',
    },
    'shuttle': {
      component: TravelShuttle,
      name: 'Shuttle Travel',
      description: 'Shuttle variant of the Travel section',
    },
    'split': {
      component: TravelSplit,
      name: 'Split Travel',
      description: 'Split variant of the Travel section',
    },
    'transportation': {
      component: TravelTransportation,
      name: 'Transportation Travel',
      description: 'Transportation variant of the Travel section',
    },
  },
  'venue': {
    'artistic': {
      component: VenueArtistic,
      name: 'Artistic Venue',
      description: 'Artistic variant of the Venue section',
    },
    'bold': {
      component: VenueBold,
      name: 'Bold Venue',
      description: 'Bold variant of the Venue section',
    },
    'cards': {
      component: VenueCards,
      name: 'Cards Venue',
      description: 'Cards variant of the Venue section',
    },
    'cinematic': {
      component: VenueCinematic,
      name: 'Cinematic Venue',
      description: 'Cinematic variant of the Venue section',
    },
    'classic': {
      component: VenueClassic,
      name: 'Classic Venue',
      description: 'Classic variant of the Venue section',
    },
    'coastal': {
      component: VenueCoastal,
      name: 'Coastal Venue',
      description: 'Coastal variant of the Venue section',
    },
    'compact': {
      component: VenueCompact,
      name: 'Compact Venue',
      description: 'Compact variant of the Venue section',
    },
    'editorial': {
      component: VenueEditorial,
      name: 'Editorial Venue',
      description: 'Editorial variant of the Venue section',
    },
    'garden': {
      component: VenueGarden,
      name: 'Garden Venue',
      description: 'Garden variant of the Venue section',
    },
    'grid': {
      component: VenueGrid,
      name: 'Grid Venue',
      description: 'Grid variant of the Venue section',
    },
    'immersive': {
      component: VenueImmersive,
      name: 'Immersive Venue',
      description: 'Immersive variant of the Venue section',
    },
    'luxury': {
      component: VenueLuxury,
      name: 'Luxury Venue',
      description: 'Luxury variant of the Venue section',
    },
    'magazine': {
      component: VenueMagazine,
      name: 'Magazine Venue',
      description: 'Magazine variant of the Venue section',
    },
    'minimal': {
      component: VenueMinimal,
      name: 'Minimal Venue',
      description: 'Minimal variant of the Venue section',
    },
    'modern': {
      component: VenueModern,
      name: 'Modern Venue',
      description: 'Modern variant of the Venue section',
    },
    'playful': {
      component: VenuePlayful,
      name: 'Playful Venue',
      description: 'Playful variant of the Venue section',
    },
    'refined': {
      component: VenueRefined,
      name: 'Refined Venue',
      description: 'Refined variant of the Venue section',
    },
    'split': {
      component: VenueSplit,
      name: 'Split Venue',
      description: 'Split variant of the Venue section',
    },
    'stacked': {
      component: VenueStacked,
      name: 'Stacked Venue',
      description: 'Stacked variant of the Venue section',
    },
    'timeline': {
      component: VenueTimeline,
      name: 'Timeline Venue',
      description: 'Timeline variant of the Venue section',
    },
  },
  'weddingparty': {
    'bold': {
      component: WeddingPartyBold,
      name: 'Bold WeddingParty',
      description: 'Bold variant of the WeddingParty section',
    },
    'cards': {
      component: WeddingPartyCards,
      name: 'Cards WeddingParty',
      description: 'Cards variant of the WeddingParty section',
    },
    'carousel': {
      component: WeddingPartyCarousel,
      name: 'Carousel WeddingParty',
      description: 'Carousel variant of the WeddingParty section',
    },
    'circle': {
      component: WeddingPartyCircle,
      name: 'Circle WeddingParty',
      description: 'Circle variant of the WeddingParty section',
    },
    'classic': {
      component: WeddingPartyClassic,
      name: 'Classic WeddingParty',
      description: 'Classic variant of the WeddingParty section',
    },
    'compact': {
      component: WeddingPartyCompact,
      name: 'Compact WeddingParty',
      description: 'Compact variant of the WeddingParty section',
    },
    'elegant': {
      component: WeddingPartyElegant,
      name: 'Elegant WeddingParty',
      description: 'Elegant variant of the WeddingParty section',
    },
    'filmstrip': {
      component: WeddingPartyFilmstrip,
      name: 'Filmstrip WeddingParty',
      description: 'Filmstrip variant of the WeddingParty section',
    },
    'grid': {
      component: WeddingPartyGrid,
      name: 'Grid WeddingParty',
      description: 'Grid variant of the WeddingParty section',
    },
    'luxury': {
      component: WeddingPartyLuxury,
      name: 'Luxury WeddingParty',
      description: 'Luxury variant of the WeddingParty section',
    },
    'magazine': {
      component: WeddingPartyMagazine,
      name: 'Magazine WeddingParty',
      description: 'Magazine variant of the WeddingParty section',
    },
    'minimal': {
      component: WeddingPartyMinimal,
      name: 'Minimal WeddingParty',
      description: 'Minimal variant of the WeddingParty section',
    },
    'modern': {
      component: WeddingPartyModern,
      name: 'Modern WeddingParty',
      description: 'Modern variant of the WeddingParty section',
    },
    'narrative': {
      component: WeddingPartyNarrative,
      name: 'Narrative WeddingParty',
      description: 'Narrative variant of the WeddingParty section',
    },
    'polaroid': {
      component: WeddingPartyPolaroid,
      name: 'Polaroid WeddingParty',
      description: 'Polaroid variant of the WeddingParty section',
    },
    'roster': {
      component: WeddingPartyRoster,
      name: 'Roster WeddingParty',
      description: 'Roster variant of the WeddingParty section',
    },
    'showcase': {
      component: WeddingPartyShowcase,
      name: 'Showcase WeddingParty',
      description: 'Showcase variant of the WeddingParty section',
    },
    'split': {
      component: WeddingPartySplit,
      name: 'Split WeddingParty',
      description: 'Split variant of the WeddingParty section',
    },
    'spotlight': {
      component: WeddingPartySpotlight,
      name: 'Spotlight WeddingParty',
      description: 'Spotlight variant of the WeddingParty section',
    },
    'stacked': {
      component: WeddingPartyStacked,
      name: 'Stacked WeddingParty',
      description: 'Stacked variant of the WeddingParty section',
    },
  },
};

export function getSectionComponent(type: string, variant: string): ComponentType<{ section: Section }> | null {
  return sectionRegistry[type]?.[variant]?.component || null;
}
