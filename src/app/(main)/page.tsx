import { getPayload } from "payload";
import config from "@payload-config";
import Hero from "@/components/Hero";
import AboutSection from "@/views/AboutSection";
import ServicesSection from "@/views/ServicesSection";
import CharactersSection from "@/views/CharactersSection";
import TestimonialsSection from "@/views/TestimonialsSection";
import ContactSection from "@/views/ContactSection";
import SparklesBackground from "@/components/linktree/SparklesBackground";

export default async function Home() {
  const payload = await getPayload({ config });

  // Fetch hero section data
  let heroData;
  try {
    heroData = await payload.findGlobal({
      slug: 'hero-section',
    });
  } catch (error) {
    console.error("Error fetching hero section:", error);
  }

  // Fetch about section data
  let aboutData;
  try {
    aboutData = await payload.findGlobal({
      slug: 'about-section',
    });
  } catch (error) {
    console.error("Error fetching about section:", error);
  }

  // Fetch services data
  let servicesData;
  try {
    const result = await payload.find({
      collection: 'services',
      sort: 'order',
      limit: 100,
    });
    servicesData = result.docs;
  } catch (error) {
    console.error("Error fetching services:", error);
  }

  // Fetch characters data
  let charactersData;
  try {
    const result = await payload.find({
      collection: 'characters',
      where: {
        featured: {
          equals: true,
        },
      },
      sort: 'order',
      limit: 20,
    });
    charactersData = result.docs;
  } catch (error) {
    console.error("Error fetching characters:", error);
  }

  // Fetch testimonials data
  let testimonialsData;
  try {
    const result = await payload.find({
      collection: 'testimonials',
      where: {
        featured: {
          equals: true,
        },
      },
      sort: 'order',
      limit: 6,
    });
    testimonialsData = result.docs;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
  }

  // Fetch contact section data
  let contactData;
  try {
    contactData = await payload.findGlobal({
      slug: 'contact-section',
    });
  } catch (error) {
    console.error("Error fetching contact section:", error);
  }

  // Get background image URL if exists
  const backgroundImageUrl = heroData?.backgroundImage && typeof heroData.backgroundImage === 'object'
    ? heroData.backgroundImage.url
    : undefined;

  const aboutImageUrl = aboutData?.image && typeof aboutData.image === 'object'
    ? aboutData.image.url
    : undefined;

  return (
    <main className="relative min-h-screen">
      {/* Sparkles Background */}
      <SparklesBackground />

      {/* Hero Section */}
      <Hero
        className="relative z-10"
        title={heroData?.title || "Making Dreams Come True"}
        subtitle={heroData?.subtitle || "Dr. Princess Parties"}
        description={heroData?.description || "Bringing magical princess character experiences to your special events"}
        primaryCTA={heroData?.primaryCTA}
        secondaryCTA={heroData?.secondaryCTA}
        backgroundImage={backgroundImageUrl}
        overlay={heroData?.overlay ?? true}
        overlayOpacity={heroData?.overlayOpacity ?? 40}
      />

      {/* About Section */}
      <AboutSection
        title={aboutData?.title || "About Dr. Princess Parties"}
        subtitle={aboutData?.subtitle}
        description={aboutData?.description || "We bring the magic of beloved characters to life at your special events!"}
        image={aboutImageUrl}
        imageAlt={aboutData?.imageAlt}
        stats={aboutData?.stats}
        cta={aboutData?.cta}
        imagePosition={aboutData?.imagePosition as "left" | "right"}
      />

      {/* Services Section */}
      <ServicesSection services={servicesData} />

      {/* Characters Section */}
      <CharactersSection characters={charactersData} />

      {/* Testimonials Section */}
      <TestimonialsSection testimonials={testimonialsData} />

      {/* Contact Section */}
      <ContactSection
        title={contactData?.title}
      />
    </main>
  );
}