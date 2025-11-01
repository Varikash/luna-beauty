import React from 'react';
import style from './cardWrapper.module.css';

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
      className = "cardWrapperPageOne";
      break;
    case "page2":
      className = "cardWrapperPageTwo";
      break;
    case "page3":
      className = "cardWrapperPageThree";
    case "page4":
      className = "cardWrapperPageFour";
      break;
    default:
      className = "cardWrapperPageOne";
  }


  return (
    <li className={style[className]} key={ikey} id={id}>
      {children}
    </li>
  );
};

export default CardWrapper;
