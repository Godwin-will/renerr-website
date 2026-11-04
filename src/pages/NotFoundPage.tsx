import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Home, ArrowRight } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-24 sm:py-32 bg-brand-cream text-center">
      <div className="max-w-md mx-auto px-4 space-y-6">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-dark text-brand-accent flex items-center justify-center">
          <Sun className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
            404 Error
          </span>
          <h1 className="text-3xl font-extrabold text-brand-dark">Page Not Found</h1>
          <p className="text-sm text-brand-muted leading-relaxed">
            The page you are looking for does not exist or may have been relocated.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold bg-brand-primary text-white hover:bg-brand-dark transition-colors shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            to="/approach"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border border-brand-dark/20 text-brand-dark hover:bg-white transition-colors"
          >
            <span>Our Approach</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
