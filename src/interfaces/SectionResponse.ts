export interface ISectionResponse {
  id: string;
  section: 'Listening' | 'Reading' | 'Writing' | 'Speaking';
  questions: IQuestionResponse[];
}

export interface IQuestionResponse {
  questionType?: string;
  id: string;
  answers: IAnswerResponse[];
}
export interface IAnswerResponse {
  id?: string;
  value?: string;
  audio?: File;
}
