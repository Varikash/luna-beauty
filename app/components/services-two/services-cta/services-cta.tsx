import React from 'react';
import Link from 'next/link';
import AppointmentButton from '@/app/utils/ui/make-an-appointment/make-an-appointment';
import style from './services-cta.module.css';

const ServicesCta: React.FC = () => (
  <section className={style.section}>
    <div className={style.band}>
      <div>
        <p className={style.eyebrow}>Still choosing</p>
        <h2 className={style.title}>
          Not sure which service <em>suits you?</em>
        </h2>
        <p className={style.text}>
          Tell us what you have in mind — an event, a mood, a photo you liked —
          and we will match you with the right treatment and the right master.
        </p>
        <div className={style.actions}>
          <a
            className={style.primary}
            href="https://example.com/booking"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a free consultation
          </a>
          <Link className={style.secondary} href="/contact">
            Ask a question
          </Link>
        </div>
      </div>

      <AppointmentButton className={style.circle} />
    </div>
  </section>
);

export default ServicesCta;
