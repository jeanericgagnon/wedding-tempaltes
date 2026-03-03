import { useState } from 'react';
import TemplateRenderer from './components/TemplateRenderer';
import TemplateSelector from './components/TemplateSelector';
import { getTemplateById } from './templates/registry';

function App() {
  const [selectedTemplateId, setSelectedTemplateId] = useState('romantic-blush');
  const template = getTemplateById(selectedTemplateId);

  if (!template) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-xl text-gray-600">Template not found</p>
      </div>
    );
  }

  return (
    <>
      <TemplateSelector
        selectedTemplateId={selectedTemplateId}
        onSelectTemplate={setSelectedTemplateId}
      />
      <TemplateRenderer template={template} />
    </>
  );
}

export default App;
