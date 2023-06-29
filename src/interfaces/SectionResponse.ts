export interface ISectionResponse {
  id: string;
  section: 'Listening' | 'Reading' | 'Writing' | 'Speaking';
  questions: IQuestionResponse[];
}

export interface IQuestionResponse {
  questionType?: QuestionType;
  id: string;
  answers: IAnswerResponse[];
}
export interface IAnswerResponse {
  id?: string;
  value?: string;
  isTrue?: boolean;
  audio?: File;
}

export type QuestionType =
  | 'Single choice'
  | 'Multiple choice'
  | 'Gap filling'
  | 'Information identification'
  | 'Information matching'
  | 'Head Matching'
  | 'Sentence completion'
  | 'Summary completion';
