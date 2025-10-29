
import styles from "./page.module.css";
import BeautyServices from "./components/beauty-services/beautyServices";
import OurWorks from "./components/our-works/our-works";
import DreamTeam from "./components/dream-team/dream-team";
import OurClientsRecommended from "@/app/components/our-clients-recommended/ourClientsRecommended";
import Header from "./components/header/header";
import HeroMain from "./components/HeroMain/HeroMain";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header type="homepage" />
      <main className={styles.main}>
        <HeroMain />
        <BeautyServices type="page1" />
        <OurClientsRecommended />
        <DreamTeam />
        <OurWorks />
      </main>
      <Footer />
    </div>
  );
}
