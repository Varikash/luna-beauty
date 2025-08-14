import React from 'react';
import Image from 'next/image';

interface LogoProps {
  size?: "small" | "medium" | "large";
  color?: "white" | "black" | "black-titled" | "white-titled";
}

const Logo: React.FC<LogoProps> = ({
  size,
  color
}) => {
  const getLogoSrc = () => {
    switch (color) {
      case "black":
        return "/images/logo/logoBlack.svg";
      case "white":
        return "/images/logo/logoWhite.svg";
      case "black-titled":
        return "/images/logo/logoBlackTitled.svg";
      case "white-titled":
        return "/images/logo/logoWhiteTitled.svg";
      default:
        return "/images/logo/logoWhite.svg";
    }
  };

  return (
    <Image
      src={getLogoSrc()}
      alt="logo"
      width={size === "small" ? 80 : (size === "medium" ? 118 : 118)}
      height={size === "small" ? 80 : (size === "medium" ? 118 : 154)}
    />
  );
};

export default Logo;
