import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/6287768666071"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 md:hidden bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 hover:scale-110 transition-all duration-300 animate-bounce"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
}
