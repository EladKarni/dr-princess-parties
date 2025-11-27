"use client";

import { FC, useState } from "react";
import SectionContainer from "@/ui/SectionContainer";
import Image from "next/image";

interface Character {
    id?: string;
    name: string;
    description?: string;
    image: {
        url?: string;
        alt?: string;
    } | string;
    category?: string;
    available?: boolean;
}

interface CharactersSectionProps {
    title?: string;
    subtitle?: string;
    characters?: Character[];
}

const defaultCharacters: Character[] = [
    {
        name: "Ice Queen",
        description: "Let it go with our magical ice queen!",
        image: "https://picsum.photos/400/600?random=1",
        category: "princess",
        available: true,
    },
    {
        name: "Glass Slipper Princess",
        description: "A dream is a wish your heart makes",
        image: "https://picsum.photos/400/600?random=2",
        category: "princess",
        available: true,
    },
    {
        name: "Adventure Princess",
        description: "How far I'll go to make your party magical!",
        image: "https://picsum.photos/400/600?random=3",
        category: "princess",
        available: true,
    },
    {
        name: "Mermaid Princess",
        description: "Part of your world of fun!",
        image: "https://picsum.photos/400/600?random=4",
        category: "princess",
        available: true,
    },
    {
        name: "Belle Princess",
        description: "Tale as old as time, magical as can be!",
        image: "https://picsum.photos/400/600?random=5",
        category: "princess",
        available: true,
    },
];

const CharactersSection: FC<CharactersSectionProps> = ({
    title = "Meet Our Characters",
    subtitle = "Magical Friends",
    characters,
}) => {
    const displayCharacters = characters && characters.length > 0 ? characters : defaultCharacters;
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % displayCharacters.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + displayCharacters.length) % displayCharacters.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    // Get visible characters for the carousel (show 3 on desktop, 1 on mobile)
    const getVisibleCharacters = () => {
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
        const visibleCount = isMobile ? 1 : 3;
        const characters = [];

        for (let i = 0; i < visibleCount; i++) {
            const index = (currentIndex + i) % displayCharacters.length;
            characters.push(displayCharacters[index]);
        }

        return characters;
    };

    return (
        <SectionContainer sectionName="characters" background="none" sectionClasses="relative z-10">
            <div className="text-center mb-16">
                <p className="text-princess-gold font-script text-xl md:text-2xl mb-2">
                    {subtitle}
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-princess-dark">
                    {title}
                </h2>
            </div>            {/* Carousel */}
            <div className="relative max-w-6xl mx-auto">
                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 bg-princess-gold hover:bg-princess-gold/90 text-princess-dark rounded-full shadow-xl transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-princess-gold focus:ring-offset-2"
                    aria-label="Previous character"
                >
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 bg-princess-gold hover:bg-princess-gold/90 text-princess-dark rounded-full shadow-xl transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-princess-gold focus:ring-offset-2"
                    aria-label="Next character"
                >
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Character Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                    {getVisibleCharacters().map((character, idx) => {
                        const imageUrl = typeof character.image === 'object' ? character.image?.url : character.image;
                        const imageAlt = typeof character.image === 'object' ? character.image?.alt : character.name;

                        return (
                            <div
                                key={`${character.id || character.name}-${idx}`}
                                className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(255,182,193,0.5)] transition-all duration-300 hover:-translate-y-2 border-4 border-princess-medium/30 hover:border-princess-gold/60"
                            >
                                {/* Character Image */}
                                <div className="relative h-96 md:h-[500px] overflow-hidden">
                                    <Image
                                        src={imageUrl || "https://picsum.photos/400/600"}
                                        alt={imageAlt || character.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                    {/* Character Info */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <h3 className="text-2xl md:text-3xl font-bold mb-2 font-script drop-shadow-lg">
                                            {character.name}
                                        </h3>
                                        {character.description && (
                                            <p className="text-sm md:text-base text-white/90 mb-3">
                                                {character.description}
                                            </p>
                                        )}

                                        {/* Category Badge */}
                                        {character.category && (
                                            <span className="inline-block px-3 py-1 bg-princess-gold/90 backdrop-blur-sm text-princess-dark text-xs font-semibold rounded-full uppercase tracking-wider">
                                                {character.category}
                                            </span>
                                        )}
                                    </div>

                                    {/* Available Badge */}
                                    {character.available !== false && (
                                        <div className="absolute top-4 right-4">
                                            <span className="inline-flex items-center gap-1 px-3 py-1 bg-success/90 backdrop-blur-sm text-success-content text-xs font-semibold rounded-full">
                                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                Available
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center gap-2 mt-8">
                    {displayCharacters.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-princess-gold focus:ring-offset-2 ${index === currentIndex
                                ? 'bg-princess-gold w-8'
                                : 'bg-princess-medium/50 hover:bg-princess-medium'
                                }`}
                            aria-label={`Go to character ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </SectionContainer>
    );
};

export default CharactersSection;
