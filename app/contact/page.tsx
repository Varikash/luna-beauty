import { getImageProps } from 'next/image';
import Header from '@/app/components/header/header';
import Footer from '@/app/components/footer/footer';
import ContactForm from '@/app/components/contact-form/contact-form';
import AppointmentButton from '@/app/utils/ui/make-an-appointment/make-an-appointment';
import { contacts, socialHeader } from '@/app/utils/mockFiles';
import styles from './page.module.css';

const EMPTY_IMAGE =
  "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1'%20height='1'/%3E";

const { props: photoProps } = getImageProps({
  src: '/images/contact/left.jpg',
  alt: 'A client smiling in the Luna Beauty salon',
  width: 852,
  height: 1196,
  sizes: '(max-width: 1024px) 35vw, 30vw',
});

export default function ContactUs() {
  return (
    <div className={styles.page}>
      <Header type="otherpages" />
      <main className={styles.main}>
        <section className={styles.contact} aria-labelledby="contact-heading">
          <svg
            className={styles.decor}
            viewBox="0 0 1920 1301"
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M80 713C80 319.221 397.206 0 788.5 0C1061.67 0 1298.74 155.583 1416.97 383.5" />
            <path d="M788 0L1912 0" />
            <path d="M1418 1L1418 1301" />
          </svg>

          <div className={styles.shell}>
            <div className={styles.head}>
              <h1 className={styles.title} id="contact-heading">
                <span className={styles.wordBook}>
                  <span className={styles.script}>B</span>ook
                </span>
                <span className={styles.titleTail}>
                  <span className={styles.wordYour}>your</span>
                  <span className={styles.wordJourney}>journey!</span>
                </span>
              </h1>
              <p className={styles.anchor}>Contact us</p>
            </div>

            <div className={styles.stage}>
              <div className={styles.photoCol}>
                <picture className={styles.photoFrame}>
                  <source media="(max-width: 768px)" srcSet={EMPTY_IMAGE} />
                  <img {...photoProps} fetchPriority="high" className={styles.photo} />
                </picture>
                <AppointmentButton className={styles.book} />
              </div>

              <ul className={styles.socials} aria-label="Luna Beauty on social media">
                {socialHeader.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                    >
                      {link.name}
                      <span className={styles.srOnly}> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.side}>
              <div className={styles.info}>
                <div className={styles.infoBlock}>
                  <h2 className={styles.infoTitle}>About us</h2>
                  <p className={styles.infoText}>
                    Experience our elegant beauty salon in the heart of London, where every corner
                    is designed to inspire.
                  </p>
                </div>
                <div className={`${styles.infoBlock} ${styles.infoBlockNarrow}`}>
                  <h2 className={styles.infoTitle}>Contact us</h2>
                  <ul className={styles.infoList}>
                    <li>
                      <a href={`mailto:${contacts.email}`} className={styles.infoText}>
                        {contacts.email}
                      </a>
                    </li>
                    <li>
                      <a
                        href={`tel:${contacts.phone.replace(/\s/g, '')}`}
                        className={styles.infoText}
                      >
                        {contacts.phone}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <ContactForm className={styles.form} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
