import { FC } from "react";
import SectionContainer from "@/ui/SectionContainer";
import Image from "next/image";
import SectionTitle from "@/ui/SectionTitle";
import SectionSubtitle from "@/ui/SectionSubtitle";

interface Testimonial {
  id?: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: {
    url?: string;
    alt?: string;
  } | string;
  rating?: number;
}

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    quote: "Dr. Princess Parties made my daughter's 5th birthday absolutely magical! Elsa was perfect - she sang, danced, and made every child feel special. Worth every penny!",
    author: "Sarah Johnson",
    role: "Parent",
    company: "Birthday Party Client",
    rating: 5,
  },
  {
    quote: "We hired Dr. Princess Parties for our school's spring festival and they were phenomenal! Professional, punctual, and the kids couldn't stop talking about meeting their favorite characters.",
    author: "Michael Chen",
    role: "Event Coordinator",
    company: "Sunset Elementary School",
    rating: 5,
  },
  {
    quote: "The best entertainment investment we've made! Our princess character kept 20 kids engaged and happy for the entire party. The photos are priceless memories.",
    author: "Emily Rodriguez",
    role: "Parent",
    company: "Birthday Party Client",
    rating: 5,
  },
];

const ServicesSection: FC<TestimonialsSectionProps> = ({
  title = "What Families Say",
  subtitle = "Testimonials",
  testimonials,
}) => {
  const displayTestimonials = testimonials && testimonials.length > 0 ? testimonials : defaultTestimonials;

  return (
    <SectionContainer sectionName="testimonials" background="none" sectionClasses="relative z-10">
      <div className="text-center mb-16">
        <SectionSubtitle>{subtitle}</SectionSubtitle>
        <SectionTitle>{title}</SectionTitle>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayTestimonials.map((testimonial, index) => {
          const avatarUrl = typeof testimonial.avatar === 'object' ? testimonial.avatar?.url : testimonial.avatar;

          return (
            <article
              key={testimonial.id || index}
              className="bg-white/80 backdrop-blur-sm border-2 border-princess-medium/30 rounded-2xl p-8 hover:shadow-2xl hover:border-princess-gold/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <svg
                className="w-10 h-10 text-princess-gold/40 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Quote */}
              <p className="text-princess-dark/80 text-lg leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Rating */}
              {testimonial.rating && (
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating! ? 'text-princess-gold' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              )}

              {/* Author Info */}
              <div className="flex items-center gap-4">
                {avatarUrl ? (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-princess-gold/50">
                    <Image
                      src={avatarUrl}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-princess-gold/20 border-2 border-princess-gold/50 flex items-center justify-center">
                    <span className="text-princess-gold font-bold text-lg">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                )}

                <div>
                  <div className="font-semibold text-princess-dark">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-princess-dark/60">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </SectionContainer>
  );
};

export default ServicesSection;
