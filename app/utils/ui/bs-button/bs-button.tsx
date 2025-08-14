"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './bs-button.css';

interface BeautyButtonProps {
  text: string;
  onClick?: () => void;
  link?: string;
  className?: string;
}

const BeautyButton: React.FC<BeautyButtonProps> = ({
  text,
  onClick,
  link,
  className = ''
}) => {
  const [isPressed, setIsPressed] = React.useState(false);

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  if (link) {
    return (
      <Link
        href={link}
        className={`beauty-button ${isPressed ? 'pressed' : ''} ${className}`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => setIsPressed(false)}
      >
        <Image
          src={isPressed ? "/images/bs/beautyServicesStarWhite.svg" : "/images/bs/beautyServicesStar.png"}
          alt="BeautyServicesStar"
          width={32}
          height={32}
        />
        {text}
      </Link>
    );
  }

  return (
    <button
      className={`beauty-button ${isPressed ? 'pressed' : ''} ${className}`}
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => setIsPressed(false)}
    >
      <Image
        src={isPressed ? "/images/bs/beautyServicesStarWhite.svg" : "/images/bs/beautyServicesStar.png"}
        alt="BeautyServicesStar"
        width={32}
        height={32}
      />
      {text}
    </button>
  );
};

export default BeautyButton;
