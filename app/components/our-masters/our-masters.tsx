'use client';

import React from 'react';
import Image from 'next/image';
import './our-masters.css';
import MasterListItem from '@/app/components/master-list-item/master-list-item';
import { mastersMock } from '@/app/utils/mockFiles';
import { useMediaQuery } from '@/app/utils/hooks/useMediaQuery';

const OurMasters = () => {
  const isMobile = useMediaQuery('(max-width: 980px)');
  const featuredMaster = mastersMock[0];
  const mastersToRender = isMobile ? mastersMock : mastersMock.slice(1);

  const formatWord = (word: string) => {
    return (
      <span className="vine-title-om">
        <span className="champagne-title-om">{word.charAt(0)}</span>
        {word.slice(1)}
      </span>
    );
  };

  const formatWordMobileLead = (word: string) => {
    return (
      <span className="vine-title-om">
        <span className="our-masters-mobile-lead">{word.charAt(0)}</span>
        {word.slice(1)}
      </span>
    );
  };

  return (
    <section className="our-masters">
      <article className="our-masters-header-container">
        <div className="our-masters-header-left">
          <div className="our-masters-header">
            <Image className="our-masters-comment" src="/images/ocr/b-studio-london.svg" alt="comment-picture" width={230} height={244} />
            <h2 className="our-masters-title">
              <span className="our-masters-title-line">{formatWord('Our')}</span>{' '}
              <span className="our-masters-title-line">{formatWordMobileLead('Masters')}</span>
            </h2>
          </div>
          <p className="our-masters-subtitle">Experience our elegant beauty salon in the heart of London, where every corner is designed to inspire. Indulge.</p>
        </div>
        {/* <MasterListItem innerKey={93} master={mastersMock[0]} type="master-card-border" /> */}
        <div className="our-masters-featured-card" aria-label="Featured master">
          <div className="our-masters-featured-media">
            <Image
              className="our-masters-featured-photo"
              src={featuredMaster.image}
              alt={`${featuredMaster.name} photo`}
              width={360}
              height={470}
            />
          </div>
          <div className="our-masters-featured-content">
            <p className="our-masters-featured-name">{featuredMaster.name}</p>
            <p className="our-masters-featured-pill">{featuredMaster.info}</p>
            <p className="our-masters-featured-status">{featuredMaster.status}</p>
            <p className="our-masters-featured-skills">{featuredMaster.skills}</p>
          </div>
        </div>
      </article>
      <article className="dream-team-master-list-container">
        <ul
          className="our-masters-list"
        >
          {mastersToRender.map((master, index) => (
            <li key={`slide-${master.name}-${index}`} className="slider-item">
              <MasterListItem innerKey={index} master={master} type="master-card-border" />
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default OurMasters;
