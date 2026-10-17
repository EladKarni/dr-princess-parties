"use client";
import { FC, ReactNode } from "react";
import clsx from "clsx";
import { useWindowScroll } from "react-use";
import Link from "next/link";
import MobileNavMenu from "./MobileMenu";
import { useMounted } from "@/hooks/useMounter";
import { Logo } from "@/ui/icons/logo";

interface NavBarProps {
  children?: ReactNode;
}

const NavBar: FC<NavBarProps> = ({ children }) => {
  const { y } = useWindowScroll();
  const isMounted = useMounted();
  const isScrolled = isMounted && y > 50;

  return (
    <header
      className={clsx(
        "py-4 h-[90px] sticky top-0 left-0 w-full z-50 transition-all duration-300 min-w-[290px]",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent",
      )}
    >
      <div className="h-full flex items-center max-w-7xl mx-auto">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <div className="max-w-[150px] lg:max-w-[180px]">
            <Link href="/" className="block">
              <Logo variant={isScrolled ? "default" : "white"} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="#about"
              className={clsx(
                "font-medium transition-colors hover:text-princess-gold",
                isScrolled ? "text-princess-dark" : "text-white",
              )}
            >
              About
            </a>
            <a
              href="#services"
              className={clsx(
                "font-medium transition-colors hover:text-princess-gold",
                isScrolled ? "text-princess-dark" : "text-white",
              )}
            >
              Services
            </a>
            <a
              href="#characters"
              className={clsx(
                "font-medium transition-colors hover:text-princess-gold",
                isScrolled ? "text-princess-dark" : "text-white",
              )}
            >
              Characters
            </a>
            <a
              href="#testimonials"
              className={clsx(
                "font-medium transition-colors hover:text-princess-gold",
                isScrolled ? "text-princess-dark" : "text-white",
              )}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className={clsx(
                "font-medium transition-colors hover:text-princess-gold",
                isScrolled ? "text-princess-dark" : "text-white",
              )}
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <MobileNavMenu isScrolled={isScrolled} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
