# Video Frosted Glass Overlay Design

**Date:** 2025-11-07
**Status:** Approved

## Purpose

Add a frosted glass overlay effect to video backgrounds to reduce the appearance of graininess and compression artifacts while maintaining video visibility and movement.

## Scope

Apply the effect to:
- Home page video
- Services page video

## Requirements

- Moderate frosted glass effect (8px blur, 20-25% opacity white overlay)
- Prop-based implementation for flexibility
- No performance degradation
- Maintain existing overlay functionality
- Graceful degradation in older browsers

## Design

### Architecture

Add an optional `frostGlass` boolean prop to the VideoHeroBlock component. When enabled, render an additional overlay layer using CSS backdrop-filter between the video and the existing dark gradient overlay.

### Component Changes

**VideoHeroBlock.tsx:**
1. Add `frostGlass?: boolean` to VideoHeroBlockProps interface
2. Insert conditional frosted glass layer after video/image rendering
3. Layer order (bottom to top):
   - Video/background image
   - Frosted glass layer (new)
   - Dark gradient overlay (existing)
   - Content

### Styling

Frosted glass layer CSS:
- `backdrop-filter: blur(8px)` - creates the blur effect
- `bg-white/20` - 20% opacity white background
- `absolute inset-0` - covers entire video area
- Conditional rendering based on `frostGlass` prop

### Page Integration

**Home page (app/page.tsx):**
- Add `frostGlass: true` to VideoHero configuration

**Services page (app/services/page.tsx):**
- Add `frostGlass: true` to VideoHero configuration

## Technical Considerations

### Browser Support
- Modern browsers (Chrome, Safari, Firefox, Edge) support backdrop-filter
- Older browsers will ignore the effect gracefully (no visual breaking)
- No polyfill needed - progressive enhancement approach

### Performance
- `backdrop-filter` is GPU-accelerated
- Minimal performance impact expected
- No additional network requests
- No changes to video loading behavior

### Maintainability
- Prop-based approach allows per-page control
- Can be extended to CMS in future if needed
- Existing overlay functionality remains unchanged
- Easy to enable/disable for testing

## Testing Checklist

- [ ] Visual inspection on Home page
- [ ] Visual inspection on Services page
- [ ] Mobile responsiveness check
- [ ] Verify video playback not affected
- [ ] Confirm fallback images still work
- [ ] Test with video disabled on mobile
- [ ] Check performance (frame rate, GPU usage)

## Future Enhancements

Potential future improvements:
- Add blur strength as configurable prop
- Add to CMS schema for content editor control
- Create preset options (subtle, moderate, strong)
- Add to other video components if needed
