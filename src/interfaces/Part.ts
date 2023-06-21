import IQuestion from './Question';

export default interface IPart {
  id: string;
  title: string;
  description: string;
  type: string;
  totalPoints: number;
  questions: IQuestion[];
}
