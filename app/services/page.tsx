import styles from "./page.module.css";
import BeautyServices from "../components/beauty-services/beauty-services";
import OurClientsRecommended from "../components/our-clients-recommended/our-clients-recommended";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export default function Services() {
  return (
    <div className={styles.page}>
      <Header type="otherpages" />
      <main className={styles.main}>
        <BeautyServices type="page3" />
        <OurClientsRecommended />
      </main>
      <Footer />
    </div>
  );
}