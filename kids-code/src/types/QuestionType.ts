export type Question = {
  id: number;
  question: string;
  answers: string[];
  correctIndex: number;
  fact: string;
};

export type QuestionTrueOrFalse = {
  id: number;
  question: string;
  answer: boolean;
  fact: string;
};
