import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import fotoMaruf from '../../assets/foto maruf.webp';

export function HomePage() {
  useDocumentTitle('Home');
  const featuredProjects = projects.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary- via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-20 px-4 sm:px-6 lg:px-8 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-6">
              Digital Marketing & Desain Grafis
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
              Mentransformasi identitas merek melalui desain media sosial kreatif, manajemen konten strategis, serta solusi pemasaran digital yang menyeluruh. Mari tingkatkan jangkauan digital merek Anda bersama-sama.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600">
                <Link to="/portfolio">
                  Lihat Portofolio
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Hubungi Saya</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Featured Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-gray-900 dark:text-white mb-4">Pekerjaan Unggulan</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Jelajahi pilihan proyek terbaik saya yang menampilkan kombinasi desain kreatif dan strategi performa pemasaran digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/portfolio">
                Lihat Semua Proyek
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-3xl sm:text-4xl text-gray-900 dark:text-white mb-6">
                Tentang Saya
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Digital Marketer dengan kompetensi dalam pemasaran digital, periklanan, desain grafis, UI/UX, dan pengelolaan marketplace. Terbiasa bekerja secara kolaboratif, bertanggung jawab, serta memiliki motivasi tinggi untuk terus belajar dan berkembang.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Pemasaran & Manajemen Media Sosial</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Desain Grafis & Identitas Merek</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Desain UI/UX & Pengembangan Web</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Perencanaan & Strategi Konten</span>
                </div>
              </div>
              <Button asChild>
                <Link to="/about">Pelajari Lebih Lanjut Tentang Saya</Link>
              </Button>
            </div>
            <div className="lg:col-span-2 relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-primary- to-blue-100 dark:from-primary-/20 dark:to-blue-900/20 rounded-2xl overflow-hidden">
                <img
                  src={fotoMaruf}
                  alt="Potret Profesional"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl text-gray-900 dark:text-white mb-6">
            Siap Bekerja Sama?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Mari berkolaborasi dan ciptakan sesuatu yang luar biasa untuk merek Anda. Hubungi kami hari ini untuk mendiskusikan proyek masa depan.
          </p>
          <Button asChild size="lg" className="bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600">
            <Link to="/contact">
              Mulai Proyek
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}