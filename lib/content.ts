import { put, get } from "@vercel/blob";

export interface HeroContent {
  tagline: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export interface MissionPillar {
  title: string;
  description: string;
}

export interface MissionContent {
  title: string;
  subtitle: string;
  description: string;
  pillars: MissionPillar[];
}

export interface WorkProject {
  id: string;
  title: string;
  description: string;
  details: string[];
  partners: string[];
  publications: { title: string; url: string; featured?: boolean }[];
  externalLink?: string;
}

export interface WorkContent {
  title: string;
  subtitle: string;
  projects: WorkProject[];
}

export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  photo?: string;
  photoPosition?: string;
  link: string;
  bio: string;
  publicationsLink?: string;
}

export interface TeamContent {
  title: string;
  subtitle: string;
  members: TeamMember[];
}

export interface ContactContent {
  title: string;
  subtitle: string;
  email: string;
  linkedin: string;
}

export interface SiteContent {
  hero: HeroContent;
  mission: MissionContent;
  work: WorkContent;
  team: TeamContent;
  contact: ContactContent;
}

const CONTENT_PATH = "site-content.json";

export async function getContent(): Promise<SiteContent> {
  try {
    const result = await get(CONTENT_PATH, { access: "private" });
    
    if (result && result.stream) {
      const text = await new Response(result.stream).text();
      return JSON.parse(text);
    }
  } catch (error) {
    // File doesn't exist yet, return defaults
    console.log("No saved content found, using defaults");
  }
  
  return getDefaultContent();
}

export async function saveContent(content: SiteContent): Promise<void> {
  await put(CONTENT_PATH, JSON.stringify(content, null, 2), {
    access: "private",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}

export function getDefaultContent(): SiteContent {
  return {
    hero: {
      tagline: "Human Security Initiative",
      title: "Safety and dignity for all",
      subtitle:
        "HUMSI leads research, advocacy, and education to protect human rights and promote security for vulnerable people.",
      ctaText: "Learn About Our Work",
      ctaLink: "#work",
    },
    mission: {
      title: "Our Mission",
      subtitle: "Research, Advocacy, Education",
      description:
        "The Human Security Initiative is a 501(c)(3) nonprofit organization dedicated to promoting safety and dignity for all people through three interconnected approaches.",
      pillars: [
        {
          title: "Research",
          description:
            "Conducting rigorous research and analysis on human rights and global justice issues to inform policy and practice.",
        },
        {
          title: "Advocacy",
          description:
            "Working with communities, policymakers, and institutions to advance protections for vulnerable people.",
        },
        {
          title: "Education",
          description:
            "Developing educational materials and trainings on global justice issues and advocacy.",
        },
      ],
    },
    work: {
      title: "Our Work",
      subtitle: "",
      projects: [
        {
          id: "human-impact",
          title: "Human Impact Project",
          description:
            "The Human Impact Project is a living database that tracks, organizes, and archives stories of harm from U.S. immigration enforcement. The site preserves accounts of deportations, detentions, officer misconduct, family separations, and other impacts and sorts stories by incident type and person impacted. History has shown that documentation is essential for justice and accountability. This tool preserves evidence and facilitates a comprehensive understanding of harm.",
          details: [],
          partners: [],
          publications: [],
          externalLink: "https://hiproject.org",
        },
        {
          id: "climate",
          title: "Climate, Environment & Displacement",
          description:
            "HUMSI conducts field research at the U.S.-Mexico border examining the intersection of environmental conditions with other root causes of displacement. Our work includes consultation for IRAP's Climate program, development of practice guides for climate-related asylum claims, and legal frameworks to protect climate-displaced populations.",
          details: [],
          partners: [
            "International Refugee Assistance Project (IRAP)",
            "Stanford Law School",
            "U.S. Committee for Refugees and Immigrants",
            "Las Americas Immigrant Advocacy Center",
          ],
          publications: [
            {
              title: "Climate of Coercion: Environmental and Other Drivers of Cross-Border Displacement",
              url: "https://refugeerights.org/news-resources/climate-of-coercion-environmental-and-other-drivers-of-cross-border-displacement-in-central-america-and-mexico",
              featured: true,
            },
            {
              title: "Danger by Design: How Climate Injustice Harms Displaced People at the U.S.-Mexico Border",
              url: "https://refugeerights.org/news-resources/danger-by-design-how-climate-injustice-harms-displaced-people-at-the-u-s-mexico-border",
            },
            {
              title: "Practice Guide on U.S. Refugee Protection Claims Related to Climate Change",
              url: "https://refugeerights.org/news-resources/practice-guide-climate",
            },
          ],
        },
        {
          id: "mobility",
          title: "Cross-Border Mobility & Migration",
          description:
            "HUMSI conducts research examining conditions faced by displaced people along migration routes in the Americas. Our work includes documenting violence, environmental impacts, and other challenges along migration routes to support advocacy for safe and legal migration pathways. HUMSI led field research and a coalition report on challenges faced by individuals crossing the Darién Gap connecting Colombia and Panama.",
          details: [],
          partners: [
            "Immigrant Defenders Advocacy Center",
            "Quixote Center",
            "Las Americas Immigrant Advocacy Center",
            "Witness at the Border",
            "American Immigration Council",
            "Red Franciscana Para Migrantes",
          ],
          publications: [
            {
              title: "Danger in the Darién Gap Report",
              url: "https://quixote.org/danger-in-the-darien-gap-human-rights-abuses-and-the-need-for-humane-pathways-to-safety",
              featured: true,
            },
            {
              title: "Deadly Journeys: Climate Change, U.S. Border Enforcement, and Human Rights",
              url: "https://scholarlycommons.law.case.edu/jil/vol56/iss1/16/",
            },
          ],
        },
        {
          id: "legal",
          title: "Education & Training",
          description:
            "HUMSI provides research, writing, and support for Stanford Law School's Rule of Law Program, including a legal education project on the laws and legal institutions of Rwanda with University of Rwanda faculty. HUMSI's director also delivers guest lectures and trainings on climate-related mobility and border policy at universities including UC Berkeley, Stanford, and UC Santa Cruz.",
          details: [],
          partners: ["Stanford Law School", "University of Rwanda Law School", "UC Berkeley", "Stanford", "UC Santa Cruz"],
          publications: [],
        },
      ],
    },
    team: {
      title: "Our Team",
      subtitle: "Leadership & Board",
      members: [
        {
          name: "Julia Neusner",
          role: "Executive Director",
          initials: "JN",
          photo: "/images/team/julia.jpg",
          photoPosition: "object-[center_20%]",
          link: "",
          bio: "Julia Neusner is a lawyer and researcher focusing on migration and human rights. She has worked as an attorney with the International Refugee Assistance Project, the Stanford Migration and Asylum Lab, and Human Rights First. Her work includes extensive field research at the U.S.-Mexico border examining the impact of U.S. policies and the intersection of climate change with human mobility. Julia received her JD and MA in International Policy from Stanford University.",
          publicationsLink: "/team/julia-neusner/publications",
        },
        {
          name: "Anna MacLennan",
          role: "Research & Advocacy Specialist",
          initials: "AM",
          photo: "/images/anna-maclennan.jpg",
          photoPosition: "object-[center_15%] scale-125",
          link: "",
          bio: "Anna MacLennan is a Research and Advocacy Specialist. A Harvard graduate with a Bachelor's in Government and a focus on Data Science, she has previously worked in policy and communications supporting pro-refugee advocacy at both the Refugee Advocacy Lab and the International Refugee Assistance Project. Anna also has significant firsthand experience supporting refugees, including three months providing humanitarian aid to women and children on the move at the France-UK border crisis in Calais, France. More recently, she volunteered with No More Deaths providing desert aid near the US-Mexico border in southern Arizona. Anna has also interned at the U.S. Committee for Refugees and Immigrants providing case management support to refugees and asylees in North Carolina. At Harvard, Anna was deeply involved in outreach work with Boston's Chinatown immigrant communities and was awarded Harvard's top prize for undergraduate research for her senior thesis about anti-immigrant misinformation. Anna is from Cincinnati, OH, with additional roots in Vancouver, Canada.",
        },

        {
          name: "Ashwin Prabu",
          role: "Data & Research Specialist",
          initials: "AP",
          photo: "/images/team/ashwin.jpg",
          photoPosition: "object-[center_20%]",
          link: "",
          bio: "Ashwin Prabu is a postgraduate fellow at the European Center for Not-for-Profit Law, where he works at the intersection of AI governance and human rights. He has experience in immigrant advocacy through a legal internship at Innovation Law Lab, where he managed immigration legal logistics and supported clients at Portland's asylum welcome center. His honors thesis, \"Freedom or Control? Expanding a Relational Understanding of ICE's Alternatives to Detention Program,\" investigates how surveillance technology is used by immigration enforcement, drawing on semi-structured interviews with former ICE agents and ethnographic fieldwork at the San Francisco ICE field office and immigration court. Ashwin has presented his findings to leading immigrant's rights organizations to inform their advocacy. His thesis was awarded Stanford's Firestone Medal for Excellence in Undergraduate Research and has recently been cited by The Guardian. Ashwin graduated from Stanford University with a bachelor's degree in Data Science and Social Systems, a minor in Comparative Studies in Race and Ethnicity (CSRE), interdisciplinary honors in CSRE, university distinction, and membership in Phi Beta Kappa. He is currently based in Washington, D.C.",
        },
        {
          name: "Marlena Wisniak",
          role: "Board of Directors",
          initials: "MW",
          photo: "/images/team/marlena.jpg",
          photoPosition: "object-[center_20%]",
          link: "",
          bio: "Marlena is a human rights lawyer with over a decade of experience at the intersection of technology and human rights. She leads policy and advocacy on digital rights at the European Center for Not-for-Profit Law. Previously, she oversaw content governance on Twitter's legal team and the civil society portfolio at Partnership on AI. She holds degrees from Stanford Law School and the University of Geneva.",
        },
        {
          name: "Elizabeth Evans",
          role: "Board of Directors",
          initials: "EE",
          photo: "/images/team/elizabeth.jpg",
          photoPosition: "object-[center_20%]",
          link: "",
          bio: "Elizabeth Evans is an experienced litigator admitted to the New York Bar with a background in nonprofit fundraising. She served as Counsel at O'Melveny & Myers LLP and previously clerked for a U.S. District Judge. Elizabeth also served as Senior Development Coordinator at the American Museum of Natural History. She earned her J.D. from Fordham University School of Law.",
        },
        {
          name: "Sara Kostanteen",
          role: "Board of Directors",
          initials: "SK",
          photo: "/images/sara-kostanteen.jpeg",
          photoPosition: "object-[center_20%]",
          link: "",
          bio: "Sara Kostanteen is a management consultant and strategic operator with over a decade of experience advising Fortune 500 companies and high-growth brands on GTM strategy, AI transformation, and organizational design. Born and raised in Egypt, Sara immigrated to the United States and earned a merit-based scholarship to Yale School of Management, where she received her MBA. Beyond her professional work, Sara has served as a Special Advocate with San Francisco CASA, championing foster youth in the court system. She is passionate about using her platform and skills to support communities navigating systems that were not built with them in mind.",
        },
        {
          name: "Lindsey Andersen",
          role: "Board of Directors",
          initials: "LA",
          photo: "/images/team/lindsey.jpg",
          photoPosition: "object-[center_20%]",
          link: "",
          bio: "Lindsey Andersen advises companies on the responsible development and deployment of technology as a Director at BSR. She has a background in international human rights, with a focus on digital rights and digital security, and previously worked on these issues at Internews and Access Now. Lindsey has a Masters in public policy from Princeton University.",
        },
      ],
    },
    contact: {
      title: "Get in Touch",
      subtitle:
        "Interested in partnering with us or learning more about our work? We'd love to hear from you.",
      email: "info@humsi.org",
      linkedin: "https://www.linkedin.com/company/humansecurityinitiative/",
    },
  };
}
