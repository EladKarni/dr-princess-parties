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
  variant?: "primary" | "secondary" | "outline" | "soft";
  badge?: string;
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
  variant = "secondary",
  badge,
}) => {
  const IconComponent = iconMap[icon] || LinkIcon;

  // Cap animation delay at 800ms
  const delayClass = `animation-delay-${Math.min(index * 200, 800)}`;

  // Check if URL is valid
  const hasValidUrl = url && url.trim().length > 0;

  // Define variant styles
  const variantStyles = {
    primary: cn(
      "bg-gradient-to-r from-princess-gold to-princess-medium",
      "border-2 border-transparent",
      "shadow-xl hover:shadow-2xl",
      "hover:scale-110 hover:from-princess-gold/90 hover:to-princess-medium/90",
      "hover:shadow-princess-gold/40"
    ),
    secondary: cn(
      "bg-white/90 backdrop-blur-sm",
      "border-2 border-princess-gold/30",
      "shadow-lg hover:shadow-xl",
      "hover:scale-105 hover:bg-white",
      "hover:border-princess-gold",
      "hover:shadow-princess-gold/20"
    ),
    outline: cn(
      "bg-transparent backdrop-blur-sm",
      "border-3 border-princess-gold/60",
      "shadow-md hover:shadow-lg",
      "hover:scale-105 hover:bg-princess-gold/10",
      "hover:border-princess-gold",
      "hover:shadow-princess-gold/30"
    ),
    soft: cn(
      "bg-princess-light/60 backdrop-blur-sm",
      "border-2 border-princess-light",
      "shadow-md hover:shadow-lg",
      "hover:scale-105 hover:bg-princess-light/80",
      "hover:border-princess-medium/50",
      "hover:shadow-princess-medium/20"
    ),
  };

  // Define text styles based on variant
  const textStyles = {
    primary: "text-white group-hover:text-white",
    secondary: "text-princess-dark group-hover:text-princess-gold",
    outline: "text-princess-dark group-hover:text-princess-gold",
    soft: "text-princess-dark group-hover:text-princess-dark",
  };

  // Define icon styles based on variant
  const iconStyles = {
    primary: "text-white group-hover:text-white",
    secondary: "text-princess-dark group-hover:text-princess-gold",
    outline: "text-princess-gold group-hover:text-princess-gold",
    soft: "text-princess-dark group-hover:text-princess-medium",
  };

  const sharedClassName = cn(
    "group relative w-full",
    "flex items-center justify-center gap-3",
    "px-8 py-4 rounded-full",
    "transition-all duration-300 ease-out",
    "animate-fade-in-up",
    delayClass,
    variantStyles[variant],
    !hasValidUrl && "opacity-60 cursor-not-allowed"
  );

  const content = (
    <>
      {/* Badge */}
      {badge && (
        <span className="absolute -top-2 -right-2 px-3 py-1 text-xs font-bold bg-princess-gold text-white rounded-full shadow-md animate-bounce-slow">
          {badge}
        </span>
      )}

      {/* Icon */}
      <IconComponent className={cn("w-5 h-5 transition-colors", iconStyles[variant])} />

      {/* Label */}
      <span className={cn("text-base md:text-lg font-medium", textStyles[variant])}>
        {label}
      </span>

      {/* Hover shimmer effect */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
      </div>
    </>
  );

  if (!hasValidUrl) {
    return (
      <div className={sharedClassName}>
        {content}
      </div>
    );
  }

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={sharedClassName}
    >
      {content}
    </Link>
  );
};

export default LinktreeButton;
