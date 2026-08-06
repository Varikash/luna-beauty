import styles from "./page.module.css";
import Image from 'next/image';
import CardWrapper from "@/app/components/card-wrapper/card-wrapper";
import OurClientsRecommended from "@/app/components/our-clients-recommended/ourClientsRecommended";
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import { servicesCatalogMock, findServiceByLink } from '@/app/utils/mockServicesTwo';
import ServiceHead from './service-head';
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ id: string }> };

/** Every category in the catalogue gets its own pre-rendered detail page */
export function generateStaticParams() {
  return servicesCatalogMock.map((service) => ({ id: service.link }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const service = findServiceByLink(id);
  if (!service) return {};
  return {
    title: `${service.title} — Luna Beauty`,
    description: service.description,
  };
}

export default async function ServiceDetails({ params }: PageProps) {
  const { id } = await params;
  const service = findServiceByLink(id);
  if (!service) notFound();

  return (
    <div className={styles.page}>
      <Header type="otherpages" />
      <main className={styles.main}>
        <section className={styles.beautyServiceDetail}>
          <ServiceHead service={service} />
          <div className={styles.beautyServiceWtfContainer}>
            <ul className={styles.beautyServiceWtf}>
              {service.treatments.map((treatment, index) =>
                <CardWrapper type="page4" ikey={index} id={treatment.title} key={treatment.title}>
                  <div>
                    <div className={styles.cardHeader}>
                      <span className={styles.serviceCounter}>
                        {String(index + 1).padStart(2, '0')}
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
                        {treatment.title}
                      </h3>
                      <p className={styles.cardText}>
                        {treatment.text}
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
                      <p className={styles.cardTime}>{treatment.duration}</p>
                      <div className={styles.cardListItemI}>|</div>
                      <p className={styles.cardPrice}>{treatment.price}</p>
                    </div>
                    <Image
                      src={treatment.image}
                      alt={treatment.title}
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
