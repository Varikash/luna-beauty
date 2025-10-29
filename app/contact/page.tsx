import styles from "./page.module.css";
import Image from 'next/image';
import CardWrapper from "@/app/components/card-wrapper/card-wrapper";
import OurClientsRecommended from "@/app/components/our-clients-recommended/ourClientsRecommended";
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import { serviceDetailsMock } from '@/app/utils/mockFiles';
import { contacts, socialHeader } from '@/app/utils/mockFiles';
import SideMenu from '@/app/components/side-menu/side-menu';
import AppointmentButton from '@/app/utils/ui/make-an-appointment/make-an-appointment';
import ContactForm from "@/app/components/contact-form/contact-form";


export default function ContactUs() {

  const detailsTitles = serviceDetailsMock.makeup.details.map(detail => detail.title);
  return (
    <div className={styles.page}>
      <Header type="otherpages" />
      <main className={styles.main}>
        <section className={styles.contact_section}>
          <div className={styles.header_wrapper}>
            <p className={styles.ancor}>
              CONTACT US
            </p>
            <div className={styles.title_2_wrapper}>
              <h2 className={`vine-title ${styles.header_1}`}><span className={styles.header_1_span}>B</span>ook</h2>
              <div className={styles.title_2_wrap}>
                <h2 className={`vine-title ${styles.header_2}`}>your</h2><h2 className={styles.header_2_span}>journey!</h2>
              </div>
            </div>
          </div>
          <div className={styles.body}>
            <AppointmentButton className={styles.appoinment_button} />
            <div className={styles.left_body}>
              <Image
                src={`/images/contact/left.jpg`}
                alt="SmileyFace"
                className={styles.image}
                width={568}
                height={797}
              />
              <ul className={styles.social_menu}>
                {socialHeader.map((link) => (
                  <li>
                    <a key={link.name} href={link.link} className={styles.soc_li}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.right_body}>
              <ul className={styles.footer_content}>
                <li className={`${styles.column_about} ${styles.footer_content_column}`}>
                  <h5 className={styles.right_header}>About us</h5>
                  <p className={styles.right_text}>Experience our elegant beauty salon in<br /> the heart of London, where every<br /> corner is designed to inspire. </p>
                </li>
                <li className={`${styles.column_contact} ${styles.footer_content_column} ${styles.aside_column}`}>
                  <div className={`${styles.footer_content_column} ${styles.footer_content_aside_container}`}>
                    <h5 className={styles.right_header}>Contact us</h5>
                    <ul className={styles.footer_content_nav}>
                      {Object.entries(contacts).map(([key, value]) => (
                        <a key={key} href={`${key === "email" ? "mailto:" : "tel:"}${value}`} className={styles.right_text}>{value}</a>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
              <ContactForm className={styles.contact_form} />

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
// pages/contact.js
// import Head from 'next/head';
// import './style.css';

// export default function ContactPage() {
//   return (
//     <div className={"page"}>
//       <Head>
//         <title>Beauty Studio — Contact us</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//       </Head>

//       {/* TOP BAR */}
//       <header className="top">
//         <div className="wrap top__in">
//           <div className="logo">LNA</div>

//           <div className="menu">
//             <span>MENU</span>
//             <span className="burger" aria-hidden>
//               <i /><i /><i />
//             </span>
//           </div>

//           <div className="contacts">
//             <div>8 Market Square, Amersham HP7 0DQ,<br />United Kingdom</div>
//             <a href="tel:+380322975020">+38 032 297 50 20</a>
//           </div>
//         </div>
//       </header>

//       {/* UPPER WHITE PANEL */}
//       <section className="panel panel--white">
//         <div className="wrap white__grid">

//           {/* big words */}
//           <div className="word word--left">Book</div>
//           <div className="word word--right">
//             <div>your</div>
//             <div className="journey">journey!</div>
//           </div>

//           {/* left image */}
//           <figure className="portrait">
//             <img src="https://via.placeholder.com/520x660?text=Portrait" alt="Client portrait" />
//           </figure>

//           {/* floating appointment button */}
//           <a className="circleBtn circleBtn--white" href="#form">↗<span>MAKE AN<br />APPOINTMENT</span></a>

//           {/* center column labels */}
//           <div className="sectionTag">CONTACT US</div>

//           {/* small columns about & contact to the sides of the form */}
//           <div className="side about">
//             <h4>About us</h4>
//             <p>Experience our elegant beauty salon in the heart of London, where every corner is designed to inspire.</p>
//             <ul className="social">
//               <li><a href="#">Facebook</a></li>
//               <li><a href="#">Instagram</a></li>
//               <li><a href="#">Whatsapp</a></li>
//             </ul>
//           </div>

//           <div className="side cinfo">
//             <h4>Contact us</h4>
//             <p><a href="mailto:hello@lna.com">hello@lna.com</a><br />+44 782 203 12 21</p>
//           </div>

//           {/* rounded form card */}
//           <div id="form" className="formCard">
//             <div className="star" aria-hidden>✶</div>
//             <label className="field">
//               <span>Your name</span>
//               <input type="text" placeholder="MICHAI" />
//             </label>
//             <label className="field">
//               <span>Your phone number</span>
//               <input type="tel" placeholder="+44 000 000 00 00" />
//             </label>
//             <button className="send">Send request</button>
//           </div>

//           {/* thin vertical divider */}
//           <div className="vline" aria-hidden />
//           {/* subtle huge arcs */}
//           <div className="arc arc--center" aria-hidden />
//           <div className="arc arc--right" aria-hidden />
//         </div>
//       </section>

//       {/* LOWER DARK PANEL */}
//       <section className="panel panel--dark">
//         <div className="wrap dark__grid">

//           {/* left block with H1 and inline form */}
//           <div className="lead">
//             <div className="letsgo">Let’s go</div>
//             <h2>BOOK YOUR APPOINTMENT NOW<br />AND REFRESH YOUR LOOK!</h2>

//             <form className="inlineForm">
//               <label className="ifield">
//                 <span>Your name</span>
//                 <input type="text" placeholder="MICHAI" />
//               </label>
//               <label className="ifield">
//                 <span>Your phone number</span>
//                 <input type="tel" placeholder="+44 000 000 00 00" />
//               </label>
//               <button className="btnDark">Send request</button>
//             </form>
//           </div>

//           {/* center mini column */}
//           <div className="mid">
//             <div className="line" />
//             <div className="muted">Or contact us in the convenient way for you:</div>
//             <p><a href="mailto:hello@lna.com">hello@lna.com</a><br />+44 782 203 12 21</p>
//           </div>

//           {/* right: big circle + team photo on curved plate */}
//           <a className="circleBtn circleBtn--dark" href="#form">↗<span>MAKE AN<br />APPOINTMENT</span></a>

//           <figure className="teamPlate">
//             <img src="https://via.placeholder.com/420x520?text=Team+Photo" alt="Team" />
//             <i className="spark">✶</i>
//           </figure>

//           {/* footer columns */}
//           <div className="columns">
//             <div>
//               <h5>About us</h5>
//               <p>Experience our elegant beauty salon in the heart of London, where every corner is designed to inspire.</p>
//             </div>
//             <div>
//               <h5>Links</h5>
//               <ul className="links">
//                 <li><a href="/">About us</a></li>
//                 <li><a href="/#services">Services</a></li>
//                 <li><a href="/#about">Our experts</a></li>
//                 <li><a href="/contact">Contact</a></li>
//               </ul>
//             </div>
//             <div>
//               <h5>Contact us</h5>
//               <p><a href="mailto:hello@lna.com">hello@lna.com</a><br />+44 782 203 12 21</p>
//             </div>
//           </div>

//           <div className="bottomLine" />
//           <div className="legal">
//             <span>©2025. All rights reserved. LNA.</span>
//             <span className="socialDots">● ● ●</span>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
