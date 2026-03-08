import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-50 hidden md:flex items-center justify-center w-12 h-12 bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-slate-700 hover:border-primary-500 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
}