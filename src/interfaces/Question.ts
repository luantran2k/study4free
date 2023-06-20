import IAnswer from './Answer';

export default interface IQuestion {
  id: number;
  question: string;
  answer: IAnswer[];
}
