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
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/25" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-40">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent/80">
          {content.tagline}
        </p>
        <h1 className="max-w-3xl bg-gradient-to-r from-white via-[#f6e8c4] to-accent bg-clip-text text-4xl font-extrabold leading-tight tracking-tight text-transparent md:text-6xl lg:text-7xl text-balance">
          {content.title}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg">
          {content.subtitle}
        </p>
        {content.highlight && (
          <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-accent md:text-lg">
            {content.highlight}
          </p>
        )}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="https://hiproject.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Explore the Human Impact Project
          </a>
          <a
            href={content.ctaLink}
            className="inline-flex items-center gap-2 rounded-lg border border-accent/40 px-6 py-3 text-sm font-semibold text-accent transition-colors hover:border-accent hover:bg-accent/10"
          >
            {content.ctaText}
          </a>
        </div>
        <a
          href="#mission"
          className="mt-16 inline-flex items-center gap-2 text-foreground/50 transition-colors hover:text-foreground/80"
          aria-label="Scroll to mission section"
        >
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
