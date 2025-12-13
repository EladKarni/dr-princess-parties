# Site Settings - Edit Company Name & Details in Payload CMS

## Overview

You can now edit the "Dr. Princess Parties" company name and other site-wide settings directly in Payload CMS without touching the code.

## Accessing Site Settings

1. Navigate to your Payload CMS admin panel at `/admin`
2. In the sidebar, look for **"Site Settings"** under the **Settings** group
3. Click on **Site Settings** to access all editable site information

## Editable Fields

### Company Information
- **Company Name**: The main company name displayed throughout the site (e.g., "Dr. Princess Parties")
- **Logo Alt Text**: Alternative text for the logo (for accessibility)
- **Company Tagline**: A short tagline or description for your company

### Contact Information
- **Email Address**: Company email address
- **Phone Number**: Company phone number

### Social Media Links
- **Facebook URL**: Link to your Facebook page
- **Instagram URL**: Link to your Instagram profile
- **Twitter URL**: Link to your Twitter profile

## Where Settings Appear

The settings you configure in Payload will automatically update in the following locations:

### 1. Footer
- Company name in the copyright notice
- Logo alt text
- Company tagline/description
- Contact email and phone
- Social media links (only visible if URLs are provided)

### 2. Metadata (SEO)
- Page titles (e.g., "Coming Soon | [Your Company Name]")
- Meta descriptions
- Open Graph tags
- Twitter card information

### 3. Logo Component
- Logo alt text for accessibility

## How It Works

The system uses:
- **Global Config**: `SiteSettings` global in Payload CMS
- **Caching**: Settings are cached for 1 minute to improve performance
- **Fallbacks**: Default values are used if settings haven't been configured yet

## First Time Setup

When you first access Site Settings, you'll see the default values:
- Company Name: "Dr. Princess Parties"
- Logo Alt Text: "Dr. Princess Parties Logo"

Simply update these fields with your desired values and save.

## Developer Notes

### Key Files
- Global Config: [src/globals/SiteSettings.ts](src/globals/SiteSettings.ts)
- Utility Function: [src/util/getSiteSettings.ts](src/util/getSiteSettings.ts)
- Metadata Generator: [src/util/generateMetadata.ts](src/util/generateMetadata.ts)
- Updated Footer: [src/components/footer.tsx](src/components/footer.tsx)
- Updated Layout: [src/app/(main)/layout.tsx](src/app/(main)/layout.tsx)

### Using Settings in Other Components

To use site settings in your own components (server components only):

```typescript
import { getSiteSettings } from "@/util/getSiteSettings";

export default async function MyComponent() {
  const settings = await getSiteSettings();
  
  return (
    <div>
      <h1>{settings.companyName}</h1>
      <p>{settings.tagline}</p>
    </div>
  );
}
```

For client components, you'll need to fetch the settings server-side and pass them as props.
