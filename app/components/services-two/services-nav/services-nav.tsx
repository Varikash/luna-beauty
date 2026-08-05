"use client";

import React, { useEffect, useRef } from 'react';
import style from './services-nav.module.css';

export interface ServicesNavItem {
  id: string;
  title: string;
}

interface ServicesNavProps {
  items: ServicesNavItem[];
  activeId: string;
}

const ServicesNav: React.FC<ServicesNavProps> = ({ items, activeId }) => {
  const scrollerRef = useRef<HTMLUListElement>(null);

  // Keep the active chip visible while the page scrolls through the sections
  // (the chip row is horizontally scrollable on narrow screens).
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || !activeId) return;

    const chip = scroller.querySelector<HTMLElement>(`[data-chip="${activeId}"]`);
    if (!chip) return;

    const target = chip.offsetLeft - (scroller.clientWidth - chip.clientWidth) / 2;
    scroller.scrollTo({ left: Math.max(0, target), behavior: 'smooth' });
  }, [activeId]);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className={style.bar} aria-label="Service categories">
      <div className={style.inner}>
        <span className={style.label}>Categories</span>
        <ul className={style.scroller} ref={scrollerRef}>
          {items.map((item, index) => (
            <li key={item.id}>
              <button
                type="button"
                data-chip={item.id}
                onClick={() => goTo(item.id)}
                className={`${style.chip} ${activeId === item.id ? style.active : ''}`}
                aria-current={activeId === item.id ? 'true' : undefined}
              >
                <span className={style.chipIndex}>0{index + 1}</span>
                {item.title}
              </button>
            </li>
          ))}
        </ul>
        <a
          className={style.book}
          href="https://example.com/booking"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book now
        </a>
      </div>
    </nav>
  );
};

export default ServicesNav;
