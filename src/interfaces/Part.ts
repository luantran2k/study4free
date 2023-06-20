import IQuestion from './Question';

export default interface IPart {
  id: string;
  title: string;
  description: string;
  duration: number;
  type: string;
  totalPoints: number;
  questions: IQuestion[];
}
