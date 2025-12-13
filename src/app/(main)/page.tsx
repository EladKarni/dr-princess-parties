import { getPayload } from "payload";
import config from "@payload-config";
import ComingSoon from "@/components/ComingSoon";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function HomePage() {
    const payload = await getPayload({ config });

    let comingSoonData;

    try {
        comingSoonData = await payload.findGlobal({
            slug: 'coming-soon-section',
        });
    } catch (error) {
        console.error("Error fetching coming soon data:", error);
        // Return fallback UI with default content
        return <ComingSoon />;
    }

    return (
        <ComingSoon
            title={comingSoonData.title}
            subtitle={comingSoonData.subtitle}
            description={comingSoonData.description}
        />
    );
}
