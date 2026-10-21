"use client"

import { useState } from "react"
import { ChevronDown, ExternalLink } from "lucide-react"
import type { WorkContent, WorkProject } from "@/lib/content"

// Map project IDs to their images (stored locally)
const projectImages: Record<string, { src: string; alt: string; position?: string }> = {
  climate: {
    src: "/images/environmental.jpg",
    alt: "Community members navigating a flooded, eroded street after severe weather, showing the direct environmental impacts that drive displacement",
  },
  mobility: {
    src: "/images/research.jpg",
    alt: "Migrants walking along a path through a village in the Darien Gap region, carrying backpacks on their journey through Central America",
  },
  health: {
    src: "/images/mobility.jpg",
    alt: "Migrants gathered at a humanitarian aid station, representing field research on the health impacts of detention and deportation",
  },
  legal: {
    src: "/images/institution.jpg",
    alt: "An institutional building in a rural East African highland landscape, representing international educational collaboration",
  },
  "human-impact": {
    src: "/images/human-impact-project.jpg",
    alt: "People walking in line at a U.S.-Mexico border crossing, depicting immigration enforcement operations",
    position: "object-[center_35%]",
  },
}

function FeaturedProject({ project }: { project: WorkProject }) {
  const image = projectImages[project.id] || { src: "/images/work-climate.jpg", alt: project.title }

  return (
    <div className="mt-12 overflow-hidden rounded-2xl border border-accent/30 bg-card md:flex">
      <div className="relative md:w-1/2">
        <img
          src={image.src}
          alt={image.alt}
          className={`h-64 w-full object-cover md:h-full ${image.position || "object-center"}`}
        />
      </div>
      <div className="p-8 md:w-1/2 md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
          Featured Project
        </p>
        <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-card-foreground md:text-3xl">
          {project.title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
          {project.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/80">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            More than 5,000 incidents documented
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Original testimony from interviews with deportees
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Updated daily in English and Spanish
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Searchable by harm type, person impacted, and location
          </span>
        </div>
        {project.externalLink && (
          <a
            href={project.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Explore the Database
            <ExternalLink className="h-5 w-5" />
          </a>
        )}
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: WorkProject }) {
  const [expanded, setExpanded] = useState(false)
  const image = projectImages[project.id] || { src: "/images/work-climate.jpg", alt: project.title }

  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-card">
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={image.src}
          alt={image.alt}
          className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${image.position || "object-center"}`}
        />
      </div>
      <div className="p-6 md:p-8">
        <h3 className="text-xl font-bold tracking-tight text-card-foreground md:text-2xl">
          {project.title}
        </h3>
        
        {/* Partners */}
        {project.partners.length > 0 && (
          <div className="mt-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Partners:{" "}
            </span>
            <span className="text-xs text-muted-foreground">
              {project.partners.join(", ")}
            </span>
          </div>
        )}
        
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* External Link Button */}
        {project.externalLink && (
          <a
            href={project.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View Project
            <ExternalLink className="h-5 w-5" />
          </a>
        )}

        {/* Publications - Always visible and prominent */}
        {project.publications.length > 0 && (
          <div className="mt-5 rounded-lg bg-primary/5 p-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
              Publications
            </p>
            <ul className="space-y-2">
              {project.publications.map((pub) => (
                <li key={pub.title}>
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-sm transition-colors hover:text-primary ${
                      pub.featured ? "font-semibold text-foreground" : "text-muted-foreground underline-offset-4 hover:underline"
                    }`}
                  >
                    {pub.title}
                    <ExternalLink className="h-3 w-3 shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Expandable Details Section */}
        {project.details.length > 0 && (
          <>
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-4 flex w-full items-center justify-between border-t border-border pt-4 text-sm font-medium text-foreground transition-colors hover:text-primary"
              aria-expanded={expanded}
            >
              <span>{expanded ? "Show less" : "More details"}</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  expanded ? "rotate-180" : ""
                }`}
              />
            </button>

            {expanded && (
              <div className="mt-4 animate-in fade-in-0 slide-in-from-top-2 duration-300">
                <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {project.details.map((detail, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

interface WorkSectionProps {
  content: WorkContent
}

export function WorkSection({ content }: WorkSectionProps) {
  const featured = content.projects.find((p) => p.id === "human-impact")
  const rest = content.projects.filter((p) => p.id !== "human-impact")

  return (
    <section id="work" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
          Our Work
        </h2>

        {featured && <FeaturedProject project={featured} />}

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {rest.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
