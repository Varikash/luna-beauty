import React from 'react';
import Image from 'next/image';
import CardWrapper from '@/app/components/card-wrapper/card-wrapper';
import servicesMock from '@/app/utils/mockFiles';
import './index.css';

const BeautyServices: React.FC = () => {
  return (
    <section className="beauty-services-section">
      <div className="beauty-services-head">
        <Image
          src="/BeautyServices.png"
          alt="BeautyServices"
          width={479}
          height={214}
        />
        <div className="beauty-services-head-text">
          <p>
          Luxury beauty services tailored just for you.<br /> Book your appointment today!
          </p>
          <button className="button-style">
            eXPLORE all our SERVICES
          </button>
        </div>
      </div>
      <ul className="beauty-services-list">
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
              <CardWrapper>
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
    </section>
  );
};

export default BeautyServices;
