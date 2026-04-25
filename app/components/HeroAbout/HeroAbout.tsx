'use client';
import BeautyButton from '@/app/utils/ui/bs-button/bs-button';
import AppointmentButton from '@/app/utils/ui/make-an-appointment/make-an-appointment';
import styles from './HeroAbout.module.css';

const HeroAbout = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.titleLead}>L</span>una - where
            <br />
            beauty meets <span className={styles.titleAccent}>expertise!</span>
          </h1>

          <div className={styles.text}>
            <p>
              Luxury beauty services tailored just for you.
              <br />
              Book your appointment today!
            </p>
            <p>
              High-quality services, from professional makeup and flawless waxing to the best
              experts in nails manicure!
            </p>
          </div>

          <BeautyButton
            text="SEE ALL THE SPECIALISTS"
            className="about-hero-specialists"
            link="/master"
          />
        </div>

        <div className={styles.media}>
          <div className={styles.imageWrap} role="img" aria-label="Our team" />

          <div className={styles.appointment}>
            <AppointmentButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;