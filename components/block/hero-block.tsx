// components\block\hero-block.tsx
import { HeroBlock as HeroBlockProps } from '@/lib/optimizely/types/generated'
import { cn } from '@/lib/utils'

export default function HeroBlock({
  title,
  subtitle,
  showDecoration = true,
  decorationColorsPrimary = '#009379',
  decorationColorsSecondary = '#ffd285',
}: HeroBlockProps) {
  return (
    <section className="relative container mx-auto px-4 pt-20 pb-16">
      <div className={cn('flex flex-col', { 'sm:pr-60': showDecoration })}>
        <h1
          className="mb-4 w-full max-w-xl text-4xl font-bold md:text-6xl"
          data-epi-edit="title"
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="text-muted-foreground mb-8 max-w-xl text-xl"
            data-epi-edit="subtitle"
          >
            {subtitle}
          </p>
        )}
      </div>
      {showDecoration && (
        <div className="absolute top-10 right-20">
          <div className="relative h-48 w-48">
            <div
              className="absolute right-0 h-32 w-32 rounded-full"
              style={{ backgroundColor: decorationColorsPrimary ?? '#009379' }}
            />
            <div
              className="absolute bottom-0 left-0 h-40 w-40 rounded-full"
              style={{
                backgroundColor: decorationColorsSecondary ?? '#ffd285',
              }}
            />
          </div>
        </div>
      )}
    </section>
  )
}
