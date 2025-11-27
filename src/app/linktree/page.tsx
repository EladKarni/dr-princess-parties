import { Metadata } from "next";
import { getPayload } from "payload";
import config from "@payload-config";
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

export const revalidate = 60; // Revalidate every 60 seconds

export default async function LinktreePage() {
  const payload = await getPayload({ config });

  let profileData;

  try {
    profileData = await payload.findGlobal({
      slug: 'linktree-profile',
    });
  } catch (error) {
    console.error("Error fetching linktree profile:", error);
    // Return fallback UI
    return (
      <main className="min-h-screen bg-gradient-to-br from-princess-light via-princess-medium to-princess-light flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="font-script text-4xl md:text-5xl text-princess-dark mb-4">
            Alexis Hester
          </h1>
          <p className="text-princess-dark/70">
            Profile data is being loaded. Please check back soon.
          </p>
        </div>
      </main>
    );
  }

  const { displayName, avatar, bio, subtitle, links, theme } = profileData;

  // Filter enabled links
  const activeLinks = links?.filter((link: any) => link.enabled) || [];

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background */}
      {(theme?.enableSparkles !== false) && <SparklesBackground />}
      {(theme?.enableSparkles === false) && (
        <div className="fixed inset-0 bg-gradient-to-br from-princess-light via-princess-medium to-princess-light" />
      )}

      {/* Content */}
      <LinktreeContainer>
        <ProfileHeader
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
            Dr. Princess Parties
          </p>
        </div>
      </LinktreeContainer>
    </main>
  );
}
