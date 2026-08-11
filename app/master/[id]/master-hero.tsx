import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppointmentButton from '@/app/utils/ui/make-an-appointment/make-an-appointment';
import { MASTER_STRAPLINE, type IMasterProfile } from '@/app/utils/mockMasters';
import style from './page.module.css';

/**
 * Hero of the master page.
 *
 * The blocks are direct grid children rather than nested columns because the
 * mobile design reorders them across columns (name above the eyebrow, portrait
 * between the chips and the intro). `.bio` switches to `display: contents`
 * under 768px so its children join the same grid and `order` can do that.
 */
const MasterHero: React.FC<{ master: IMasterProfile }> = ({ master }) => (
  <section className={style.hero}>
    <div className={style.heroShell}>
      <Link href="/about#masters" className={style.backLink}>
        <Image src="/images/ui/arrow-left.svg" alt="" width={24} height={24} />
        Back to all masters
      </Link>

      <div className={style.portraitCol}>
        <figure className={style.portrait}>
          <Image
            src={master.photos.portrait}
            alt={master.name}
            fill
            sizes="(max-width: 768px) 148px, (max-width: 1280px) 40vw, 30vw"
            priority
          />
        </figure>
        <AppointmentButton className={style.book} />
      </div>

      <div className={style.bio}>
        <p className={style.eyebrow}>{master.eyebrow}</p>
        <h1 className={style.name}>{master.name}</h1>
        <p className={style.intro}>{master.intro}</p>
        <ul className={style.chips}>
          {master.chips.map((chip) => (
            <li key={chip}>{chip}</li>
          ))}
        </ul>
      </div>

      <div className={style.aside}>
        <div className={style.strapline}>
          <Image
            src="/images/bs/beautyServicesStar.png"
            alt=""
            width={35}
            height={35}
            className={style.straplineStar}
          />
          <p>{MASTER_STRAPLINE}</p>
        </div>
        <figure className={style.sidePhoto}>
          <Image
            src={master.photos.heroSide}
            alt=""
            fill
            sizes="(max-width: 768px) 92vw, 26vw"
          />
        </figure>
      </div>
    </div>
  </section>
);

export default MasterHero;
