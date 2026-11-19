import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Our Mission | Human Security Initiative",
  description:
    "The Human Security Initiative works for the safety and dignity of all people. Its main project, the Human Impact Project, is a public record of what U.S. immigration enforcement has done to people.",
}

const intro = [
  "The Human Security Initiative (HUMSI) is a 501(c)(3) nonprofit organization that works for the safety and dignity of all people. Human security means freedom from fear, freedom from want and the freedom to live in dignity. HUMSI works for these freedoms for people who are often left unprotected, including migrants and asylum seekers, people detained or deported, and people forced from their homes by violence, persecution or disaster. We research and document the harm they face, in their own words wherever we can, and use that evidence in advocacy, legal work and education for protection and accountability.",
]

const hip = [
  "HUMSI's main project is the Human Impact Project (hiproject.org), a public record of what U.S. immigration enforcement has done to people. The database holds more than 7,000 reported incidents, including deaths in custody, arrests of U.S. citizens, raids on homes and workplaces, medical neglect in detention, and deportations to countries people had never lived in. Each story is drawn from news reporting, federal court records, government oversight reports, community accounts, family fundraisers or social media, and a person reviews it before it is published. Every source is archived so the record survives if the original reporting disappears. New stories are added every day in English and Spanish, and anyone can search them by type of harm, who was affected and where enforcement took place. Names that appear only in court filings are never published.",
  "HUMSI also studies the record as a whole. Its analysis pages show the practices that recur across stories and the places and groups of people where they recur. They profile detention facilities, follow more than 1,200 habeas cases through the federal courts, trace deportations to third countries by destination, and connect government actions and court rulings to the people they reached. Because news coverage grows and shrinks over time, this analysis looks at the kinds of harm people report and how they recur, and does not treat the number of stories as a measure of how often harm occurs.",
  "The Human Impact Project also adds testimony that the public record does not contain. In September 2026, a research team from HUMSI, Physicians for Human Rights and Las Americas Immigrant Advocacy Center interviewed 84 people deported to southern Mexico, in Tapachula, Villahermosa and Palenque. They told the team about arrests, detention conditions, medical neglect and removal. Many of their stories are published under pseudonyms in the database, and their accounts are the basis of a joint report on the health impacts of detention and deportation, to be published in early 2027. This winter, HUMSI returns to the region with a physician to provide medical care and direct aid to people deported there.",
  "Lawyers defending people in detention use its facility profiles and habeas cases. Advocates find the stories from their own congressional district and write to their representatives. Journalists use it to find people and patterns to report on, and HUMSI contributes its evidence to submissions to United Nations human rights experts. The Human Impact Project is an affiliated project of CodeX, the Stanford Center for Legal Informatics.",
]

const otherWork = [
  {
    title: "Climate and displacement",
    text: "HUMSI built the U.S. Climate-Related Displacement map (humsi.org/uscd), which uses the Human Impact Project's methods to record the stories of people in the United States displaced by wildfires, hurricanes, floods and other climate-related disasters. HUMSI has also produced research and resources for advocates and policymakers on climate change, displacement and the protection of people forced to move.",
  },
  {
    title: "Migration routes",
    text: "HUMSI documents the conditions people face along migration routes in the Americas, including field research and a coalition report on people crossing the Darién Gap between Colombia and Panama, to support safe and legal pathways.",
  },
  {
    title: "Education",
    text: "HUMSI trains advocates and practitioners, lectures on climate-related mobility and border policy at universities in the United States and abroad, and supports Stanford Law School's Rule of Law Program in a legal education partnership with the University of Rwanda.",
  },
]

const principles = [
  {
    title: "We start from what people tell us.",
    text: "Our research is grounded in the firsthand accounts of people affected by enforcement and displacement. We never define anyone by a criminal record or use dehumanizing labels.",
  },
  {
    title: "We protect the people who share their stories.",
    text: "We seek informed consent, keep interview records secure, and publish a person's name or photo only with their permission.",
  },
  {
    title: "We state what the evidence shows.",
    text: "Our work rests on documented sources and firsthand accounts, and we report facts plainly. HUMSI is nonpartisan.",
  },
  {
    title: "We work in partnership",
    text: "with legal service providers, medical and human rights organizations, universities and the communities we document.",
  },
]

const paragraph = "mb-5 text-base leading-relaxed text-muted-foreground md:text-lg"
const heading = "mb-5 mt-12 font-serif text-2xl font-bold text-foreground"

export default function MissionPage() {
  return (
    <>
      <Navigation />
      <main className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/#mission"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          <header className="mb-10">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-primary">
              Human Security Initiative
            </p>
            <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
              Our Mission
            </h1>
          </header>

          {intro.map((p, i) => (
            <p key={i} className={paragraph}>
              {p}
            </p>
          ))}

          <h2 className={heading}>The Human Impact Project</h2>
          {hip.map((p, i) => (
            <p key={i} className={paragraph}>
              {p}
            </p>
          ))}
          <a
            href="https://hiproject.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Explore the Human Impact Project
            <ExternalLink className="h-4 w-4" />
          </a>

          {otherWork.map((w) => (
            <section key={w.title}>
              <h2 className={heading}>{w.title}</h2>
              <p className={paragraph}>{w.text}</p>
            </section>
          ))}

          <h2 className={heading}>How we work</h2>
          <ul className="space-y-4">
            {principles.map((pr) => (
              <li
                key={pr.title}
                className="border-l-2 border-primary/20 pl-4 text-base leading-relaxed text-muted-foreground"
              >
                <span className="font-semibold text-foreground">{pr.title}</span> {pr.text}
              </li>
            ))}
          </ul>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
