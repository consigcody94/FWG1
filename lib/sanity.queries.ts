import { client } from './sanity.client'
import { groq } from 'next-sanity'

// Fetch a single page by slug
export async function getPage(slug: string) {
  return client.fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      title,
      description,
      "slug": slug.current,
      blocks[]{
        _type,
        _key,
        // Hero block
        _type == "hero" => {
          title,
          subtitle,
          buttonText,
          buttonLink,
          "backgroundImage": backgroundImage.asset->url,
          backgroundColor,
          textColor,
          alignment
        },
        // Stats block
        _type == "stats" => {
          items[]{
            value,
            label
          }
        },
        // Services block
        _type == "services" => {
          heading,
          services[]{
            title,
            description,
            "icon": icon.asset->url
          }
        },
        // Testimonials block
        _type == "testimonials" => {
          heading,
          testimonials[]{
            quote,
            author,
            role,
            "avatar": avatar.asset->url
          }
        },
        // Content block
        _type == "content" => {
          body,
          backgroundColor,
          textColor,
          maxWidth
        },
        // Team block
        _type == "team" => {
          heading,
          members[]{
            name,
            role,
            bio,
            "photo": photo.asset->url,
            email
          }
        },
        // CTA block
        _type == "cta" => {
          heading,
          text,
          buttonText,
          buttonLink,
          backgroundColor,
          textColor,
          buttonStyle,
          alignment
        }
      }
    }`,
    { slug }
  )
}

// Fetch all page slugs for static generation
export async function getAllPageSlugs() {
  const allSlugs = await client.fetch(
    groq`*[_type == "page" && defined(slug.current)][].slug.current`
  )

  // Exclude patterns for empty/unwanted pages
  const excludePatterns = [
    /^contracts$/,  // Remove contracts main page
    /^contracts\//,  // Remove all contract vehicle pages
    /^about\/caring-in-the-community$/,  // Empty page
    /^about\/success-stories$/,  // Now on homepage
    /^about\/why-fwg$/,  // Empty page
    /^services\//,  // All services subdirectories are empty
    /^careers\//,  // All careers subdirectories are empty
  ]

  return allSlugs.filter((slug: string) => {
    return !excludePatterns.some(pattern => pattern.test(slug))
  })
}

// Fetch navigation
export async function getNavigation() {
  return client.fetch(
    groq`*[_type == "navigation"][0]{
      items[]{
        label,
        href,
        subItems[]{
          label,
          href
        }
      }
    }`
  )
}

// Fetch site settings
export async function getSettings() {
  return client.fetch(
    groq`*[_type == "settings"][0]{
      siteName,
      siteUrl,
      "logo": logo.asset->url,
      tagline,
      social
    }`
  )
}

// Fetch contact info
export async function getContact() {
  return client.fetch(
    groq`*[_type == "contact"][0]{
      phone,
      email,
      address,
      hours
    }`
  )
}

// Fetch all published jobs
export async function getJobs() {
  return client.fetch(
    groq`*[_type == "job" && published == true] | order(_createdAt desc){
      _id,
      title,
      "slug": slug.current,
      location,
      department,
      type,
      salary
    }`
  )
}

// Fetch a single job by slug
export async function getJob(slug: string) {
  return client.fetch(
    groq`*[_type == "job" && slug.current == $slug][0]{
      _id,
      title,
      "slug": slug.current,
      location,
      department,
      type,
      body,
      requirements,
      salary,
      published
    }`,
    { slug }
  )
}
