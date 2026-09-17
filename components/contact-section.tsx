import { Mail, Linkedin, Heart, Instagram } from "lucide-react"
import type { ContactContent } from "@/lib/content"

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function BlueskyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" />
    </svg>
  )
}

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

        <div className="mt-12 flex flex-col items-center gap-4">
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">
            Follow Us
          </p>
          <div className="flex items-center gap-4">
            {[
              { name: "X", url: content.x, Icon: XIcon },
              { name: "Instagram", url: content.instagram, Icon: Instagram },
              { name: "Bluesky", url: content.bluesky, Icon: BlueskyIcon },
            ].map(({ name, url, Icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`HUMSI on ${name}`}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-primary transition-all hover:border-primary/30 hover:shadow-sm"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
