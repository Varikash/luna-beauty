import React from 'react';
import Image from 'next/image';
import CardWrapper from '@/app/components/card-wrapper/card-wrapper';
import type { ITreatment } from '@/app/utils/mockServicesTwo';
import style from './treatment-card.module.css';

/** Placeholder booking destination used across the site */
const BOOKING_URL = 'https://example.com/booking';

interface TreatmentCardProps {
  treatment: ITreatment;
  /** Zero-based position — rendered as the "01" counter */
  index: number;
  /**
   * DOM id for the card. The service detail page passes the treatment title so
   * SideMenu's scroll-spy can find it (`side-menu.tsx:29`).
   */
  anchorId?: string;
}

/**
 * The treatment card shared by the service detail page (/services/details/<id>)
 * and the master page (/master/<slug>) — one card per treatment, with the
 * counter, booking icon, title, description and the duration/price footer.
 */
const TreatmentCard: React.FC<TreatmentCardProps> = ({ treatment, index, anchorId }) => (
  <CardWrapper type="page4" ikey={index} id={anchorId}>
    <div>
      <div className={style.cardHeader}>
        <span className={style.serviceCounter}>
          {String(index + 1).padStart(2, '0')}
        </span>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={style.calendarLink}
        >
          <Image
            src="/images/bs/calendarButton.svg"
            alt="Calendar Icon"
            width={48}
            height={48}
            className={style.calendarIcon}
          />
        </a>
      </div>
      <div className={style.cardTextWrapper}>
        <h3 className={style.cardTitle}>{treatment.title}</h3>
        <p className={style.cardText}>{treatment.text}</p>
        <Image
          src="/images/bs/calendarButton.svg"
          alt="Calendar Icon"
          width={48}
          height={48}
          className={style.calendarIconMobile}
        />
      </div>
    </div>
    <div className={style.cardFooter}>
      <div className={style.cardListItem}>
        <p className={style.cardTime}>{treatment.duration}</p>
        <div className={style.cardListItemI}>|</div>
        <p className={style.cardPrice}>{treatment.price}</p>
      </div>
      <Image
        src={treatment.image}
        alt={treatment.title}
        width={208}
        height={208}
        className={style.cardImage}
      />
    </div>
  </CardWrapper>
);

export default TreatmentCard;
