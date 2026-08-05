import styles from './page.module.css';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import ServicesHero from '../components/services-two/services-hero/services-hero';
import ServicesCatalogue from '../components/services-two/services-catalogue/services-catalogue';
import MastersStrip from '../components/services-two/masters-strip/masters-strip';
import ServicesCta from '../components/services-two/services-cta/services-cta';

export const metadata = {
  title: 'Services — Luna Beauty',
  description:
    'Every treatment Luna Beauty offers: makeup, waxing, manicure, semi permanent makeup and pedicure — with the master behind each one.',
};

export default function Services() {
  return (
    <div className={styles.page}>
      <Header type="otherpages" />
      <main className={styles.main}>
        <div className={styles.heroShell}>
          <ServicesHero />
        </div>
        <ServicesCatalogue />
        <MastersStrip />
        <ServicesCta />
      </main>
      <Footer />
    </div>
  );
}
