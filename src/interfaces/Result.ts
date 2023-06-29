interface IExamResult {
  id: string;
  userId: string;
  section: string;
  examId: string;
  title: string;
  createdAt: string;
  numberOfTrueQuestion: number;
  score: number;
  scoreId: null | string;
  totalQuestion: number;
}
