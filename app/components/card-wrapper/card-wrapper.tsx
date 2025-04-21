import React from 'react';
import './card-wrapper.css';

interface CardWrapperProps {
  children: React.ReactNode;
  type?: "page1" | "page2";
}

const CardWrapper: React.FC<CardWrapperProps> = ({ children, type }) => {
  return (
    <li className={type === "page1"
      ? "card-wrapper-page1"
      : "card-wrapper-page2"}>
      {children}
    </li>
  );
};

export default CardWrapper;
