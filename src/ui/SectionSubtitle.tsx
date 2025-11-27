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
                "text-princess-gold font-script text-xl md:text-2xl mb-2",
                className
            )}
        >
            {children}
        </p>
    );
};

export default SectionSubtitle;
