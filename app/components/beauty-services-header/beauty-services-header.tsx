import React from 'react';
import Image from 'next/image';
import style from './beautyServicesHeader.module.css'
import BeautyButton from '@/app/utils/ui/bs-button/bs-button';

const BeautyServicesHeader: React.FC<{ type?: string }> = ({ type }) => {
  return (
    <>
      {type != "page3" ? (
        <div className={style.beautyServicesHead}>
          <h2 className={style.title}><span>B</span>eauty <span>S</span>ervices</h2>
          <div className={style.beautyServicesHeadText}>
            <p className={style.beautyServicesHeadSubtitle}>
              Luxury beauty services tailored just for you.<br />
              Book your appointment today!
            </p>
            <BeautyButton
              text="eXPLORE all our SERVICES"
              className={style.beautyServicesButtonStyle}
              link="/services"
            />
          </div>
        </div>
      ) : (
        <div className={style.beautyServicesHead}>
          <Image
            src="/images/bs/BeautyServices.png"
            alt="BeautyServices"
            width={479}
            height={214}
          />
          <div className={style.beautyServicesHeadTextPageThree}>
            <p className={style.beautyServicesHeadSubtitle}>
              Luxury beauty services tailored<br /> just for you.<br />
              Book your appointment today!<br />
              High-quality services, from<br /> professional makeup and flawless<br /> waxing to the best experts in<br /> nails manicure!
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default BeautyServicesHeader;