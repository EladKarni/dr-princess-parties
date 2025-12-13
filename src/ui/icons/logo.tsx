import Image from "next/image";

type LogoProps = {
  height?: number;
  width?: number;
  "aria-label"?: string;
  className?: string;
  altText?: string;
};

const Logo = ({
  height = 30,
  width = 90,
  "aria-label": ariaLabel,
  altText,
  className,
}: LogoProps) => {
  const finalAltText = altText || "Dr. Princess Parties Logo";
  const finalAriaLabel = ariaLabel || finalAltText;

  return (
    <Image
      src="/dr-princess-logos.svg"
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
