//components\block\logos-block.tsx
import Image from "next/image"

interface Logo {
  src: string
  alt: string
}

interface LogosBlockProps {
  logos: Logo[]
}

export default function LogosBlock({ logos }: LogosBlockProps) {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex justify-center gap-12 flex-wrap">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center">
            <Image src={logo.src || "/placeholder.svg"} alt={logo.alt} width={100} height={40} />
          </div>
        ))}
      </div>
    </section>
  )
}
