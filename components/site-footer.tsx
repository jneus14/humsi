import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="rounded-lg bg-foreground/5 px-4 py-3">
            <Image
              src="/images/logo.png"
              alt="HUMSI - Human Security Initiative"
              width={220}
              height={55}
              className="h-14 w-auto"
            />
          </div>
          <p className="max-w-xs text-sm text-muted-foreground">
            Human Security Initiative is a 501(c)(3) nonprofit organization
            incorporated in California.
          </p>
        </div>
        <nav className="flex gap-6">
          <a
            href="#work"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Our Work
          </a>
          <a
            href="#team"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Our Team
          </a>
          <a
            href="#contact"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  )
}
