import IAnswer from './Answer';

export default interface IQuestion {
  id: string;
  question: string;
  answer: IAnswer[];
}
