export interface Question {
  id: number;
  hint: string;
  answer: string;
  choicePool: string[];
}

// Starter question bank, carried over from the original Bronze Atlas Studios
// prototype this game's flow was adapted from. Expand freely — each entry
// needs 3 distractors alongside the correct answer.
export const QUESTIONS: Question[] = [
  {
    id: 1,
    hint: "This landlocked country in Central Asia borders both Russia and China.",
    answer: "Kazakhstan",
    choicePool: ["Mongolia", "Kazakhstan", "Uzbekistan", "Turkmenistan"],
  },
  {
    id: 2,
    hint: "The world's second-largest island sits northeast of Australia.",
    answer: "New Guinea",
    choicePool: ["Borneo", "Madagascar", "New Guinea", "Sumatra"],
  },
  {
    id: 3,
    hint: "This city on the Bosphorus Strait straddles two continents.",
    answer: "Istanbul",
    choicePool: ["Cairo", "Athens", "Istanbul", "Ankara"],
  },
  {
    id: 4,
    hint: "Africa's smallest mainland country is almost entirely surrounded by Senegal.",
    answer: "Gambia",
    choicePool: ["Gambia", "Guinea-Bissau", "Sierra Leone", "Benin"],
  },
  {
    id: 5,
    hint: "This South American country has coastlines on both the Pacific Ocean and the Caribbean Sea.",
    answer: "Colombia",
    choicePool: ["Venezuela", "Ecuador", "Colombia", "Peru"],
  },
];
