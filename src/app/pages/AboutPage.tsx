import aboutImage from '../../assets/fcb05a791d05490cbe90955b51d01622fb0f1d34.png';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export function AboutPage() {
  useDocumentTitle('About');

  const education = [
    {
      year: '2025',
      degree: 'SMK Negeri 4 Tangerang Selatan',
      field: 'Desain Komunikasi Visual'
    },
    {
      year: '2025 - Sekarang',
      degree: 'Universitas Pamulang',
      field: 'Sistem Informasi S1'
    }
  ];

  const experience = [
    {
      year: 'September 2024 - Agustus 2025 (Magang)',
      company: 'PT Solva Kreatif Media',
      role: 'Desain Grafis'
    },
    {
      year: 'Maret 2025 - Oktober 2025 (Freelance)',
      company: 'Benz Management',
      role: 'Desain Grafis'
    },
    {
      year: 'Agustus 2025 - Now',
      company: 'PT Jarwin & Joulwinn',
      role: 'Digital Marketing'
    }
  ];

  const skills = [
    { name: 'Adobe Photoshop', icon: '🎨' },
    { name: 'Adobe Premiere Pro', icon: '🎬' },
    { name: 'Adobe Illustrator', icon: '✏️' },
    { name: 'Figma', icon: '🔷' },
    { name: 'Meta Ads', icon: '📱' },
    { name: 'TikTok', icon: '🎵' },
    { name: 'Brevo', icon: '💼' },
    { name: 'Shopee', icon: '🛒' }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl text-gray-900 dark:text-white mb-4">Tentang Saya</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Seorang pemasar digital yang bersemangat dengan keahlian dalam menciptakan desain yang berdampak dan solusi pemasaran strategis.
          </p>
        </div>

        {/* Hero Section with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="aspect-[3/4] bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl overflow-hidden sticky top-24">
              <img
                src="images/foto maruf.png"
                alt="Muhammad Ma'ruf Tegar Saputra"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-3 space-y-8">
            <div>
              <h2 className="text-3xl text-gray-900 dark:text-white mb-4">Muhammad Ma'ruf Tegar Saputra</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Digital Marketer dengan kompetensi dalam pemasaran digital, periklanan, desain grafis, UI/UX, dan pengelolaan marketplace. Terbiasa bekerja secara kolaboratif, bertanggung jawab, serta memiliki motivasi tinggi untuk terus belajar dan berkembang.
              </p>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl text-gray-900 dark:text-white mb-4">Pendidikan</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-primary-500 dark:border-primary-400 pl-4">
                    <div className="text-sm text-primary-600 dark:text-primary-400 font-medium">{edu.year}</div>
                    <div className="font-medium text-gray-900 dark:text-white">{edu.degree}</div>
                    <div className="text-gray-600 dark:text-gray-300">{edu.field}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-2xl text-gray-900 dark:text-white mb-4">Pengalaman Kerja</h3>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-blue-500 dark:border-blue-400 pl-4">
                    <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">{exp.year}</div>
                    <div className="font-medium text-gray-900 dark:text-white">{exp.company}</div>
                    <div className="text-gray-600 dark:text-gray-300">{exp.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-20">
          <h2 className="text-3xl text-gray-900 dark:text-white mb-8 text-center">Keahlian & Tools</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-center hover:border-primary-500 dark:hover:border-primary-400 hover:shadow-lg transition-all"
              >
                <div className="text-3xl mb-2">{skill.icon}</div>
                <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-gradient-to-br from-primary- to-blue-50 dark:from-primary-/10 dark:to-blue-900/10 rounded-2xl p-8 md:p-12 border border-transparent dark:border-gray-700">
          <h2 className="text-2xl text-gray-900 dark:text-white mb-4">Pendekatan Saya</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Saya percaya dalam menciptakan desain yang tidak hanya terlihat indah tetapi juga menghasilkan hasil. Setiap proyek adalah kesempatan untuk memecahkan masalah secara kreatif dan memberikan nilai tambah kepada klien. Proses saya menggabungkan pemikiran strategis dengan eksekusi kreatif, selalu dengan mengingat tujuan akhir.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Strategi Pertama</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Pahami tujuan bisnis sebelum terjun ke tahap desain.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Keunggulan Kreatif</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Menghadirkan karya yang memukau secara visual dan menonjol.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Didorong oleh Hasil</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Mengukur keberhasilan melalui hasil dan dampak yang nyata.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}