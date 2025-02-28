// components\block\hero-block.tsx
interface HeroBlockProps {
  title: string
  subtitle?: string
  showDecoration?: boolean
  decorationColorsPrimary?: string
  decorationColorsSecondary?: string
}

export default function HeroBlock({
  title,
  subtitle,
  showDecoration = true,
  decorationColorsPrimary = '#009379',
  decorationColorsSecondary = '#ffd285',
}: HeroBlockProps) {
  return (
    <section className="relative container mx-auto px-4 pt-20 pb-16">
      <h1 className="mb-4 max-w-xl text-4xl font-bold md:text-6xl">{title}</h1>
      {subtitle && (
        <p className="text-muted-foreground mb-8 max-w-xl text-xl">
          {subtitle}
        </p>
      )}
      {showDecoration && (
        <div className="absolute top-10 right-20">
          <div className="relative h-48 w-48">
            <div
              className="absolute right-0 h-32 w-32 rounded-full"
              style={{ backgroundColor: decorationColorsPrimary }}
            />
            <div
              className="absolute bottom-0 left-0 h-40 w-40 rounded-full"
              style={{ backgroundColor: decorationColorsSecondary }}
            />
          </div>
        </div>
      )}
    </section>
  )
}
