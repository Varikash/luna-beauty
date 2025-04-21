import React from 'react';
import Image from 'next/image';
import CardWrapper from '@/app/components/card-wrapper/card-wrapper';
import BeautyServicesHeader from '@/app/components/beauty-services-header/beauty-services-header';
import servicesMock from '@/app/utils/mockFiles';
import './beauty-services.css';

interface BeautyServicesProps {
  type?: "page1" | "page2";
}

const BeautyServices: React.FC<BeautyServicesProps> = ({ type }) => {
  return (
    <section className={type === "page2"
      ? "beauty-services-section-page2"
      : "beauty-services-section"}>
      <BeautyServicesHeader />
      {type === "page1" && (
        <ul className="beauty-services-list-page1">
          {servicesMock.map((service, index) => (
            <React.Fragment key={index}>
              {index === 4 ? (
                <div className="placeholder-card">
                  <p className="placeholder-title">
                    High-quality services,<br />
                    from professional makeup<br />
                    and flawless waxing to the<br />
                    best experts in nails<br />
                    manicure!</p>
                  <Image
                    src="/services-placeholder-btn.png"
                    alt="placeholder-card-pic"
                    width={408}
                    height={214}
                  />
                </div>
              ) : (
                <CardWrapper type="page1" key={index}>
                  <div className="card-header">
                    <span className="service-counter">
                      0{index + 1}
                    </span>
                    <Image
                      src="/calendarButton.svg"
                      alt="Calendar Icon"
                      width={48}
                      height={48}
                      className="calendar-icon"
                    />
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
                      <li className="last-li">View all</li>
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
            // Skip
            index !== 4 ? (
              <CardWrapper type="page2" key={index}>
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
    </section>
  );
};

export default BeautyServices;
