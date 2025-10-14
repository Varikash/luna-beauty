"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { clientsRecommendedMock } from '@/app/utils/mockFiles';
import style from './ourClientsRecommended.module.css'

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
    <section className={style.clientsRecommended}>
      <article className={style.clientsRecommendedContent}>
        <div className={style.clientsRecommendedRelativeContainer}>
          <div className={style.clientsRecommendedSliderControls}>
            <button className="slider-btn slider-btn-prev" onClick={prevSlide}>
              <Image src="/images/ui/arrow-left.svg" alt="Previous" width={24} height={24} />
            </button>
            <button className="slider-btn slider-btn-next" onClick={nextSlide}>
              <Image src="/images/ui/arrow-right.svg" alt="Next" width={24} height={24} />
            </button>
          </div>
          <Image className={style.clientsRecommendedHandsPicture} src="/images/ocr/hands.jpeg" alt="hands-picture" width={568} height={795} />
        </div>
        <div className={style.clientsRecommendedContentContainer}>
          <h2 className={`vine-title ${style.clientsRecommendedTitle}`}>
            <span className="champagne-title">O</span>ur clients<span className={style.titleGap}></span><br /> <span className="champagne-title">R</span>ecommend
          </h2>
          <div className={style.clientsRecommendedSliderHide}>
            <ul
              className={`skip-li ${style.clientsRecommendedSliderTrack}`}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {clientsRecommendedMock.map((client, index) => (
                <li key={"slide" + index} className={style.clientsRecommendedSliderItem}>
                  <div key={`recommends+${index}`} className={style.reviewItem}>
                    <div className={style.quote}>
                    <Image
                          src="/images/ocr/quote-icon.svg"
                          alt="quote-picture"
                          width={22}
                          height={18}
                        />
                    </div>
                    <p className={style.reviewItemName}>{client.name}</p>
                    <div className={style.starsContainer}>
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
                    <p className={style.reviewItemSubtitle}>{client.subtitle}</p>
                    <p className={style.reviewItemText}>{client.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
        <aside className={style.clientsRecommendedAside}>
          <div className={style.clientsRecommendedRelativeContainer}>
            <Image 
              className={style.clientsRecommendedComment} 
              src="/images/ocr/b-studio-london.svg" 
              alt="comment-picture" 
              width={230} 
              height={244}
              style={{ width: 'auto', height: 'auto', maxWidth: '230px' }}
            />
            <Image 
              src="/images/ocr/salon-image.jpg" 
              alt="salon-picture" 
              width={314} 
              height={414}
              style={{ width: '100%', height: 'auto', maxWidth: '314px' }}
            />
          </div>
          <Image 
            src="/images/ocr/fresha-award.jpg" 
            alt="award-picture" 
            width={268} 
            height={282}
            style={{ width: '100%', height: 'auto', maxWidth: '268px' }}
          />
        </aside>
    </section>
  );
};

export default OurClientsRecommended;

