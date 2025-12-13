import SparklesBackground from "./linktree/SparklesBackground";
import { Logo } from "@/ui/icons/logo";

type ComingSoonProps = {
    title?: string;
    subtitle?: string;
    description?: string;
};

export default function ComingSoon({
    title = "Coming Soon",
    subtitle = "Something Magical is on the Way",
    description = "We're preparing an enchanting experience just for you. Stay tuned for the grand reveal!"
}: ComingSoonProps) {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-princess-light via-white to-princess-medium">
            {/* Sparkles Background */}
            <SparklesBackground />

            {/* Content */}
            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12">
                <div className="flex flex-col items-center text-center space-y-8 max-w-2xl mx-auto">
                    {/* Logo */}
                    <div className="animate-fade-in">
                        <Logo width={180} height={60} />
                    </div>

                    {/* Main Title */}
                    <h1 className="font-script text-6xl md:text-8xl text-princess-gold drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] animate-fade-in-up animation-delay-200">
                        {title}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-2xl md:text-3xl text-princess-dark font-medium animate-fade-in-up animation-delay-400">
                        {subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-princess-dark/80 max-w-xl animate-fade-in-up animation-delay-600">
                        {description}
                    </p>

                    {/* Decorative Element */}
                    <div className="flex gap-2 animate-fade-in-up animation-delay-800">
                        <span className="text-princess-gold text-3xl animate-bounce-slow">✨</span>
                        <span className="text-princess-gold text-3xl animate-bounce-slow" style={{ animationDelay: '0.5s' }}>👑</span>
                        <span className="text-princess-gold text-3xl animate-bounce-slow">✨</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
