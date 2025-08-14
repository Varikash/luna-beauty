"use client"
import React from 'react';
import Image from 'next/image';
import './dt-button.css';

interface DreamTeamButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const DreamTeamButton: React.FC<DreamTeamButtonProps> = ({
  text,
  onClick,
  className = ''
}) => {
  const [isPressed, setIsPressed] = React.useState(false);

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  return (
    <button
      className={`dream-team-button ${isPressed ? 'pressed' : ''} ${className}`}
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => setIsPressed(false)}
    >
      <Image
        src={isPressed ? "/images/bs/beautyServicesStar.png" : "/images/bs/beautyServicesStarWhite.svg"}
        alt="BeautyServicesStar"
        width={32}
        height={32}
      />
      {text}
    </button>
  );
};

export default DreamTeamButton;
