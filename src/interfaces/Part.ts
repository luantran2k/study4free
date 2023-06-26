import IQuestion from './Question';

export type PartType =
  | 'Multiple Choice'
  | 'Gap filling'
  | 'Information identification'
  | 'Information matching'
  | 'Head Matching'
  | 'Sentence completion'
  | 'Summary completion';

export default interface IPart {
  id: string;
  title: string;
  audio?: string;
  image?: string;
  description?: string;
  type?: PartType;
  questions: IQuestion[];
}
