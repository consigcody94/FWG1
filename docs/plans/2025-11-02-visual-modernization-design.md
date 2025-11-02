# Federal Working Group Website Visual Modernization Design

**Date:** November 2, 2025
**Status:** Approved
**Approach:** Full Visual Rebuild with Complete Sanity CMS Integration

## Overview

Transform the Federal Working Group website into a bold, authoritative digital presence that positions FWG as a billion-dollar federal contractor. All content will be fully editable through Sanity CMS, enabling non-technical team members to manage and update the site.

## Design Vision

**Visual Style:** Bold & Authoritative
- Strong typography with dramatic hierarchy
- Dark navy/black backgrounds with strategic use of white space
- Dramatic hero imagery and data visualizations
- Professional, commanding presence that conveys stability and power

**Core Principle:** Everything CMS-Driven
- All visual elements configurable in Sanity Studio
- No code changes needed for content updates
- Editors can add, remove, reorder blocks freely
- Full control over colors, spacing, layouts

## Design System Foundation

### Color System
**Primary Palette:**
- Deep Navy: `#0A1628`, `#0F172A` (backgrounds, headers)
- Pure Black: `#000000` (typography)
- Slate Grays: `#64748B`, `#94A3B8` (secondary text)

**Accent Palette:**
- Electric Blue: `#3B82F6` (CTAs, highlights)
- Gold: `#F59E0B` (premium accents)

**Sanity Integration:**
- Site Settings document with theme configuration
- Color presets: "Bold Dark", "Professional Blue", "Executive"
- Each block has optional color overrides using @sanity/color-input
- All colors stored as hex values, fully customizable

### Typography
**Font Family:** Quantico (already loaded)
- Display: Quantico Bold 700, sizes 3.5rem - 7rem
- Body: Quantico Regular 400, sizes 1rem - 1.25rem
- Tight line-height for headlines, optimized leading for body text

**Sanity Controls:**
- Settings document with font size scales
- Per-block text size overrides: Small, Default, Large, XL
- Font weight selection for headlines
- Line height and letter spacing presets

### Layout & Spacing
**Container Widths:**
- Full Width: 100% for dramatic impact
- Standard: 1280px for content
- Narrow: 768px for text-focused blocks

**Vertical Rhythm:**
- Mobile: 4rem section spacing
- Desktop: 6-8rem section spacing
- Generous padding for confidence and breathing room

**Sanity Controls:**
- Per-block padding: None, Small, Medium, Large, XL
- Container width selection per block
- Background options: None, Color, Image, Video, Gradient
- Text alignment: Left, Center, Right

### Image Management
- Sanity Media plugin for drag-and-drop uploads
- Hotspot/crop controls built into image fields
- Alt text, captions, credit lines all editable
- Automatic optimization via Sanity CDN
- Next.js Image component for performance

## New Block Types

### 1. Video Hero Block (`video-hero`)
**Purpose:** Cinematic opening with video backgrounds

**Sanity Fields:**
- Video file upload or external URL (YouTube, Vimeo)
- Fallback background image
- Overlay opacity slider (0-100%)
- Title, subtitle, description (rich text)
- Primary and secondary CTA buttons
- Auto-play, loop, muted toggles
- Video positioning: Center, Top, Bottom
- Mobile video disable option

**Frontend Features:**
- Lazy load video
- Fallback to image on slow connections
- Pause video when out of viewport
- Gradient overlay for text readability

### 2. Clients/Logos Block (`clients-logos`)
**Purpose:** Showcase federal agency clients and partners

**Sanity Fields:**
- Array of logo images with names
- Heading and description text
- Display style: Grid, Marquee, Carousel
- Columns: 3, 4, 5, 6
- Logo sizing: Small, Medium, Large
- Grayscale toggle with color-on-hover
- Background color/pattern options
- Spacing between logos

**Frontend Features:**
- Infinite marquee scroll (smooth, pausable)
- Grid with hover effects
- Responsive breakpoints
- Lazy load logo images

### 3. Capabilities Matrix Block (`capabilities-matrix`)
**Purpose:** Interactive grid showcasing core capabilities

**Sanity Fields:**
- Array of capability cards
  - Icon upload or icon name
  - Title
  - Description (rich text)
  - Optional stat/metric
  - Optional link URL
- Grid layout: 2x2, 3x3, 4x4
- Hover effect: Lift, Glow, Flip, Slide
- Card background style: Solid, Gradient, Glass-morphism
- Spacing between cards

**Frontend Features:**
- Smooth hover animations
- Icon library integration (react-icons)
- Stagger animation on scroll into view
- Responsive grid layout

### 4. Image Gallery Block (`image-gallery`)
**Purpose:** Visual showcases with lightbox functionality

**Sanity Fields:**
- Array of images with captions
- Layout style: Grid, Masonry, Carousel, Stacked
- Aspect ratio: Auto, 16:9, 4:3, 1:1
- Columns: 2, 3, 4
- Spacing: Tight, Normal, Loose
- Lightbox enable/disable
- Show captions toggle

**Frontend Features:**
- Full-screen lightbox with navigation
- Touch/swipe support
- Keyboard navigation
- Optimized image loading
- Smooth transitions

## Enhanced Existing Blocks

### Hero Block Enhancement
**New Features:**
- Multiple CTA buttons (primary + secondary)
- Badge/label above title (e.g., "Since 2004")
- Height options: Auto, Medium (60vh), Large (80vh), Full Screen (100vh)
- Overlay patterns: None, Grid, Diagonal Lines, Dots
- Text shadow toggle
- Particle effects option (animated background)

### Stats Block Enhancement
**New Features:**
- Animated counter (counts up on scroll)
- Icon/image per stat
- Prefix/suffix for values (e.g., "$", "+", "M")
- Layout: Horizontal, Grid, Vertical
- Separator lines toggle
- Background style: Transparent, Solid, Card
- Optional subtext per stat

### Services Block Enhancement
**New Features:**
- Service cards with image/icon options
- Hover animations: Lift, Border glow, Background shift
- Link to detail pages
- Layout: Grid (2, 3, 4 columns), Carousel, Stacked
- Card styles: Minimal, Bordered, Elevated, Glass
- Icon sizing and positioning

### CTA Block Enhancement
**New Features:**
- Full-width backgrounds (image, video, gradient)
- Multiple button styles: Solid, Outline, Ghost
- Button sizes: Small, Medium, Large
- Multiple CTAs in one block
- Icon support in buttons
- Form integration placeholder (future enhancement)

## Animation & Interaction System

### Framer Motion Integration
- Scroll-triggered animations: Fade up, Slide in, Scale
- Stagger animations for grids/lists
- Page transitions between routes
- Smooth hover states with GPU acceleration
- Parallax scrolling for backgrounds

### Sanity Animation Controls
**Per-Block Settings:**
- Animation enable/disable toggle
- Animation style: Fade, Slide, Scale, None
- Animation delay: None, Short, Medium, Long
- Stagger children toggle
- Automatically respects `prefers-reduced-motion`

### Performance Optimization
- Intersection Observer for scroll animations
- Lazy load videos and heavy content
- Code splitting per block component
- Next.js Image optimization
- Sanity CDN image transformations

## Content Strategy

### Contract Vehicle Removal
- Remove all "contract vehicle" references site-wide
- Update navigation to remove contract vehicle links
- Archive old contracts pages to `/content/archive/`
- Add 301 redirects to relevant service pages
- Update sitemap.xml generation

### Homepage Strategy
**Block Order:**
1. Video Hero or gradient hero (no photo needed initially)
2. Animated Stats (years, personnel, agencies, projects)
3. Capabilities Matrix (core services)
4. Clients/Logos (federal agencies)
5. Services overview
6. CTA section

### Service Pages Strategy
- Hero with icon/gradient backgrounds (photo-ready for future)
- Rich content blocks with proper typography
- Capabilities matrix with service-specific details
- Related services
- Strong CTA

### Photo-Optional Design
- All blocks work beautifully with gradients, patterns, or solid colors
- Icon-driven initially
- Photo fields available in CMS for future use
- No code changes needed when photos are added

## Technical Implementation

### Package Dependencies
```json
{
  "framer-motion": "^11.x",
  "react-icons": "^5.x",
  "yet-another-react-lightbox": "^3.x",
  "react-intersection-observer": "^9.x",
  "@sanity/image-url": "^1.x"
}
```

### File Structure
```
sanity/schemas/
  ├── blocks/
  │   ├── video-hero.ts (new)
  │   ├── clients-logos.ts (new)
  │   ├── capabilities-matrix.ts (new)
  │   ├── image-gallery.ts (new)
  │   ├── hero.ts (enhanced)
  │   ├── stats.ts (enhanced)
  │   ├── services.ts (enhanced)
  │   └── cta.ts (enhanced)
  └── theme-settings.ts (new)

app/components/
  ├── blocks/
  │   ├── VideoHeroBlock.tsx (new)
  │   ├── ClientsLogosBlock.tsx (new)
  │   ├── CapabilitiesMatrixBlock.tsx (new)
  │   ├── ImageGalleryBlock.tsx (new)
  │   ├── HeroBlock.tsx (rebuild)
  │   ├── StatsBlock.tsx (rebuild)
  │   ├── ServicesBlock.tsx (rebuild)
  │   └── CTABlock.tsx (rebuild)
  └── ui/
      ├── AnimatedSection.tsx (wrapper)
      ├── Button.tsx (enhanced)
      └── Container.tsx (responsive)
```

### Sanity Schema Architecture
**Theme Settings Document:**
- Primary colors (array of color objects)
- Accent colors (array of color objects)
- Typography scale (object with size multipliers)
- Default spacing values
- Animation preferences

**Block Shared Fields:**
- Padding top/bottom (select)
- Container width (select)
- Background type and value
- Animation settings (object)
- Text alignment

### Backwards Compatibility
- Existing pages continue working during rebuild
- Old blocks gracefully degrade if fields missing
- No data loss during migration
- Incremental enhancement approach

## Success Criteria

**Visual Impact:**
- Site looks like a billion-dollar contractor
- Bold, authoritative presence
- Professional animations and interactions
- Responsive across all devices

**CMS Usability:**
- Non-technical users can edit all content
- No code changes needed for common updates
- Intuitive field labels and descriptions
- Preview works correctly in Studio

**Performance:**
- Lighthouse score 90+ across all metrics
- Fast page loads (< 2s LCP)
- Smooth animations (60fps)
- Optimized images and videos

**Maintenance:**
- Clean, documented code
- Reusable components
- Easy to extend with new blocks
- Clear migration path for future enhancements

## Implementation Phases

**Phase 1: Foundation** (Week 1)
- Install dependencies
- Create design system components
- Set up animation utilities
- Enhance theme settings schema

**Phase 2: New Blocks** (Week 2)
- Video Hero Block
- Clients/Logos Block
- Capabilities Matrix Block
- Image Gallery Block

**Phase 3: Enhanced Blocks** (Week 3)
- Rebuild Hero Block
- Rebuild Stats Block
- Rebuild Services Block
- Rebuild CTA Block

**Phase 4: Content Migration** (Week 4)
- Remove contract vehicle references
- Update homepage with new blocks
- Enhance service pages
- Test all pages in Sanity Studio

**Phase 5: Polish & Launch** (Week 5)
- Animation tuning
- Performance optimization
- Cross-browser testing
- Deploy to production

## Next Steps

1. Set up isolated git worktree for development
2. Create detailed implementation plan
3. Install dependencies and set up design system
4. Build new Sanity schemas
5. Implement new block components
6. Migrate content and test in Studio
7. Deploy and gather feedback
