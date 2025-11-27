import { cn } from "@/util/utils";
import { ReactNode } from "react";

interface SectionTitleProps {
    children: ReactNode;
    className?: string;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const SectionTitle = ({
    children,
    className,
    as: Component = "h2"
}: SectionTitleProps) => {
    return (
        <Component
            className={cn(
                "text-3xl md:text-4xl lg:text-5xl font-bold text-princess-dark",
                className
            )}
        >
            {children}
        </Component>
    );
};

export default SectionTitle;
