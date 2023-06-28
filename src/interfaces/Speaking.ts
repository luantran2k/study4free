export interface IListeningAnswer {
  id: string;
  image?: string | null;
  isTrue?: boolean | null;
  value?: string;
  listeningQuestionId: string;
}
