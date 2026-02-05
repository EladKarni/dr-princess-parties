import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: '**.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: '**.public.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: 'drprincessparties.com',
      },
      {
        protocol: 'https',
        hostname: 'www.drprincessparties.com',
      },
    ],
    dangerouslyAllowSVG: true,
    unoptimized: false,
  },
}

export default withPayload(nextConfig, {
  configPath: './src/payload.config.ts',
})
