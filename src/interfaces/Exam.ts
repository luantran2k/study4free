import IExamSection from './ExamSection';

export const skills = ['listening', 'reading', 'writing', 'speaking'] as const;

export type Skills = (typeof skills)[number];

export default interface IExam {
  id: string;
  title: string;
  description?: string;
  duration: number;
  type?: string;
  price?: number;
  image?: string;
  sections: {
    listening?: IExamSection;
    reading?: IExamSection;
    writing?: IExamSection;
    speaking?: IExamSection;
  };
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateExamFormData {
  title: string;
  description: string;
  duration: number;
  type: string;
  price: number;
  sections: Skills[];
}
