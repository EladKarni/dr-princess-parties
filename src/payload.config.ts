import { buildConfig } from "payload";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

// Import collections
import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Projects } from "./collections/Projects";
import { Services } from "./collections/Services";
import { Testimonials } from "./collections/Testimonials";
import { Characters } from "./collections/Characters";

// Import globals
import { HeroSection } from "./globals/HeroSection";
import { AboutSection } from "./globals/AboutSection";
import { ProjectsSection } from "./globals/ProjectsSection";
// import { TeamSection } from "./globals/TeamSection";
// import { NeighborhoodSection } from "./globals/NeighborhoodSection";
import { ContactSection } from "./globals/ContactSection";
import { ComingSoonSection } from "./globals/ComingSoonSection";
// import { TeamPage } from "./globals/TeamPage";
// import { NeighborhoodPage } from "./globals/NeighborhoodPage";
import { LinktreeProfile } from "./globals/LinktreeProfile";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: "users",
    importMap: {
      baseDir: path.resolve(dirname),
    },
    disable: false,
  },
  collections: [Users, Media, Projects, Services, Testimonials, Characters],
  globals: [
    ComingSoonSection,
    HeroSection,
    AboutSection,
    ProjectsSection,
    // TeamSection,
    // NeighborhoodSection,
    ContactSection,
    // TeamPage,
    // NeighborhoodPage,
    LinktreeProfile,
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "../payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_MONGODB_URI || "",
  }),
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000",
  routes: {
    api: "/api",
  },
  sharp,
});
