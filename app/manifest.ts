import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Federal Working Group',
    short_name: 'FWG',
    description: 'Excellence in federal IT solutions, cyber defense, and enterprise transformation since 2004',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0f172a',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
    ],
  }
}
