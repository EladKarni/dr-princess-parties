import { getPayload } from "payload";
import config from "@payload-config";
import { draftMode } from "next/headers";
import { RefreshRouteOnSave } from "@/components/RefreshRouteOnSave";
import Hero from "@/components/Hero";
import AboutSection from "@/views/AboutSection";
import ServicesSection from "@/views/ServicesSection";
import CharactersSection from "@/views/CharactersSection";
import TestimonialsSection from "@/views/TestimonialsSection";
import ContactSection from "@/views/ContactSection";
import SparklesBackground from "@/components/linktree/SparklesBackground";
import { getMediaUrl } from "@/util/getMediaUrl";

export const revalidate = 0; // Disable cache
export const dynamic = 'force-dynamic'; // Force dynamic rendering

export default async function HomePage({
    searchParams,
}: {
    searchParams: Promise<{ draft?: string }>;
}) {
    const payload = await getPayload({ config });
    const params = await searchParams;
    const { isEnabled: isDraftMode } = await draftMode();
    const isDraft = isDraftMode || params.draft === 'true';

    // Fetch all globals and collections in parallel for better performance
    let heroData, aboutData, contactData, testimonialsData, testimonialsSectionData, servicesData, charactersData;

    try {
        const results = await Promise.all([
            // Globals
            payload.findGlobal({
                slug: 'hero-section',
                draft: isDraft,
            }),
            payload.findGlobal({
                slug: 'about-section',
                draft: isDraft,
            }),
            payload.findGlobal({
                slug: 'contact-section',
                draft: isDraft,
            }),
            payload.findGlobal({
                slug: 'testimonials-section',
                draft: isDraft,
            }),
            // Collections
            payload.find({
                collection: 'services',
                sort: 'order',
                limit: 100,
            }),
            payload.find({
                collection: 'characters',
                where: {
                    featured: {
                        equals: true,
                    },
                },
                sort: 'order',
                limit: 20,
            }),
            payload.find({
                collection: 'testimonials',
                where: {
                    featured: {
                        equals: true,
                    },
                },
                sort: 'order',
                limit: 6,
            }),
        ]);

        [heroData, aboutData, contactData, testimonialsSectionData] = results.slice(0, 4);
        servicesData = results[4].docs;
        charactersData = results[5].docs;
        testimonialsData = results[6].docs;
    } catch (error) {
        console.error("Error fetching homepage data:", error);
        // Return fallback UI with error message
        return (
            <main className="min-h-screen bg-gradient-to-br from-princess-light via-white to-princess-medium flex items-center justify-center">
                <RefreshRouteOnSave />
                <div className="text-center px-4">
                    <h1 className="font-script text-4xl md:text-5xl text-princess-dark mb-4">
                        Dr. Princess Parties
                    </h1>
                    <p className="text-princess-dark/70">
                        Content is being loaded. Please check back soon.
                    </p>
                </div>
            </main>
        );
    }

    // Extract and process Hero data
    const heroBackgroundUrl = getMediaUrl((heroData as any).backgroundImage);
    const heroPrimaryCTA = (heroData as any).primaryCTA?.text && (heroData as any).primaryCTA?.href
        ? { text: (heroData as any).primaryCTA.text, href: (heroData as any).primaryCTA.href }
        : undefined;
    const heroSecondaryCTA = (heroData as any).secondaryCTA?.text && (heroData as any).secondaryCTA?.href
        ? { text: (heroData as any).secondaryCTA.text, href: (heroData as any).secondaryCTA.href }
        : undefined;

    // Extract and process About data
    const aboutImageUrl = getMediaUrl((aboutData as any).image);
    const aboutCTA = (aboutData as any).cta?.text && (aboutData as any).cta?.href
        ? { text: (aboutData as any).cta.text, href: (aboutData as any).cta.href }
        : undefined;

    return (
        <>
            <RefreshRouteOnSave />
            <main className="relative">
                {/* Sparkles Background */}
                <SparklesBackground />

                {/* Hero Section */}
                <Hero
                    className="relative z-10"
                    title={(heroData as any).title}
                    subtitle={(heroData as any).subtitle}
                    description={(heroData as any).description}
                    backgroundImage={heroBackgroundUrl || undefined}
                    overlay={(heroData as any).overlay}
                    overlayOpacity={(heroData as any).overlayOpacity}
                    primaryCTA={heroPrimaryCTA}
                    secondaryCTA={heroSecondaryCTA}
                />

                {/* About Section */}
                <AboutSection
                    title={(aboutData as any).title}
                    subtitle={(aboutData as any).subtitle}
                    description={(aboutData as any).description}
                    image={aboutImageUrl || undefined}
                    imageAlt={(aboutData as any).imageAlt}
                    imagePosition={(aboutData as any).imagePosition}
                    stats={(aboutData as any).stats}
                    cta={aboutCTA}
                />

                {/* Services Section */}
                <ServicesSection services={servicesData as any} />

                {/* Characters Section */}
                <CharactersSection characters={charactersData as any} />

                {/* Testimonials Section */}
                <TestimonialsSection
                    title={(testimonialsSectionData as any).title}
                    subtitle={(testimonialsSectionData as any).subtitle}
                    testimonials={testimonialsData as any}
                />

                {/* Contact Section */}
                <ContactSection
                    title={(contactData as any).title}
                    subtitle="Contact Us"
                    nameLabel={(contactData as any).nameLabel}
                    namePlaceholder={(contactData as any).namePlaceholder}
                    emailLabel={(contactData as any).emailLabel}
                    emailPlaceholder={(contactData as any).emailPlaceholder}
                    messageLabel={(contactData as any).messageLabel}
                    messagePlaceholder={(contactData as any).messagePlaceholder}
                    submitButtonText={(contactData as any).submitButtonText}
                />
            </main>
        </>
    );
}
