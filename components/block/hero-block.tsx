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
  decorationColorsPrimary = "#009379",
  decorationColorsSecondary = "#ffd285"
}: HeroBlockProps) {
  return (
    <section className="container mx-auto px-4 pt-20 pb-16 relative">
      <h1 className="text-4xl md:text-6xl font-bold max-w-xl mb-4">{title}</h1>
      {subtitle && <p className="text-xl text-muted-foreground max-w-xl mb-8">{subtitle}</p>}
      {showDecoration && (
        <div className="absolute right-20 top-10">
          <div className="relative w-48 h-48">
            <div
              className="absolute right-0 w-32 h-32 rounded-full"
              style={{ backgroundColor: decorationColorsPrimary }}
            />
            <div
              className="absolute bottom-0 left-0 w-40 h-40 rounded-full"
              style={{ backgroundColor: decorationColorsSecondary }}
            />
          </div>
        </div>
      )}
    </section>
  )
}

