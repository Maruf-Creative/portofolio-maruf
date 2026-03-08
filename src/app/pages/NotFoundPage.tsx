import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';

export function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-9xl font-bold text-gray-200 dark:text-gray-700 mb-4">404</div>
        <h1 className="text-3xl text-gray-900 dark:text-white mb-4">Page Not Found</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link to="/">
              <Home className="mr-2" size={18} />
              Go Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/portfolio">
              <ArrowLeft className="mr-2" size={18} />
              View Portfolio
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}