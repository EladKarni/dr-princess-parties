import { Metadata } from "next";
import { getPayload } from "payload";
import config from "@payload-config";
import { draftMode } from "next/headers";
import { RefreshRouteOnSave } from "@/components/RefreshRouteOnSave";
import SparklesBackground from "@/components/linktree/SparklesBackground";
import LinktreeContainer from "@/components/linktree/LinktreeContainer";
import ProfileHeader from "@/components/linktree/ProfileHeader";
import LinktreeButton from "@/components/linktree/LinktreeButton";
import FeaturedButton from "@/components/linktree/FeaturedButton";

export const metadata: Metadata = {
  title: "Alexis Hester | Dr. Princess Parties",
  description: "Connect with Alexis Hester - Dr. Princess Parties",
  openGraph: {
    title: "Alexis Hester | Dr. Princess Parties",
    description: "Connect with Alexis Hester - Dr. Princess Parties",
    type: "profile",
  },
};

export const revalidate = 0; // Disable cache for draft mode

export default async function LinktreePage({
  searchParams,
}: {
  searchParams: Promise<{ draft?: string }>;
}) {
  const payload = await getPayload({ config });
  const params = await searchParams;
  const { isEnabled: isDraftMode } = await draftMode();
  const isDraft = isDraftMode || params.draft === 'true';

  let profileData;

  try {
    profileData = await payload.findGlobal({
      slug: 'linktree-profile',
      draft: isDraft,
    });
  } catch (error) {
    console.error("Error fetching linktree profile:", error);
    // Return fallback UI
    return (
      <main className="min-h-screen bg-gradient-to-br from-princess-light via-princess-medium to-princess-light flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="font-script text-4xl md:text-5xl text-princess-dark mb-4">
            Dr. Princess Parties
          </h1>
          <p className="text-princess-dark/70">
            Profile data is being loaded. Please check back soon.
          </p>
        </div>
      </main>
    );
  }

  const { heading, displayName, avatar, bio, subtitle, links, theme } = profileData;

  // Filter enabled links and ensure all required fields are filled
  const activeLinks = links?.filter((link: any) => {
    // Must be enabled
    if (!link.enabled) return false;

    // Must have both required fields (label and url)
    const hasLabel = link.label && link.label.trim().length > 0;
    const hasUrl = link.url && link.url.trim().length > 0;

    return hasLabel && hasUrl;
  }) || [];

  return (
    <main className="relative min-h-screen overflow-hidden">
      <RefreshRouteOnSave />
      {/* Background */}
      {(theme?.enableSparkles !== false) && <SparklesBackground />}
      {(theme?.enableSparkles === false) && (
        <div className="fixed inset-0 bg-gradient-to-br from-princess-light via-princess-medium to-princess-light" />
      )}

      {/* Content */}
      <LinktreeContainer>
        <ProfileHeader
          heading={heading || "Dr. Princess Parties"}
          displayName={displayName}
          avatar={avatar}
          bio={bio}
          subtitle={subtitle}
          showCrown={theme?.enableCrown}
        />

        {/* Links */}
        <div className="space-y-4 mt-8">
          {activeLinks.map((link: any, index: number) =>
            link.isFeatured ? (
              <FeaturedButton
                key={link.id || index}
                label={link.label}
                url={link.url}
                description={link.description}
                thumbnail={link.thumbnail}
                icon={link.icon}
                badge={link.badge}
                index={index}
              />
            ) : (
              <LinktreeButton
                key={link.id || index}
                label={link.label}
                url={link.url}
                icon={link.icon}
                variant={link.variant || "secondary"}
                badge={link.badge}
                index={index}
              />
            )
          )}
        </div>

        {/* Footer */}
        <div className="text-center pt-8 opacity-70">
          <p className="text-sm text-princess-dark/60">
            Alexis Hester
          </p>
        </div>
      </LinktreeContainer>
    </main>
  );
}
