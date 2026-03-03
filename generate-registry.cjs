const fs = require('fs');
const path = require('path');

const sectionsDir = path.join(__dirname, 'src', 'sections');
const sections = fs.readdirSync(sectionsDir).filter(f => {
  const fullPath = path.join(sectionsDir, f);
  return fs.statSync(fullPath).isDirectory();
});

let imports = [];
let registryEntries = {};

sections.forEach(section => {
  const sectionPath = path.join(sectionsDir, section);
  const files = fs.readdirSync(sectionPath).filter(f => f.endsWith('.tsx'));

  const sectionKey = section.toLowerCase().replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  registryEntries[sectionKey] = {};

  files.forEach(file => {
    const componentName = file.replace('.tsx', '');
    const variantName = componentName.replace(section, '');
    const variantKey = variantName.charAt(0).toLowerCase() + variantName.slice(1);

    imports.push(`import ${componentName} from './${section}/${componentName}';`);

    registryEntries[sectionKey][variantKey] = {
      component: componentName,
      name: `${variantName} ${section}`,
      description: `${variantName} variant of the ${section} section`,
    };
  });
});

let registryCode = `import { ComponentType } from 'react';
import { Section } from '../types/layoutConfig';

${imports.join('\n')}

export interface SectionComponent {
  component: ComponentType<{ section: Section }>;
  name: string;
  description: string;
}

export const sectionRegistry: Record<string, Record<string, SectionComponent>> = {
`;

for (const [sectionKey, variants] of Object.entries(registryEntries)) {
  registryCode += `  '${sectionKey}': {\n`;
  for (const [variantKey, data] of Object.entries(variants)) {
    registryCode += `    '${variantKey}': {
      component: ${data.component},
      name: '${data.name}',
      description: '${data.description}',
    },\n`;
  }
  registryCode += `  },\n`;
}

registryCode += `};

export function getSectionComponent(type: string, variant: string): ComponentType<{ section: Section }> | null {
  return sectionRegistry[type]?.[variant]?.component || null;
}
`;

fs.writeFileSync(path.join(sectionsDir, 'sectionRegistry.tsx'), registryCode);
console.log('Registry generated successfully!');
console.log(`Total sections: ${sections.length}`);
console.log(`Total variants: ${imports.length}`);
