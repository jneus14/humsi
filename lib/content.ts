export interface HeroContent {
  tagline: string;
  title: string;
  subtitle: string;
  highlight?: string;
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
  // Crop of the round photo in the bio popup, when the default (centered,
  // whole width) leaves the face small or off center.
  avatarPosition?: string;
  link: string;
  bio: string;
  email?: string;
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
  mailingAddress: string[];
  linkedin: string;
  x: string;
  instagram: string;
  bluesky: string;
}

export interface SiteContent {
  hero: HeroContent;
  mission: MissionContent;
  work: WorkContent;
  team: TeamContent;
  contact: ContactContent;
}

// The site's text lives in this file. (Until Nov 2026 two unused functions
// here could read and write it in Vercel Blob; no page ever called them.)
export function getDefaultContent(): SiteContent {
  return {
    hero: {
      tagline: "Human Security Initiative",
      title: "Safety and dignity for all",
      subtitle:
        "HUMSI leads research, advocacy, and education to protect human rights and promote security for vulnerable people.",
      highlight:
        "We're documenting more than 7,000 stories of people impacted by U.S. immigration enforcement.",
      ctaText: "Learn About Our Work",
      ctaLink: "#work",
    },
    mission: {
      title: "Our Mission",
      subtitle: "Research, Advocacy, Education",
      description:
        "Human Security Initiative (HUMSI) is a 501(c)(3) nonprofit organization that works for the safety and dignity of all people. Human security means freedom from fear, freedom from want and the freedom to live in dignity. HUMSI works for these freedoms for people who are often left unprotected, including migrants and asylum seekers, people detained or deported, and people forced from their homes by violence, persecution or disaster. We research and document the harm they face, in their own words wherever we can, and use that evidence in advocacy, legal work and education for protection and accountability.",
      pillars: [
        {
          title: "Research",
          description:
            "Conducting field research and analysis on human rights and global justice issues, grounded in the firsthand experiences of affected people. Recent work includes studies of climate-related displacement, documentation of conditions along migration routes, and interviews with 84 people deported to southern Mexico, whose stories are published in the Human Impact Project.",
        },
        {
          title: "Advocacy",
          description:
            "Through the Human Impact Project, we keep a public record of more than 7,000 reported incidents of harm from U.S. immigration enforcement, and we share that evidence with lawyers, advocates, journalists, policymakers and United Nations human rights experts to advance protections for vulnerable people.",
        },
        {
          title: "Education",
          description:
            "Developing practice guides, trainings, and legal education for advocates, practitioners, and universities. HUMSI lectures on climate and migration at U.S. universities and leads a legal education partnership with the University of Rwanda.",
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
            "The Human Impact Project is a public record of what U.S. immigration enforcement has done to people. The database holds more than 7,000 reported incidents, including deaths in custody, arrests of U.S. citizens, raids on homes and workplaces, medical neglect in detention, and deportations to countries people had never lived in. Stories are drawn from news reporting, federal court records, government oversight reports, community accounts, family fundraisers and social media, and the database adds testimony from HUMSI's own interviews with people deported from the United States. A person reviews every story before it is published, and every source is archived so the record survives if the original reporting disappears. Its analysis pages show the practices that recur across stories, profile detention facilities, follow more than 1,200 habeas cases through the federal courts, and connect government actions and court rulings to the people they reached. The Human Impact Project is an affiliated project of CodeX, the Stanford Center for Legal Informatics.",
          details: [],
          partners: [],
          publications: [],
          externalLink: "https://hiproject.org",
        },
        {
          id: "health",
          title: "Health Impacts of Detention & Deportation",
          description:
            "HUMSI is leading a research project on the health impacts of detention and deportation with Physicians for Human Rights and Las Americas Immigrant Advocacy Center, including interviews in September 2026 with 84 people deported to southern Mexico. The report will be published in early 2027.",
          details: [],
          partners: [
            "Physicians for Human Rights",
            "Las Americas Immigrant Advocacy Center",
          ],
          publications: [],
        },
        {
          id: "climate",
          title: "Climate, Environment & Displacement",
          description:
            "HUMSI built the U.S. Climate-Related Displacement map, its newest project. Using the Human Impact Project's methods, it gathers reports of people in the United States forced from their homes by wildfires, hurricanes, floods and other climate-related disasters, and shows each story on a map by disaster and place, with its sources archived. HUMSI has also produced field research and resources for advocates and policymakers on climate change, displacement and the protection of people forced to move.",
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
          externalLink: "https://www.humsi.org/uscd",
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
          email: "julia@humsi.org",
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
          email: "anna@humsi.org",
        },

        {
          name: "Ashwin Prabu",
          role: "Data & Research Specialist",
          initials: "AP",
          photo: "/images/team/ashwin.jpg",
          photoPosition: "object-[center_20%]",
          link: "",
          bio: "Ashwin Prabu is a postgraduate fellow at the European Center for Not-for-Profit Law, where he works at the intersection of AI governance and human rights. He has experience in immigrant advocacy through a legal internship at Innovation Law Lab, where he managed immigration legal logistics and supported clients at Portland's asylum welcome center. His honors thesis, \"Freedom or Control? Expanding a Relational Understanding of ICE's Alternatives to Detention Program,\" investigates how surveillance technology is used by immigration enforcement, drawing on semi-structured interviews with former ICE agents and ethnographic fieldwork at the San Francisco ICE field office and immigration court. Ashwin has presented his findings to leading immigrant's rights organizations to inform their advocacy. His thesis was awarded Stanford's Firestone Medal for Excellence in Undergraduate Research and has recently been cited by The Guardian. Ashwin graduated from Stanford University with a bachelor's degree in Data Science and Social Systems, a minor in Comparative Studies in Race and Ethnicity (CSRE), interdisciplinary honors in CSRE, university distinction, and membership in Phi Beta Kappa. He is currently based in Washington, D.C.",
          email: "ashwin@humsi.org",
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
          bio: "Elizabeth Evans is a Capital Projects Fellow at New City Parks. She is an experienced litigator admitted to the New York Bar with a background in nonprofit fundraising. She previously served as Counsel at O'Melveny & Myers LLP and clerked for a U.S. District Judge. Elizabeth also served as Senior Development Coordinator at the American Museum of Natural History. She earned her J.D. from Fordham University School of Law.",
        },
        {
          name: "Lindsey Andersen",
          role: "Board of Directors",
          initials: "LA",
          photo: "/images/team/lindsey.jpg",
          photoPosition: "object-[center_20%]",
          link: "",
          bio: "Lindsey Andersen advises companies on the responsible development and deployment of technology as a Director at Business for Social Responsibility. She has a background in international human rights, with a focus on digital rights and digital security, and previously worked on these issues at Internews and Access Now. Lindsey has a Masters in public policy from Princeton University.",
        },
        {
          name: "Ahmed Gaya",
          role: "Board of Directors",
          initials: "AG",
          photo: "/images/team/ahmed.jpg",
          photoPosition: "object-[center_20%]",
          avatarPosition: "object-[center_0%] scale-[1.35] origin-[65%_4%]",
          link: "",
          bio: "Ahmed Gaya directs the Climate Justice Collaborative at the National Partnership for New Americans, a national coalition of immigrant and refugee rights organizations, where he brings the immigrant rights movement into the fight for climate justice and supports leaders displaced by climate change. He has organized in the climate movement for more than twenty years. Prior to founding NPNA's Climate Justice Collaborative, Ahmed helped popularize the concept of the Green New Deal as the Organizing Director for the Sunrise Movement. His family came to the United States from Pakistan.",
        },
        {
          name: "Jaryd Saevitzon",
          role: "Board of Directors",
          initials: "JS",
          photo: "/images/team/jaryd.jpg",
          photoPosition: "object-[center_20%]",
          avatarPosition: "object-[center_0%] scale-[1.3] origin-[50%_40%]",
          link: "",
          bio: "Jaryd Saevitzon is a Staff Software Engineer at Uber, where he has worked since 2021. He previously built software at Splunk and at Amazon Web Services. Jaryd graduated from UCLA with a bachelor's degree in Mathematics of Computation, focused on applied mathematics and its uses in computer science.",
        },
      ],
    },
    contact: {
      title: "Get in Touch",
      subtitle:
        "Interested in partnering with us or learning more about our work? We'd love to hear from you.",
      email: "info@humsi.org",
      mailingAddress: ["PO Box 33", "Oakland, CA 94612"],
      linkedin: "https://www.linkedin.com/company/humsiorg",
      x: "https://x.com/humsiorg",
      instagram: "https://www.instagram.com/humsi_org/",
      bluesky: "https://bsky.app/profile/humsi.bsky.social",
    },
  };
}
