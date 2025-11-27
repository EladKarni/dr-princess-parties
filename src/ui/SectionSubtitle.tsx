import { cn } from "@/util/utils";
import { ReactNode } from "react";

interface SectionSubtitleProps {
    children: ReactNode;
    className?: string;
}

const SectionSubtitle = ({
    children,
    className
}: SectionSubtitleProps) => {
    return (
        <p
            className={cn(
                "text-princess-gold font-script text-2xl md:text-3xl mb-2 drop-shadow-lg",
                className
            )}
            style={{
                textShadow: '0.5px 0.5px 0 rgba(255,255,255,0.8), -0.5px -0.5px 0 rgba(255,255,255,0.8), 0.5px -0.5px 0 rgba(255,255,255,0.8), -0.5px 0.5px 0 rgba(255,255,255,0.8)'
            }}
        >
            {children}
        </p>
    );
};

export default SectionSubtitle;
