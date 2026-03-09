import { Instagram, Linkedin, Mail, Github } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-slate-800 border-t border-gray-200 dark:border-gray-700 mt-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Portofolio</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Solusi Pemasaran & Desain Digital. Mentransformasi identitas merek melalui desain kreatif dan pemasaran digital strategis.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Tautan Cepat</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li><a href="/portfolio" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Portofolio</a></li>
              <li><a href="/about" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Tentang</a></li>
              <li><a href="/contact" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Kontak</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Terhubung</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/marf_tgr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-slate-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-slate-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:muhammad.maruf.tegar@gmail.com"
                className="p-2 bg-white dark:bg-slate-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-slate-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; {currentYear} Portofolio. Hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}