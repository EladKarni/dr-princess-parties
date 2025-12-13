import { FC } from "react";

interface IconProps {
  className?: string;
}

const PhoneIcon: FC<IconProps> = ({ className = "" }) => {
  return <i className={`fi fi-rr-phone-call ${className}`} />;
};

export default PhoneIcon;
