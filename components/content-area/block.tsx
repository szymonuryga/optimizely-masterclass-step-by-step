// components/content-area/block.tsx

import dynamic from 'next/dynamic';
import blocksMapperFactory from '@/lib/utils/block-factory';

// Dynamically import each block
const ContactBlock = dynamic(() => import('../block/contact-block'));
const HeroBlock = dynamic(() => import('../block/hero-block'));
const LogosBlock = dynamic(() => import('../block/logos-block'));
const PortfolioGridBlock = dynamic(() => import('../block/portfolio-grid-block'));
const ServicesBlock = dynamic(() => import('../block/services-block'));
const TestimonialsBlock = dynamic(() => import('../block/testimonials-block'));

// Map the dynamically imported 
export const blocks = {
  ContactBlock,
  HeroBlock,
  LogosBlock,
  PortfolioGridBlock,
  ServicesBlock,
  TestimonialsBlock
} as const;

export default blocksMapperFactory(blocks);