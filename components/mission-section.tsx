import { BookOpen, Globe, Scale } from "lucide-react"
import type { MissionContent } from "@/lib/content"

const icons = [BookOpen, Globe, Scale]

interface MissionSectionProps {
  content: MissionContent
}

export function MissionSection({ content }: MissionSectionProps) {
  return (
    <section id="mission" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-primary">
            {content.title}
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            {content.subtitle}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            {content.description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {content.pillars.map((pillar, index) => {
            const Icon = icons[index % icons.length]
            return (
              <div
                key={pillar.title}
                className="group p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-muted">
                  <Icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <h3 className="mb-2 text-base font-medium text-foreground">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
