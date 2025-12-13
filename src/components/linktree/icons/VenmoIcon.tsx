import { FC } from "react";

interface IconProps {
  className?: string;
}

const VenmoIcon: FC<IconProps> = ({ className = "" }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.83 4.5c.54.93.83 2.04.83 3.42 0 4.25-3.62 9.69-6.61 13.82H7.5L4.5 3h6.02l1.46 11.29c1.39-2.19 3.22-5.65 3.22-8.31 0-1.05-.16-1.81-.43-2.48L19.83 4.5z"/>
    </svg>
  );
};

export default VenmoIcon;
