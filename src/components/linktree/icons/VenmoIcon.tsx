import { FC } from "react";

interface IconProps {
  className?: string;
}

const VenmoIcon: FC<IconProps> = ({ className = "" }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.75 2.5c.44.73.64 1.48.64 2.4 0 3.01-2.59 6.92-4.69 9.84h-4.2L4.53 2.5h4.27l1.04 8.05c.99-1.56 2.29-4.03 2.29-5.93 0-.75-.11-1.29-.31-1.76l2.93-.36zM19.47 2.5v19h-3.95v-19h3.95z"/>
    </svg>
  );
};

export default VenmoIcon;
