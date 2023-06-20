import IQuestion from './Question';

export default interface IExam {
  id: number;
  title: string;
  description: string;
  duration: number;
  type: string;
  price: number;
  image: string;
  questions: IQuestion[];
  createdAt: string;
  updatedAt: string;
}
