import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
    loader: 'custom',
    loaderFile: './lib/image/loader.ts',
  },
}

export default nextConfig
