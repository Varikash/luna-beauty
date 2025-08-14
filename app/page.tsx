
import styles from "./page.module.css";
import BeautyServices from "./components/beauty-services/beauty-services";
import OurWorks from "./components/our-works/our-works";
import DreamTeam from "./components/dream-team/dream-team";
import OurClientsRecommended from "./components/our-clients-recommended/our-clients-recommended";
import Header from "./components/header/header";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header type="homepage" />
      <main className={styles.main}>
        <BeautyServices type="page1" />
        <OurClientsRecommended />
        <DreamTeam />
        <OurWorks />
      </main>
    </div>
  );
}
