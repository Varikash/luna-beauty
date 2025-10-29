import React from 'react';
import Image from 'next/image';
import Logo from '../../components/logo/logo';
import { navLinks, contacts, social } from "../../utils/mockFiles";
import ScrollToTopButton from '../../utils/ui/to-top-button/to-top-button';
import FooterForm from "../../components/footer-form/footer-form";
import AppointmentButton from "@/app/utils/ui/make-an-appointment/make-an-appointment";
import styles from "./footer.module.css"

const Footer: React.FC = () => {

  return (
    <footer className={styles.footer}>
      <article className={styles.footer_intro}>
        <Logo size="medium" color="white"/>
        <div className={styles.footer_intro_text}>
          <p className={styles.footer_intro_text_subtitle}>Let's go</p>
          <h4 className={styles.footer_intro_text_title}>Book your appointment now<br /> and refresh your look!</h4>
        </div>
      </article>
      <article className={styles.footer_form_sidebar_container}>
        <FooterForm className={styles.footer_form} />
        <div className={styles.footer_form_sidebar}>
          <Image
            src={`/images/footer/footerTire.svg`}
            width={45}
            alt={"tire"} height={1} />
          <h6 className={styles.footer_form_sidebar_title}>Or contact us in the convenient way for you!</h6>
          <ul className={styles.footer_content_nav}>
            {Object.entries(contacts).map(([key, value]) => (
              <a key={key} href={`${key === "email" ? "mailto:" : "tel:"}${value}`} className={styles.footer_content_text}>{value}</a>
            ))}
          </ul>
        </div>
      </article>
      <ul className={styles.footer_content}>
        <li className={`${styles.column_width} ${styles.footer_content_column}`}>
          <h5 className={styles.footer_content_header}>About us</h5>
          <p className={styles.footer_content_text}>Experience our elegant beauty salon in<br /> the heart of London, where every<br /> corner is designed to inspire. </p>
        </li>
        <li className={`${styles.column_width} ${styles.footer_content_column}`}>
          <h5 className={styles.footer_content_header}>Links</h5>
          <nav className={styles.footer_content_nav}>
            {navLinks.map((link) => (
              <a className={`${styles.footer_content_text} ${styles.pointer}`} key={link.title} href={link.link}>{link.title}</a>
            ))}
          </nav>
        </li>
        <li className={`${styles.column_width} ${styles.footer_content_column} ${styles.aside_column}`}>
          <div className={`${styles.footer_content_column} ${styles.footer_content_aside_container}`}>
            <h5 className={styles.footer_content_header}>Contact us</h5>
            <ul className={styles.footer_content_nav}>
              {Object.entries(contacts).map(([key, value]) => (
                <a key={key} href={`${key === "email" ? "mailto:" : "tel:"}${value}`} className={styles.footer_content_text}>{value}</a>
              ))}
            </ul>
          </div>
        </li>
      </ul>
      <div className={styles.footer_photo_container}>
        <Image
          src={`/images/footer/footerWhiteStar.svg`}
          alt={"footer star"} width={105} height={105}
          className={styles.footer_image_star} />
        <Image
          src={`/images/footer/footerPhoto.jpg`}
          alt={"footer photo"} width={352} height={451}
          className={styles.footer_image_rounded} />
      </div>
      <div className={styles.footer_bottom_line}>
        <ScrollToTopButton />
        {/* <button className="footer-arrow-up">
          <Image src="/images/footer/footerArrow.svg" alt="arrow up" width={42} height={18} />
        </button> */}
        <p className={styles.footer_copyright}>©2025 All rights reserved. WWL</p>
        <ul className={styles.footer_bottom_line_sotial}>
          {social.map((http, key) => (
            <a
              key={key + http}
              href={http}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footer_content_text}>
              <Image
                src={`/images/footer/soc${key}.svg`}
                width={16}
                alt={http} height={14} />
            </a>
          ))}
        </ul>
      </div>
      < AppointmentButton className={styles.footer_appoinment} />
    </footer>
  )
}

export default Footer;