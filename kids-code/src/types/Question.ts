export type Question = {
  id: number;
  question: string;
  answers: {answer: string}[];
  correctIndex: number;
  fact: string;
};
