

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/activities", label: "Activities" },
  { href: "/survey", label: " Survey" },
  { href: "/invite-us", label: "Invite Us" },
];

export const filter = [
  {
    name: "All",
  },
  {
    name: "Laptop",
  },
  {
    name: "Paper",
  },
];

export const allActivities = [
  {
    name: "Binary Numbers",
    instructionPDF: "/BNInstructions.pdf",
    worksheetPDF: "/BinaryNumbersWorksheet.pdf",
    keyPDF: "/assets/BinaryNumbersKey.pdf",
    subdesc: "Laptop",
    path: "/details/:activityIndex",      
  },
  {           
    name: "Blocky",
    description: "Something will go here about the activity",
    instructionPDF: "../assets/BlocklyGamesMazeActivity.pdf",
    keyPDF: "../assets/BlockyGameMazeActivityKey.pdf",
    subdesc: "Paper",
    path: "/details/:activityIndex",
  },
  {
    name: "Fibonnaci",
    description: "Something will go here about the activity",
    href: "link to page",
    subdesc: "Laptop",
    path: "/details/:activityIndex",
  },
  {
    name: "Insertion Sort",
    description: "Something will go here about the activity",
    href: "link to page",
    subdesc: "Paper",
    path: "/details/:activityIndex",
  },
  {
    name: "Minecraft",
    description: "Something will go here about the activity",
    href: "link to page",
    subdesc: "Laptop",
    path: "/details/:activityIndex",
  },
  {
    name: "Pseudocode",
    description: "Something will go here about the activity",
    href: "link to page",
    subdesc: "Paper",
    path: "/details/:activityIndex",
  },
  {
    name: "Scratch",
    description: "Something will go here about the activity",
    href: "link to page",
    subdesc: "Laptop",
    path: "/details/:activityIndex",
  },
  {
    name: "Snap",
    description: "Something will go here about the activity",
    href: "link to page",
    subdesc: "Laptop",
    path: "/details/:activityIndex",
  },
];
