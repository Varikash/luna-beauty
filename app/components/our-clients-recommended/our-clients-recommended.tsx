"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import CardWrapper from '@/app/components/card-wrapper/card-wrapper';
import BeautyButton from '@/app/utils/ui/bs-button/bs-button';
import { clientsRecommendedMock } from '@/app/utils/mockFiles';
import './our-clients-recommended.css';

const OurClientsRecommended: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 1;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= clientsRecommendedMock.length ? 0 : prev + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - itemsPerPage < 0 ? clientsRecommendedMock.length - itemsPerPage : prev - itemsPerPage
    );
  };

  return (
    <section className={"clients-recommended"}>
      <article className="clients-recommended-content">
        <div className="clients-recommended-relative-container">
          <div className="clients-recommended-slider-controls">
            <button className="slider-btn slider-btn-prev" onClick={prevSlide}>
              <Image src="/images/ui/arrow-left.svg" alt="Previous" width={24} height={24} />
            </button>
            <button className="slider-btn slider-btn-next" onClick={nextSlide}>
              <Image src="/images/ui/arrow-right.svg" alt="Next" width={24} height={24} />
            </button>
          </div>
          <Image className="clients-recommended-hands-picture" src="/images/ocr/hands.jpeg" alt="hands-picture" width={568} height={795} />
        </div>
        <div className="clients-recommended-content-container">
          <h2 className="vine-title clients-recommended-title">
            <span className="champagne-title">O</span>ur clients<span className="title-gap"></span><br /> <span className="champagne-title">R</span>ecommend
          </h2>
          <div className="clients-recommended-slider-hide">
            <ul
              className="skip-li clients-recommended-slider-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {clientsRecommendedMock.map((client, index) => (
                <li key={"slide" + index} className="clients-recommended-slider-item">
                  <div key={`recommends+${index}`} className="review-item">
                    <div className="quote">
                    <Image
                          src="/images/ocr/quote-icon.svg"
                          alt="quote-picture"
                          width={22}
                          height={18}
                        />
                    </div>
                    <p className="review-item-name">{client.name}</p>
                    <div className="stars-container">
                      {Array.from({ length: client.stars }, (_, starIndex) => (
                        <Image
                          key={starIndex}
                          src="/images/ocr/review-star.svg"
                          alt="star-picture"
                          width={18}
                          height={17}
                        />
                      ))}
                    </div>
                    <p className="review-item-subtitle">{client.subtitle}</p>
                    <p className="review-item-text">{client.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
      <aside className="clients-recommended-aside">
        <div className="clients-recommended-relative-container">
          <Image className="clients-recommended-comment" src="/images/ocr/b-studio-london.svg" alt="comment-picture" width={230} height={244} />
          <Image src="/images/ocr/salon-image.jpg" alt="salon-picture" width={314} height={414} />
        </div>
        <Image src="/images/ocr/fresha-award.jpg" alt="award-picture" width={268} height={282} />
      </aside>
    </section>
  );
};

export default OurClientsRecommended;
