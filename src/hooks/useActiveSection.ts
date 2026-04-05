import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observers = new Map();
    
    const observerOptions = {
      root: null,
      rootMargin: '-81px 0px -50% 0px', // Detect sections in the top half of the screen
      threshold: [0, 0.1, 0.5, 1.0]
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // We want to find the section that is currently "active"
      // This is usually the one that is at the top of the viewport
      
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Special case: if we're at the very bottom of the page, highlight the last section
      if (scrollY + windowHeight >= documentHeight - 10) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      // Filter for sections that are in the detection zone
      const intersecting = entries.filter(e => e.isIntersecting);
      
      if (intersecting.length > 0) {
        // Pick the one that is closest to the top of our detection zone (80px)
        // but not above it.
        const bestMatch = intersecting.reduce((prev, curr) => {
          const prevTop = Math.abs(prev.boundingClientRect.top - 80);
          const currTop = Math.abs(curr.boundingClientRect.top - 80);
          return currTop < prevTop ? curr : prev;
        });
        
        setActiveSection(bestMatch.target.id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      if (scrollY + windowHeight >= documentHeight - 20) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
      }
    };

    window.addEventListener('scroll', handleScroll);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        observers.set(id, element);
      }
    });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds]);

  return activeSection;
}
