export interface ISectionResponse {
  id: string;
  section: 'Listening' | 'Reading' | 'Writing' | 'Speaking';
  questions: {
    questionType?: string;
    id: string;
    answers: {
      id?: string;
      value?: string;
      audio?: File;
    }[];
  }[];
}
