"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../logo/logo';
import Link from 'next/link';
import { navLinkHeader, socialHeader } from '@/app/utils/mockFiles';
import './header.css';
import AppointmentButton from "@/app/utils/ui/make-an-appointment/make-an-appointment";

interface HeaderProps {
  type: "homepage" | "otherpages";
}

const Header: React.FC<HeaderProps> = ({ type }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const formatNavText = (text: string) => {
    return (
      <span className="vine-title">
        <span className="champagne-title">{text.charAt(0)}</span>
        {text.slice(1)}
      </span>
    );
  };

  return (
    <>
      {type === "homepage" ? (
        <header className="header-container">
          <div className='header-section'>
            <Logo size="large" color="black-titled" />
          </div>
          <div className='header-section'>
            <button className="header-menu-button" onClick={toggleMenu}>
              MENU
              <Image
                src="/images/header/burger.svg"
                alt="burger-icon"
                width={60}
                height={11}
              />
            </button>
          </div>
          <div className='header-section header-address-container'>
            <a
              href="https://maps.app.goo.gl/9akphzwrHiV6arBU6"
              className='header-address'
            >
              <Image
                src="/images/header/point.svg"
                alt="point"
                width={20}
                height={15}
                className="header-point-img"
              />
              8 Market Square, Amersham HP7 0DQ, <br />
              United Kingdom
            </a>
            <a href={"tel:‎+44 782 203 12 21"} className="header-tel">+44 782 203 12 21</a>
          </div>
        </header>
      ) : (
        <header className="header-container">
          <div className='header-section'>
            <Logo size="small" color="black" />
          </div>
          <div className='header-section'>
            <button className="header-menu-button" onClick={toggleMenu}>
              MENU
              <Image
                src="/images/header/burger.svg"
                alt="burger-icon"
                width={60}
                height={11}
              />
            </button>
          </div>
          <div className='header-section header-address-container'>
            <a
              href="https://maps.app.goo.gl/9akphzwrHiV6arBU6"
              className='header-address'
            >
              <Image
                src="/images/header/point.svg"
                alt="point"
                width={20}
                height={15}
                className="header-point-img"
              />
              8 Market Square, Amersham HP7 0DQ, <br />
              United Kingdom
            </a>
            <a href={"tel:‎+44 782 203 12 21"} className="header-tel">+44 782 203 12 21</a>
          </div>
        </header>
      )}

      {/* Полноэкранное меню */}
      {isMenuOpen && (
        <div className="fullscreen-menu">
          <div className="fullscreen-menu-container">
            <div className="fullscreen-menu-header">
              <div className='header-section'>
                <Logo size="large" color="white-titled" />
                <div className="burger-photo-container">
                  <Image
                    src={`/images/footer/footerWhiteStar.svg`}
                    alt={"footer star"} width={104} height={104}
                    className="burger-image-star" />
                  <Image
                    src={`/images/footer/footerPhoto.jpg`}
                    alt={"footer photo"} width={268} height={343}
                    className="footer-image-rounded" />
                </div>
                <ul className="sotial-menu-nav">
                  {socialHeader.map((link) => (
                    <li>
                      <a key={link.name} href={link.link} className="burg-soc-link">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='header-section'>
                <button className="close-button" onClick={toggleMenu}>
                  CLOSE
                  <Image
                    src="/images/header/close-icon.svg"
                    alt="close-button-icon"
                    width={44}
                    height={44}
                    className="header-point-img"
                  />
                </button>
              </div>
              <div className='header-section header-address-container'>
                <a
                  href="https://maps.app.goo.gl/9akphzwrHiV6arBU6"
                  className='burger-address'
                >
                  <Image
                    src="/images/header/point.svg"
                    alt="point"
                    width={20}
                    height={15}
                    className="header-point-img"
                  />
                  8 Market Square, Amersham HP7 0DQ, <br />
                  United Kingdom
                </a>
                <a href={"tel:‎+44 782 203 12 21"} className="burger-tel">+44 782 203 12 21</a>
                < AppointmentButton className="burger-appoinment" />
              </div>
            </div>
            <nav className="fullscreen-menu-nav">
              {navLinkHeader.map((link) => (
                <Link key={link.title} href={link.link} className="menu-nav-link" onClick={toggleMenu}>
                  {formatNavText(link.title)}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
