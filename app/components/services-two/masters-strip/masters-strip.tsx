import React from 'react';
import Image from 'next/image';
import { servicesTeamMock } from '@/app/utils/mockServicesTwo';
import style from './masters-strip.module.css';

const MastersStrip: React.FC = () => (
  <section className={style.section}>
    <div className={style.shell}>
      <div className={style.head}>
        <div>
          <p className={style.eyebrow}>Behind every treatment</p>
          <h2 className={style.title}>
            Find your <em>master</em>
          </h2>
        </div>
        <p className={style.headText}>
          Open any category above and you will see who performs it, their
          experience and the slots they have left this week.
        </p>
      </div>

      <ul className={style.track}>
        {servicesTeamMock.map((master) => (
          <li className={style.card} key={master.name + master.role}>
            <div className={style.photo}>
              <Image
                src={master.image}
                alt={master.name}
                fill
                sizes="(max-width: 420px) 78vw, (max-width: 860px) 45vw, 22vw"
              />
            </div>
            <div className={style.cardBody}>
              <p className={style.role}>{master.role}</p>
              <h3 className={style.name}>{master.name}</h3>
              <p className={style.skills}>{master.skills}</p>
              <ul className={style.tags}>
                {master.services.map((service) => (
                  <li className={style.tag} key={master.name + service}>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>

      <p className={style.hint}>
        <span aria-hidden="true">←→</span> Swipe to see the whole team
      </p>
    </div>
  </section>
);

export default MastersStrip;
