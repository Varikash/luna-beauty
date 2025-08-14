"use client"
import React from 'react';
import Image from 'next/image';
import './make-an-appointment.css';

interface BeautyButtonProps {
  className?: string;
}

const AppointmentButton: React.FC<BeautyButtonProps> = ({
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
    <a
      href="https://example.com/booking"
      target="_blank"
      rel="noopener noreferrer"
      className={`appointment-button  ${isPressed ? 'appointment-pressed' : ''} ${className}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      >
      <Image
        src="/images/ui/arrow.svg"
        alt="BeautyServicesStar"
        width={25}
        height={26}
        className="appointment-arrow"
      />
      <p className="appointment-text">
        MAKE AN APPOINTMENT
      </p>
    </a>
  );
};

export default AppointmentButton;
