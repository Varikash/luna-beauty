import { notFound } from 'next/navigation';
import Header from '@/app/components/header/header';
import Footer from '@/app/components/footer/footer';
import { findMasterBySlug, mastersProfilesMock } from '@/app/utils/mockMasters';
import MasterHero from './master-hero';
import MasterStory from './master-story';
import MasterServices from './master-services';
import styles from './page.module.css';

type PageProps = { params: Promise<{ id: string }> };

/** Every master in the catalogue gets a pre-rendered page */
export function generateStaticParams() {
  return mastersProfilesMock.map((master) => ({ id: master.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const master = findMasterBySlug(id);
  if (!master) return {};
  return {
    title: `${master.name} — ${master.role} at Luna Beauty`,
    description: master.skills,
  };
}

export default async function MasterProfile({ params }: PageProps) {
  const { id } = await params;
  const master = findMasterBySlug(id);
  if (!master) notFound();

  return (
    <div className={styles.page}>
      <Header type="otherpages" />
      <main className={styles.main}>
        <MasterHero master={master} />
        <MasterStory master={master} />
        <MasterServices master={master} />
      </main>
      <Footer />
    </div>
  );
}
