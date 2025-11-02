import { createClient } from 'next-sanity'

// Client for draft mode - fetches both published and draft content
export const draftClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 's8by8xgm',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // Never use CDN for draft content
  token: process.env.SANITY_API_TOKEN,
  perspective: 'previewDrafts', // Fetch draft content
})
