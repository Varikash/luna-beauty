import React from 'react';
import Image from 'next/image';
import './beauty-services-header.css';
import BeautyButton from '@/app/utils/ui/bs-button/bs-button';

const BeautyServicesHeader: React.FC<{ type?: string }> = ({ type }) => {
  return (
    <>
      {type != "page3" ? (
        <div className="beauty-services-head">
          <Image
            src="/images/bs/BeautyServices.png"
            alt="BeautyServices"
            width={479}
            height={214}
          />
          <div className="beauty-services-head-text">
            <p className="beauty-services-head-subtitle">
              Luxury beauty services tailored just for you.<br />
              Book your appointment today!
            </p>
            <BeautyButton
              text="eXPLORE all our SERVICES"
              className="beauty-services-button-style"
              link="/services"
            />
          </div>
        </div>
      ) : (
        <div className="beauty-services-head">
          <Image
            src="/images/bs/BeautyServices.png"
            alt="BeautyServices"
            width={479}
            height={214}
          />
          <div className="beauty-services-head-text-page3">
            <p className="beauty-services-head-subtitle">
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