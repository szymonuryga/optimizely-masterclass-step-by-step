//components\block\portfolio-grid-block.tsx
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import {
  PortfolioGridBlock as PortfolioGridBlockProps,
  PortfolioItemBlock,
} from '@/lib/optimizely/types/generated'
import { castContent } from '@/lib/optimizely/types/typeUtils'

export default function PortfolioGridBlock({
  title,
  items,
}: PortfolioGridBlockProps) {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="mb-12 text-3xl font-bold">{title}</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {items?.map((item, index) => {
          const safeItem = castContent<PortfolioItemBlock>(
            item,
            'PortfolioItemBlock'
          )
          if (!safeItem) return null

          return (
            <Card key={index}>
              <CardContent className="p-0">
                <Image
                  src={safeItem?.imageUrl || '/placeholder.svg'}
                  alt={safeItem?.title ?? ''}
                  width={400}
                  height={300}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <Link href={safeItem?.link ?? ''}>
                    <h3 className="mb-2 font-semibold" data-epi-edit="title">
                      {safeItem?.title}
                    </h3>
                  </Link>
                  <p
                    className="text-muted-foreground text-sm"
                    data-epi-edit="description"
                  >
                    {safeItem?.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
