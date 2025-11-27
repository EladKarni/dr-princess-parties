import { FC } from "react";
import Image from "next/image";
import { cn } from "@/util/utils";
import { CrownIcon } from "./icons";

interface Media {
  url?: string;
  alt?: string;
}

interface ProfileHeaderProps {
  displayName: string;
  avatar?: Media | string | null;
  bio?: string;
  showCrown?: boolean;
}

const ProfileHeader: FC<ProfileHeaderProps> = ({
  displayName,
  avatar,
  bio,
  showCrown = true,
}) => {
  const avatarUrl = typeof avatar === 'object' && avatar?.url ? avatar.url : null;

  return (
    <div className="flex flex-col items-center text-center space-y-4 animate-fade-in">
      {/* Avatar */}
      {avatarUrl && (
        <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <Image
            src={avatarUrl}
            alt={displayName}
            fill
            className="object-cover"
            sizes="128px"
            priority
          />
        </div>
      )}

      {/* Name with Crown */}
      <div className="flex items-center gap-2">
        {showCrown && (
          <CrownIcon className="w-6 h-6 md:w-7 md:h-7 text-princess-gold animate-bounce-slow" />
        )}
        <h1 className="font-script text-4xl md:text-5xl lg:text-6xl text-princess-dark">
          {displayName}
        </h1>
        {showCrown && (
          <CrownIcon className="w-6 h-6 md:w-7 md:h-7 text-princess-gold animate-bounce-slow animation-delay-200" />
        )}
      </div>

      {/* Bio */}
      {bio && (
        <p className="text-base md:text-lg text-princess-dark/80 max-w-md px-4 animate-fade-in animation-delay-200">
          {bio}
        </p>
      )}
    </div>
  );
};

export default ProfileHeader;
