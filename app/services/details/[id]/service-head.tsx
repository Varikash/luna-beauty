"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { IServiceCategory } from '@/app/utils/mockServicesTwo';
import SideMenu from '@/app/components/side-menu/side-menu';
import AppointmentButton from '@/app/utils/ui/make-an-appointment/make-an-appointment';
import styles from './page.module.css';

interface ServiceHeadProps {
  service: IServiceCategory;
}

/**
 * Head of the detail page: category title on the left, the master behind the
 * category on the right. When several masters work in the category the aside
 * shows one of them at full size plus a row of avatars to switch between them —
 * this keeps the aside a fixed height, which the absolutely positioned
 * appointment button and side menu below it depend on.
 */
const ServiceHead: React.FC<ServiceHeadProps> = ({ service }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const masters = service.masters;
  const master = masters[activeIndex] ?? masters[0];
  const treatmentTitles = service.treatments.map((treatment) => treatment.title);

  return (
    <div className={styles.beautyServiceHead}>
      <div className={styles.titleWrapper}>
        <Link href={`/services#${service.id}`} className={styles.navigateButton}>
          <Image src="/images/ui/arrow-left.svg" alt="" width={24} height={24} />
          Back to all services
        </Link>
        <h2 className={`vine-title ${styles.header}`}>{service.title}</h2>
        <h2 className={`vine-title ${styles.header_mobile}`}>
          <span className={styles.header_mobile_span}>{service.title[0]}</span>
          {service.title.slice(1)}
        </h2>
      </div>

      <div className={styles.beautyServiceHeadAside}>
        <div className={styles.imageWrapper}>
          <Image
            src={master.image}
            alt={master.name}
            className={styles.beautyServiceHeadImage}
            width={148}
            height={148}
          />
        </div>

        {masters.length > 1 && (
          <div
            className={styles.mastersSwitch}
            role="tablist"
            aria-label={`Masters working in ${service.title}`}
          >
            {masters.map((item, index) => (
              <button
                key={`${item.name}-${index}`}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={item.name}
                title={item.name}
                onClick={() => setActiveIndex(index)}
                className={`${styles.switchAvatar} ${index === activeIndex ? styles.switchAvatarActive : ''}`}
              >
                <Image src={item.image} alt="" width={40} height={40} />
              </button>
            ))}
          </div>
        )}

        <p className={styles.master_name}>{master.name}</p>
        <p className={styles.beautyServiceHeadAsideSubtitle}>
          {master.bio ?? master.role}
        </p>

        <AppointmentButton className={styles.appoinmentButton} />
        <SideMenu className={styles.asideMenu} services={treatmentTitles} />
      </div>
    </div>
  );
};

export default ServiceHead;
