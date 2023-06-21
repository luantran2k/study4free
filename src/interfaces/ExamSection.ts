import IPart from './Part';

export default interface IExamSection {
  name: string;
  description: string;
  parts: IPart[];
}
