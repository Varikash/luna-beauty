
import styles from "./page.module.css";
import BeautyServices from "../components/beauty-services/beautyServices";
import OurClientsRecommended from "../components/our-clients-recommended/ourClientsRecommended";
import Header from "../components/header/header";
import OurMasters from "../components/our-masters/our-masters";

export default function About() {
  return (
    <div className={styles.page}>
      <Header type="otherpages" />
      <main className={styles.main}>
        <OurMasters />
        <OurClientsRecommended />
        <BeautyServices type="page2" />
      </main>
    </div>
  );
}