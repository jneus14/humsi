// Board members listed by name and current job title under the team grid,
// without a photo card or bio (Julia, Nov 19 2026). Kept out of
// lib/content.ts so the list shows whether or not a saved content file
// overrides the defaults, and so the client component imports no server code.
export interface ListedBoardMember {
  name: string;
  title?: string;
}

export const listedBoardMembers: ListedBoardMember[] = [
  {
    name: "Ahmed Gaya",
    title:
      "Director of the Climate Justice Collaborative at the National Partnership for New Americans",
  },
  { name: "Jaryd Saevitzon", title: "Software Engineer at Uber" },
];
