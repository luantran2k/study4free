import IPart from './Part';

export default interface IExamSection {
  id: string;
  name: string;
  description: string;
  parts: IPart[];
}
