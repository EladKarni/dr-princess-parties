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

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative w-full",
        "flex flex-col md:flex-row",
        "overflow-hidden rounded-2xl",
        "bg-white/95 backdrop-blur-sm",
        "border-2 border-princess-gold/40",
        "shadow-xl hover:shadow-2xl",
        "transition-all duration-300 ease-out",
        "hover:scale-[1.02] hover:border-princess-gold",
        "hover:shadow-princess-gold/30",
        "animate-fade-in-up",
        delayClass
      )}
    >
      {/* Badge */}
      {badge && (
        <span className="absolute top-3 right-3 z-10 px-3 py-1 text-xs font-bold bg-princess-gold text-white rounded-full shadow-md animate-bounce-slow">
          {badge}
        </span>
      )}

      {/* Image Section */}
      {thumbnailUrl && (
        <div className="relative w-full md:w-32 h-32 md:h-auto flex-shrink-0">
          <Image
            src={thumbnailUrl}
            alt={label}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 128px"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-princess-gold/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        </div>
      )}

      {/* Content Section */}
      <div className="flex-1 p-5 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-1">
          <IconComponent className="w-6 h-6 text-princess-gold transition-transform group-hover:scale-110" />
          <h3 className="font-script text-2xl md:text-3xl text-princess-dark group-hover:text-princess-gold transition-colors">
            {label}
          </h3>
        </div>

        {description && (
          <p className="text-sm md:text-base text-princess-dark/70 leading-relaxed ml-9">
            {description}
          </p>
        )}
      </div>

      {/* Hover shimmer effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-princess-gold/10 to-transparent animate-shimmer" />
      </div>
    </Link>
  );
};

export default FeaturedButton;
