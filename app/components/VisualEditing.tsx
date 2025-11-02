'use client'

import { VisualEditing as SanityVisualEditing } from '@sanity/visual-editing/next-pages-router'
import { useLiveMode } from '@sanity/react-loader'
import { client } from '@/lib/sanity.client'

export function VisualEditing() {
  useLiveMode({ client })
  return <SanityVisualEditing />
}
