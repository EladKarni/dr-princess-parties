import { FC } from "react";

interface IconProps {
  className?: string;
}

const LinkIcon: FC<IconProps> = ({ className = "" }) => {
  return <i className={`fi fi-rr-link ${className}`} />;
};

export default LinkIcon;
