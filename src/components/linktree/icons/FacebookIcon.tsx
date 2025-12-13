import { FC } from "react";

interface IconProps {
  className?: string;
}

const FacebookIcon: FC<IconProps> = ({ className = "" }) => {
  return <i className={`fi fi-brands-facebook ${className}`} />;
};

export default FacebookIcon;
