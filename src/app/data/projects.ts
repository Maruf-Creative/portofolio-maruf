import socialMediaImg1 from '../../assets/artboard 3.webp';
import socialMediaImg2 from '../../assets/artboard 6.webp';
import socialMediaImg3 from '../../assets/artboard 9.webp';
import socialMediaImg4 from '../../assets/artboard 11.webp';
import socialMediaImg5 from '../../assets/artboard 12.webp';
import identitasImg1 from '../../assets/artboard 4.webp';
import identitasImg2 from '../../assets/artboard 7.webp';
import identitasImg3 from '../../assets/artboard 9.webp';
import SosialMediaManajemen1 from '../../assets/artboard 5.webp';
import SosialMediaManajemen2 from '../../assets/artboard 8.webp';
import FakeProject1 from '../../assets/artboard 14.webp';

export interface Project {
  id: string;
  title: string;
  category: 'sosial-media' | 'branding' | 'company-profile' | 'ui-ux' | 'sosial-media-manajemen' | 'identitas-perusahaan' | 'fake-project';
  categoryLabel: string;
  thumbnail: string;
  description?: string;
  client: string;
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
    description: 'Kampanye desain media sosial komprehensif untuk Jarwinn yang menonjolkan rangkaian produk dan identitas merek',
    client: 'Jarwinn',
    fullDescription: 'Merancang dan mengeksekusi kampanye desain media sosial komprehensif untuk Jarwinn, perusahaan yang bergerak di bidang energi terbarukan dan kelistrikan.',
    objective: 'Meningkatkan interaksi media sosial dan membangun kesadaran merek yang berhubungan dengan energi terbarukan dan panel surya secara konsisten di seluruh platform digital.',
    process: 'Proses dimulai dengan riset audiens target, dilanjutkan dengan pengembangan pedoman visual, pembuatan templat konten edukasi dan promosi, hingga eksekusi konten harian yang sejalan dengan identitas merek.',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Canva'],
    results: [
      'Peningkatan jumlah pengikut sebesar 267,5%',
      'Tingkat interaksi (engagement) bertumbuh sebesar 100%',
      'Jangkauan postingan mengalami peningkatan sebesar 1,2rb%',
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
    description: 'Kampanye desain media sosial komprehensif yang menonjolkan rangkaian produk IT, gadget, industrial, dan sport & leisure',
    client: 'Joulwinn',
    fullDescription: 'Merancang dan mengeksekusi kampanye desain media sosial komprehensif untuk Joulwinn, perusahaan penyedia solusi bisnis terpadu (Deliver Your Solutions).',
    objective: 'Meningkatkan interaksi media sosial serta menumbuhkan kesadaran produk secara konsisten untuk kategori alat kebersihan, fitness (pilates), dan hardware perkakas.',
    process: 'Proses dimulai dengan riset audiens target, dilanjutkan dengan pengembangan pedoman visual, pembuatan templat konten peringatan hari besar dan promosi produk, hingga eksekusi.',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Canva'],
    results: [
      'Peningkatan persentase jumlah pengikut sebesar 234,6%',
      'Tingkat interaksi (engagement) bertumbuh drastis sebesar 1,2rb%',
      'Jangkauan tayangan postingan mengalami lonjakan sebesar 1,9rb%',
      'Keberhasilan membuat visualisasi produk yang jelas dan terlihat profesional'
    ],
    images: [socialMediaImg2]
  },
  {
    id: 'fitwinn-sosial-media',
    title: 'Fitwinn Sosial Media Desain',
    category: 'sosial-media',
    categoryLabel: 'Sosial Media Desain',
    thumbnail: socialMediaImg3,
    description: 'Kampanye desain visual premium bertema alam untuk produk kesehatan sarang burung walet bebas bahan pengawet',
    client: 'Fitwinn Schatz Internasional',
    fullDescription: 'Merancang visual untuk media sosial brand Fitwinn Schatz Internasional, penyuplai sarang burung walet (Bird\'s Nest) berkualitas tinggi di Indonesia.',
    objective: 'Mengomunikasikan pesan merek sebagai produk premium tanpa bahan pengawet ("100% Pure, Quality, Nutritious, Authenticity") dan mengedukasi masyarakat tentang manfaat sarang walet bagi keluarga.',
    process: 'Penciptaan moodboard bertema perpaduan elemen alam (nature) dan kemewahan, lalu mengecilkan cakupan desain khusus untuk konten edukasi resep dan khasiat kesehatan, lalu rilis reguler.',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma'],
    results: [
      'Menciptakan citra merek visual premium bertema alam (nature) selaras dengan produk',
      'Meningkatkan tingkat edukasi serta minat konsumen terhadap dosis harian walet yang sehat',
      'Memperkuat portofolio layout feed media sosial dengan desain berkualitas "White Gold"'
    ],
    images: [socialMediaImg3]
  },
  {
    id: 'benz-sosial-media',
    title: 'Benz Sosial Media Desain',
    category: 'sosial-media',
    categoryLabel: 'Sosial Media Desain',
    thumbnail: socialMediaImg4,
    description: 'Pengelolaan visual kreatif bertema talenta artis dan KOL, fokus pada warna ceria dan informasi call-to-action (CTA)',
    client: 'Benz Management',
    fullDescription: 'Menghadirkan tampilan konten interaktif untuk agensi talenta Benz Management yang berfokus mengajak buzzer dan KOL positif untuk bergabung dalam platform mereka.',
    objective: 'Menarik perhatian calon content creator dan influencer di media sosial dengan palet warna "pink ceria" serta informasi tren masa berjalan.',
    process: 'Riset tren jenis-jenis kreator lokal hingga metode copywriting kekinian, diikuti pembentukan purwarupa feed Instagram yang fresh (giveaway, tips kolaborasi talent, dsb).',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Canva'],
    results: [
      'Terciptanya tampilan grid (feed) Instagram agency yang relevan untuk target Generasi Z',
      'Memperjelas penyampaian informasi Open Collaboration kepada audiens',
      'Penyatuan warna brand identity (pink / merah muda) pada setiap materi desain agar mudah dihafal'
    ],
    images: [socialMediaImg4]
  },
  {
    id: 'solva-sosial-media',
    title: 'Solva Sosial Media Desain',
    category: 'sosial-media',
    categoryLabel: 'Sosial Media Desain',
    thumbnail: socialMediaImg5,
    description: 'Kampanye visual estetik elegan berbalut elemen digital 3D kreatif untuk mengukuhkan posisi sebagai agensi yang profesional',
    client: 'Solva Kreatif Media',
    fullDescription: 'Merancang aset visual media sosial Solva sebagai manifestasi portofolio utama, mendemonstrasikan keluwesan dalam meracik desain grafis yang tak terkesan pasaran melainkan unik modern.',
    objective: 'Menangkap perhatian pelaku usaha melalui eksekusi tipografi minimalis, elemen 3D (digital imaging mutakhir), serta panduan warna pastel untuk menunjukkan identitas "smart creative".',
    process: 'Tahapan awal menyusun konsep seni (art direction) surealis dan abstrak, disusul meramu tipografi yang indah, dan menyelesaikannya dengan kombinasi foto hingga digital imaging.',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Cinema 4D'],
    results: [
      'Evolusi pandangan publik tentang kemampuan artistik studio kreatif ini',
      'Ketersediaan templat konten inspirasional informatif bertema "Start Creating & Boost Ideas"',
      'Keakuratan tinggi dalam menciptakan detail tekstur grafis bagi kampanye agency'
    ],
    images: [socialMediaImg5]
  },
  {
    id: 'jarwinn-identitas-perusahaan',
    title: 'Jarwinn Identitas Perusahaan',
    category: 'identitas-perusahaan',
    categoryLabel: 'Identitas Perusahaan',
    thumbnail: identitasImg1,
    description: 'Pembuatan material penunjang bisnis mulai dari Company Profile hingga katalog produk kelistrikan (PJU & Solar Energy)',
    client: 'Jarwinn',
    fullDescription: 'Pengembangan identitas pendukung bisnis yang utuh untuk Jarwinn, mulai dari kerangka profil perusahaan, penyusunan spesifikasi produk All in One (PJU), hingga edukasi komponen PLTS dan HESS (Battery Energy Storage System).',
    objective: 'Merangkum kemampuan teknis produk inovatif Solar Energy dan sistem kelistrikan berdaya 40W/60W/100W ke dalam materi visual perusahaan berkelas internasional.',
    process: 'Dimulai dari pengelompokan penataan informasi produk teknis, hingga perancangan desain layout pada brosur cetak untuk pelanggan korporat.',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign'],
    results: [
      'Penyusunan rancangan presentasi dan layout brosur produk teknis dengan spesifikasi mendetail',
      'Merancang diagram infografis komponen sistem panel (Off Grid, Hybrid, On Grid PLTS secara terpusat)',
      'Menyediakan materi pemasaran cetak dan digital bagi kebutuhan pemaparan Business to Business'
    ],
    images: [identitasImg1]
  },
  {
    id: 'joulwinn-identitas-perusahaan',
    title: 'Joulwinn Identitas Perusahaan',
    category: 'identitas-perusahaan',
    categoryLabel: 'Identitas Perusahaan',
    thumbnail: identitasImg2,
    description: 'Penyusunan buku profil perusahaan (Company Profile) profesional sebagai penyedia \'One Stop Solutions for Industrial & Office\'',
    client: 'Joulwinn',
    fullDescription: 'Membangun desain representatif Company Profile untuk Joulwinn Gelvis Hotapea, mencakup penyampaian visi-misi, sejarah berdirinya merek, dan rentang divisi yang lengkap mentereng (IT & Gadget, Industrial, dan Sports/Pilates).',
    objective: 'Membangun rancangan identitas korporat berkelas guna menanamkan kepercayan (trust) pada berbagai institusi mitra bisnis/klien besar atas kompetensi perusahaan.',
    process: 'Penyusunan struktur layout berkelas minimalis elegan (clean) yang kuat pada penataan ruang kosong (white-space) diikuti padu padan warna perseroan biru profesional.',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign'],
    results: [
      'Penyusunan desain buku identitas profil perusahaan yang meyakinkan investor',
      'Rincian penataan katalog visual untuk ragam departemen mulai dari gawai komputasi, perkakas industri hingga produk fitness',
      'Mengokohkan kedudukan merek dan kredibilitas klien dengan layout infografika klien yang sangat jelas'
    ],
    images: [identitasImg2]
  },
  {
    id: 'fitwinn-identitas-perusahaan',
    title: 'Fitwinn Identitas Perusahaan',
    category: 'identitas-perusahaan',
    categoryLabel: 'Identitas Perusahaan',
    thumbnail: identitasImg3,
    description: 'Desain identitas brand bernuansa hijau alami untuk sarang burung walet bebas bahan kimia',
    client: 'Fitwinn Schatz Internasional',
    fullDescription: 'Pengembangan tata letak grafis visual yang mencerminkan profil Fitwinn Schatz Internasional (premium bird\'s nest supplier) dengan landasan komitmen pengiriman keseluruh dunia maupun ke alam raya.',
    objective: 'Membangun paduan grafis logo dan portofolio gaya visual yang menyoroti mutu suplemen yang asli nan menyegarkan.',
    process: 'Studi pencarian jenis gambar beresolusi super tinggi yang melambangkan hutan kemurnian alami, diorganisir menggunakan kaidah tata ruang grid per kolom sosial media / digital feed.',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign'],
    results: [
      'Perpaduan serasi skema warna hutan alami mendalam bagi estetika identitas Fitwinn',
      'Konsistensi bahasa komunikasi visual mengenai standar penyajian kesehatan premium',
      'Meningkatkan kesan kepercayaan murni bagi suplemen porsi sarang burung walet keluarga'
    ],
    images: [identitasImg3]
  },
  {
    id: 'jarwinn-sosial-media-manajemen',
    title: 'Jarwinn Sosial Media Manajemen',
    category: 'sosial-media-manajemen',
    categoryLabel: 'Sosial Media Manajemen',
    thumbnail: SosialMediaManajemen1,
    description: 'Manajemen periklanan Meta Ads dan pengelolaan konten video Reels/TikTok organik bertenaga edukatif tentang LiFePO4 dan panel surya',
    client: 'Jarwinn',
    fullDescription: 'Manajemen konten dan iklan berkelanjutan yang mencakup penjadwalan Content Plan, pengaturan Meta Ads untuk perolehan konversi tautan, serta kampanye video Reels yang mendulang view masif audiens publik secara organik.',
    objective: 'Mendorong eksposur besar-besaran terhadap produk baterai Lithium (LiFePO4) & Instalasi PJU Panel Listrik kepada penonton vertikal Reels dan TikTok, seraya mengkonversi penonton via iklan (link clicks).',
    process: 'Bermula dari perlakuan jadwal harian produksi video komprehensif memakai Sheet, dilanjutkan manajemen kontrol anggaran rendah di kampanye digital Meta demi optimasi efisien terhadap tayangan.',
    tools: ['Meta Ads Manager', 'Microsoft Excel / Spreadsheet', 'CapCut', 'Adobe Premiere Pro'],
    results: [
      'Mendapatkan lebih dari 4.467 metrik Klik Tautan lewat kampanye optimasi Meta Ads',
      'Capaian performa istimewa di biaya pembelajaan senilai Rp 340 per interaksi Klik Tautan dari target luas',
      'Penayangan video publikasi organik Instagram Reels mencapai angka melampaui 181.010+ tontonan bersama 1.250+ durasi jam tayang',
      'Torehan rekor perolehan atensi publik melalui TikTok hingga sebesar 22.985+ tontonan per tayangan'
    ],
    images: [SosialMediaManajemen1]
  },
  {
    id: 'joulwinn-sosial-media-manajemen',
    title: 'Joulwinn Sosial Media Manajemen',
    category: 'sosial-media-manajemen',
    categoryLabel: 'Sosial Media Manajemen',
    thumbnail: SosialMediaManajemen2,
    description: 'Strategi optimasi Meta Ads via WhatsApp, pengelolaan Content Plan ekstensif, dan akselerasi video Flash Sale Antbox via kolaborasi KOL Mario Gerungan',
    client: 'Joulwinn',
    fullDescription: 'Strategi pemeliharaan saluran trafik B2C/B2B yang meliputi aktivasi Meta Ads terfokus konversi pesan Whatsapp, pengorganisasian matrik jadwal konten di kalender khusus, hingga pendobrakan viralitas video Reels bersama KOL lapangan.',
    objective: 'Mempercepat pengenalan portofolio (Rexco hingga keranjang Antbox) secara meluas di TikTok dan Reels sembari memperolah percakapan pembeli langsung dengan admin via WA atas modal iklan serendah serendahnya.',
    process: 'Pemantauan indikator kinerja rutin berkategori edukasi maupun humor, mendanai iklan bersinyal akurat untuk demografi pengadaan gawai kantor lalu memperkaya kredibilitas dari partisipasi influencer besar.',
    tools: ['Meta Ads Manager', 'Instagram / TikTok', 'Spreadsheet', 'CapCut'],
    results: [
      'Menjangkau 74 permulaan Percakapan Pesan WhatsApp valid sebagai perolehan tim penjualan',
      'Tingkat optimasi finansial iklan di level anggaran sebesar Rp 3.670 bagi setiap percakapan dimulai',
      'Ledakan kunjungan masif di wadah Instagram Reels via dukungan talenta KOL menyumbang 174.654+ penonton dan 580+ jam tontonan',
      'Taktik penayangan edukasi eksperimen produk industri Rexco di platform TikTok sukses besar menuai peredaran di 36.290+ penayangan unik'
    ],
    images: [SosialMediaManajemen2]
  },
  {
    id: 'fake-project',
    title: 'Proyek Contoh',
    category: 'fake-project',
    categoryLabel: 'Proyek Contoh',
    thumbnail: FakeProject1,
    description: 'Proyek portofolio eksplorasi dalam menyuguhkan integrasi desain UI modern pada aplikasi keuangan & rumah sakit, tatanan Desain 3D, serta seni grafis Digital Imaging manipulasi.',
    client: 'Proyek Personal',
    tools: ['Figma', 'Blender 3D', 'Adobe Photoshop'],
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
