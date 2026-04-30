import { useEffect, useState } from 'react';
import type { NavItem } from '@/types';

export default function useActiveSection(navItems: readonly NavItem[]): string {
  const [activeSection, setActiveSection] = useState(navItems[0]?.sectionId ?? '');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const sectionMap = new Map<string, number>();

    navItems.forEach(({ sectionId }) => {
      const el = document.getElementById(sectionId);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) {
            sectionMap.set(sectionId, entry.intersectionRatio);
            // Set the section with the highest visibility as active
            let best = '';
            let bestRatio = 0;
            sectionMap.forEach((ratio, id) => {
              if (ratio > bestRatio) {
                bestRatio = ratio;
                best = id;
              }
            });
            if (best) setActiveSection(best);
          } else {
            sectionMap.delete(sectionId);
          }
        },
        { threshold: [0, 0.25, 0.5], rootMargin: '-80px 0px -40% 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [navItems]);

  return activeSection;
}
