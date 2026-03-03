import { useState } from 'react';
import { ArrowRight, Grid3x3, List } from 'lucide-react';
import { templateRegistry } from '../templates/registry';

export default function TemplateGallery() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedVibe, setSelectedVibe] = useState<string>('all');

  const vibes = ['all', ...Array.from(new Set(templateRegistry.map(t => t.vibe)))].sort();

  const filtered = selectedVibe === 'all'
    ? templateRegistry
    : templateRegistry.filter(t => t.vibe === selectedVibe);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Template Gallery</h1>
          <p className="text-xl text-gray-600">Explore all 35 production-ready templates</p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* View Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  viewMode === 'grid'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Grid3x3 size={18} />
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  viewMode === 'list'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <List size={18} />
                List
              </button>
            </div>

            {/* Vibe Filter */}
            <div className="flex flex-wrap gap-2">
              {vibes.map(vibe => (
                <button
                  key={vibe}
                  onClick={() => setSelectedVibe(vibe)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                    selectedVibe === vibe
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {vibe === 'all' ? 'All Vibes' : vibe}
                </button>
              ))}
            </div>
          </div>

          {/* Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filtered.length} of {templateRegistry.length} templates
          </div>
        </div>

        {/* Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((template, index) => (
              <a
                key={template.id}
                href={`/?template=${template.id}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gray-300 group-hover:text-gray-400 transition-colors mb-2">
                        #{index + 1}
                      </div>
                      <div className="text-sm text-gray-500">
                        {template.defaultLayout.sections.length} sections
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {template.name}
                    </h3>
                    <ArrowRight size={18} className="text-gray-400 group-hover:text-blue-600 transition-all group-hover:translate-x-1" />
                  </div>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {template.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                      {template.vibe}
                    </span>
                    <span className="text-xs text-gray-500">
                      {template.minSectionCount}-{template.maxSectionCount} sections
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* List View */}
        {viewMode === 'list' && (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="divide-y">
              {filtered.map((template, index) => (
                <a
                  key={template.id}
                  href={`/?template=${template.id}`}
                  className="p-6 hover:bg-blue-50 transition-colors group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-2xl font-bold text-gray-300">#{index + 1}</span>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {template.name}
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-3">
                        {template.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <span>
                          <span className="font-semibold text-gray-700">{template.defaultLayout.sections.length}</span> sections
                        </span>
                        <span>
                          {template.minSectionCount}-{template.maxSectionCount} sections range
                        </span>
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded font-semibold">
                          {template.vibe}
                        </span>
                      </div>
                    </div>
                    <ArrowRight size={20} className="text-gray-400 group-hover:text-blue-600 transition-all group-hover:translate-x-1 flex-shrink-0 mt-1" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <p className="text-xl text-gray-600">No templates found for this vibe</p>
          </div>
        )}

        {/* Footer Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600">{templateRegistry.length}</div>
            <div className="text-sm text-gray-600 mt-2">Total Templates</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600">{vibes.length - 1}</div>
            <div className="text-sm text-gray-600 mt-2">Vibes/Styles</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600">
              {Math.min(...templateRegistry.map(t => t.minSectionCount))}-{Math.max(...templateRegistry.map(t => t.maxSectionCount))}
            </div>
            <div className="text-sm text-gray-600 mt-2">Section Range</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-600">8.45/10</div>
            <div className="text-sm text-gray-600 mt-2">Avg Quality</div>
          </div>
        </div>
      </div>
    </div>
  );
}
