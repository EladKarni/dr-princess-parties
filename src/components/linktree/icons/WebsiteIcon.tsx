import { FC } from "react";

interface IconProps {
  className?: string;
}

const WebsiteIcon: FC<IconProps> = ({ className = "" }) => {
  return <i className={`fi fi-rr-globe ${className}`} />;
};

export default WebsiteIcon;
