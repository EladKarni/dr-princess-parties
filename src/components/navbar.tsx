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
  phoneNumber?: string;
}

const NavBar: FC<NavBarProps> = ({ children, phoneNumber = "(555) 123-4567" }) => {
  const { y } = useWindowScroll();
  const isMounted = useMounted();
  const isScrolled = isMounted && y > 50;

  return (
    <header
      className={clsx(
        "py-4 h-[90px] sticky top-0 left-0 w-full z-50 transition-all duration-300 min-w-[290px]",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="h-full flex items-center max-w-[1200px] lg:mx-auto mx-4">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <div className="max-w-[150px] lg:max-w-[180px]">
            <Link href="/" className="block">
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="#about"
              className={clsx(
                "font-medium transition-colors hover:text-princess-gold",
                isScrolled ? "text-princess-dark" : "text-white"
              )}
            >
              About
            </a>
            <a
              href="#services"
              className={clsx(
                "font-medium transition-colors hover:text-princess-gold",
                isScrolled ? "text-princess-dark" : "text-white"
              )}
            >
              Services
            </a>
            <a
              href="#characters"
              className={clsx(
                "font-medium transition-colors hover:text-princess-gold",
                isScrolled ? "text-princess-dark" : "text-white"
              )}
            >
              Characters
            </a>
            <a
              href="#testimonials"
              className={clsx(
                "font-medium transition-colors hover:text-princess-gold",
                isScrolled ? "text-princess-dark" : "text-white"
              )}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className={clsx(
                "font-medium transition-colors hover:text-princess-gold",
                isScrolled ? "text-princess-dark" : "text-white"
              )}
            >
              Contact
            </a>
          </nav>

          {/* Desktop Phone CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${phoneNumber.replace(/\D/g, '')}`}
              className="flex items-center gap-2 px-6 py-3 bg-princess-gold hover:bg-princess-gold-dark text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg"
              aria-label={`Call us at ${phoneNumber}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span className="hidden lg:inline">{phoneNumber}</span>
            </a>
            {children}
          </div>

          {/* Mobile Menu with Phone Icon */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href={`tel:${phoneNumber.replace(/\D/g, '')}`}
              className="p-2 bg-princess-gold hover:bg-princess-gold-dark text-white rounded-full transition-all duration-200"
              aria-label={`Call us at ${phoneNumber}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </a>
            <MobileNavMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
