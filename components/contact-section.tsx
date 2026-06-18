import { Mail, Linkedin, Heart } from "lucide-react"
import type { ContactContent } from "@/lib/content"

interface ContactSectionProps {
  content: ContactContent
}

export function ContactSection({ content }: ContactSectionProps) {
  return (
    <section id="contact" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-primary">
            Contact
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            {content.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {content.subtitle}
          </p>
        </div>

        <div className="mt-14 flex flex-col items-center gap-8 md:flex-row md:justify-center">
          <a
            href={`mailto:${content.email}`}
            className="flex items-center gap-4 rounded-xl border border-border bg-card px-8 py-6 transition-all hover:border-primary/30 hover:shadow-sm"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-card-foreground">
                Email Us
              </p>
              <p className="text-sm text-muted-foreground">{content.email}</p>
            </div>
          </a>

          <a
            href={content.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-xl border border-border bg-card px-8 py-6 transition-all hover:border-primary/30 hover:shadow-sm"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Linkedin className="h-6 w-6 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-card-foreground">
                LinkedIn
              </p>
              <p className="text-sm text-muted-foreground">Human Security Initiative</p>
            </div>
          </a>

          <a
            href="https://secure.givelively.org/donate/human-security-initiative"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-xl border border-border bg-card px-8 py-6 transition-all hover:border-primary/30 hover:shadow-sm"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-card-foreground">
                Donate
              </p>
              <p className="text-sm text-muted-foreground">Support our work</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
