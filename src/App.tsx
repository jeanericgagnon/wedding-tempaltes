import { useState, useEffect } from 'react';
import TemplateRenderer from './components/TemplateRenderer';
import TemplateSelector from './components/TemplateSelector';
import TemplateGallery from './pages/TemplateGallery';
import { getTemplateById } from './templates/registry';

function App() {
  const [selectedTemplateId, setSelectedTemplateId] = useState('romantic-blush');
  const [showGallery, setShowGallery] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const view = params.get('view');
    const template = params.get('template');

    if (view === 'gallery') {
      setShowGallery(true);
    } else if (template) {
      setSelectedTemplateId(template);
      setShowGallery(false);
    }
  }, []);

  if (showGallery) {
    return (
      <>
        <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900">Template Gallery</h2>
            <a
              href="/"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View Templates
            </a>
          </div>
        </div>
        <div className="pt-20">
          <TemplateGallery />
        </div>
      </>
    );
  }

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
      <button
        onClick={() => setShowGallery(true)}
        className="fixed bottom-6 right-6 z-40 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 shadow-lg transition-all hover:shadow-xl"
      >
        View All Templates
      </button>
      <TemplateRenderer template={template} />
    </>
  );
}

export default App;
