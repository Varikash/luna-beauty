import styles from "./page.module.css";
import Image from 'next/image';
import CardWrapper from "@/app/components/card-wrapper/card-wrapper";
import OurClientsRecommended from "@/app/components/our-clients-recommended/ourClientsRecommended";
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import { serviceDetailsMock } from '@/app/utils/mockFiles';
import SideMenu from '@/app/components/side-menu/side-menu';
import AppointmentButton from '@/app/utils/ui/make-an-appointment/make-an-appointment';


export default function ServiceDetails() {

  const detailsTitles: string[] = serviceDetailsMock.makeup.details.map(detail => detail.title);
  return (
    <div className={styles.page}>
      <Header type="otherpages" />
      <main className={styles.main}>
        <section className={styles.beautyServiceDetail}>
          <div className={styles.beautyServiceHead}>
            <div className={styles.titleWrapper}>
              <nav className={styles.navigateButton}>
                <Image src="/images/ui/arrow-left.svg" alt="Previous" width={24} height={24} />Back to all services
              </nav>
              <h2 className={`vine-title ${styles.header}`}>{serviceDetailsMock.makeup.title}</h2>
              <h2 className={`vine-title ${styles.header_mobile}`}><span className={styles.header_mobile_span}>{serviceDetailsMock.makeup.title[0]}</span>{serviceDetailsMock.makeup.title.slice(1)}</h2>
            </div>
            <div className={styles.beautyServiceHeadAside}>
              <div className={styles.imageWrapper}>
                <Image
                  src={serviceDetailsMock.makeup.master.image}
                  alt="BeautyServices"
                  className={styles.beautyServiceHeadImage}
                  width={148}
                  height={148}
                />
              </div>
              <p className={styles.master_name}>
                {serviceDetailsMock.makeup.master.name}
              </p>
              <p className={styles.beautyServiceHeadAsideSubtitle}>
                {serviceDetailsMock.makeup.master.title}
              </p>
              <AppointmentButton className={styles.appoinmentButton} />
              {/* Side navigation menu */}
              <SideMenu className={styles.asideMenu} services={detailsTitles} />
            </div>
          </div>
          <div className={styles.beautyServiceWtfContainer}>
            <ul className={styles.beautyServiceWtf}>
              {serviceDetailsMock.makeup.details.map((service, index) =>
                <CardWrapper type="page4" ikey={index} id={service.title}>
                  <div>
                    <div className={styles.cardHeader}>
                      <span className={styles.serviceCounter}>
                        0{index + 1}
                      </span>
                      <a
                        href="https://example.com/booking"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.calendarLink}
                      >
                        <Image
                          src="/images/bs/calendarButton.svg"
                          alt="Calendar Icon"
                          width={48}
                          height={48}
                          className={styles.calendarIcon}
                        />
                      </a>
                    </div>
                    <div className={styles.cardTextWrapper}>
                      <h3 className={styles.cardTitle}>
                        {service.title}
                      </h3>
                      <p className={styles.cardText}>
                        {service.text}
                      </p>
                      <Image
                        src="/images/bs/calendarButton.svg"
                        alt="Calendar Icon"
                        width={48}
                        height={48}
                        className={styles.calendarIconMobile}
                      />
                    </div>
                  </div>
                  <div className={styles.cardFooter}>
                    <div className={styles.cardListItem}>
                      <p className={styles.cardTime}>{service.time}</p>
                      <div className={styles.cardListItemI}>|</div>
                      <p className={styles.cardPrice}>{service.price}</p>
                    </div>
                    <Image
                      src={service.images}
                      alt={service.title}
                      width={208}
                      height={208}
                      className={styles.cardImage}
                    />
                  </div>
                </CardWrapper>
              )}
            </ul>
          </div>
        </section>
        <OurClientsRecommended />
      </main>
      <Footer />
    </div>
  );
}