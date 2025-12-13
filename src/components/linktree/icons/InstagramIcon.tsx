import { FC } from "react";

interface IconProps {
  className?: string;
}

const InstagramIcon: FC<IconProps> = ({ className = "" }) => {
  return <i className={`fi fi-brands-instagram ${className}`} />;
};

export default InstagramIcon;
