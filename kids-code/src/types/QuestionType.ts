export type Question = {
  id: number;
  question: string;
  answers: {answer: string}[];
  correctIndex: number;
  fact: string;
};

export type QuestionTrueOrFalse = {
  id: number;
  question: string;
  answer: boolean;
  fact: string;
};
