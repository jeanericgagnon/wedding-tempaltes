import { Template, Section } from '../types/layoutConfig';
import { getSectionComponent } from '../sections/sectionRegistry';

interface TemplateRendererProps {
  template: Template;
}

export default function TemplateRenderer({ template }: TemplateRendererProps) {
  const renderSection = (section: Section, index: number) => {
    if (!section.enabled) return null;

    const SectionComponent = getSectionComponent(section.type, section.variant);

    if (!SectionComponent) {
      console.warn(`Section component not found: ${section.type}/${section.variant}`);
      return null;
    }

    return <SectionComponent key={`${section.type}-${section.variant}-${index}`} section={section} />;
  };

  return (
    <div className="wedding-template" data-template-id={template.id}>
      {template.defaultLayout.sections.map(renderSection)}
    </div>
  );
}
