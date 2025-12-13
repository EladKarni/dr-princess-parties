import type { Metadata } from 'next'

import config from '@payload-config'
import { RootLayout, handleServerFunctions } from '@payloadcms/next/layouts'
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

  try {
    return await handleServerFunctions({
      ...(args || {}),
      config: await config,
    })
  } catch (error) {
    console.error('Server function error:', error)
    throw error
  }
}

const Layout = ({ children }: Args) => (
  <RootLayout config={config} importMap={importMap} serverFunction={serverFunction}>
    {children}
  </RootLayout>
)

export default Layout
