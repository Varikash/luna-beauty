"use client"

import React, { useState, useEffect } from 'react';
import { servicesExtendedMock, IExtService } from '@/app/utils/mockFiles';
import './side-menu.css';

interface SideMenuProps {
  services?: IExtService[];
  onActiveServiceChange?: (activeService: string) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({
  services = servicesExtendedMock,
  onActiveServiceChange
}) => {
  const [activeService, setActiveService] = useState<string>(services[0]?.title || '');

  const scrollToService = (serviceTitle: string) => {
    setActiveService(serviceTitle);
    onActiveServiceChange?.(serviceTitle);
    const element = document.getElementById(serviceTitle);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const serviceElements = services.map(service => ({
        title: service.title,
        element: document.getElementById(service.title)
      })).filter(item => item.element);

      let closestService = services[0]?.title || '';
      let closestDistance = Infinity;

      serviceElements.forEach(({ title, element }) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top);

          if (distance < closestDistance && rect.top <= window.innerHeight / 2) {
            closestDistance = distance;
            closestService = title;
          }
        }
      });

      if (closestService !== activeService) {
        setActiveService(closestService);
        onActiveServiceChange?.(closestService);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [services, activeService, onActiveServiceChange]);
  return (
    <nav className="services-navigation">
      <ul className="services-nav-list">
        {services.map((service, index) => (
          <li key={`nav-${index}`}>
            <button
              onClick={() => scrollToService(service.title)}
              className={`nav-link ${activeService === service.title ? 'active' : ''}`}
            >
              {activeService === service.title && <div className={`nav-link-dot`}></div>}{service.link}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideMenu;