import { FC } from "react";
import Image from "next/image";
import { cn } from "@/util/utils";
import { CrownIcon } from "./icons";

interface Media {
  url?: string;
  alt?: string;
}

interface ProfileHeaderProps {
  heading: string;
  displayName: string;
  avatar?: Media | string | null;
  bio?: string;
  showCrown?: boolean;
  subtitle?: string;
}

const ProfileHeader: FC<ProfileHeaderProps> = ({
  heading,
  displayName,
  avatar,
  bio,
  showCrown = true,
  subtitle,
}) => {
  const avatarUrl = typeof avatar === 'object' && avatar?.url ? avatar.url : null;

  return (
    <div className="flex flex-col items-center text-center space-y-4 animate-fade-in">
      {/* Logo */}
      <div className="mb-2 animate-fade-in">
        <Image
          src="/dr-princess-logos.svg"
          alt="Dr. Princess Parties"
          width={180}
          height={60}
          priority
          className="drop-shadow-lg"
        />
      </div>

      {/* Avatar */}
      {avatarUrl && (
        <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-princess-gold/50 shadow-xl animate-pulse-slow">
          <Image
            src={avatarUrl}
            alt={displayName}
            fill
            className="object-cover"
            sizes="144px"
            priority
          />
          {/* Avatar glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-princess-gold/20 to-transparent animate-pulse" />
        </div>
      )}

      {/* Name */}
      <div className="flex flex-col items-center gap-1">
        <h1 className="font-script text-4xl md:text-5xl lg:text-6xl text-princess-dark drop-shadow-[0_2px_4px_rgba(255,215,0,0.3)] hover:drop-shadow-[0_4px_8px_rgba(255,215,0,0.5)] transition-all">
          {heading}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-sm md:text-base font-medium text-princess-gold uppercase tracking-wider animate-fade-in animation-delay-200">
            {subtitle}
          </p>
        )}
      </div>

      {/* Bio */}
      {bio && (
        <p className="text-base md:text-lg text-princess-dark/80 max-w-md px-4 leading-relaxed animate-fade-in animation-delay-200">
          {bio}
        </p>
      )}
    </div>
  );
};

export default ProfileHeader;
