import styles from "./page.module.css";
import BeautyServices from "../components/beauty-services/beautyServices";
import OurClientsRecommended from "@/app/components/our-clients-recommended/ourClientsRecommended";
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