"use client"

import { useState } from "react"
import { FileText, X } from "lucide-react"
import type { TeamContent, TeamMember } from "@/lib/content"
import Link from "next/link"
import Image from "next/image"

interface TeamSectionProps {
  content: TeamContent
}

function TeamCard({ member }: { member: TeamMember }) {
  const [showBio, setShowBio] = useState(false)

  return (
    <div className="group relative">
      <button
        onClick={() => setShowBio(true)}
        className="w-full overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label={`View bio for ${member.name}`}
      >
        <div className="aspect-[3/4] relative">
          {member.photo ? (
            <Image
              src={member.photo}
              alt={member.name}
              fill
              className={`object-cover grayscale ${member.photoPosition || "object-center"}`}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-primary/10">
              <span className="text-4xl font-bold text-primary">
                {member.initials}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
            <h3 className="text-lg font-semibold text-primary-foreground">
              {member.name}
            </h3>
            <p className="text-sm text-primary-foreground/80">{member.role}</p>
          </div>
        </div>
      </button>

      {/* Bio Modal Overlay */}
      {showBio && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 backdrop-blur-sm p-4"
          onClick={() => setShowBio(false)}
        >
          <div
            className="relative max-w-lg w-full rounded-xl bg-card p-6 shadow-xl animate-in fade-in-0 zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowBio(false)}
              className="absolute top-4 right-4 rounded-full p-1 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Close bio"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-start gap-4">
              {member.photo ? (
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-2xl font-bold text-primary">
                    {member.initials}
                  </span>
                </div>
              )}
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-foreground">
              {member.bio}
            </p>

            {member.publicationsLink && (
              <Link
                href={member.publicationsLink}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                <FileText className="h-4 w-4" />
                Publications
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export function TeamSection({ content }: TeamSectionProps) {
  return (
    <section id="team" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-primary">
            {content.title}
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            {content.subtitle}
          </h2>
        </div>

        <div className="mt-14 grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {content.members.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}
