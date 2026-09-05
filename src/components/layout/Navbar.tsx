import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '@/utils/constants';
import { personal } from '@/data/personal';
import useActiveSection from '@/hooks/useActiveSection';
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const active = useActiveSection(NAV_ITEMS);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const media = window.matchMedia('(min-width:768px)');
    const resize = () => {
      if (media.matches) setOpen(false);
    };
    window.addEventListener('keydown', close);
    media.addEventListener('change', resize);
    return () => {
      window.removeEventListener('keydown', close);
      media.removeEventListener('change', resize);
    };
  }, [open]);
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/95 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:bg-white focus:p-4"
      >
        Skip to content
      </a>
      <nav
        aria-label="Main navigation"
        className="section-container flex h-20 items-center justify-between"
      >
        <a href="#hero" className="text-lg font-semibold tracking-tight">
          hans<span className="text-brand">.</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.sectionId}
              href={item.href}
              aria-current={active === item.sectionId ? 'location' : undefined}
              className={`text-sm transition-colors hover:text-brand ${active === item.sectionId ? 'text-brand' : 'text-muted'}`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={personal.resumeUrl}
            download
            className="inline-flex items-center gap-2 border-l border-line pl-8 text-sm font-medium"
          >
            Résumé
            <ArrowUpRight size={16} />
          </a>
        </div>
        <button
          ref={toggle}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-md border border-line md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="border-t border-line bg-canvas px-5 py-4 md:hidden"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.sectionId}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-3 text-sm"
            >
              {item.label}
            </a>
          ))}
          <a
            href={personal.resumeUrl}
            download
            onClick={() => setOpen(false)}
            className="block px-3 py-3 text-sm text-brand"
          >
            Download résumé ↗
          </a>
        </nav>
      )}
    </header>
  );
}
