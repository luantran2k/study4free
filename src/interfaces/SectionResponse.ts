export interface ISectionResponse {
  id: string;
  section: 'Listening' | 'Reading' | 'Writing' | 'Speaking';
  questions: {
    id: string;
    answers: {
      id?: string;
      value?: string;
      audio?: File;
    }[];
  }[];
}
