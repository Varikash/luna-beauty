'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import BeautyButton from '@/app/utils/ui/bs-button/bs-button';
import TreatmentCard from '@/app/components/treatment-card/treatment-card';
import { MASTER_SERVICES_SUBTITLE, type IMasterProfile } from '@/app/utils/mockMasters';
import style from './page.module.css';

/** First letter in Great Vibes, the rest in Playfair — the site's title idiom */
const decorate = (word: string) => (
  <>
    <span className="champagne-title">{word.charAt(0)}</span>
    {word.slice(1)}
  </>
);

/**
 * "<Nail> Services" + the master's own treatment menu.
 *
 * The design draws prev/next arrows next to a static row, so the row is wired
 * as a real slider: it steps one card at a time and stops at the last full
 * screenful. Under 768px the cards stack vertically (per the mobile design) and
 * the arrows go away with the horizontal overflow they controlled.
 */
const MasterServices: React.FC<{ master: IMasterProfile }> = ({ master }) => {
  const treatments = master.treatments;
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const trackRef = useRef<HTMLUListElement>(null);

  const measure = useCallback(() => {
    const track = trackRef.current;
    const first = track?.firstElementChild as HTMLElement | null;
    if (!track || !first) return;

    const itemWidth = first.getBoundingClientRect().width;
    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
    const pitch = itemWidth + gap;
    const viewport = track.parentElement?.clientWidth ?? 0;
    const perView = Math.max(1, Math.round((viewport + gap) / pitch));

    setStep(pitch);
    setMaxIndex(Math.max(0, treatments.length - perView));
  }, [treatments.length]);

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  // A narrower viewport can fit fewer cards, which shortens the track
  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  return (
    <section className={style.services}>
      <div className={style.servicesShell}>
        <div className={style.servicesHead}>
          <h2 className={`vine-title ${style.servicesTitle}`}>
            <span className={`${style.titleLine} ${style.titleLineFirst}`}>
              {decorate(master.servicesWord)}
            </span>
            <span className={`${style.titleLine} ${style.titleLineLast}`}>
              {decorate('Services')}
            </span>
          </h2>

          <div className={style.servicesAside}>
            <p className={style.servicesSubtitle}>{MASTER_SERVICES_SUBTITLE}</p>
            <BeautyButton
              text="eXPLORE all our SERVICES"
              className={style.servicesButton}
              link="/services"
            />
          </div>
        </div>

        {treatments.length === 0 ? (
          /* A master whose menu the client has not supplied yet — no empty slider */
          <p className={style.servicesEmpty}>
            The full menu and prices are available on request — get in touch and
            we will walk you through every option.
          </p>
        ) : (
          <>
        <div className={style.sliderControls}>
          <button
            type="button"
            className={`${style.sliderBtn} ${style.sliderBtnPrev}`}
            onClick={() => setIndex((current) => Math.max(0, current - 1))}
            disabled={index === 0}
            aria-label="Previous treatments"
          >
            <Image src="/images/ui/arrow-left.svg" alt="" width={24} height={24} />
          </button>
          <button
            type="button"
            className={`${style.sliderBtn} ${style.sliderBtnNext}`}
            onClick={() => setIndex((current) => Math.min(maxIndex, current + 1))}
            disabled={index >= maxIndex}
            aria-label="Next treatments"
          >
            <Image src="/images/ui/arrow-right.svg" alt="" width={24} height={24} />
          </button>
        </div>

        <div className={style.trackViewport}>
          <ul
            ref={trackRef}
            className={`skip-li ${style.track}`}
            // A custom property, not `transform`, so the mobile stack can drop
            // the shift in CSS instead of fighting an inline style
            style={{ '--shift': `-${index * step}px` } as React.CSSProperties}
          >
            {treatments.map((treatment, treatmentIndex) => (
              <TreatmentCard
                key={`${treatment.title}-${treatmentIndex}`}
                treatment={treatment}
                index={treatmentIndex}
              />
            ))}
          </ul>
        </div>
          </>
        )}
      </div>
    </section>
  );
};

export default MasterServices;
