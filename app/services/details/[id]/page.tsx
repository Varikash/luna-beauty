import styles from "./page.module.css";
import TreatmentCard from "@/app/components/treatment-card/treatment-card";
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
            {service.treatments.length > 0 ? (
              <ul className={styles.beautyServiceWtf}>
                {service.treatments.map((treatment, index) => (
                  <TreatmentCard
                    key={treatment.title}
                    treatment={treatment}
                    index={index}
                    anchorId={treatment.title}
                  />
                ))}
              </ul>
            ) : (
              <p className={styles.menuOnRequest}>
                The full {service.title.toLowerCase()} menu and prices are available
                on request — get in touch and we will walk you through every option.
              </p>
            )}
          </div>
        </section>
        <OurClientsRecommended />
      </main>
      <Footer />
    </div>
  );
}
