import type { Metadata } from 'next'

import config from '@payload-config'
import { RootLayout } from '@payloadcms/next/layouts'
import { importMap } from './admin/importMap.js'

import '@payloadcms/next/css'
import 'server-only'

type Args = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Payload Admin',
  description: 'Payload CMS Admin Panel',
}

const serverFunction = async (args: any) => {
  'use server'
  const { getPayload } = await import('payload')
  const payload = await getPayload({ config: await config })

  // Handle server function calls from Payload admin
  if (typeof args === 'object' && args !== null) {
    // Return empty response for now - Payload will handle internally
    return {}
  }

  return {}
}

const Layout = ({ children }: Args) => (
  <RootLayout config={config} importMap={importMap} serverFunction={serverFunction}>
    {children}
  </RootLayout>
)

export default Layout
