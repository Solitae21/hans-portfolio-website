import { Heart } from 'lucide-react';
import { NAV_ITEMS } from '@/utils/constants';
import { personal } from '@/data/personal';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg-primary border-t border-white/5 py-10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#hero" className="font-mono text-sm font-semibold text-white hover:text-accent-indigo transition-colors">
            <span className="text-accent-indigo">&lt;</span>
            Hans
            <span className="text-accent-indigo">/&gt;</span>
          </a>

          {/* Nav links */}
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.sectionId}>
                <a
                  href={item.href}
                  className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Copyright */}
          <p className="text-gray-600 text-sm flex items-center gap-1.5">
            © {year} {personal.firstName}. Built with
            <Heart size={12} className="text-red-400 fill-red-400 inline" />
          </p>
        </div>
      </div>
    </footer>
  );
}
