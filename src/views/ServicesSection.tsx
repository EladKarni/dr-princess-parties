import { FC } from "react";
import SectionContainer from "@/ui/SectionContainer";
import IconCard from "@/components/IconCard";
import SectionTitle from "@/ui/SectionTitle";
import SectionSubtitle from "@/ui/SectionSubtitle";
import CTAButton from "@/ui/CTAButton";

interface Service {
  id?: string;
  icon?: string;
  title: string;
  description: string;
  link?: {
    text: string;
    href: string;
  };
}

interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
  services?: Service[];
}

// Icon mapping for princess party services
const getServiceIcon = (iconType?: string) => {
  switch (iconType) {
    case 'party':
      return (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'cake':
      return (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
        </svg>
      );
    case 'crown':
      return (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15.5 8.5L22 9.27L17 14.14L18.18 20.77L12 17.5L5.82 20.77L7 14.14L2 9.27L8.5 8.5L12 2Z" />
        </svg>
      );
    case 'wand':
      return (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      );
    case 'balloon':
      return (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 0V3m0 13v3m-1 0h2" />
        </svg>
      );
    case 'gift':
      return (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      );
    case 'music':
      return (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      );
    case 'photo':
      return (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    default:
      return (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      );
  }
};

const defaultServices: Service[] = [
  {
    title: "Character Appearances",
    description: "Professional performers bring your favorite characters to life with authentic costumes and engaging personalities.",
    icon: "crown",
  },
  {
    title: "Birthday Parties",
    description: "Make your child's birthday unforgettable with a magical character visit, games, and photo opportunities.",
    icon: "cake",
  },
  {
    title: "Special Events",
    description: "Perfect for school events, community gatherings, corporate events, and celebrations of all kinds.",
    icon: "party",
  },
  {
    title: "Interactive Activities",
    description: "Engaging activities including storytelling, singing, dancing, and character-themed games.",
    icon: "wand",
  },
  {
    title: "Photo Sessions",
    description: "Capture magical memories with professional photo opportunities with your favorite characters.",
    icon: "photo",
  },
  {
    title: "Party Packages",
    description: "Customizable party packages to fit your needs and budget, from basic visits to deluxe experiences.",
    icon: "gift",
  },
];

const ServicesSection: FC<ServicesSectionProps> = ({
  title = "Our Services",
  subtitle = "What We Offer",
  services,
}) => {
  const displayServices = services && services.length > 0 ? services : defaultServices;

  return (
    <SectionContainer sectionName="services" background="none" sectionClasses="relative z-10">
      <div className="text-center mb-16">
        <div role="group" aria-labelledby="services-title">
          <SectionSubtitle id="services-subtitle">{subtitle}</SectionSubtitle>
          <SectionTitle id="services-title" ariaDescribedby="services-subtitle">{title}</SectionTitle>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayServices.map((service, index) => (
          <div key={service.id || index} className={`scroll-reveal scroll-reveal-stagger-${(index % 3) + 1}`}>
            <IconCard
              icon={getServiceIcon(service.icon)}
              title={service.title}
              description={service.description}
              link={service.link}
              variant="glass"
            />
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <CTAButton
          href="#contact"
          size="lg"
          variant="primary"
          className="bg-princess-gold hover:bg-princess-gold-dark text-white border-none shadow-lg hover:shadow-xl transition-all"
        >
          Check Availability
        </CTAButton>
      </div>
    </SectionContainer>
  );
};

export default ServicesSection;
