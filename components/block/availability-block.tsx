// components/block/availability-block.tsx

import { Card, CardContent } from '@/components/ui/card'
import { AvailabilityBlock as AvailabilityBlockProps } from '@/lib/optimizely/types/generated'

export default function AvailabilityBlock({
  availability,
  projectTypes,
}: AvailabilityBlockProps) {
  return (
    <section className="container mx-auto px-4 py-16">
      <Card className="border-none">
        <CardContent className="p-8">
          <div className="mx-auto max-w-3xl space-y-6">
            <p className="leading-relaxed text-[#2d2d2d]">{availability}</p>
            <div>
              <p className="leading-relaxed text-[#2d2d2d]">
                Projects include:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1">
                {projectTypes?.map((type, index) => (
                  <li key={index} className="text-[#2d2d2d]">
                    {type}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
