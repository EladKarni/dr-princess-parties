import { cn } from "@/util/utils";
import { ReactNode } from "react";

interface SectionTitleProps {
    children: ReactNode;
    className?: string;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    id?: string;
    ariaDescribedby?: string;
}

const SectionTitle = ({
    children,
    className,
    as: Component = "h2",
    id,
    ariaDescribedby
}: SectionTitleProps) => {
    return (
        <Component
            id={id}
            aria-describedby={ariaDescribedby}
            className={cn(
                "text-3xl md:text-4xl lg:text-5xl font-bold text-princess-dark text-shadow-md",
                className
            )}
        >
            {children}
        </Component>
    );
};

export default SectionTitle;
