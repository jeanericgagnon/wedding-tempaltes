#!/bin/bash

# Function to create a variant file
create_variant() {
  local section=$1
  local variant=$2
  local file_path="src/sections/$section/${section}${variant}.tsx"

  if [ ! -f "$file_path" ]; then
    cat > "$file_path" << EOF
import { Section } from '../../types/layoutConfig';

interface ${section}${variant}Props {
  section: Section;
}

export default function ${section}${variant}({ section }: ${section}${variant}Props) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center text-gray-900 mb-12">
          ${section} ${variant}
        </h2>
      </div>
    </section>
  );
}
EOF
    echo "Created: $file_path"
  fi
}

# Create Accommodations directory
mkdir -p src/sections/Accommodations

# Accommodations - 20 variants
for variant in Classic Cards Minimal Grid Split Luxury Compact Map List Detailed Modern Elegant Showcase Featured Budget Nearby Blocks Timeline Recommendations Interactive; do
  create_variant "Accommodations" "$variant"
done

# Hero - need 9 more (already has 11)
for variant in Cinematic Asymmetric Centered Floating Layered Bold Refined Artistic Magazine; do
  create_variant "Hero" "$variant"
done

# Story - need 16 more (already has 4)
for variant in Minimal Narrative Stacked Editorial Carousel Cinematic Scrapbook Grid Polaroid Immersive Modern Magazine Luxury Playful Compact Bold; do
  create_variant "Story" "$variant"
done

# Venue - need 16 more (already has 4)
for variant in Editorial Luxury Modern Stacked Cinematic Compact Grid Immersive Timeline Playful Bold Refined Garden Coastal Magazine Artistic; do
  create_variant "Venue" "$variant"
done

# Schedule - need 17 more (already has 3)
for variant in Timeline Grid Split Stacked Compact Modern Luxury Playful Bold Elegant Detailed Simple Itinerary Agenda Program Timetable Planner; do
  create_variant "Schedule" "$variant"
done

# Travel - need 17 more (already has 3)
for variant in Grid Cards Split Detailed Modern Minimal Luxury Playful Bold Elegant Directions Transportation Routes Getting Parking Airport Shuttle; do
  create_variant "Travel" "$variant"
done

# Registry - need 17 more (already has 3)
for variant in Grid Split Modern Luxury Playful Bold Elegant Detailed Simple Featured Curated Honeymoon Cash Charity Experiences Traditional Contemporary; do
  create_variant "Registry" "$variant"
done

# FAQ - need 17 more (already has 3)
for variant in Split Cards Modern Minimal Luxury Playful Bold Elegant Compact Detailed Simple Sidebar Tabbed Categorized Search Popular Complete; do
  create_variant "FAQ" "$variant"
done

# RSVP - need 17 more (already has 3)
for variant in Cards Split Modern Luxury Playful Bold Elegant Detailed Quick Interactive Wizard Inline Floating Sidebar Fullscreen Compact Extended; do
  create_variant "RSVP" "$variant"
done

# Gallery - need 16 more (already has 4)
for variant in Grid Split Timeline Spotlight Featured Modern Minimal Luxury Playful Bold Elegant Polaroid Filmstrip Slideshow Lightbox Instagram; do
  create_variant "Gallery" "$variant"
done

# Countdown - need 19 more (already has 1)
for variant in Minimal Cards Split Modern Luxury Playful Bold Elegant Compact Detailed Animated Floating Inline Sidebar Hero Ticker Flip Circle Progress; do
  create_variant "Countdown" "$variant"
done

# Footer - need 17 more (already has 3)
for variant in Cards Split Grid Modern Luxury Playful Bold Elegant Compact Detailed Newsletter Social Contact Links Simple Rich Immersive; do
  create_variant "Footer" "$variant"
done

echo "All variant files created!"
