import React from 'react';
import Image from 'next/image';
import CardWrapper from '@/app/components/card-wrapper/card-wrapper';
import BeautyServicesHeader from '@/app/components/beauty-services-header/beauty-services-header';
import BeautyButton from '@/app/utils/ui/bs-button/bs-button';
import { servicesMock, servicesExtendedMock } from '@/app/utils/mockFiles';
import './beauty-services.css';

interface BeautyServicesProps {
  type?: "page1" | "page2" | "page3" | "page4";
}

const BeautyServices : React.FC<BeautyServicesProps> = ({ type }) => {
  return (
    <section className={type === "page2"
      ? "beauty-services-section-page2"
      : "beauty-services-section"}>
      <BeautyServicesHeader />
      {type === "page1" && (
        <ul className="beauty-services-list-page1">
          {servicesMock.map((service, index) => (
            <React.Fragment key={"bs-page-1" + index}>
              {index === 4 ? (
                <a
                  href="https://example.com/booking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="placeholder-card"
                >
                  <p className="placeholder-title">
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
              ) : (
                <CardWrapper type="page1" key={index}>
                  <div className="card-header">
                    <span className="service-counter">
                      0{index + 1}
                    </span>
                    <a
                      href="https://example.com/booking"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="calendar-link"
                    >
                      <Image
                        src="/images/bs/calendarButton.svg"
                        alt="Calendar Icon"
                        width={48}
                        height={48}
                        className="calendar-icon"
                      />
                    </a>
                  </div>
                  <h3 className="card-title">
                    {service.title}
                  </h3>
                  <p className="card-text">
                    {service.text}
                  </p>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={268}
                    height={268}
                    className="card-image"
                  />
                  <ul className="card-list">
                    <>
                      {service.nav.map((item, navIndex) => (
                        <li className="card-list-item" key={navIndex}><p className="card-list-item-text">{item}</p><div className="card-list-item-I">|</div></li>
                      ))}
                      <a href="/services"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="last-li">View all</a>
                    </>
                  </ul>

                </CardWrapper>
              )}
            </React.Fragment>
          ))}
        </ul>
      )}
      {type === "page2" && (
        <ul className="beauty-services-list-page2">
          {servicesMock.map((service, index) => (
            index !== 4 ? (
              <CardWrapper type="page2" key={"bs-page-2" + index} >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={280}
                  height={280}
                  className="card-image-page2"
                />
                <div className="card-header-page2">
                  <span className="service-counter-page2">
                    0{index + 1}
                  </span>
                  <h3 className="card-title-page2">
                    {service.title}
                  </h3>
                  <Image
                    src="/BeautyServicesArrow.png"
                    alt="BeautyServicesArrowIcon"
                    width={85}
                    height={40}
                  // className="card-arrow-page2"
                  />
                </div>
              </CardWrapper>
            ) : null
          ))}
        </ul>
      )}
      {type === "page3" && (
        <ul className="beauty-services-list-page3">
          {servicesExtendedMock.map((service, index) => (
            <CardWrapper type="page3" key={"bs-page-3" + index}>
              <span className="service-counter">
                0{index + 1}
              </span>
              <article className="bs-card-article-p3">
                <h3 className="bs-card-title-p3">
                  {service.title}
                </h3>
                <p className="bs-card-text-p3">
                  {service.text}
                </p>
                <ul className="bs-images-list-p3">
                  {service.images.map((image, index) => (
                    <Image
                      key={"bs-3-image" + index}
                      src={image}
                      alt={service.title + " " + index}
                      width={200}
                      height={200}
                    />
                  ))}
                </ul>
                <ul className="bs-card-list-p3">
                  <>
                    {service.nav.map((item, navIndex) => (
                      <li className="card-list-item" key={"bs-3-nav" + navIndex}><p className="bs-card-list-item-text-p3">{item}</p>
                        <div className="card-list-item-I">|</div></li>
                    ))}
                    <li className="last-li">View all</li>
                  </>
                </ul>
              </article>
              <BeautyButton
                text="MORE DETAILS"
                className="beauty-services-button-style-p3"
              />
            </CardWrapper>
          ))}
        </ul>
      )}
    </section>
  );
};

export default BeautyServices;
