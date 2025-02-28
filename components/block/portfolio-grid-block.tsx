//components\block\portfolio-grid-block.tsx
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

interface PortfolioItem {
  title: string
  description: string
  imageUrl: string
  link: string
}

interface PortfolioGridBlockProps {
  title: string
  items: PortfolioItem[]
}

export default function PortfolioGridBlock({
  title,
  items,
}: PortfolioGridBlockProps) {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="mb-12 text-3xl font-bold">{title}</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item, index) => (
          <Card key={index}>
            <CardContent className="p-0">
              <Image
                src={item.imageUrl || '/placeholder.svg'}
                alt={item.title}
                width={400}
                height={300}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <Link href={item.link ?? ''}>
                  <h3 className="mb-2 font-semibold">{item.title}</h3>
                </Link>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
