//components\block\services-block.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type React from 'react' // Import React
import Image from 'next/image'

interface Service {
  title: string
  description: string
  icon?: string
}

interface ServicesBlockProps {
  services: Service[]
}

export default function ServicesBlock({ services }: ServicesBlockProps) {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              {service?.icon && (
                <div className="mb-4">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={50}
                    height={50}
                  />
                </div>
              )}
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
