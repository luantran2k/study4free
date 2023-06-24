import IQuestion from './Question';

export default interface IPart {
  id: string;
  title: string;
  audio?: string;
  image?: string;
  description?: string;
  type?: string;
  questions: IQuestion[];
}
