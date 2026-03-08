import { useParams, Link } from 'react-router';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { projects } from '../data/projects';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export function ProjectDetailPage() {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);
  
  useDocumentTitle(project ? project.title : 'Project');

  if (!project) {
    return (
      <div className="py-20 px-4 text-center">
        <h1 className="text-2xl text-gray-900 dark:text-white mb-4">Proyek Tidak Ditemukan</h1>
        <Button asChild>
          <Link to="/portfolio">Kembali ke Portofolio</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-8">
          <Link to="/portfolio">
            <ArrowLeft className="mr-2" size={16} />
            Kembali ke Portofolio
          </Link>
        </Button>

        {/* Hero Image */}
        <div className="bg-gray-100 dark:bg-slate-700 rounded-2xl overflow-hidden mb-8">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Project Info */}
        <div className="mb-8">
          <Badge className="mb-4">{project.categoryLabel}</Badge>
          <h1 className="text-3xl sm:text-4xl text-gray-900 dark:text-white mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-300 mb-6">
            <div>
              <span className="font-medium text-gray-900 dark:text-white">Klien:</span> {project.client}
            </div>
            <div>
              <span className="font-medium text-gray-900 dark:text-white">Tahun:</span> {project.year}
            </div>
            <div>
              <span className="font-medium text-gray-900 dark:text-white">Kategori:</span> {project.categoryLabel}
            </div>
          </div>
        </div>

        {/* Project Description */}
        <div className="prose max-w-none mb-12">
          {project.fullDescription && (
            <>
              <h2 className="text-2xl text-gray-900 dark:text-white mb-4">Ringkasan</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">{project.fullDescription}</p>
            </>
          )}

          {project.objective && (
            <>
              <h2 className="text-2xl text-gray-900 dark:text-white mb-4">Tujuan</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">{project.objective}</p>
            </>
          )}

          {project.process && (
            <>
              <h2 className="text-2xl text-gray-900 dark:text-white mb-4">Proses Pengerjaan</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">{project.process}</p>
            </>
          )}

          {project.tools && project.tools.length > 0 && (
            <>
              <h2 className="text-2xl text-gray-900 dark:text-white mb-4">Alat (Tools) yang Digunakan</h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tools.map((tool, index) => (
                  <Badge key={index} variant="secondary">
                    {tool}
                  </Badge>
                ))}
              </div>
            </>
          )}

          {project.results && project.results.length > 0 && (
            <>
              <h2 className="text-2xl text-gray-900 dark:text-white mb-4">Hasil</h2>
              <ul className="space-y-3">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{result}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Additional Images */}
        {project.images && project.images.length > 1 && (
          <div className="mb-12">
            <h2 className="text-2xl text-gray-900 dark:text-white mb-6">Galeri Proyek</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.slice(1).map((image, index) => (
                <div key={index} className="bg-gray-100 dark:bg-slate-700 rounded-xl overflow-hidden">
                  <img
                    src={image}
                    alt={`${project.title} - Gambar ${index + 2}`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="bg-gradient-to-br from-primary- to-blue-50 dark:from-primary-/10 dark:to-blue-900/10 rounded-2xl p-8 text-center border border-transparent dark:border-gray-700">
          <h2 className="text-2xl text-gray-900 dark:text-white mb-4">Tertarik Bekerja Sama?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Mari diskusikan bagaimana saya dapat membantu mewujudkan visi merek Anda melalui desain strategis dan pemasaran digital.
          </p>
          <Button asChild size="lg" className="bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600">
            <Link to="/contact">Hubungi Saya</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}