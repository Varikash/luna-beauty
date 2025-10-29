"use client"

import React, { useState, useEffect } from 'react';
import styles from "./side-menu.module.css"

export interface SideMenuProps {
  className?: string;
  services: string[];
  onActiveServiceChange?: (activeService: string) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({
  className,
  services,
  onActiveServiceChange
}) => {
  const [activeService, setActiveService] = useState<string>('');
  const [isClient, setIsClient] = useState(false);

  // Инициализация только на клиенте, чтобы избежать ошибки гидратации
  useEffect(() => {
    setIsClient(true);
    setActiveService(services[0] || '');
  }, []);

  const scrollToService = (serviceTitle: string) => {
    setActiveService(serviceTitle);
    onActiveServiceChange?.(serviceTitle);
    const element = document.getElementById(serviceTitle);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    if (!isClient) return;
    const handleScroll = () => {
      const serviceElements = services.map(service => ({
        title: service,
        element: document.getElementById(service)
      })).filter(item => item.element);

      let closestService = services[0] || '';
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
  }, [services, activeService, onActiveServiceChange, isClient]);
  return (
    <nav className={`${styles.services_navigation} ${className}`}>
      <ul className={styles.services_nav_list}>
        {services.map((service, index) => (
          <li key={`nav-${index}`}>
            <button
              onClick={() => scrollToService(service)}
              className={`${styles.nav_link} ${activeService === service ? styles.active : ''}`}
            >
              {service}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideMenu;