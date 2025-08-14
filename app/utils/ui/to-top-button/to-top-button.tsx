'use client';

import './to-top-button.css';
import React from 'react';
import Image from 'next/image';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button className="footer-arrow-up" onClick={scrollToTop} aria-label="Scroll to top">
      <Image src="/images/footer/footerArrow.svg" alt="arrow up" width={42} height={18} />
    </button>
  );
};

export default ScrollToTopButton;