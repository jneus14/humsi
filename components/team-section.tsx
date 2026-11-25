"use client"

import { useState } from "react"
import { FileText, Mail, X } from "lucide-react"
import type { TeamContent, TeamMember } from "@/lib/content"
import { boardCardTitles, listedBoardMembers } from "@/lib/board"
import Link from "next/link"
import Image from "next/image"

interface TeamSectionProps {
  content: TeamContent
}

function TeamCard({ member }: { member: TeamMember }) {
  const [showBio, setShowBio] = useState(false)
  // A board member's card shows their job title (lib/board.ts), not "Board of Directors".
  const subtitle = boardCardTitles[member.name] ?? member.role

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
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
            {/* Smaller on phones, where a card is narrow and a long job
                title would otherwise climb over the face. */}
            <h3 className="text-base leading-tight font-semibold text-primary-foreground sm:text-lg">
              {member.name}
            </h3>
            <p className="mt-0.5 text-xs leading-snug text-primary-foreground/80 sm:text-sm">{subtitle}</p>
          </div>
        </div>
      </button>

      {/* Bio Modal Overlay */}
      {showBio && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setShowBio(false)}
        >
          <div
            className="relative max-w-lg w-full rounded-xl border border-border bg-popover p-6 shadow-xl animate-in fade-in-0 zoom-in-95 duration-200"
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
                    className={`object-cover ${member.avatarPosition ?? ""}`}
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
                <p className="text-sm text-muted-foreground">{subtitle}</p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-foreground/85">
              {member.bio}
            </p>

            {(member.email || member.publicationsLink) && (
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    <Mail className="h-4 w-4" />
                    {member.email}
                  </a>
                )}
                {member.publicationsLink && (
                  <Link
                    href={member.publicationsLink}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    <FileText className="h-4 w-4" />
                    Publications
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

// A team member whose role says "Board" belongs under the Board of Directors
// heading; everyone else is staff and comes first (Julia, Nov 19 2026).
const onBoard = (member: TeamMember) =>
  member.name in boardCardTitles || /board/i.test(member.role)

export function TeamSection({ content }: TeamSectionProps) {
  const staff = content.members.filter((member) => !onBoard(member))
  const board = content.members.filter(onBoard)
  const hasBoard = board.length > 0 || listedBoardMembers.length > 0

  return (
    <section id="team" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-primary">
            {content.title}
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl text-balance">
            {content.subtitle}
          </h2>
        </div>

        <div className="mt-14 mx-auto max-w-3xl grid gap-6 grid-cols-2 md:grid-cols-3">
          {staff.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>

        {hasBoard && (
          <div className="mt-12 mx-auto max-w-3xl border-t border-border pt-8">
            {/* The heading, then the board members with photo cards, then the
                board members listed by name and job title (lib/board.ts). */}
            <h3 className="text-center text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Board of Directors
            </h3>
            {board.length > 0 && (
              <div className="mt-8 grid gap-6 grid-cols-2 md:grid-cols-3">
                {board.map((member) => (
                  <TeamCard key={member.name} member={member} />
                ))}
              </div>
            )}
            {listedBoardMembers.length > 0 && (
              <ul className="mt-10 space-y-5 text-center">
                {listedBoardMembers.map((member) => (
                  <li key={member.name}>
                    <p className="text-lg font-semibold text-foreground">
                      {member.name}
                    </p>
                    {member.title && (
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground text-balance">
                        {member.title}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
