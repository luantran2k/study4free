import IExamSection from './ExamSection';

export const skills = ['Listening', 'Reading', 'Writing', 'Speaking'] as const;

export type Skills = (typeof skills)[number];

export default interface IExam {
  id: string;
  title: string;
  description?: string;
  duration: number;
  type?: string;
  isNeedPaid?: boolean;
  tags?: string[];
  image?: string;
  sections: ExamSection;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateExamFormData {
  title: string;
  description: string;
  duration: number;
  type: string;
  isNeedPaid: boolean;
  sections: Skills[];
}

export interface ExamSection {
  listening?: IExamSection;
  reading?: IExamSection;
  writing?: IExamSection;
  speaking?: IExamSection;
}
