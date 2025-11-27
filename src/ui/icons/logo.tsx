import Image from "next/image";

type LogoProps = {
  height?: number;
  width?: number;
  "aria-label"?: string;
  className?: string;
};

const Logo = ({
  height = 30,
  width = 90,
  "aria-label": ariaLabel = "Dr. Princess Parties Logo",
  className,
}: LogoProps) => (
  <Image
    src="/dr-princess-logos.svg"
    alt={ariaLabel}
    width={width}
    height={height}
    className={className}
    priority
  />
);
export { Logo };
