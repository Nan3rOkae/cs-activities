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
    description:
      "In this activity students will explore how binary numbers are used to represent standard ...",
    longDescription:
      "In this activity students will explore how binary numbers are used to represent standard numbers. They will do so by creating cards similar to a playing card and manipulating those cards to create binary representations of standard numbers. Each card will have dots on them representing the different binary number values. Once students get the basic idea of binary numbers and follow along with examples from the teacher, they can complete their own conversions using the cards they created.",
    instructionPDF: "/BinaryNumbersInstructions.pdf",
    worksheetPDF: "/BinaryNumbersWorksheet.pdf",
    keyPDF: " /BinaryNumbersKey.pdf",
    subdesc: "Paper Activity",
    path: "/details/:activityIndex",
    img: "/Paper.png",
  },
  {
    name: "Blocky",
    description:
      "Blockly Games is a series of educational games that teach programming ...",
    longDescription:
      "Blockly Games is a series of educational games that teach programming. It is designed for children who have not had prior experience with computer programming. By the end of these games, one is ready to use conventional text-based languages.",
    instructionPDF: "/BlocklyGamesMazeActivity.pdf",
    keyPDF: "/BlockyGameMazeActivityKey.pdf",
    subdesc: "Laptop Activity",
    path: "/details/:activityIndex",
    img: "/Laptop.png",
  },
  {
    name: "Fibonnaci",
    description:
      "In mathematics, the Fibonacci sequence is a sequence in which each number ...",
    longDescription:
      "In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones. Numbers that are part of the Fibonacci sequence are known as Fibonacci numbers.",
    instructionPDF: "/FibonacciSequencelessonplan.pdf",
    worksheetPDF: "/FibonacciWorksheetSimple.pdf",
    keyPDF: "/FibonacciSimpleAnswerKey.pdf",
    subdesc: "Paper Activity",
    path: "/details/:activityIndex",
    img: "/Paper.png",
  },
  {
    name: "Insertion Sort",
    description:
      "In mathematics, the Fibonacci sequence is a sequence in which each number ...",
    longDescription:
      "In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones. Numbers that are part of the Fibonacci sequence are known as Fibonacci numbers.",
    instructionPDF: "/InsertionSortingLessonPlan.pdf",
    worksheetPDF: "/InsertionSortWorksheet.pdf",
    // keyPDF: "/InsertionSortWorksheet.pdf",
    subdesc: "Paper Activity",
    path: "/details/:activityIndex",
    img: "/Paper.png",
  },
  {
    name: "Minecraft",
    description:
      "In this lesson, learners of all ages get an introductory experience with coding ...",
    longDescription:
      "In this lesson, learners of all ages get an introductory experience with coding and computer science in a safe, supportive environment. This lesson works well for any students old enough to read (ages 6+). Younger learners will probably not finish the tutorial, but will have lots of fun working through the puzzles for an hour. High school students will mostly finish the tutorial and have some time to play on the free play level at the end.",
    instructionPDF: "/MinecraftInstructions.pdf",
    lessonPlan: "/MinecraftLessonPlan.pdf",
    keyPDF: "/MinecraftKey.pdf",
    subdesc: "Laptop Activity",
    path: "/details/:activityIndex",
    img: "/Laptop.png",
  },
  {
    name: "Pseudocode",
    description:
      "The goal of this exercise is to understand that while a computer has the benefit ...",
    longDescription:
      "The goal of this exercise is to understand that while a computer has the benefit of being extremely fast compared to the speed of humans, humans are able to use certain context clues and common sense to assume information. A computer, on the other hand, only uses the information that is given to it by the programmer and nothing is ever assumed.",
    instructionPDF: "/PseudocodeExercise.pdf",
    worksheetPDF: "/PseudocodeStudentExercise.pdf",
    subdesc: "Paper Activity",
    path: "/details/:activityIndex",
    img: "/Paper.png",
  },
  {
    name: "Scratch",
    description: "Something will go here about the activity",
    href: "link to page",
    subdesc: "Laptop",
    path: "/details/:activityIndex",
    img: "/Laptop.png",
  },
  {
    name: "Snap",
    description:
      "Snap! is a free block-based educational graphical programming language and online ...",
    longDescription:
      "Snap! is a free block-based educational graphical programming language and online community allowing students to explore, create, and remix interactive animations, games, stories, and more, while learning about mathematical and computational ideas.",
    DrawAInstructionsPDF: "/TeacherInstructtionsSnap.pdf",
    // worksheetPDF: "/StudentSnapActivity.pdf",
    subdesc: "Laptop",
    path: "/details/:activityIndex",
    img: "/Laptop.png",
  },
];
