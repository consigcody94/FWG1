// Document types
import { pageType } from './page'
import { navigationType } from './navigation'
import { settingsType } from './settings'
import { contactType } from './contact'
import { jobType } from './job'

// Block types
import { heroBlock } from './blocks/hero'
import { videoHeroBlock } from './blocks/video-hero'
import { statsBlock } from './blocks/stats'
import { servicesBlock } from './blocks/services'
import { testimonialsBlock } from './blocks/testimonials'
import { contentBlock } from './blocks/content'
import { teamBlock } from './blocks/team'
import { ctaBlock } from './blocks/cta'
import { clientsBlock } from './blocks/clients'
import { successStoriesBlock } from './blocks/successStories'

export const schemas = [
  // Document types
  pageType,
  navigationType,
  settingsType,
  contactType,
  jobType,

  // Block types
  heroBlock,
  videoHeroBlock,
  statsBlock,
  servicesBlock,
  testimonialsBlock,
  contentBlock,
  teamBlock,
  ctaBlock,
  clientsBlock,
  successStoriesBlock,
]
