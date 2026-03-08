import { Outlet } from 'react-router';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingWhatsApp } from './FloatingWhatsApp';
import { ScrollToTop } from './ScrollToTop';
import { ScrollToTopOnNavigate } from './ScrollToTopOnNavigate';
import { useTheme } from '../hooks/useTheme';

export function RootLayout() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <ScrollToTopOnNavigate />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
}