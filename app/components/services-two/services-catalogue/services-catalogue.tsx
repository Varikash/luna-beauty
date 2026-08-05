"use client";

import React, { useEffect, useState } from 'react';
import ServicesNav from '../services-nav/services-nav';
import ServiceBlock from '../service-block/service-block';
import { servicesCatalogMock } from '@/app/utils/mockServicesTwo';
import style from './services-catalogue.module.css';

const ServicesCatalogue: React.FC = () => {
  const [activeId, setActiveId] = useState(servicesCatalogMock[0].id);

  // Scroll-spy: the section crossing the middle band of the viewport owns the
  // active chip in the sticky nav.
  useEffect(() => {
    const nodes = servicesCatalogMock
      .map((service) => document.getElementById(service.id))
      .filter((node): node is HTMLElement => node !== null);

    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ServicesNav
        items={servicesCatalogMock.map(({ id, title }) => ({ id, title }))}
        activeId={activeId}
      />
      <div className={style.catalogue} id="catalogue">
        <div className={style.shell}>
          {servicesCatalogMock.map((service, index) => (
            <ServiceBlock key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesCatalogue;
