import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
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

interface Media {
  url?: string;
  alt?: string;
}

interface FeaturedButtonProps {
  label: string;
  url: string;
  description?: string;
  thumbnail?: Media | string | null;
  icon?: string;
  index?: number;
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

const FeaturedButton: FC<FeaturedButtonProps> = ({
  label,
  url,
  description,
  thumbnail,
  icon = "link",
  index = 0,
  badge,
}) => {
  const IconComponent = iconMap[icon] || LinkIcon;
  const thumbnailUrl = typeof thumbnail === 'object' && thumbnail?.url ? thumbnail.url : null;

  // Cap animation delay at 800ms
  const delayClass = `animation-delay-${Math.min(index * 200, 800)}`;

  // Check if URL is valid
  const hasValidUrl = url && url.trim().length > 0;

  const sharedClassName = cn(
    "group relative w-full",
    "flex flex-col",
    "overflow-hidden rounded-3xl",
    "bg-white/95 backdrop-blur-sm",
    "border-2 border-princess-gold/40",
    "shadow-xl hover:shadow-2xl",
    "transition-all duration-300 ease-out",
    "hover:scale-[1.02] hover:border-princess-gold",
    "hover:shadow-princess-gold/30",
    "animate-fade-in-up",
    "min-h-[280px]",
    delayClass,
    !hasValidUrl && "opacity-60 cursor-not-allowed"
  );

  const content = (
    <>
      {/* Badge */}
      {badge && (
        <span className="absolute top-4 left-4 z-10 px-4 py-1.5 text-sm font-bold bg-princess-gold text-white rounded-full shadow-lg animate-bounce-slow">
          {badge}
        </span>
      )}

      {/* Image Section */}
      {thumbnailUrl && (
        <div className="relative w-full h-48 flex-shrink-0">
          <Image
            src={thumbnailUrl}
            alt={label}
            fill
            className="object-cover"
            sizes="100vw"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-princess-gold/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        </div>
      )}

      {/* Content Section */}
      <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
        <div className="flex flex-col items-center gap-2 mb-2">
          <IconComponent className="w-8 h-8 text-princess-gold transition-transform group-hover:scale-110" />
          <h3 className="font-script text-3xl md:text-4xl text-princess-dark group-hover:text-princess-gold transition-colors">
            {label}
          </h3>
        </div>

        {description && (
          <p className="text-base md:text-lg text-princess-dark/70 leading-relaxed max-w-md">
            {description}
          </p>
        )}
      </div>

      {/* Hover shimmer effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-princess-gold/10 to-transparent animate-shimmer" />
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

export default FeaturedButton;
