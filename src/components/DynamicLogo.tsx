import { Logo } from "@/ui/icons/logo";
import { getSiteSettings } from "@/util/getSiteSettings";

type DynamicLogoProps = {
    height?: number;
    width?: number;
    className?: string;
};

export async function DynamicLogo({
    height,
    width,
    className
}: DynamicLogoProps) {
    const settings = await getSiteSettings();

    return (
        <Logo
            height={height}
            width={width}
            className={className}
            altText={settings.logoAltText}
            aria-label={settings.logoAltText}
        />
    );
}
