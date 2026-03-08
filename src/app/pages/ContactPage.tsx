import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export function ContactPage() {
  useDocumentTitle('Contact');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Terima kasih atas pesan Anda! Saya akan segera menghubungi Anda kembali.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl text-gray-900 dark:text-white mb-4">Hubungi Saya</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Punya ide proyek? Mari berdiskusi tentang bagaimana kita bisa bekerja sama untuk mewujudkan visi Anda menjadi nyata.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl text-gray-900 dark:text-white mb-6">Informasi Kontak</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Surel (Email)</div>
                    <a href="mailto:hello@example.com" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                      hello@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">WhatsApp</div>
                    <a href="https://wa.me/6281234567890" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                      +62 812-3456-7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Lokasi</div>
                    <div className="text-gray-600 dark:text-gray-300">Tangerang Selatan, Indonesia</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Ikuti Saya</h3>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/marf_tgr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-500 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-500 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-primary- to-blue-50 dark:from-primary-/10 dark:to-blue-900/10 rounded-xl p-6 border border-transparent dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Ketersediaan</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex justify-between">
                  <span>Senin - Jumat</span>
                  <span className="font-medium text-gray-900 dark:text-white">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Akhir Pekan (Sabtu & Minggu)</span>
                  <span className="font-medium text-gray-900 dark:text-white">Melalui Perjanjian</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8">
              <h2 className="text-2xl text-gray-900 dark:text-white mb-6">Kirimkan Saya Pesan</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Nama Anda *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Surel (Email) Anda *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="johndoe@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subjek Pertanyaan *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Pertanyaan Seputar Proyek"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Tuliskan Pesan *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Ceritakan tentang hal yang ingin didiskusikan dari proyek Anda..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600">
                  Kirim Pesan
                  <Send className="ml-2" size={18} />
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Quick Contact CTA */}
        <div className="mt-16 bg-gray-900 dark:bg-slate-800 text-white rounded-2xl p-8 md:p-12 text-center border border-transparent dark:border-gray-700">
          <h2 className="text-2xl md:text-3xl mb-4">Lebih Suka Mengobrol Secara Langsung?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Saya tersedia di WhatsApp untuk sekadar berdiskusi singkat atau berkonsultasi seputar pemasaran bisnis Anda.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white"
          >
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
              <Phone className="mr-2" size={20} />
              Hubungi via WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}