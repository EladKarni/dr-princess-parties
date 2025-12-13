import { getPayload } from "payload";
import config from "@payload-config";
import ComingSoon from "@/components/ComingSoon";
import { draftMode } from "next/headers";
import { RefreshRouteOnSave } from "@/components/RefreshRouteOnSave";

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

    let comingSoonData;

    try {
        comingSoonData = await payload.findGlobal({
            slug: 'coming-soon-section',
            draft: isDraft,
        });
    } catch (error) {
        console.error("Error fetching coming soon data:", error);
        // Return fallback UI with default content
        return <ComingSoon />;
    }

    return (
        <>
            <RefreshRouteOnSave />
            <ComingSoon
                title={comingSoonData.title}
                subtitle={comingSoonData.subtitle}
                description={comingSoonData.description}
            />
        </>
    );
}
