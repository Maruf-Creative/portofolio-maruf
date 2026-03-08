import { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { projects, categories } from '../data/projects';
import { Button } from '../components/ui/button';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export function PortfolioPage() {
  useDocumentTitle('Portfolio');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl text-gray-900 dark:text-white mb-4">Portofolio</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Kumpulan dari berbagai proyek desain dan pemasaran digital saya. Tiap proyek memiliki tantangan tersendiri dengan solusi kreatifnya masing-masing.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={activeCategory === category.value ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category.value)}
              className={activeCategory === category.value ? 'bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600' : ''}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 dark:text-gray-400">Tidak ada proyek yang ditemukan pada kategori ini.</p>
          </div>
        )}
      </div>
    </div>
  );
}