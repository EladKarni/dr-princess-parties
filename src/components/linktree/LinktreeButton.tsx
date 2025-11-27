import { FC } from "react";
import Link from "next/link";
import { cn } from "@/util/utils";
import {
  LinkIcon,
  WebsiteIcon,
  InstagramIcon,
  FacebookIcon,
  VenmoIcon,
  EmailIcon,
  PhoneIcon,
  CrownIcon,
} from "./icons";

interface LinktreeButtonProps {
  label: string;
  url: string;
  icon?: string;
  index?: number;
}

const iconMap: Record<string, FC<{ className?: string }>> = {
  link: LinkIcon,
  website: WebsiteIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  venmo: VenmoIcon,
  email: EmailIcon,
  phone: PhoneIcon,
  crown: CrownIcon,
};

const LinktreeButton: FC<LinktreeButtonProps> = ({
  label,
  url,
  icon = "link",
  index = 0,
}) => {
  const IconComponent = iconMap[icon] || LinkIcon;

  // Cap animation delay at 800ms
  const delayClass = `animation-delay-${Math.min(index * 200, 800)}`;

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative w-full",
        "flex items-center justify-center gap-3",
        "px-8 py-4 rounded-full",
        "bg-white/90 backdrop-blur-sm",
        "border-2 border-princess-gold/30",
        "shadow-lg hover:shadow-xl",
        "transition-all duration-300 ease-out",
        "hover:scale-105 hover:bg-white",
        "hover:border-princess-gold",
        "hover:shadow-princess-gold/20",
        "animate-fade-in-up",
        delayClass
      )}
    >
      {/* Icon */}
      <IconComponent className="w-5 h-5 text-princess-dark transition-colors group-hover:text-princess-gold" />

      {/* Label */}
      <span className="text-base md:text-lg font-medium text-princess-dark">
        {label}
      </span>

      {/* Hover shimmer effect */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-princess-gold/10 to-transparent animate-shimmer" />
      </div>
    </Link>
  );
};

export default LinktreeButton;
