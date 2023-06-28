export interface IReadingAnswer {
  id: string;
  image?: string | null;
  isTrue?: boolean | null;
  value?: string;
  readingQuestionId: string;
}
