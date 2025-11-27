import { FC } from "react";

interface IconProps {
  className?: string;
}

const CrownIcon: FC<IconProps> = ({ className = "" }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-1.5a3 3 0 0 0-3 3v.375c0 .621-.504 1.125-1.125 1.125c-.621 0-1.125-.504-1.125-1.125V6.75a3 3 0 0 0-3-3H7.5ZM3.75 8.625v10.5c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V8.625H3.75ZM12 11.625a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5a.75.75 0 0 1 .75-.75Zm3.75 2.25a.75.75 0 0 0-1.5 0v2.25a.75.75 0 0 0 1.5 0v-2.25ZM7.5 14.625a.75.75 0 0 1 1.5 0v2.25a.75.75 0 0 1-1.5 0v-2.25Z"/>
    </svg>
  );
};

export default CrownIcon;
