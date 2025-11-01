import styles from "./cooper-component.module.css";
import Image from 'next/image';
import { CooperGridContent } from "@/app/utils/mockFiles";

export default function CooperComponent() {

  return (
    <section className={styles.cooper_section}>
      <div className={styles.left_body}>
        <div className={styles.images_wrapper}>
          <Image
            className={styles.image_woman}
            src="/images/hero/hero-small-img.png"
            alt="smiley woman"
            width={228}
            height={228}
          />
          <Image
            src={`/images/footer/footerWhiteStar.svg`}
            alt={"footer star"} width={85} height={85}
            className={styles.image_star}
          />
        </div>
        <p className={styles.cooper_info}>
          At Luna we combine expertise, premium products,
          and a relaxing atmosphere to ensure every
          visit is a luxurious <br /> experience.</p>
      </div>

      <ul className={styles.right_body}>
        {CooperGridContent.map((item, index) => (
          <li className={`${styles.cooper_li} cooper_li_index_${index}`} key={`grid${item.title}`}>
            <Image
              src={item.image}
              alt={`${item.title} image`} width={85} height={64}
              className={`${styles.images_right_body}`}
            />
            <h3 className={styles.right_li_title}>{item.title}</h3>
            <p className={styles.right_li_subtitle}>{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}