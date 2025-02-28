//components\block\logos-block.tsx
import Image from 'next/image'
import {
  LogosBlock as LogosBlockProps,
  LogoItemBlock,
} from '@/lib/optimizely/types/generated'
import { castContent } from '@/lib/optimizely/types/typeUtils'

export default function LogosBlock({ logos }: LogosBlockProps) {
  return (
    <section className="container mx-auto px-4 py-16">
      <div
        className="flex flex-wrap justify-center gap-12"
        data-epi-edit="logos"
      >
        {logos?.map((logo, index) => {
          const safeLogoItem = castContent<LogoItemBlock>(logo, 'LogoItemBlock')
          if (!safeLogoItem) return null

          return (
            <div key={index} className="flex items-center">
              <Image
                src={safeLogoItem.src || '/placeholder.svg'}
                alt={safeLogoItem.alt || ''}
                width={100}
                height={40}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}

