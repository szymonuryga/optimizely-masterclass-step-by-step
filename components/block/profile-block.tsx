// components/block/profile-block.tsx

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { ProfileBlock as ProfileBlockProps } from '@/lib/optimizely/types/generated'

export default function ProfileBlock({
  imageSrc,
  name,
  title,
  bio,
}: ProfileBlockProps) {
  return (
    <section className="container mx-auto px-4 py-16">
      <Card className="border-none bg-[#f9e6f0]">
        <CardContent className="p-8">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <Image
                src={imageSrc || '/placeholder.svg'}
                alt={title ?? ''}
                fill
                className="rounded-lg object-cover"
                priority
              />
            </div>
            <div className="space-y-4">
            <h1 className="text-3xl font-bold" data-epi-edit="name">
                {name}
              </h1>
              <p className="text-xl" data-epi-edit="title">
                {title}
              </p>
              <div className="mt-6">
                <h2 className="mb-2 text-lg font-semibold">Bio:</h2>
                <p className="leading-relaxed" data-epi-edit="bio">
                  {bio}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
