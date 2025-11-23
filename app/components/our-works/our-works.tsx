import React from 'react';
import Image from 'next/image';
import { ourWorksMock } from '@/app/utils/mockFiles';
import './our-works.css';
import BeautyButton from '@/app/utils/ui/bs-button/bs-button';
import AppointmentButton from "@/app/utils/ui/make-an-appointment/make-an-appointment";

const OurWorks: React.FC = () => {
  return (
    <section className={"our-works-section"} key={'our-works'}>
      <BeautyButton
        text="eXPLORE all our SERVICES"
        className="beauty-services-button-style-our-works"
        link="/services"
      />
      <div className={"our-works-info"}>
        <Image
          src={"/images/ow/ow-title.svg"}
          alt={"title"}
          width={684}
          height={250}
          className="ow-title"
        />
        <h2 className={"our-works-title"}><span className={"our-works-span"}>O</span>ur <span>W</span>orks</h2>
        <p className={"our-works-info-subtitle"}>
          Experience our elegant beauty salon in the heart of London, where
          every corner is designed to inspire. Indulge in luxury treatments
          surrounded by a sophisticated interior, adorned with modern art pieces
          that elevate your beauty journey!
        </p>
        <BeautyButton
        text="eXPLORE all our SERVICES"
        className="beauty-services-button-style-our-works-mob"
        link="/services"
      />
        <Image
          src={ourWorksMock.image6}
          alt={"image-5"}
          width={916}
          height={748}
          className="our-works-image-5"
        />
        < AppointmentButton className="our-works-appoinment" />
      </div>
      <ul className="our-works-images-list">
        <li className="our-works-images-list-item ow-li-1">
          <Image
            src={ourWorksMock.image1}
            alt={"image-1"}
            width={300}
            height={284}
            className="our-works-image-1"
          />
        </li>
        <li className="our-works-images-list-item ow-li-2">
          <Image
            src={ourWorksMock.image2}
            alt={"image-2"}
            width={300}
            height={387}
            className="our-works-image-2"
          />
        </li>
        <li className="our-works-images-list-item ow-li-3">
          <Image
            src={ourWorksMock.image3}
            alt={"image-3"}
            width={286}
            height={400}
            className="our-works-image-3"
          />
        </li>
        <li className="our-works-images-list-item ow-li-4">
          <Image
            src={ourWorksMock.image4}
            alt={"image-4"}
            width={440}
            height={284}
            className="our-works-image-4"
          />
        </li>
        {/* <li className="our-works-images-list-item ow-li-5">
          <Image
            src={ourWorksMock.image5}
            alt={"image-5"}
            width={916}
            height={748}
            className="our-works-image-5"
          />
        </li> */}
      </ul>
      {/* < AppointmentButton className="our-works-appoinment" /> */}
    </section>
  );
};

export default OurWorks;
