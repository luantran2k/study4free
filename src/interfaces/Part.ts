import IQuestion from './Question';

export const partTypes = [
  'Single choice',
  'Multiple choice',
  'Gap filling',
  'Information identification',
  'Information matching',
  'Head Matching',
  'Sentence completion',
  'Summary completion',
] as const;

export type PartType = (typeof partTypes)[number];

export default interface IPart {
  id: string;
  title: string;
  audio?: string;
  image?: string;
  description?: string;
  type?: PartType;
  questions: IQuestion[];
}
