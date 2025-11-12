
import styles from "./page.module.css";
import BeautyServices from "../components/beauty-services/beautyServices";
import OurClientsRecommended from "../components/our-clients-recommended/ourClientsRecommended";
import Header from "../components/header/header";
import OurMasters from "../components/our-masters/our-masters";
import HeroAbout from "../components/HeroAbout/HeroAbout";
import CooperComponent from "@/app/components/cooper-component/cooper-component";
import Footer from "../components/footer/footer";

export default function About() {
  return (
    <div className={styles.page}>
      <Header type="otherpages" />
      <main className={styles.main}>
        <HeroAbout />
        <CooperComponent />
        <OurMasters />
        <OurClientsRecommended />
        <BeautyServices type="page2" />
      </main>
      <Footer />
    </div>
  );
}