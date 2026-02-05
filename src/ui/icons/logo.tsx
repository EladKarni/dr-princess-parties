import Image from "next/image";

type LogoProps = {
  height?: number;
  width?: number;
  "aria-label"?: string;
  className?: string;
  altText?: string;
  variant?: "default" | "white";
};

const Logo = ({
  height = 30,
  width = 90,
  "aria-label": ariaLabel,
  altText,
  className,
  variant = "default",
}: LogoProps) => {
  const finalAltText = altText || "Dr. Princess Parties Logo";
  const finalAriaLabel = ariaLabel || finalAltText;
  const logoSrc = variant === "white" ? "/dr-princess-logos-white.svg" : "/dr-princess-logos.svg";

  return (
    <Image
      src={logoSrc}
      alt={finalAltText}
      width={width}
      height={height}
      className={className}
      aria-label={finalAriaLabel}
      priority
    />
  );
};

export { Logo };
