import React, { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CardWrapper from '@/app/components/card-wrapper/card-wrapper';
import BeautyServicesHeader from '@/app/components/beauty-services-header/beautyServicesHeader';
import BeautyButton from '@/app/utils/ui/bs-button/bs-button';
import SideMenu from '@/app/components/side-menu/side-menu';
import { servicesMock, servicesExtendedMock } from '@/app/utils/mockFiles';
import AppointmentButton from '@/app/utils/ui/make-an-appointment/make-an-appointment';
import style from './beautyServices.module.css';

interface BeautyServicesProps {
  type?: "page1" | "page2" | "page3";
}

const BeautyServices: React.FC<BeautyServicesProps> = ({ type }) => {


  const sectionClassName = useMemo(() => {
    if (type === 'page2') return style.beautyServicesSectionPageTwo;
    if (type === 'page3') return style.beautyServicesSectionPageThree;
    return style.beautyServicesSection;
  }, [type])



  const page1List = useMemo(() => (
    <ul className={style.beautyServicesListPageOne}>
      {servicesMock.map((service, index) => (
        <React.Fragment key={"bs-page-1" + index}>
          {index === 4 ? (
            <li>
            <a
              href="https://example.com/booking"
              target="_blank"
              rel="noopener noreferrer"
              className={style.placeholderCard}
            >
              <p className={style.placeholderTitle}>
                High-quality services,<br />
                from professional makeup<br />
                and flawless waxing to the<br />
                best experts in nails<br />
                manicure!</p>
              <Image
                src="/images/bs/services-placeholder-btn.png"
                alt="placeholder-card-pic"
                width={408}
                height={214}
              />
            </a>
            </li>
          ) : (
            <CardWrapper type="page1" ikey={index} key={"cardkey" + index}>
              <div className={style.cardHeader}>
                <span className={style.serviceCounter}>
                  0{index + 1}
                </span>
                <a
                  href="https://example.com/booking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={style.calendarLink}
                >
                  <Image
                    src="/images/bs/calendarButton.svg"
                    alt="Calendar Icon"
                    width={48}
                    height={48}
                    className={style.calendarIcon}
                  />
                </a>
              </div>
              <h3 className={style.cardTitle}>
                {service.title}
              </h3>
              <p className={style.cardText}>
                {service.text}
              </p>
              <Image
                src={service.image}
                alt={service.title}
                width={268}
                height={268}
                className={style.cardImage}
              />
              <ul className={style.cardList}>
                <>
                  {service.nav.map((item, navIndex) => (
                    <li className={style.cardListItem} key={navIndex}>
                      <p className={style.cardListItemText}>{item}</p>
                      <div className={style.cardListItemI}>|</div>
                    </li>
                  ))}
                  <li
                    className={style.lastLi}
                    key={"bs-1-nav" + "last"}>
                    <Link key={service.title} href={`/services/details/${service.link}`}>View all</Link>
                  </li>
                </>
              </ul>
            </CardWrapper>
          )}
        </React.Fragment>
      ))}
    </ul>
  ), []);


  const page2List = useMemo(() => (
    <ul className={style.beautyServicesListPageTwo}>
      {servicesMock.map((service, index) => (
        index !== 4 ? (
          <CardWrapper type="page2" ikey={index} key={"cardkey" + index}>
            <Image
              src={service.image}
              alt={service.title}
              width={280}
              height={280}
              className={style.cardImagePageTwo}
            />
            <div className={style.cardHeaderPageTwo}>
              <span className={style.serviceCounterPageTwo}>
                0{index + 1}
              </span>
              <h3 className={style.cardTitlePageTwo}>
                {service.title}
              </h3>
              <Image
                src="/BeautyServicesArrow.png"
                alt="BeautyServicesArrowIcon"
                width={85}
                height={40}
              />
            </div>
          </CardWrapper>
        ) : null
      ))}
    </ul>
  ), []);

  const page3List = useMemo(() => (
    <ul className={style.beautyServicesListPageThree}>
      {servicesExtendedMock.map((service, index) => (
        <CardWrapper type="page3" ikey={index} id={service.title} key={"cardkey" + index}>
          <span className={style.serviceCounterPageThree}>
            0{index + 1}
          </span>
          <article className={style.bsCardArticlePThree}>
            <h3 className={style.bsCardTitlePThree}>
              {service.title}
            </h3>
            <p className={style.bsCardTextPThree}>
              {service.text}
            </p>
            <ul className={style.bsImagesListPThree}>
              {service.images.map((image, imgIndex) => (
                <Image
                  key={"bs-3-image" + imgIndex}
                  src={image}
                  alt={service.title + " " + imgIndex}
                  width={200}
                  height={200}
                />
              ))}
            </ul>
            <ul className={style.bsCardListPThree}>
              <>
                {service.nav.map((item, navIndex) => (
                  <li className={style.cardListItem} key={"bs-3-nav" + navIndex}>
                    <p className={style.bsCardListItemTextPThree}>{item}</p>
                    <div className={style.cardListItemI}>|</div>
                  </li>
                ))}
                <li className={style.lastLi} key={"bs-3-nav" + "last"}>
                  <Link key={service.title} href={`/services/details/${service.link}`}>View all</Link>
                </li>
              </>
            </ul>
          </article>
          <BeautyButton
            text="MORE DETAILS"
            className={style.beautyServicesButtonStylePThree}
            link={`/services/details/${service.link}`}
          />
        </CardWrapper>
      ))}
    </ul>
  ), []);





  return (
    <section className={sectionClassName}>
      <BeautyServicesHeader type={type} />

      {type === "page3" && (
        <>
          <AppointmentButton className={style.bsAppoinment} />
          <SideMenu services={servicesExtendedMock} />
        </>
      )}

      {type === "page1" && page1List}
      {type === "page2" && page2List}
      {type === "page3" && page3List}
     </section>
  );
};

export default BeautyServices;

