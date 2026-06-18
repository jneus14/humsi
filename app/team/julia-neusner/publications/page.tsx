import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ExternalLink, Mail, ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Julia Neusner - Publications | Human Security Initiative",
  description: "Research, writing, and speaking by Julia Neusner on migration, human rights, and climate displacement.",
}

const academicArticles = [
  "Camila Bustos & Julia Neusner, Displacing Climate Precarity, 87 Albany Law Review 3 (2025).",
  "Julia Neusner, David Cremins, Ana Cutts Dougherty, Kelsey Freeman, Rosie Lebel, Milena Díaz, and Nicole Chávez, Climate-Related Displacement and U.S. Refugee Protection, 42 UCLA Journal of Environmental Law and Policy 2 (October 2024).",
  "Julia Neusner and Ama Francis, Public and Human Health Implications of Climate Mobility, Columbia Sabin Center for Climate Change Law (June 2024).",
  "Julia Neusner, Deadly Journeys: Climate Change, U.S. Border Enforcement, and Human Rights, 56 Case Western Reserve Journal of International Law. 337 (2024)",
  "Julia Neusner, Trade Liberation and Labor Bondage: U.S. Agreements with Mexico and Colombia. 9 Journal of Global Rights and Organizations, Spring 2019.",
]

const legalWriting = [
  "Julia Neusner and José Miranda, Danger by Design: How Climate Injustice Harms Displaced People at the U.S.-Mexico Border, International Refugee Assistance Project, May 2025.",
  "Julia Neusner, Climate-Related Danger and Missing Migrants: Submission by International Refugee Assistance Project (IRAP) to the Office of the High Commissioner for Human Rights (OHCHR) Special Rapporteur on the Human Rights of Migrants, December 2024.",
  "Julia Neusner, Enduring Change: A Data Review of Firsthand Accounts of Climate Mobility Impacts, International Refugee Assistance Project, October 2024.",
  "Julia Neusner et. al, Danger in the Darién Gap: Human Rights Abuses and the Need for Humane Pathways to Safety, Human Security Initiative, Quixote Center, Las Americas Immigrant Advocacy Center, and Immigrant Defenders Law Center. June 2024.",
  "Legal Action Agenda for Climate Displacement, International Refugee Assistance Project, April 2024 (lead coauthor).",
  "Legal Practice Guide: U.S. Refugee Protection Claims Related to Climate Change and Environmental Disasters, International Refugee Assistance Project, Feb. 2024 (lead coauthor).",
  "Julia Neusner, Daniel Salazar, Ama Francis, David Cremins, Charlotte Finegold, and Nastaran Far, Climate of Coercion: Environmental and Other Drivers of Cross-Border Displacement in Central America and Mexico. Human Security Initiative, U.S. Committee for Refugees and Immigrants, and International Refugee Assistance Project, March 2023.",
  "Julia Neusner, Kennji Kizuka, Eleanor Acer, Ana Ortega, and Alejandra Aguilar Ruiz, Human Rights Stain, Public Health Farce: Evasion of Asylum Law and Title 42 Abuse Must End— and Never Be Revived. Human Rights First, December 2022.",
  "Addressing the Human Rights Implications of Climate Change Displacement: Submission by Human Rights First to the U.N. Special Rapporteur on Protection of Human Rights in the Context of Climate Change. Nov. 2022 (coauthor).",
  "Julia Neusner and Kennji Kizuka, Fatally Flawed: 'Remain in Mexico' Policy Should Never Be Revived. Human Rights First, September 2022.",
  "U.S. Asylum and Border Policies Resulting in Human Rights Violations: Human Rights First's Submission for the Office of the High Commissioner for Human Rights (OHCHR) Special Rapporteur on the Human Rights of Migrants. March 2022 (lead coauthor).",
  "Examining the Court-Ordered Reimplementation of the Remain in Mexico Policy: Human Rights First Statement for the Record. U.S. House, Committee on Homeland Security, Subcommittee on Border Security, Facilitation, and Operations. March 2022 (lead coauthor).",
  "Julia Neusner and Kennji Kizuka, The Nightmare Continues: Title 42 Court Order Prolongs Human Rights Abuses, Extends Disorder at U.S. Borders. Human Rights First, June 2022.",
  "Restoring and Extending Protections in the United States for Displaced Persons Impacted by Climate Change: Submission by Human Rights First to the OHCHR Special Rapporteur on the promotion and protection of human rights in the context of climate change. Human Rights First, June 2022 (lead coauthor).",
  "Julia Neusner and Kennji Kizuka, Extending Title 42 Would Escalate Dangers, Exacerbate Disorder, and Magnify Discrimination. Human Rights First, April 2022.",
  "Julia Neusner and Kennji Kizuka, Two Years of Suffering: Biden Administration Continues Use of Discredited Title 42 Order to Flout Refugee Law. Human Rights First, March 2022.",
  "Julia Neusner and Kennji Kizuka, Restarting Orderly Process Critical to Managing Arrival of Asylum Seekers at Arizona Border. Human Rights First, February 2022.",
  "Julia Neusner and Ana Ortega, 'Nothing Humane About This Process:' Biden Administration Launches 'Remain in Mexico' Revamp at El Paso Port of Entry. Human Rights First, Dec. 2021.",
  "Julia Neusner and Kennji Kizuka, Inhumane Again: Remain in Mexico Rollout Confirms Endemic Flaws of Unfixable Policy. Human Rights First, Dec. 2021.",
  "Julia Neusner and Kennji Kizuka, Border Restrictions Lift, But Biden Administration Blocks Protection for Asylum Seekers and Children. Human Rights First, November 2021.",
  "Emergency Request for Precautionary Measures Pursuant to Article 25 of the Rules of Procedure of the Inter-American Commission on Human Rights on Behalf of Asylum Seekers Who Have Been or Would Be Expelled from the United States Under the Title 42 Policy. Oct. 2021 (coauthor).",
  "Julia Neusner and Kennji Kizuka, 'Illegal and Inhumane': Biden Administration Continues Embrace of Trump Title 42 Policy as Attacks on People Seeking Refuge Mount. Human Rights First, Oct. 2021.",
  "Julia Neusner and Kennji Kizuka, Biden Administration's Dangerous Haitian Expulsion Strategy Escalates the U.S. History of Illegal and Discriminatory Mistreatment of Haitians Seeking Safety in the United States. Human Rights First, Sept. 2021.",
  "Declaration of Julia Neusner in Huisha-Huisha v. Mayorkas, Aug. 2021.",
  "Julia Neusner, Rebecca Gendelman, Kennji Kizuka, and Ana Ortega, Human Rights Travesty: Biden Administration Embrace of Trump Asylum Expulsion Policy Endangers Lives, Wreaks Havoc. Human Rights First, Aug. 2021.",
  "Julia Neusner and Kennji Kizuka, Disorderly and Inhumane: Biden Administration Continues to Expel Asylum Seekers to Danger While U.S. Border Communities Stand Ready to Welcome. Human Rights First, July 2021.",
  "Rebecca Gendelman, Julia Neusner, and Kennji Kizuka, Failure to Protect: Biden Administration Continues Illegal Trump Policy to Block and Expel Asylum Seekers to Danger. Human Rights First, 20 April 2021.",
  "Illegal Pushbacks by the United States of People Seeking Refugee Protection: Human Rights First's Submission to the Office of the High Commissioner for Human Rights (OHCHR) Special Rapporteur on the Human Rights of Migrants. Feb. 2021 (lead coauthor).",
]

const blogsAndColumns = [
  "Julia Neusner, Unbearable Heat: Climate Displacement and Hardened Borders in the Americas. Dejusticia, February 2024.",
  "Julia Neusner and Tana Ganeva, No Vacancies at the Hotel Roosevelt, Truthdig, August 2023.",
  "Julia Neusner, To Protect Climate-Displaced People, the United States Must Restore Asylum Access, JURIST, Apr. 2023.",
  "Julia Neusner, In San Diego, Remain in Mexico revamp is a due process disaster. Daily Journal, May 2022.",
  "Julia Neusner, A Year After Del Rio, Haitian Asylum Seekers Expelled Under Title 42 Are Still Suffering. Human Rights First, Sep. 2022.",
  "Julia Neusner, Kennji Kizuka, and Ana Ortega, A Shameful Record: Biden Administration's Use of Trump Policies Endangers People Seeking Asylum. Human Rights First, Jan. 2022.",
  "Julia Neusner and Emem Maurus, To Protect the Lives of LGBTQ Asylum Seekers, the Biden Administration Must Fully End Title 42. Human Rights First, July 2021.",
  "Julia Neusner, 'They Lied to Us': Biden Administration Continues to Expel, Mistreat Families Seeking Asylum. Human Rights First, May 2021.",
  "Julia Neusner, Kidnapped, Raped, and Robbed: Dangerous Title 42 Expulsions to Mexico Continue. Human Rights First, May 2021.",
  "Julia Neusner, 'We Need Someone to See Us': To Save Lives, the Biden Administration Should Quickly Restore Refugee Protection. Human Rights First, Jan. 2021.",
  "Julia Neusner, After Two Years, 'Remain' Remains, and its Human Toll Keeps Rising. Daily Journal, 25 Jan. 2021.",
]

const conferences = [
  "Planning for Climate Mobility in Latin America and the Caribbean, MR2025: Mobility, Adaptation, and Wellbeing in a Changing Climate Conference, Panelist, Columbia University, New York, NY (June 2025).",
  "Environmental Changes and Migration: 3rd Annual ECMN Conference, Environment and Climate Mobilities Network, Invited Presenter, Bonn, Germany (July 2025).",
  "Phenomenological Accounts of Displacement and Disappearance, Mapping Absence Symposium, Stanford Center for Latin American Studies, Panelist, Stanford, CA (May 2025).",
  "Climate, Migration, and Refugee Protection, UC Santa Cruz Undergraduate Sociology Course, Guest Lecturer, Santa Cruz, CA (April 2025).",
  "A Deadly Cycle: Climate Change, Displacement, and Dangerous Journeys, Witness at the Border's Workshop for Justice, Ajo, AZ (May 2025).",
  "Framing Climate Migration: Science and Policies for a New Consensus, Yale Center for Environmental Justice, Research Advising and Ongoing Project Partner, New Haven, CT (Spring 2025).",
  "Sociology of the Environment, University of British Columbia Undergraduate Course, Guest Lecturer, Remote (February 2025).",
  "Linking Climate Change, Habitability, and Social Tipping Points: Scenarios for Climate Migration, HABITABLE Conference, Invited Presenter, Nairobi, Kenya (December 2024).",
  "Stanford Women in Law, Invited Guest Speaker, Stanford University, Stanford, CA (November 2024).",
  "Human and Planetary Health, Stanford Undergraduate Course, Guest Lecturer, Stanford, CA (October 2024).",
  "Environmental Changes and Migration: Bridging Disciplines for a New Research Agenda, Environment and Climate Mobilities Network Conference, Invited Presenter, Liège, Belgium (July 2024).",
  "Climate, Displacement, and Migration: Where Do We Go from Here?, Law and Society Association Annual Meeting (Roundtable), Presenter, Denver, CO (June 2024).",
  "Immigration, Culture, and the Law, Institute for Humane Studies Academic Research Symposium, Invited Participant, Denver, CO (June 2024).",
  "Climate Change and Migration, Elisabeth Haub School of Law at Pace University, Law Course Guest Lecturer, New York, NY (March 2024).",
  "Climate Change and Human Mobility, Stanford Graduate School of Business Conference, Conference Organizer and Host, Stanford, CA (May 2024).",
  "Climate Displacement, Migration & Mobility, Stanford Graduate Course, Guest Lecturer, Stanford, CA (April 2024).",
  "Climate Refugees and the Impacts on Global Health and Human Rights, Consortium of Universities for Global Health Conference, Invited Panelist, Los Angeles, CA (March 2024).",
  "Imagining Humane Borders, Witness at the Border Conference, Invited Panelist, Ajo, AZ (January 2024).",
  "Human and Planetary Health, Stanford Undergraduate Course, Guest Lecturer, Stanford, CA (October 2023).",
  "Transformational Developments in International Environmental Law, Case Western Reserve Journal of International Law Symposium, Invited Panelist, Cleveland, OH (September 2023).",
  "Climate Justice, Law and Society Association Annual Meeting (Paper Session), Presenter, San Juan, Puerto Rico (June 2023).",
  "Climate of Coercion: Environmental and Other Drivers of Cross-Border Displacement in Central America and Mexico, U.S. Committee for Refugees and Immigrants Webinar, Panelist, Online (May 2023).",
  "Movement in a Warming World: Legal and Policy Responses to Climate-Induced Displacement, Stanford Human Rights Law Association Event, Invited Panelist, Stanford, CA (March 2023).",
  "Title 42 & Its Implications, Stanford Law School American Constitutional Society Event, Invited Panelist, Stanford, CA (January 2023).",
  "Remain in Mexico Should Never Be Revived, Human Rights First Webinar, Panelist, Online (September 2022).",
  "Migration, Human Rights, and Asylum at the Border, Stanford Undergraduate Course, Guest Lecturer, Stanford, CA (May 2022).",
  "Center for Latin American Studies Digital Investigations Lab, UC Santa Cruz Undergraduate Course, Guest Lecturer, Santa Cruz, CA (May 2022).",
  "Human Rights Investigations, UC Berkeley Undergraduate/Graduate Course, Guest Lecturer, Berkeley, CA (October 2022).",
]

const mediaOutlets = [
  "Migration Policy Institute's Changing Climate, Changing Migration podcast",
  "Democracy Now!",
  "The Cut (New York Magazine)",
  "The New York Times",
  "Here and Now (WBUR National Public Radio)",
  "The Los Angeles Times",
  "The San Francisco Chronicle",
  "Milenio",
  "Al Jazeera",
  "The Washington Post",
  "Buzzfeed News",
  "People Magazine",
  "Reuters",
  "KPBS Public Media",
  "Prism Reports",
  "Univisión",
  "Dame Magazine",
  "Inside Climate News",
  "Radio Cachimbona",
  "CBS News",
  "E.W. Scripps Company",
  "Stanford Human Rights Center's The Rights Pod",
  "Stanford Legal Podcast",
]

function PublicationSection({
  title,
  items,
}: {
  title: string
  items: string[]
}) {
  return (
    <section className="mb-12">
      <h2 className="mb-6 font-serif text-2xl font-bold text-foreground">
        {title}
      </h2>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="border-l-2 border-primary/20 pl-4 text-sm leading-relaxed text-muted-foreground hover:border-primary/50 transition-colors"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function JuliaNeusnerPublications() {
  return (
    <>
      <Navigation />
      <main className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          {/* Back link */}
          <Link
            href="/#team"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Team
          </Link>

          {/* Header */}
          <header className="mb-12">
            <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
              Julia Neusner
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Research, Writing, and Speaking
            </p>
            <div className="mt-4 flex items-center gap-4">
              <a
                href="mailto:julia@humsi.org"
                className="inline-flex items-center gap-1.5 text-sm text-primary transition-colors hover:text-primary/80"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
            </div>
          </header>

          {/* Publications sections */}
          <PublicationSection title="Academic Articles" items={academicArticles} />
          <PublicationSection
            title="Legal Writing and Advocacy Reports"
            items={legalWriting}
          />
          <PublicationSection title="Blogs and Columns" items={blogsAndColumns} />
          <PublicationSection
            title="Conferences, Lectures, and Presentations"
            items={conferences}
          />

          {/* Media Section */}
          <section className="mb-12">
            <h2 className="mb-6 font-serif text-2xl font-bold text-foreground">
              Media Appearances
            </h2>
            <p className="mb-4 text-sm text-muted-foreground">
              Interviewed for:
            </p>
            <div className="flex flex-wrap gap-2">
              {mediaOutlets.map((outlet, index) => (
                <span
                  key={index}
                  className="rounded-md bg-secondary px-3 py-1.5 text-xs font-medium text-muted-foreground"
                >
                  {outlet}
                </span>
              ))}
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
