import socialMediaImg1 from '../../assets/artboard 3.png';
import socialMediaImg2 from '../../assets/artboard 6.png';
import socialMediaImg3 from '../../assets/artboard 9.png';
import socialMediaImg4 from '../../assets/artboard 11.png';
import socialMediaImg5 from '../../assets/artboard 12.png';
import identitasImg1 from '../../assets/artboard 4.png';
import identitasImg2 from '../../assets/artboard 7.png';
import identitasImg3 from '../../assets/artboard 9.png';
import SosialMediaManajemen1 from '../../assets/artboard 5.png';
import SosialMediaManajemen2 from '../../assets/artboard 8.png';
import FakeProject1 from '../../assets/artboard 14.png';

export interface Project {
  id: string;
  title: string;
  category: 'sosial-media' | 'branding' | 'company-profile' | 'ui-ux' | 'sosial-media-manajemen' | 'identitas-perusahaan' | 'fake-project';
  categoryLabel: string;
  thumbnail: string;
  description?: string;
  client: string;
  year: string;
  fullDescription?: string;
  objective?: string;
  process?: string;
  tools?: string[];
  results?: string[];
  images?: string[];
}

export const projects: Project[] = [
  {
    id: 'jarwinn-sosial-media',
    title: 'Jarwinn Sosial Media Desain',
    category: 'sosial-media',
    categoryLabel: 'Sosial Media Desain',
    thumbnail: socialMediaImg1,
    description: 'Kampanye desain media sosial komprehensif untuk Joulwinn yang menonjolkan rangkaian produk dan identitas merek',
    client: 'Jarwinn',
    year: '2025',
    fullDescription: 'Merancang dan mengeksekusi kampanye desain media sosial komprehensif untuk Joulwinn, perusahaan yang bergerak di bidang solusi industri dan perkantoran.',
    objective: 'Meningkatkan interaksi media sosial sebesar 25% dan membangun kesadaran merek yang konsisten di seluruh platform digital.',
    process: 'Proses dimulai dengan riset audiens target, dilanjutkan dengan pengembangan pedoman visual, pembuatan templat konten, hingga eksekusi konten harian yang sejalan dengan identitas merek.',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Canva'],
    results: [
      'Peningkatan jumlah pengikut sebesar 25%',
      'Tingkat interaksi (engagement) bertumbuh sebesar 25%',
      'Jangkauan postingan mengalami peningkatan 25%',
      'Menghasilkan 12 konten pilihan dengan performa terbaik'
    ],
    images: [socialMediaImg1]
  },
  {
    id: 'joulwinn-sosial-media',
    title: 'Joulwinn Sosial Media Desain',
    category: 'sosial-media',
    categoryLabel: 'Sosial Media Desain',
    thumbnail: socialMediaImg2,
    description: 'Kampanye desain media sosial komprehensif untuk Joulwinn yang menonjolkan rangkaian produk dan identitas merek',
    client: 'Joulwinn',
    year: '2025',
    fullDescription: 'Merancang dan mengeksekusi kampanye desain media sosial komprehensif untuk Joulwinn, perusahaan yang bergerak di bidang solusi industri dan perkantoran.',
    objective: 'Meningkatkan interaksi media sosial sebesar 25% dan membangun kesadaran merek yang konsisten di seluruh platform digital.',
    process: 'Proses dimulai dengan riset audiens target, dilanjutkan dengan pengembangan pedoman visual, pembuatan templat konten, hingga eksekusi konten harian yang sejalan dengan identitas merek.',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Canva'],
    results: [
      'Peningkatan jumlah pengikut sebesar 25%',
      'Tingkat interaksi (engagement) bertumbuh sebesar 25%',
      'Jangkauan postingan mengalami peningkatan 25%',
      'Menghasilkan 12 konten pilihan dengan performa terbaik'
    ],
    images: [socialMediaImg2]
  },
  {
    id: 'fitwinn-sosial-media',
    title: 'Fitwinn Sosial Media Desain',
    category: 'sosial-media',
    categoryLabel: 'Sosial Media Desain',
    thumbnail: socialMediaImg3,
    description: 'Kampanye desain media sosial komprehensif untuk Joulwinn yang menonjolkan rangkaian produk dan identitas merek',
    client: 'Fitwinn',
    year: '2025',
    fullDescription: 'Merancang dan mengeksekusi kampanye desain media sosial komprehensif untuk Joulwinn, perusahaan yang bergerak di bidang solusi industri dan perkantoran.',
    objective: 'Meningkatkan interaksi media sosial sebesar 25% dan membangun kesadaran merek yang konsisten di seluruh platform digital.',
    process: 'Proses dimulai dengan riset audiens target, dilanjutkan dengan pengembangan pedoman visual, pembuatan templat konten, hingga eksekusi konten harian yang sejalan dengan identitas merek.',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Canva'],
    results: [
      'Peningkatan jumlah pengikut sebesar 25%',
      'Tingkat interaksi (engagement) bertumbuh sebesar 25%',
      'Jangkauan postingan mengalami peningkatan 25%',
      'Menghasilkan 12 konten pilihan dengan performa terbaik'
    ],
    images: [socialMediaImg3]
  },
  {
    id: 'benz-sosial-media',
    title: 'Benz Sosial Media Desain',
    category: 'sosial-media',
    categoryLabel: 'Sosial Media Desain',
    thumbnail: socialMediaImg4,
    description: 'Kampanye desain media sosial komprehensif untuk Joulwinn yang menonjolkan rangkaian produk dan identitas merek',
    client: 'Benz Management',
    year: '2025',
    fullDescription: 'Merancang dan mengeksekusi kampanye desain media sosial komprehensif untuk Joulwinn, perusahaan yang bergerak di bidang solusi industri dan perkantoran.',
    objective: 'Meningkatkan interaksi media sosial sebesar 25% dan membangun kesadaran merek yang konsisten di seluruh platform digital.',
    process: 'Proses dimulai dengan riset audiens target, dilanjutkan dengan pengembangan pedoman visual, pembuatan templat konten, hingga eksekusi konten harian yang sejalan dengan identitas merek.',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Canva'],
    results: [
      'Peningkatan jumlah pengikut sebesar 25%',
      'Tingkat interaksi (engagement) bertumbuh sebesar 25%',
      'Jangkauan postingan mengalami peningkatan 25%',
      'Menghasilkan 12 konten pilihan dengan performa terbaik'
    ],
    images: [socialMediaImg4]
  },
  {
    id: 'solva-sosial-media',
    title: 'Solva Sosial Media Desain',
    category: 'sosial-media',
    categoryLabel: 'Sosial Media Desain',
    thumbnail: socialMediaImg5,
    description: 'Kampanye desain media sosial komprehensif untuk Joulwinn yang menonjolkan rangkaian produk dan identitas merek',
    client: 'Solva Kreatif Media',
    year: '2025',
    fullDescription: 'Merancang dan mengeksekusi kampanye desain media sosial komprehensif untuk Joulwinn, perusahaan yang bergerak di bidang solusi industri dan perkantoran.',
    objective: 'Meningkatkan interaksi media sosial sebesar 25% dan membangun kesadaran merek yang konsisten di seluruh platform digital.',
    process: 'Proses dimulai dengan riset audiens target, dilanjutkan dengan pengembangan pedoman visual, pembuatan templat konten, hingga eksekusi konten harian yang sejalan dengan identitas merek.',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Canva'],
    results: [
      'Peningkatan jumlah pengikut sebesar 25%',
      'Tingkat interaksi (engagement) bertumbuh sebesar 25%',
      'Jangkauan postingan mengalami peningkatan 25%',
      'Menghasilkan 12 konten pilihan dengan performa terbaik'
    ],
    images: [socialMediaImg5]
  },
  {
    id: 'jarwinn-identitas-perusahaan',
    title: 'Jarwinn Identitas Perusahaan',
    category: 'identitas-perusahaan',
    categoryLabel: 'Identitas Perusahaan',
    thumbnail: identitasImg1,
    description: 'Paket identitas perusahaan yang lengkap, mencakup profil perusahaan, pedoman merek, dan materi pemasaran',
    client: 'Jarwinn',
    year: '2025',
    fullDescription: 'Pengembangan identitas perusahaan yang utuh untuk Joulwinn, mulai dari kerangka profil perusahaan, penjabaran papan visi & misi, penyusunan katalog produk, hingga pembuatan berbagai materi pendukung bagi pelanggan.',
    objective: 'Membangun rancangan identitas visual yang profesional dan senantiasa terlihat konsisten, bertujuan untuk memperkuat citra posisi Joulwinn sebagai sarana penyedia beragam solusi industri maupun kebutuhan perkantoran.',
    process: 'Dimulai sejak penyelenggaraan diskusi perancangan strategi merek, yang dilanjutkan proses desain iteratif pada berbagai purwarupa mockup. Diperbaiki mengikuti penyampaian masukan dari pihak klien hingga masuk ke tahapan rancangan siap cetak dan rilis digital.',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign'],
    results: [
      'Penyusunan profil perusahaan sepanjang 20+ halaman',
      'Perumusan katalog desain produk yang mencakup 5 kategori unggulan',
      'Merancang kerangka tampilan materi dan slide presentasi bisnis profesional',
      'Pembentukan panduan sistem identitas merek (Brand Guidelines) yang utuh'
    ],
    images: [identitasImg1]
  },
  {
    id: 'joulwinn-identitas-perusahaan',
    title: 'Joulwinn Identitas Perusahaan',
    category: 'identitas-perusahaan',
    categoryLabel: 'Identitas Perusahaan',
    thumbnail: identitasImg2,
    description: 'Paket identitas perusahaan yang lengkap, mencakup profil perusahaan, pedoman merek, dan materi pemasaran',
    client: 'Joulwinn',
    year: '2025',
    fullDescription: 'Pengembangan identitas perusahaan yang utuh untuk Joulwinn, mulai dari kerangka profil perusahaan, penjabaran papan visi & misi, penyusunan katalog produk, hingga pembuatan berbagai materi pendukung bagi pelanggan.',
    objective: 'Membangun rancangan identitas visual yang profesional dan senantiasa terlihat konsisten, bertujuan untuk memperkuat citra posisi Joulwinn sebagai sarana penyedia beragam solusi industri maupun kebutuhan perkantoran.',
    process: 'Dimulai sejak penyelenggaraan diskusi perancangan strategi merek, yang dilanjutkan proses desain iteratif pada berbagai purwarupa mockup. Diperbaiki mengikuti penyampaian masukan dari pihak klien hingga masuk ke tahapan rancangan siap cetak dan rilis digital.',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign'],
    results: [
      'Penyusunan profil perusahaan sepanjang 20+ halaman',
      'Perumusan katalog desain produk yang mencakup 5 kategori unggulan',
      'Merancang kerangka tampilan materi dan slide presentasi bisnis profesional',
      'Pembentukan panduan sistem identitas merek (Brand Guidelines) yang utuh'
    ],
    images: [identitasImg2]
  },
  {
    id: 'fitwinn-identitas-perusahaan',
    title: 'Fitwinn Identitas Perusahaan',
    category: 'identitas-perusahaan',
    categoryLabel: 'Identitas Perusahaan',
    thumbnail: identitasImg3,
    description: 'Paket identitas perusahaan yang lengkap, mencakup profil perusahaan, pedoman merek, dan materi pemasaran',
    client: 'Fitwinn',
    year: '2025',
    fullDescription: 'Pengembangan identitas perusahaan yang utuh untuk Joulwinn, mulai dari kerangka profil perusahaan, penjabaran papan visi & misi, penyusunan katalog produk, hingga pembuatan berbagai materi pendukung bagi pelanggan.',
    objective: 'Membangun rancangan identitas visual yang profesional dan senantiasa terlihat konsisten, bertujuan untuk memperkuat citra posisi Joulwinn sebagai sarana penyedia beragam solusi industri maupun kebutuhan perkantoran.',
    process: 'Dimulai sejak penyelenggaraan diskusi perancangan strategi merek, yang dilanjutkan proses desain iteratif pada berbagai purwarupa mockup. Diperbaiki mengikuti penyampaian masukan dari pihak klien hingga masuk ke tahapan rancangan siap cetak dan rilis digital.',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign'],
    results: [
      'Penyusunan profil perusahaan sepanjang 20+ halaman',
      'Perumusan katalog desain produk yang mencakup 5 kategori unggulan',
      'Merancang kerangka tampilan materi dan slide presentasi bisnis profesional',
      'Pembentukan panduan sistem identitas merek (Brand Guidelines) yang utuh'
    ],
    images: [identitasImg3]
  },
  {
    id: 'jarwinn-sosial-media-manajemen',
    title: 'Jarwinn Sosial Media Manajemen',
    category: 'sosial-media-manajemen',
    categoryLabel: 'Sosial Media Manajemen',
    thumbnail: SosialMediaManajemen1,
    description: 'Perencanaan dan manajemen konten strategis di lintas platform seperti TikTok, Reels Instagram, serta kampanye KOL (Key Opinion Leader)',
    client: 'Jarwinn',
    year: '2025',
    fullDescription: 'Manajemen perancangan konten strategis secara terpadu yang mencakup pembentukan kalender konten, pengaturan optimasi Meta Ads dan aktivitas kampanye pada kanal TikTok serta Reels Instagram, bersamaan dengan pelaksanaan kerjasama bareng sejumlah Key Opinion Leader (KOL).',
    objective: 'Memberikan optimalisasi atas kemajuan hasil performa postingan dengan rancangan peruntukan modal iklan sekecil-kecilnya. Menjamin perluasan total jangkauan (Reach) kepada pemirsa organik melalui format publikasi video.',
    process: 'Dimulai dengan membentuk kalender rencana publikasi secara bulanan dan melakukan penelitian terhadap beraneka ragam topik populer, dilanjutkan memproduksi kreasi konten berbentuk video dan mendorong penawaran iklan secara tertarget, disudahi evaluasi serta memantau pergerakan kualitas capaian akun digital untuk perbaikan yang terus berkelanjutan.',
    tools: ['Meta Business Suite', 'TikTok Ads Manager', 'CapCut', 'Adobe Premiere Pro'],
    results: [
      'Keberhasilan menjangkau lebih dari 155 data konversi Leads valid lewat pesan antarmuka aplikasi WhatsApp',
      'Efisiensi tinggi dengan anggaran belanja biaya di kisaran rata-rata angka senilai Rp 3.999 saja pada setiap interaksi komunikasi awal pengguna',
      'Pencapaian pertumbuhan hingga menyentuh besaran kumulatif mencapai angka 36.290+ penayangan rekaman video total selama durasi publikasi di TikTok',
      'Jumlah perolehan besaran tingkat jamak sekitar total lebih dari 174.654 kali lipat banyaknya pasang mata pengguna audiens secara umum saat mengakses konten klip tayangan Instagram Reels',
      'Rekor tingkat ketahanan penonton saat ini stabil di angkap akumulasi sekumpulan rataan rentang kisaran estimasi minimalnya berkisar durasi sekitar 165+ keseluruhan total perhitungan jam menontonnya'
    ],
    images: [SosialMediaManajemen1]
  },
  {
    id: 'joulwinn-sosial-media-manajemen',
    title: 'Joulwinn Sosial Media Manajemen',
    category: 'sosial-media-manajemen',
    categoryLabel: 'Sosial Media Manajemen',
    thumbnail: SosialMediaManajemen2,
    description: 'Perencanaan dan manajemen konten strategis di lintas platform seperti TikTok, Reels Instagram, serta kampanye KOL (Key Opinion Leader)',
    client: 'Joulwinn',
    year: '2025',
    fullDescription: 'Manajemen perancangan konten strategis secara terpadu yang mencakup pembentukan kalender konten, pengaturan optimasi Meta Ads dan aktivitas kampanye pada kanal TikTok serta Reels Instagram, bersamaan dengan pelaksanaan kerjasama bareng sejumlah Key Opinion Leader (KOL).',
    objective: 'Memberikan optimalisasi atas kemajuan hasil performa postingan dengan rancangan peruntukan modal iklan sekecil-kecilnya. Menjamin perluasan total jangkauan (Reach) kepada pemirsa organik melalui format publikasi video.',
    process: 'Dimulai dengan membentuk kalender rencana publikasi secara bulanan dan melakukan penelitian terhadap beraneka ragam topik populer, dilanjutkan memproduksi kreasi konten berbentuk video dan mendorong penawaran iklan secara tertarget, disudahi evaluasi serta memantau pergerakan kualitas capaian akun digital untuk perbaikan yang terus berkelanjutan.',
    tools: ['Meta Business Suite', 'TikTok Ads Manager', 'CapCut', 'Adobe Premiere Pro'],
    results: [
      'Keberhasilan menjangkau lebih dari 155 data konversi Leads valid lewat pesan antarmuka aplikasi WhatsApp',
      'Efisiensi tinggi dengan anggaran belanja biaya di kisaran rata-rata angka senilai Rp 3.999 saja pada setiap interaksi komunikasi awal pengguna',
      'Pencapaian pertumbuhan hingga menyentuh besaran kumulatif mencapai angka 36.290+ penayangan rekaman video total selama durasi publikasi di TikTok',
      'Jumlah perolehan besaran tingkat jamak sekitar total lebih dari 174.654 kali lipat banyaknya pasang mata pengguna audiens secara umum saat mengakses konten klip tayangan Instagram Reels',
      'Rekor tingkat ketahanan penonton saat ini stabil di angkap akumulasi sekumpulan rataan rentang kisaran estimasi minimalnya berkisar durasi sekitar 165+ keseluruhan total perhitungan jam menontonnya'
    ],
    images: [SosialMediaManajemen2]
  },
  {
    id: 'fake-project',
    title: 'Proyek Contoh',
    category: 'fake-project',
    categoryLabel: 'Proyek Contoh',
    thumbnail: FakeProject1,
    description: 'Membuat poster manipulasi digital gambar, mendesain rancangan tampilan beserta cara fungsional menu pengoperasian (UI/UX) pada halaman program sistem pendataan, dan pembuatan kerangka 3 dimensi.',
    client: 'Joulwinn',
    year: '2025',
    tools: ['Meta Business Suite', 'TikTok Ads Manager', 'CapCut', 'Adobe Premiere Pro'],
    images: [FakeProject1]
  }
];

export const categories = [
  { value: 'all', label: 'Semua Proyek' },
  { value: 'sosial-media', label: 'Desain Media Sosial' },
  { value: 'identitas-perusahaan', label: 'Identitas Perusahaan' },
  { value: 'sosial-media-manajemen', label: 'Manajemen Media Sosial' },
  { value: 'fake-project', label: 'Proyek Contoh' },
];
