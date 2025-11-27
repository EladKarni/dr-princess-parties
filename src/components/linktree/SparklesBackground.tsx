"use client";

import { FC, useState, useEffect } from "react";

interface Sparkle {
  left: string;
  top: string;
  width: string;
  height: string;
  animationDelay: string;
  animationDuration: string;
}

const SparklesBackground: FC = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    // Generate sparkles only on client to avoid hydration mismatch
    setSparkles(
      Array.from({ length: 50 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${6 + Math.random() * 12}px`,
        height: `${6 + Math.random() * 12}px`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${2 + Math.random() * 2}s`,
      }))
    );
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-princess-light via-princess-medium to-princess-light" />

      {/* Sparkles Container */}
      <div className="absolute inset-0">
        {sparkles.map((sparkle, i) => (
          <div
            key={i}
            className="absolute animate-sparkle"
            style={sparkle}
          >
            <svg viewBox="0 0 24 24" className="w-full h-full fill-princess-gold">
              <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SparklesBackground;
