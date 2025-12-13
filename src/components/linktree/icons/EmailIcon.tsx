import { FC } from "react";

interface IconProps {
  className?: string;
}

const EmailIcon: FC<IconProps> = ({ className = "" }) => {
  return <i className={`fi fi-rr-envelope ${className}`} />;
};

export default EmailIcon;
