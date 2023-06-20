import IExam from '../../interfaces/Exam';
import IQuestion from '../../interfaces/Question';

export default interface IExamSliceState
  extends Pick<IExam, 'title' | 'description' | 'type'> {
  questions: IQuestion[];
}
