"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import DreamTeamButton from '@/app/utils/ui/dt-button/dt-button';
import './dream-team.css';
import MasterListItem from '@/app/components/master-list-item/master-list-item';
import { mastersMock } from '@/app/utils/mockFiles';

const DreamTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 1;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= mastersMock.length ? 0 : prev + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - itemsPerPage < 0 ? mastersMock.length - itemsPerPage : prev - itemsPerPage
    );
  };
  return (
    <section className="dream-team">
      <article className="dream-team-aside">
        <Image
          src="/images/dt/dreamteam.png"
          alt="dream team title"
          width={402}
          height={220}
        />
        <p className="dream-team-text">
          Our team blends experience, passion, and the latest techniques to enhance your natural beauty.<br />
          <br />
          Whether it’s makeup, skincare, or nail care, we’re here to turn every visit into an experience of indulgence and confidence!
        </p>
        <DreamTeamButton text="see all the specialists" className="dream-team-button" />
      </article>
      <article className="dream-team-master-list-container">
        <div className="slider-controls-dt">
          <button className="slider-btn slider-btn-prev" onClick={prevSlide}>
            <Image src="/images/ui/arrow-left.svg" alt="Previous" width={24} height={24} />
          </button>
          <button className="slider-btn slider-btn-next" onClick={nextSlide}>
            <Image src="/images/ui/arrow-right.svg" alt="Next" width={24} height={24} />
          </button>
        </div>
        <div className="dream-team-master-list">
          <ul
            className="dream-team-slider-track"
            style={{
              transform: `translateX(-${currentIndex * 50}%)`,
            }}
          >
            {mastersMock.map((master, index) => (
              <li key={"slide" + index} className="slider-item">
                <MasterListItem key={index} innerKey={index} master={master} type="page1" />
              </li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
};

export default DreamTeam;
