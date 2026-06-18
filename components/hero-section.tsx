import { ArrowDown } from "lucide-react"
import type { HeroContent } from "@/lib/content"

interface HeroSectionProps {
  content: HeroContent
}

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="The US-Mexico border wall at Playas de Tijuana covered in colorful murals and messages of hope, extending into the Pacific Ocean"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-foreground/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-40">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
          {content.tagline}
        </p>
        <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight text-primary-foreground md:text-6xl lg:text-7xl text-balance">
          {content.title}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
          {content.subtitle}
        </p>
        <div className="mt-10 flex items-center gap-6">
          <a
            href={content.ctaLink}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {content.ctaText}
          </a>
          <a
            href="#team"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/70 transition-colors hover:text-primary-foreground"
          >
            Meet the Team
          </a>
        </div>
        <a
          href="#mission"
          className="mt-16 inline-flex items-center gap-2 text-primary-foreground/50 transition-colors hover:text-primary-foreground/80"
          aria-label="Scroll to mission section"
        >
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
