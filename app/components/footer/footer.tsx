import React from 'react';
import Image from 'next/image';
import './footer.css';
import Logo from '../../components/logo/logo';
import { navLinks, contacts, social } from "../../utils/mockFiles";
import ScrollToTopButton from '../../utils/ui/to-top-button/to-top-button';
import FooterForm from "../../components/footer-form/footer-form";
import AppointmentButton from "@/app/utils/ui/make-an-appointment/make-an-appointment";

const Footer: React.FC = () => {

  return (
    <footer className="footer">
      <article className="footer-intro">
        <Logo size="medium" color="white" />
        <div className="footer-intro-text">
          <p className="footer-intro-text-subtitle">Let's go</p>
          <h4 className="footer-intro-text-title">Book your appointment now<br /> and refresh your look!</h4>
        </div>
      </article>
      <article className="footer-form-sidebar-container">
        <FooterForm className="footer-form" />
        <div className="footer-form-sidebar">
          <Image
            src={`/images/footer/footerTire.svg`}
            width={45}
            alt={"tire"} height={1} />
          <h6 className="footer-form-sidebar-title">Or contact us in the convenient way for you!</h6>
          <ul className="footer-content-nav">
            {Object.entries(contacts).map(([key, value]) => (
              <a key={key} href={`${key === "email" ? "mailto:" : "tel:"}${value}`} className="footer-content-text">{value}</a>
            ))}
          </ul>
        </div>
      </article>
      <ul className="footer-content">
        <li className="column-width footer-content-column">
          <h5 className="footer-content-header">About us</h5>
          <p className="footer-content-text">Experience our elegant beauty salon in<br /> the heart of London, where every<br /> corner is designed to inspire. </p>
        </li>
        <li className="column-width footer-content-column">
          <h5 className="footer-content-header">Links</h5>
          <nav className="footer-content-nav">
            {navLinks.map((link) => (
              <a className="footer-content-text pointer" key={link.title} href={link.link}>{link.title}</a>
            ))}
          </nav>
        </li>
        <li className="column-width footer-content-column aside-column">
          <div className="footer-content-column footer-content-aside-container">
            <h5 className="footer-content-header">Contact us</h5>
            <ul className="footer-content-nav">
              {Object.entries(contacts).map(([key, value]) => (
                <a key={key} href={`${key === "email" ? "mailto:" : "tel:"}${value}`} className="footer-content-text">{value}</a>
              ))}
            </ul>
          </div>
        </li>
      </ul>
      <div className="footer-photo-container">
        <Image
          src={`/images/footer/footerWhiteStar.svg`}
          alt={"footer star"} width={105} height={105}
          className="footer-image-star" />
        <Image
          src={`/images/footer/footerPhoto.jpg`}
          alt={"footer photo"} width={352} height={451}
          className="footer-image-rounded" />
      </div>
      <div className="footer-bottom-line">
        <ScrollToTopButton />
        {/* <button className="footer-arrow-up">
          <Image src="/images/footer/footerArrow.svg" alt="arrow up" width={42} height={18} />
        </button> */}
        <p className="footer-copyright">©2025 All rights reserved. WWL</p>
        <ul className="footer-bottom-line-sotial">
          {social.map((http, key) => (
            <a
              key={key + http}
              href={http}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-content-text">
              <Image
                src={`/images/footer/soc${key}.svg`}
                width={16}
                alt={http} height={14} />
            </a>
          ))}
        </ul>
      </div>
      < AppointmentButton className="footer-appoinment" />
    </footer>
  )
}

export default Footer;