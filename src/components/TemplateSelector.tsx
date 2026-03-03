import { Template } from '../types/layoutConfig';
import { getAllTemplates } from '../templates/registry';

interface TemplateSelectorProps {
  selectedTemplateId: string;
  onSelectTemplate: (templateId: string) => void;
}

export default function TemplateSelector({ selectedTemplateId, onSelectTemplate }: TemplateSelectorProps) {
  const templates = getAllTemplates();

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-white rounded-lg shadow-2xl p-6 max-w-md">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Select Template</h3>
        <div className="space-y-2 max-h-[70vh] overflow-y-auto">
          {templates.map((template: Template) => (
            <button
              key={template.id}
              onClick={() => onSelectTemplate(template.id)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                selectedTemplateId === template.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300 bg-white'
              }`}
            >
              <div className="font-semibold text-gray-800 mb-1">{template.name}</div>
              <div className="text-sm text-gray-600">{template.description}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
