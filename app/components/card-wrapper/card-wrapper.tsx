import React from 'react';
import './card-wrapper.css';

interface CardWrapperProps {
  children: React.ReactNode;
}

const CardWrapper: React.FC<CardWrapperProps> = ({ children }) => {
  return (
    <li className="card-wrapper">
      {children}
    </li>
  );
};

export default CardWrapper;
