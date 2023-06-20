import IExamSection from './ExamSection';

export default interface IExam {
  id: string;
  title: string;
  description: string;
  duration: number;
  type: string;
  price: number;
  image: string;
  sections: {
    listening: IExamSection;
    reading: IExamSection;
    writing: IExamSection;
    speaking: IExamSection;
  };
  createdAt: string;
  updatedAt: string;
}

export interface CreateExamFormData {
  title: string;
  description: string;
  duration: number;
  type: string;
  price: number;
}
