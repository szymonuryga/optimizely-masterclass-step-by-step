// components/content-area/block.tsx

import dynamic from 'next/dynamic'
import blocksMapperFactory from '@/lib/utils/block-factory'

// Dynamically import each block
const ContactBlock = dynamic(() => import('../block/contact-block'))
const HeroBlock = dynamic(() => import('../block/hero-block'))
const LogosBlock = dynamic(() => import('../block/logos-block'))
const PortfolioGridBlock = dynamic(
  () => import('../block/portfolio-grid-block')
)
const ServicesBlock = dynamic(() => import('../block/services-block'))
const TestimonialsBlock = dynamic(() => import('../block/testimonials-block'))
const AvailabilityBlock = dynamic(() => import('../block/availability-block'))
const ProfileBlock = dynamic(() => import('../block/profile-block'))
const StoryBlock = dynamic(() => import('../block/story-block'))

// Map the dynamically imported
export const blocks = {
  ContactBlock,
  HeroBlock,
  LogosBlock,
  PortfolioGridBlock,
  ServicesBlock,
  TestimonialsBlock,
  AvailabilityBlock,
  ProfileBlock,
  StoryBlock
} as const

export default blocksMapperFactory(blocks)
