// Board members listed by name and current job title under the team grid,
// without a photo card or bio (Julia, Nov 19 2026). Kept out of
// lib/content.ts so the list shows whether or not a saved content file
// overrides the defaults, and so the client component imports no server code.
export interface ListedBoardMember {
  name: string;
  title?: string;
}

export const listedBoardMembers: ListedBoardMember[] = [];

// Board members who have a photo card in the team grid (their entries are in
// lib/content.ts, where their role is "Board of Directors"). Under the "Board
// of Directors" heading the card shows the person's current job title in
// place of that role (Julia, Nov 19 2026). Organizations are written out in
// full, never as acronyms, and every title on this page is written
// "Title, Organization" with a comma, never "at" (Julia, same day). Keyed by
// the name on the card.
export const boardCardTitles: Record<string, string> = {
  "Marlena Wisniak":
    "Head of Digital, European Center for Not-for-Profit Law",
  "Elizabeth Evans": "Capital Projects Fellow, New City Parks",
  "Lindsey Andersen": "Director, Business for Social Responsibility",
  "Ahmed Gaya":
    "Director, Climate Justice Collaborative, National Partnership for New Americans",
  "Jaryd Saevitzon": "Staff Software Engineer, Uber",
};
