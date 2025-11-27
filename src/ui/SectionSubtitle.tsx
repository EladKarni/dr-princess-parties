import { cn } from "@/util/utils";
import { ReactNode } from "react";

interface SectionSubtitleProps {
    children: ReactNode;
    className?: string;
    id?: string;
    ariaLabel?: string;
}

const SectionSubtitle = ({
    children,
    className,
    id,
    ariaLabel
}: SectionSubtitleProps) => {
    // Enhanced text-shadow for WCAG AA compliance
    // Combines dark outline for contrast with white highlight for visual appeal
    const enhancedTextShadow = `
        0 0 8px rgba(45, 45, 45, 0.9),
        0 0 4px rgba(45, 45, 45, 0.9),
        1px 1px 2px rgba(45, 45, 45, 0.9),
        -1px -1px 2px rgba(45, 45, 45, 0.9),
        1px -1px 2px rgba(45, 45, 45, 0.9),
        -1px 1px 2px rgba(45, 45, 45, 0.9),
        0.5px 0.5px 0 rgba(255,255,255,0.8),
        -0.5px -0.5px 0 rgba(255,255,255,0.8),
        0.5px -0.5px 0 rgba(255,255,255,0.8),
        -0.5px 0.5px 0 rgba(255,255,255,0.8)
    `.trim().replace(/\s+/g, ' ');

    return (
        <p
            id={id}
            aria-label={ariaLabel}
            className={cn(
                "text-princess-gold font-script text-2xl md:text-3xl mb-2 drop-shadow-lg",
                className
            )}
            style={{
                textShadow: enhancedTextShadow
            }}
        >
            {children}
        </p>
    );
};

export default SectionSubtitle;
