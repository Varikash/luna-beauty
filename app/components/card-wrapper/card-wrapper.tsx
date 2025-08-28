import React from 'react';
import './card-wrapper.css';

interface CardWrapperProps {
  children: React.ReactNode;
  type?: "page1" | "page2" | "page3" | "page4";
  ikey: number;
  id?: string;
}

const CardWrapper: React.FC<CardWrapperProps> = ({ children, type, ikey, id }) => {
  let className = "card-wrapper";

  switch (type) {
    case "page1":
      className = "card-wrapper-page1";
      break;
    case "page2":
      className = "card-wrapper-page2";
      break;
    case "page3":
      className = "card-wrapper-page3";
      break;
    case "page4":
      className = "card-wrapper-page4";
      break;
    default:
      className = "card-wrapper-page1";
  }


  return (
    <li className={className} key={ikey} id={id}>
      {children}
    </li>
  );
};

export default CardWrapper;
