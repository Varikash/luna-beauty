import React from 'react';
import Image from 'next/image';
import DreamTeamButton from '@/app/utils/ui/dt-button/dt-button';
import './our-masters.css';
import MasterListItem from '@/app/components/master-list-item/master-list-item';
import { mastersMock } from '@/app/utils/mockFiles';

const OurMasters = () => {

  const formatNavText = (text: string) => {
    return (
      <span className="vine-title-om">
        <span className="champagne-title-om">{text.charAt(0)}</span>
        {text.slice(1)}
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
              {formatNavText("Our masters")}
            </h2>
          </div>
          <p className="our-masters-subtitle">Experience our elegant beauty salon in the heart of London, where every corner is designed to inspire. Indulge.</p>
        </div>
        <MasterListItem innerKey={93} master={mastersMock[0]} type="master-card-border" />
      </article>
      <article className="dream-team-master-list-container">
        <ul
          className="our-masters-list"
        >
          {mastersMock.map((master, index) => (
            <li key={"slide" + index} className="slider-item">
              <MasterListItem key={index} innerKey={index} master={master} type="master-card-border" />
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default OurMasters;
