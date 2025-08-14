import React from 'react';
import Image from 'next/image';
import './beauty-services-header.css';
import BeautyButton from '@/app/utils/ui/bs-button/bs-button';

const BeautyServicesHeader: React.FC = () => {
  return (
    <div className="beauty-services-head">
      <Image
        src="/BeautyServices.png"
        alt="BeautyServices"
        width={479}
        height={214}
      />
      <div className="beauty-services-head-text">
        <p className="beauty-services-head-subtitle">
          Luxury beauty services tailored just for you.<br />
          Book your appointment today!
        </p>
        {/* <button className="beauty-services-button-style">
          <Image
            src="/BeautyServicesStar.png"
            alt="BeautyServicesStar"
            width={32}
            height={32}
          />
          eXPLORE all our SERVICES
        </button> */}
        <BeautyButton
          text="eXPLORE all our SERVICES"
          className="beauty-services-button-style"
          link="/services"
        />
      </div>
    </div>
  )
}

export default BeautyServicesHeader;