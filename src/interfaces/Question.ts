import IAnswer from './Answer';

export default interface IQuestion {
  id: string;
  title: string;
  audio?: string;
  image?: string;
  answers: IAnswer[];
}
