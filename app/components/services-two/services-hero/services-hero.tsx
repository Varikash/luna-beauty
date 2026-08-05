import React from 'react';
import BeautyButton from '@/app/utils/ui/bs-button/bs-button';
import { servicesHeroStats } from '@/app/utils/mockServicesTwo';
import style from './services-hero.module.css';

const ServicesHero: React.FC = () => (
  <section className={style.hero}>
    <div className={style.top}>
      <div>
        <p className={style.eyebrow}>The full menu — {new Date().getFullYear()}</p>
        <h1 className={style.title}>
          <span className={style.script}>Beauty</span>
          <span className={style.serif}>Services</span>
        </h1>
      </div>

      <div className={style.aside}>
        <p className={style.lead}>
          Every treatment we offer, in one place. Pick a category, browse what is
          inside, then <b>open it to meet the master</b> who will take care of you.
        </p>
        <div className={style.actions}>
          <BeautyButton
            text="Book an appointment"
            className={style.heroButton}
            link="/contact"
          />
          <a className={style.ghostLink} href="#catalogue">
            Browse the catalogue <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </div>

    <ul className={style.stats}>
      {servicesHeroStats.map((stat) => (
        <li className={style.stat} key={stat.label}>
          <span className={style.statValue}>{stat.value}</span>
          <span className={style.statLabel}>{stat.label}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default ServicesHero;
