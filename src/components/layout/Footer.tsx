import { ArrowUp } from 'lucide-react';
import { personal } from '@/data/personal';
export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="section-container flex flex-wrap items-center justify-between gap-5 text-xs text-muted">
        <p>
          © {new Date().getFullYear()} {personal.name}
        </p>
        <p>Built with care, React & TypeScript.</p>
        <a href="#hero" className="inline-flex items-center gap-2 text-ink">
          Back to top
          <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
}
