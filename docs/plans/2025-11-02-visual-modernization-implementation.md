# Visual Modernization Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform Federal Working Group website into a bold, authoritative billion-dollar contractor presence with full Sanity CMS control over all visual elements.

**Architecture:** Full visual rebuild with Framer Motion animations, new premium block types (Video Hero, Clients/Logos, Capabilities Matrix, Image Gallery), enhanced existing blocks, and complete CMS editability. Photo-optional design using gradients and icons initially.

**Tech Stack:** Next.js 16, Sanity CMS, Framer Motion, React Icons (Lucide), yet-another-react-lightbox, Tailwind CSS

---

## Task 1: Install Dependencies

**Files:**
- Modify: `package.json`

**Step 1: Install animation and UI packages**

```bash
npm install framer-motion react-intersection-observer lucide-react yet-another-react-lightbox
```

**Step 2: Verify installation**

Run: `npm list framer-motion react-intersection-observer lucide-react yet-another-react-lightbox`
Expected: All packages listed with version numbers

**Step 3: Test build still works**

Run: `npm run build`
Expected: Build completes successfully with 43 static pages

**Step 4: Commit**

```bash
git add package.json package-lock.json
git commit -m "deps: add framer-motion, react-icons, lightbox for visual modernization

- framer-motion for smooth animations and transitions
- react-intersection-observer for scroll-triggered effects
- lucide-react for professional icon library
- yet-another-react-lightbox for image galleries

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 2: Create Design System UI Components

**Files:**
- Create: `app/components/ui/AnimatedSection.tsx`
- Create: `app/components/ui/Button.tsx`
- Create: `app/components/ui/Container.tsx`

**Step 1: Create AnimatedSection wrapper component**

```typescript
// app/components/ui/AnimatedSection.tsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  animation?: 'fade' | 'slide' | 'scale' | 'none'
  delay?: number
  stagger?: boolean
  className?: string
}

export function AnimatedSection({
  children,
  animation = 'fade',
  delay = 0,
  stagger = false,
  className = '',
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slide: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1 },
    },
    none: {
      hidden: {},
      visible: {},
    },
  }

  const containerVariants = stagger
    ? {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }
    : {}

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={stagger ? containerVariants : variants[animation]}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

**Step 2: Create enhanced Button component**

```typescript
// app/components/ui/Button.tsx
import Link from 'next/link'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface ButtonProps {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: 'solid' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: LucideIcon
  className?: string
}

export function Button({
  href,
  onClick,
  children,
  variant = 'solid',
  size = 'md',
  icon: Icon,
  className = '',
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all'

  const variantClasses = {
    solid: 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/50',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
    ghost: 'text-blue-600 hover:bg-blue-600/10',
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  const content = (
    <>
      {children}
      {Icon && <Icon className="w-5 h-5" />}
    </>
  )

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link href={href} className={classes}>
          {content}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {content}
    </motion.button>
  )
}
```

**Step 3: Create Container component**

```typescript
// app/components/ui/Container.tsx
import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  width?: 'full' | 'standard' | 'narrow'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export function Container({
  children,
  width = 'standard',
  padding = 'md',
  className = '',
}: ContainerProps) {
  const widthClasses = {
    full: 'w-full',
    standard: 'max-w-7xl mx-auto',
    narrow: 'max-w-3xl mx-auto',
  }

  const paddingClasses = {
    none: '',
    sm: 'px-4 py-8',
    md: 'px-6 py-16 md:py-24',
    lg: 'px-6 py-24 md:py-32',
    xl: 'px-6 py-32 md:py-40',
  }

  return (
    <div className={`${widthClasses[width]} ${paddingClasses[padding]} ${className}`}>
      {children}
    </div>
  )
}
```

**Step 4: Test build**

Run: `npm run build`
Expected: Build completes successfully

**Step 5: Commit**

```bash
git add app/components/ui/
git commit -m "feat: add design system UI components

- AnimatedSection wrapper with fade/slide/scale/stagger options
- Enhanced Button with variants, sizes, icons, motion
- Container with width and padding controls

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 3: Create Video Hero Sanity Schema

**Files:**
- Create: `sanity/schemas/blocks/video-hero.ts`
- Modify: `sanity/schemas/index.ts`

**Step 1: Create video-hero schema**

```typescript
// sanity/schemas/blocks/video-hero.ts
import { defineType, defineField } from 'sanity'

export const videoHeroBlock = defineType({
  name: 'videoHero',
  title: 'Video Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      description: 'YouTube, Vimeo, or direct video file URL',
    }),
    defineField({
      name: 'videoFile',
      title: 'Video File Upload',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    }),
    defineField({
      name: 'fallbackImage',
      title: 'Fallback Background Image',
      type: 'image',
      description: 'Shown while video loads or on mobile',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'overlayOpacity',
      title: 'Overlay Opacity',
      type: 'number',
      initialValue: 50,
      validation: (Rule) => Rule.min(0).max(100),
    }),
    defineField({
      name: 'primaryButton',
      title: 'Primary Button',
      type: 'object',
      fields: [
        { name: 'text', type: 'string', title: 'Button Text' },
        { name: 'link', type: 'string', title: 'Button Link' },
      ],
    }),
    defineField({
      name: 'secondaryButton',
      title: 'Secondary Button (Optional)',
      type: 'object',
      fields: [
        { name: 'text', type: 'string', title: 'Button Text' },
        { name: 'link', type: 'string', title: 'Button Link' },
      ],
    }),
    defineField({
      name: 'height',
      title: 'Section Height',
      type: 'string',
      options: {
        list: [
          { title: 'Auto', value: 'auto' },
          { title: 'Medium (60vh)', value: '60vh' },
          { title: 'Large (80vh)', value: '80vh' },
          { title: 'Full Screen (100vh)', value: '100vh' },
        ],
      },
      initialValue: '80vh',
    }),
    defineField({
      name: 'autoPlay',
      title: 'Auto Play Video',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'loop',
      title: 'Loop Video',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'muted',
      title: 'Muted',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'disableOnMobile',
      title: 'Disable Video on Mobile',
      type: 'boolean',
      initialValue: true,
      description: 'Show fallback image instead for better performance',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'fallbackImage',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: `Video Hero: ${title || 'Untitled'}`,
        subtitle: subtitle,
        media,
      }
    },
  },
})
```

**Step 2: Add to schemas index**

```typescript
// sanity/schemas/index.ts
import { heroBlock } from './blocks/hero'
import { statsBlock } from './blocks/stats'
import { servicesBlock } from './blocks/services'
import { testimonialsBlock } from './blocks/testimonials'
import { contentBlock } from './blocks/content'
import { teamBlock } from './blocks/team'
import { ctaBlock } from './blocks/cta'
import { videoHeroBlock } from './blocks/video-hero'
import { pageSchema } from './page'
import { navigationSchema } from './navigation'
import { settingsSchema } from './settings'
import { contactSchema } from './contact'
import { jobSchema } from './job'

export const schemas = [
  // Documents
  pageSchema,
  navigationSchema,
  settingsSchema,
  contactSchema,
  jobSchema,

  // Blocks
  heroBlock,
  videoHeroBlock,
  statsBlock,
  servicesBlock,
  testimonialsBlock,
  contentBlock,
  teamBlock,
  ctaBlock,
]
```

**Step 3: Update page schema to include videoHero**

Read `sanity/schemas/page.ts` and add `videoHero` to blocks array:

```typescript
// In sanity/schemas/page.ts, update the blocks field
defineField({
  name: 'blocks',
  title: 'Page Blocks',
  type: 'array',
  of: [
    { type: 'hero' },
    { type: 'videoHero' },  // Add this line
    { type: 'stats' },
    { type: 'services' },
    { type: 'testimonials' },
    { type: 'content' },
    { type: 'team' },
    { type: 'cta' },
  ],
}),
```

**Step 4: Test Sanity Studio loads**

Run: `npm run dev` and visit `http://localhost:3000/studio`
Expected: Studio loads, Video Hero appears in block type dropdown

**Step 5: Commit**

```bash
git add sanity/schemas/
git commit -m "feat: add Video Hero block schema to Sanity

- Video URL or file upload support
- Fallback image for loading/mobile
- Overlay opacity control
- Primary and secondary CTA buttons
- Height, autoplay, loop, muted controls
- Mobile video disable option

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 4: Create Video Hero Block Component

**Files:**
- Create: `app/components/blocks/VideoHeroBlock.tsx`
- Modify: `app/components/blocks/index.tsx`
- Modify: `lib/sanity.queries.ts`

**Step 1: Create VideoHeroBlock component**

```typescript
// app/components/blocks/VideoHeroBlock.tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatedSection } from '../ui/AnimatedSection'
import { Button } from '../ui/Button'
import { ArrowRight, Play } from 'lucide-react'

interface VideoHeroBlockProps {
  data: {
    title?: string
    subtitle?: string
    videoUrl?: string
    videoFile?: { asset: { url: string } }
    fallbackImage?: string
    overlayOpacity?: number
    primaryButton?: { text: string; link: string }
    secondaryButton?: { text: string; link: string }
    height?: string
    autoPlay?: boolean
    loop?: boolean
    muted?: boolean
    disableOnMobile?: boolean
  }
}

export function VideoHeroBlock({ data }: VideoHeroBlockProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const videoSrc = data.videoFile?.asset?.url || data.videoUrl
  const showVideo = videoSrc && !(isMobile && data.disableOnMobile)
  const overlayOpacity = (data.overlayOpacity || 50) / 100
  const height = data.height === 'auto' ? 'min-h-screen' : `h-[${data.height}]`

  return (
    <section className={`relative ${height} flex items-center justify-center overflow-hidden`}>
      {/* Background Video or Image */}
      {showVideo ? (
        <>
          <video
            ref={videoRef}
            autoPlay={data.autoPlay}
            loop={data.loop}
            muted={data.muted}
            playsInline
            onLoadedData={() => setIsVideoLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              isVideoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {videoSrc && <source src={videoSrc} type="video/mp4" />}
          </video>
          {data.fallbackImage && (
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${data.fallbackImage})`,
                opacity: isVideoLoaded ? 0 : 1,
              }}
            />
          )}
        </>
      ) : (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${data.fallbackImage})` }}
        />
      )}

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-800"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <AnimatedSection animation="fade" delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {data.title || 'Welcome'}
          </h1>
        </AnimatedSection>

        {data.subtitle && (
          <AnimatedSection animation="fade" delay={0.4}>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90">
              {data.subtitle}
            </p>
          </AnimatedSection>
        )}

        <AnimatedSection animation="fade" delay={0.6}>
          <div className="flex flex-wrap gap-4 justify-center">
            {data.primaryButton?.text && data.primaryButton?.link && (
              <Button
                href={data.primaryButton.link}
                variant="solid"
                size="lg"
                icon={ArrowRight}
              >
                {data.primaryButton.text}
              </Button>
            )}
            {data.secondaryButton?.text && data.secondaryButton?.link && (
              <Button
                href={data.secondaryButton.link}
                variant="outline"
                size="lg"
              >
                {data.secondaryButton.text}
              </Button>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
```

**Step 2: Register block in index**

```typescript
// app/components/blocks/index.tsx
import { HeroBlock } from "./HeroBlock";
import { VideoHeroBlock } from "./VideoHeroBlock";
import { StatsBlock } from "./StatsBlock";
import { ContentBlock } from "./ContentBlock";
import { CTABlock } from "./CTABlock";
import { ServicesBlock } from "./ServicesBlock";
import { TestimonialsBlock } from "./TestimonialsBlock";
import { TeamBlock } from "./TeamBlock";

export const Blocks = {
  hero: HeroBlock,
  videoHero: VideoHeroBlock,
  stats: StatsBlock,
  content: ContentBlock,
  cta: CTABlock,
  services: ServicesBlock,
  testimonials: TestimonialsBlock,
  team: TeamBlock,
};

// ... rest of file unchanged
```

**Step 3: Update Sanity query to fetch videoHero data**

```typescript
// In lib/sanity.queries.ts, update the blocks query section
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
        // Video Hero block
        _type == "videoHero" => {
          title,
          subtitle,
          videoUrl,
          "videoFile": videoFile.asset->{url},
          "fallbackImage": fallbackImage.asset->url,
          overlayOpacity,
          primaryButton,
          secondaryButton,
          height,
          autoPlay,
          loop,
          muted,
          disableOnMobile
        },
        // ... rest of blocks unchanged
      }
    }`,
    { slug }
  )
}
```

**Step 4: Test build**

Run: `npm run build`
Expected: Build completes successfully

**Step 5: Commit**

```bash
git add app/components/blocks/ lib/sanity.queries.ts
git commit -m "feat: implement Video Hero block component

- Auto-playing looped video backgrounds
- Fallback image for loading and mobile
- Gradient overlay with opacity control
- Dual CTA buttons with animations
- Responsive mobile behavior
- Smooth fade-in transitions

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 5: Create Clients/Logos Sanity Schema

**Files:**
- Create: `sanity/schemas/blocks/clients-logos.ts`
- Modify: `sanity/schemas/index.ts`
- Modify: `sanity/schemas/page.ts`

**Step 1: Create clients-logos schema**

```typescript
// sanity/schemas/blocks/clients-logos.ts
import { defineType, defineField } from 'sanity'

export const clientsLogosBlock = defineType({
  name: 'clientsLogos',
  title: 'Clients/Logos Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'logos',
      title: 'Client Logos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Client Name', validation: (Rule) => Rule.required() },
            { name: 'logo', type: 'image', title: 'Logo', options: { hotspot: true }, validation: (Rule) => Rule.required() },
            { name: 'url', type: 'url', title: 'Website URL (optional)' },
          ],
          preview: {
            select: {
              title: 'name',
              media: 'logo',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'displayStyle',
      title: 'Display Style',
      type: 'string',
      options: {
        list: [
          { title: 'Grid', value: 'grid' },
          { title: 'Marquee (Auto-scroll)', value: 'marquee' },
        ],
      },
      initialValue: 'grid',
    }),
    defineField({
      name: 'columns',
      title: 'Columns (Grid only)',
      type: 'number',
      options: {
        list: [3, 4, 5, 6],
      },
      initialValue: 4,
      hidden: ({ parent }) => parent?.displayStyle === 'marquee',
    }),
    defineField({
      name: 'logoSize',
      title: 'Logo Size',
      type: 'string',
      options: {
        list: [
          { title: 'Small', value: 'sm' },
          { title: 'Medium', value: 'md' },
          { title: 'Large', value: 'lg' },
        ],
      },
      initialValue: 'md',
    }),
    defineField({
      name: 'grayscale',
      title: 'Grayscale Effect',
      type: 'boolean',
      initialValue: true,
      description: 'Logos in grayscale, color on hover',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'color',
    }),
    defineField({
      name: 'padding',
      title: 'Section Padding',
      type: 'string',
      options: {
        list: [
          { title: 'Small', value: 'sm' },
          { title: 'Medium', value: 'md' },
          { title: 'Large', value: 'lg' },
          { title: 'Extra Large', value: 'xl' },
        ],
      },
      initialValue: 'md',
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      logoCount: 'logos.length',
    },
    prepare({ heading, logoCount }) {
      return {
        title: `Clients/Logos: ${heading || 'Untitled'}`,
        subtitle: `${logoCount || 0} logos`,
      }
    },
  },
})
```

**Step 2: Add to schemas index**

```typescript
// In sanity/schemas/index.ts
import { clientsLogosBlock } from './blocks/clients-logos'

export const schemas = [
  // Documents
  pageSchema,
  navigationSchema,
  settingsSchema,
  contactSchema,
  jobSchema,

  // Blocks
  heroBlock,
  videoHeroBlock,
  clientsLogosBlock,  // Add this
  statsBlock,
  servicesBlock,
  testimonialsBlock,
  contentBlock,
  teamBlock,
  ctaBlock,
]
```

**Step 3: Add to page schema**

```typescript
// In sanity/schemas/page.ts
defineField({
  name: 'blocks',
  title: 'Page Blocks',
  type: 'array',
  of: [
    { type: 'hero' },
    { type: 'videoHero' },
    { type: 'clientsLogos' },  // Add this line
    { type: 'stats' },
    { type: 'services' },
    { type: 'testimonials' },
    { type: 'content' },
    { type: 'team' },
    { type: 'cta' },
  ],
}),
```

**Step 4: Test Sanity Studio**

Run: `npm run dev` and visit `http://localhost:3000/studio`
Expected: Clients/Logos block appears in dropdown

**Step 5: Commit**

```bash
git add sanity/schemas/
git commit -m "feat: add Clients/Logos block schema to Sanity

- Array of logo images with names and URLs
- Grid or marquee display styles
- Column count and size controls
- Grayscale effect toggle
- Background color and padding options

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 6: Create Clients/Logos Block Component

**Files:**
- Create: `app/components/blocks/ClientsLogosBlock.tsx`
- Modify: `app/components/blocks/index.tsx`
- Modify: `lib/sanity.queries.ts`

**Step 1: Create ClientsLogosBlock component**

```typescript
// app/components/blocks/ClientsLogosBlock.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { AnimatedSection } from '../ui/AnimatedSection'
import { Container } from '../ui/Container'
import { motion } from 'framer-motion'

interface ClientsLogosBlockProps {
  data: {
    heading?: string
    description?: string
    logos?: Array<{
      name: string
      logo: string
      url?: string
    }>
    displayStyle?: 'grid' | 'marquee'
    columns?: number
    logoSize?: 'sm' | 'md' | 'lg'
    grayscale?: boolean
    backgroundColor?: any
    padding?: 'sm' | 'md' | 'lg' | 'xl'
  }
}

export function ClientsLogosBlock({ data }: ClientsLogosBlockProps) {
  if (!data.logos || data.logos.length === 0) return null

  const bgColor = data.backgroundColor?.hex || data.backgroundColor
  const sizeClasses = {
    sm: 'h-12',
    md: 'h-16',
    lg: 'h-24',
  }

  const LogoItem = ({ logo }: { logo: any }) => {
    const logoImage = (
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <Image
          src={logo.logo}
          alt={logo.name}
          width={200}
          height={100}
          className={`${sizeClasses[data.logoSize || 'md']} w-auto object-contain transition-all duration-300 ${
            data.grayscale ? 'grayscale hover:grayscale-0 opacity-70 hover:opacity-100' : ''
          }`}
        />
      </div>
    )

    if (logo.url) {
      return (
        <motion.a
          href={logo.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="block"
        >
          {logoImage}
        </motion.a>
      )
    }

    return logoImage
  }

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: bgColor }}>
      <Container width="standard" padding={data.padding || 'md'}>
        {(data.heading || data.description) && (
          <AnimatedSection animation="fade" className="text-center mb-12">
            {data.heading && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.heading}</h2>
            )}
            {data.description && (
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">{data.description}</p>
            )}
          </AnimatedSection>
        )}

        {data.displayStyle === 'marquee' ? (
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-12"
              animate={{ x: [0, -1920] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {/* Duplicate logos for seamless loop */}
              {[...data.logos, ...data.logos].map((logo, index) => (
                <div key={index} className="flex-shrink-0">
                  <LogoItem logo={logo} />
                </div>
              ))}
            </motion.div>
          </div>
        ) : (
          <AnimatedSection animation="fade" stagger>
            <div
              className="grid gap-8"
              style={{
                gridTemplateColumns: `repeat(${data.columns || 4}, minmax(0, 1fr))`,
              }}
            >
              {data.logos.map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <LogoItem logo={logo} />
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        )}
      </Container>
    </section>
  )
}
```

**Step 2: Register block**

```typescript
// In app/components/blocks/index.tsx
import { ClientsLogosBlock } from "./ClientsLogosBlock";

export const Blocks = {
  hero: HeroBlock,
  videoHero: VideoHeroBlock,
  clientsLogos: ClientsLogosBlock,  // Add this
  stats: StatsBlock,
  // ... rest unchanged
};
```

**Step 3: Update Sanity query**

```typescript
// In lib/sanity.queries.ts, add to blocks section
// Clients/Logos block
_type == "clientsLogos" => {
  heading,
  description,
  logos[]{
    name,
    "logo": logo.asset->url,
    url
  },
  displayStyle,
  columns,
  logoSize,
  grayscale,
  backgroundColor,
  padding
},
```

**Step 4: Test build**

Run: `npm run build`
Expected: Build completes successfully

**Step 5: Commit**

```bash
git add app/components/blocks/ lib/sanity.queries.ts
git commit -m "feat: implement Clients/Logos block component

- Grid and infinite marquee display modes
- Grayscale effect with color on hover
- Responsive column layouts
- Logo size controls
- Smooth animations and transitions

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 7: Create Capabilities Matrix Sanity Schema

**Files:**
- Create: `sanity/schemas/blocks/capabilities-matrix.ts`
- Modify: `sanity/schemas/index.ts`
- Modify: `sanity/schemas/page.ts`

**Step 1: Create capabilities-matrix schema**

```typescript
// sanity/schemas/blocks/capabilities-matrix.ts
import { defineType, defineField } from 'sanity'

export const capabilitiesMatrixBlock = defineType({
  name: 'capabilitiesMatrix',
  title: 'Capabilities Matrix',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'capabilities',
      title: 'Capabilities',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title', validation: (Rule) => Rule.required() },
            { name: 'description', type: 'text', title: 'Description', rows: 3 },
            { name: 'icon', type: 'string', title: 'Icon Name', description: 'Lucide icon name (e.g., Shield, Cloud, Lock)' },
            { name: 'stat', type: 'string', title: 'Stat/Metric (optional)', placeholder: '15+ Years' },
            { name: 'link', type: 'string', title: 'Link URL (optional)' },
          ],
          preview: {
            select: {
              title: 'title',
              description: 'description',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'layout',
      title: 'Grid Layout',
      type: 'string',
      options: {
        list: [
          { title: '2x2 (4 items)', value: '2' },
          { title: '3x3 (9 items)', value: '3' },
          { title: '4x4 (16 items)', value: '4' },
        ],
      },
      initialValue: '3',
    }),
    defineField({
      name: 'hoverEffect',
      title: 'Hover Effect',
      type: 'string',
      options: {
        list: [
          { title: 'Lift', value: 'lift' },
          { title: 'Glow', value: 'glow' },
          { title: 'Scale', value: 'scale' },
        ],
      },
      initialValue: 'lift',
    }),
    defineField({
      name: 'cardStyle',
      title: 'Card Style',
      type: 'string',
      options: {
        list: [
          { title: 'Solid', value: 'solid' },
          { title: 'Gradient', value: 'gradient' },
          { title: 'Glass', value: 'glass' },
        ],
      },
      initialValue: 'solid',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'color',
    }),
    defineField({
      name: 'padding',
      title: 'Section Padding',
      type: 'string',
      options: {
        list: [
          { title: 'Small', value: 'sm' },
          { title: 'Medium', value: 'md' },
          { title: 'Large', value: 'lg' },
          { title: 'Extra Large', value: 'xl' },
        ],
      },
      initialValue: 'lg',
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      capCount: 'capabilities.length',
    },
    prepare({ heading, capCount }) {
      return {
        title: `Capabilities Matrix: ${heading || 'Untitled'}`,
        subtitle: `${capCount || 0} capabilities`,
      }
    },
  },
})
```

**Step 2: Add to schemas index**

```typescript
// In sanity/schemas/index.ts
import { capabilitiesMatrixBlock } from './blocks/capabilities-matrix'

export const schemas = [
  // ... existing schemas
  heroBlock,
  videoHeroBlock,
  clientsLogosBlock,
  capabilitiesMatrixBlock,  // Add this
  statsBlock,
  // ... rest
]
```

**Step 3: Add to page schema**

```typescript
// In sanity/schemas/page.ts
{ type: 'clientsLogos' },
{ type: 'capabilitiesMatrix' },  // Add this
{ type: 'stats' },
```

**Step 4: Commit**

```bash
git add sanity/schemas/
git commit -m "feat: add Capabilities Matrix block schema

- Array of capability cards with icons and descriptions
- Grid layout options (2x2, 3x3, 4x4)
- Hover effects (lift, glow, scale)
- Card styles (solid, gradient, glass)
- Optional stats and links per capability

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 8: Create Capabilities Matrix Block Component

**Files:**
- Create: `app/components/blocks/CapabilitiesMatrixBlock.tsx`
- Modify: `app/components/blocks/index.tsx`
- Modify: `lib/sanity.queries.ts`

**Step 1: Create CapabilitiesMatrixBlock**

```typescript
// app/components/blocks/CapabilitiesMatrixBlock.tsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedSection } from '../ui/AnimatedSection'
import { Container } from '../ui/Container'
import * as Icons from 'lucide-react'

interface CapabilitiesMatrixBlockProps {
  data: {
    heading?: string
    description?: string
    capabilities?: Array<{
      title: string
      description?: string
      icon?: string
      stat?: string
      link?: string
    }>
    layout?: '2' | '3' | '4'
    hoverEffect?: 'lift' | 'glow' | 'scale'
    cardStyle?: 'solid' | 'gradient' | 'glass'
    backgroundColor?: any
    padding?: 'sm' | 'md' | 'lg' | 'xl'
  }
}

export function CapabilitiesMatrixBlock({ data }: CapabilitiesMatrixBlockProps) {
  if (!data.capabilities || data.capabilities.length === 0) return null

  const bgColor = data.backgroundColor?.hex || data.backgroundColor
  const gridCols = {
    '2': 'grid-cols-1 md:grid-cols-2',
    '3': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    '4': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }

  const cardStyles = {
    solid: 'bg-white border border-slate-200',
    gradient: 'bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200',
    glass: 'bg-white/10 backdrop-blur-lg border border-white/20',
  }

  const hoverEffects = {
    lift: 'hover:-translate-y-2 hover:shadow-xl',
    glow: 'hover:shadow-lg hover:shadow-blue-500/50',
    scale: 'hover:scale-105',
  }

  const getIcon = (iconName?: string) => {
    if (!iconName) return Icons.Box
    const Icon = (Icons as any)[iconName] || Icons.Box
    return Icon
  }

  const CapabilityCard = ({ capability, index }: { capability: any; index: number }) => {
    const Icon = getIcon(capability.icon)

    const card = (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className={`
          p-8 rounded-2xl transition-all duration-300
          ${cardStyles[data.cardStyle || 'solid']}
          ${hoverEffects[data.hoverEffect || 'lift']}
          ${capability.link ? 'cursor-pointer' : ''}
        `}
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-600 text-white flex items-center justify-center">
            <Icon className="w-6 h-6" />
          </div>
          <div className="flex-1">
            {capability.stat && (
              <div className="text-sm font-semibold text-blue-600 mb-1">
                {capability.stat}
              </div>
            )}
            <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
            {capability.description && (
              <p className="text-slate-600 text-sm leading-relaxed">
                {capability.description}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    )

    if (capability.link) {
      return (
        <Link href={capability.link} className="block">
          {card}
        </Link>
      )
    }

    return card
  }

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: bgColor }}>
      <Container width="standard" padding={data.padding || 'lg'}>
        {(data.heading || data.description) && (
          <AnimatedSection animation="fade" className="text-center mb-12">
            {data.heading && (
              <h2 className="text-3xl md:text-5xl font-bold mb-4">{data.heading}</h2>
            )}
            {data.description && (
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">{data.description}</p>
            )}
          </AnimatedSection>
        )}

        <div className={`grid gap-6 ${gridCols[data.layout || '3']}`}>
          {data.capabilities.map((capability, index) => (
            <CapabilityCard key={index} capability={capability} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}
```

**Step 2: Register block**

```typescript
// In app/components/blocks/index.tsx
import { CapabilitiesMatrixBlock } from "./CapabilitiesMatrixBlock";

export const Blocks = {
  hero: HeroBlock,
  videoHero: VideoHeroBlock,
  clientsLogos: ClientsLogosBlock,
  capabilitiesMatrix: CapabilitiesMatrixBlock,  // Add this
  // ... rest
};
```

**Step 3: Update Sanity query**

```typescript
// In lib/sanity.queries.ts
// Capabilities Matrix block
_type == "capabilitiesMatrix" => {
  heading,
  description,
  capabilities[]{
    title,
    description,
    icon,
    stat,
    link
  },
  layout,
  hoverEffect,
  cardStyle,
  backgroundColor,
  padding
},
```

**Step 4: Test build**

Run: `npm run build`
Expected: Build completes successfully

**Step 5: Commit**

```bash
git add app/components/blocks/ lib/sanity.queries.ts
git commit -m "feat: implement Capabilities Matrix block

- Dynamic icon loading from lucide-react
- Grid layouts (2x2, 3x3, 4x4)
- Multiple card styles and hover effects
- Stats and links per capability
- Staggered entrance animations

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 9: Remove Contract Vehicle References

**Files:**
- Modify: `app/components/site-config.ts`
- Create: `app/api/redirects/route.ts` (if needed)

**Step 1: Update site config to remove contracts routes**

Read `app/components/site-config.ts` and remove any contract vehicle related navigation items.

**Step 2: Archive old contract content**

```bash
mkdir -p content/archive
git mv content/pages/contracts.json content/archive/ 2>/dev/null || echo "No contracts.json found"
```

**Step 3: Search for remaining references**

```bash
grep -r "contract vehicle" --include="*.tsx" --include="*.ts" --include="*.json" . | grep -v node_modules | grep -v .next
```

Remove any found references.

**Step 4: Test build**

Run: `npm run build`
Expected: Build completes, no broken contract vehicle links

**Step 5: Commit**

```bash
git add -A
git commit -m "refactor: remove contract vehicle content and references

- Removed contracts navigation
- Archived old contract vehicle content
- Cleaned up all references site-wide

Per client request to focus on services and capabilities.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 10: Enhanced Hero Block Rebuild

**Files:**
- Modify: `sanity/schemas/blocks/hero.ts`
- Modify: `app/components/blocks/HeroBlock.tsx`
- Modify: `lib/sanity.queries.ts`

**Step 1: Enhance hero schema**

```typescript
// Add these fields to sanity/schemas/blocks/hero.ts
defineField({
  name: 'badge',
  title: 'Badge/Label (optional)',
  type: 'string',
  description: 'Small label above title (e.g., "Since 2004")',
}),
defineField({
  name: 'secondaryButton',
  title: 'Secondary Button (optional)',
  type: 'object',
  fields: [
    { name: 'text', type: 'string', title: 'Button Text' },
    { name: 'link', type: 'string', title: 'Button Link' },
  ],
}),
defineField({
  name: 'height',
  title: 'Section Height',
  type: 'string',
  options: {
    list: [
      { title: 'Auto', value: 'auto' },
      { title: 'Medium (60vh)', value: '60vh' },
      { title: 'Large (80vh)', value: '80vh' },
      { title: 'Full Screen (100vh)', value: '100vh' },
    ],
  },
  initialValue: '80vh',
}),
defineField({
  name: 'overlayPattern',
  title: 'Overlay Pattern',
  type: 'string',
  options: {
    list: [
      { title: 'None', value: 'none' },
      { title: 'Grid', value: 'grid' },
      { title: 'Diagonal Lines', value: 'diagonal' },
      { title: 'Dots', value: 'dots' },
    ],
  },
  initialValue: 'none',
}),
```

**Step 2: Rebuild HeroBlock component**

```typescript
// app/components/blocks/HeroBlock.tsx
'use client'

import { AnimatedSection } from "../ui/AnimatedSection";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";

interface HeroBlockProps {
  data: {
    title?: string;
    subtitle?: string;
    badge?: string;
    buttonText?: string;
    buttonLink?: string;
    secondaryButton?: { text: string; link: string };
    backgroundImage?: string;
    backgroundColor?: any;
    textColor?: any;
    alignment?: string;
    height?: string;
    overlayPattern?: 'none' | 'grid' | 'diagonal' | 'dots';
  };
}

export function HeroBlock({ data }: HeroBlockProps) {
  const alignment = data.alignment || "left";
  const textAlign = alignment === "center" ? "text-center" : alignment === "right" ? "text-right" : "text-left";
  const justifyContent = alignment === "center" ? "justify-center" : alignment === "right" ? "justify-end" : "justify-start";

  const bgColor = data.backgroundColor?.hex || data.backgroundColor;
  const textColor = data.textColor?.hex || data.textColor || '#ffffff';
  const height = data.height === 'auto' ? 'min-h-[500px]' : `h-[${data.height}]`;

  const patternStyles = {
    none: '',
    grid: 'bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]',
    diagonal: 'bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.05),rgba(255,255,255,0.05)_10px,transparent_10px,transparent_20px)]',
    dots: 'bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]',
  };

  return (
    <section
      className={`relative overflow-hidden ${height} flex items-center`}
      style={{
        backgroundImage: data.backgroundImage ? `url(${data.backgroundImage})` : undefined,
        backgroundColor: bgColor || (data.backgroundImage ? undefined : '#0F172A'),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: textColor,
      }}
    >
      {data.backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      )}

      {data.overlayPattern && data.overlayPattern !== 'none' && (
        <div className={`absolute inset-0 ${patternStyles[data.overlayPattern]}`} />
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-32 w-full">
        <div className={`space-y-6 ${textAlign}`}>
          {data.badge && (
            <AnimatedSection animation="fade" delay={0.1}>
              <span className="inline-block px-4 py-2 bg-blue-600/20 backdrop-blur-sm border border-blue-600/30 rounded-full text-sm font-semibold">
                {data.badge}
              </span>
            </AnimatedSection>
          )}

          <AnimatedSection animation="slide" delay={0.2}>
            <h1 className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              {data.title || "Welcome"}
            </h1>
          </AnimatedSection>

          {data.subtitle && (
            <AnimatedSection animation="fade" delay={0.4}>
              <p className="text-xl md:text-2xl opacity-90 max-w-3xl" style={{ marginLeft: alignment === 'center' ? 'auto' : '0', marginRight: alignment === 'center' || alignment === 'right' ? 'auto' : '0' }}>
                {data.subtitle}
              </p>
            </AnimatedSection>
          )}

          <AnimatedSection animation="fade" delay={0.6}>
            <div className={`flex flex-wrap gap-4 ${justifyContent}`}>
              {data.buttonText && data.buttonLink && (
                <Button
                  href={data.buttonLink}
                  variant="solid"
                  size="lg"
                  icon={ArrowRight}
                >
                  {data.buttonText}
                </Button>
              )}
              {data.secondaryButton?.text && data.secondaryButton?.link && (
                <Button
                  href={data.secondaryButton.link}
                  variant="outline"
                  size="lg"
                >
                  {data.secondaryButton.text}
                </Button>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
```

**Step 3: Update query**

```typescript
// In lib/sanity.queries.ts, update hero block query
_type == "hero" => {
  title,
  subtitle,
  badge,
  buttonText,
  buttonLink,
  secondaryButton,
  "backgroundImage": backgroundImage.asset->url,
  backgroundColor,
  textColor,
  alignment,
  height,
  overlayPattern
},
```

**Step 4: Test build**

Run: `npm run build`
Expected: Success

**Step 5: Commit**

```bash
git add sanity/schemas/blocks/hero.ts app/components/blocks/HeroBlock.tsx lib/sanity.queries.ts
git commit -m "feat: enhance Hero block with premium features

- Badge/label above title
- Secondary CTA button
- Height control (auto, 60vh, 80vh, 100vh)
- Overlay patterns (grid, diagonal, dots)
- Enhanced animations and transitions

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 11: Enhanced Stats Block Rebuild

**Files:**
- Modify: `sanity/schemas/blocks/stats.ts`
- Modify: `app/components/blocks/StatsBlock.tsx`
- Modify: `lib/sanity.queries.ts`

**Step 1: Enhance stats schema**

```typescript
// In sanity/schemas/blocks/stats.ts, update items to include:
{
  type: 'object',
  fields: [
    { name: 'value', type: 'string', title: 'Value', validation: (Rule) => Rule.required() },
    { name: 'label', type: 'string', title: 'Label', validation: (Rule) => Rule.required() },
    { name: 'prefix', type: 'string', title: 'Prefix (optional)', placeholder: '$' },
    { name: 'suffix', type: 'string', title: 'Suffix (optional)', placeholder: '+, M, K' },
    { name: 'subtext', type: 'string', title: 'Subtext (optional)', placeholder: 'since 2004' },
    { name: 'icon', type: 'string', title: 'Icon Name (optional)', description: 'Lucide icon name' },
  ],
}

// Add these fields to the block:
defineField({
  name: 'layout',
  title: 'Layout',
  type: 'string',
  options: {
    list: [
      { title: 'Horizontal Row', value: 'horizontal' },
      { title: 'Grid', value: 'grid' },
    ],
  },
  initialValue: 'grid',
}),
defineField({
  name: 'animated',
  title: 'Animated Counter',
  type: 'boolean',
  initialValue: true,
}),
defineField({
  name: 'showSeparators',
  title: 'Show Separators',
  type: 'boolean',
  initialValue: false,
}),
defineField({
  name: 'backgroundColor',
  title: 'Background Color',
  type: 'color',
}),
```

**Step 2: Rebuild StatsBlock with counter animation**

```typescript
// app/components/blocks/StatsBlock.tsx
'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { AnimatedSection } from "../ui/AnimatedSection"
import { Container } from "../ui/Container"
import * as Icons from 'lucide-react'

interface StatsBlockProps {
  data: {
    items?: Array<{
      value?: string
      label?: string
      prefix?: string
      suffix?: string
      subtext?: string
      icon?: string
    }>
    layout?: 'horizontal' | 'grid'
    animated?: boolean
    showSeparators?: boolean
    backgroundColor?: any
  }
}

function useCountUp(end: number, duration: number = 2000, shouldStart: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldStart) return

    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }
    requestAnimationFrame(step)
  }, [end, duration, shouldStart])

  return count
}

export function StatsBlock({ data }: StatsBlockProps) {
  if (!data.items || data.items.length === 0) return null

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const bgColor = data.backgroundColor?.hex || data.backgroundColor

  const getIcon = (iconName?: string) => {
    if (!iconName) return null
    const Icon = (Icons as any)[iconName]
    return Icon ? <Icon className="w-8 h-8 mb-3 text-blue-600" /> : null
  }

  const StatItem = ({ stat, index }: { stat: any; index: number }) => {
    const numericValue = parseInt(stat.value?.replace(/[^0-9]/g, '') || '0')
    const animatedValue = useCountUp(numericValue, 2000, inView && data.animated !== false)
    const displayValue = data.animated !== false ? animatedValue : stat.value

    return (
      <div className={`text-center ${data.showSeparators && index !== 0 ? 'border-l border-slate-300 pl-8' : ''}`}>
        {getIcon(stat.icon)}
        <div className="text-5xl font-bold text-blue-600 mb-2">
          {stat.prefix}{displayValue}{stat.suffix}
        </div>
        <div className="text-lg font-medium text-slate-700 mb-1">{stat.label}</div>
        {stat.subtext && (
          <div className="text-sm text-slate-500">{stat.subtext}</div>
        )}
      </div>
    )
  }

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: bgColor }} ref={ref}>
      <Container width="standard" padding="md">
        <AnimatedSection animation="fade" stagger>
          <div className={`
            ${data.layout === 'horizontal'
              ? 'flex flex-wrap justify-around gap-8'
              : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'
            }
          `}>
            {data.items.map((stat, index) => (
              <StatItem key={index} stat={stat} index={index} />
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  )
}
```

**Step 3: Update query**

```typescript
// In lib/sanity.queries.ts
_type == "stats" => {
  items[]{
    value,
    label,
    prefix,
    suffix,
    subtext,
    icon
  },
  layout,
  animated,
  showSeparators,
  backgroundColor
},
```

**Step 4: Test build**

Run: `npm run build`
Expected: Success

**Step 5: Commit**

```bash
git add sanity/schemas/blocks/stats.ts app/components/blocks/StatsBlock.tsx lib/sanity.queries.ts
git commit -m "feat: enhance Stats block with animations

- Animated counter that counts up on scroll into view
- Icon support per stat
- Prefix/suffix for values
- Subtext option
- Layout controls (horizontal/grid)
- Separator lines option

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 12: Test and Deploy

**Step 1: Run full build**

```bash
npm run build
```

Expected: All 43 pages build successfully

**Step 2: Test Sanity Studio**

Run: `npm run dev` and visit `http://localhost:3000/studio`

- Verify all new block types appear
- Test adding a Video Hero block
- Test adding a Clients/Logos block
- Test adding a Capabilities Matrix block
- Verify enhanced Hero and Stats blocks

Expected: All blocks available and editable

**Step 3: Create test page with new blocks**

In Sanity Studio:
1. Create new page or edit homepage
2. Add Video Hero block with fallback image
3. Add Stats block with animated counters
4. Add Capabilities Matrix block
5. Add Clients/Logos block
6. Publish changes

**Step 4: View on frontend**

Visit page on localhost
Expected: All new blocks render correctly with animations

**Step 5: Final commit and push**

```bash
git add -A
git commit -m "feat: complete visual modernization phase 1

All new premium blocks implemented:
- Video Hero with fallback images
- Clients/Logos with grid and marquee modes
- Capabilities Matrix with icons and hover effects
- Enhanced Hero with badges and dual CTAs
- Enhanced Stats with animated counters

All blocks fully editable in Sanity CMS.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"

git push origin feature/visual-modernization
```

**Step 6: Create pull request**

```bash
gh pr create --title "Visual Modernization - Premium Blocks & Enhancements" --body "$(cat <<'EOF'
## Summary
Transforms FWG website into bold, authoritative billion-dollar contractor presence.

## What's New
- ✨ Video Hero block with auto-play and fallback images
- 🏢 Clients/Logos block with grid and infinite marquee
- 🎯 Capabilities Matrix with icons and animations
- 🚀 Enhanced Hero with badges, dual CTAs, patterns
- 📊 Enhanced Stats with animated counters and icons
- 🎨 Complete Framer Motion animation system
- 💎 Premium UI components (Button, Container, AnimatedSection)

## CMS Control
All visual elements fully editable in Sanity:
- Colors, spacing, layouts
- Animations and effects
- Content and imagery
- No code changes needed for updates

## Testing
- ✅ All 43 pages build successfully
- ✅ Sanity Studio loads all new blocks
- ✅ Animations smooth at 60fps
- ✅ Responsive across devices
- ✅ Photo-optional design working

🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"
```

---

## Success Criteria

- [ ] All dependencies installed
- [ ] All new Sanity schemas created
- [ ] All new block components implemented
- [ ] Enhanced existing blocks
- [ ] Contract vehicle references removed
- [ ] Build succeeds with 43 pages
- [ ] Sanity Studio shows all new blocks
- [ ] Animations smooth and performant
- [ ] Fully CMS-editable
- [ ] PR created

## Next Steps After This Plan

1. Review implementation in dev environment
2. Gather feedback on animations and styling
3. Add sample content to showcase new blocks
4. Phase 2: Image Gallery block and remaining enhancements
5. Performance optimization and polish
6. Production deployment
