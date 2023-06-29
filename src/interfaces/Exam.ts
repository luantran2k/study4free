import IExamSection from './ExamSection';
import BaseFilter from './common/BaseFilter';

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
  id?: string;
  listeningSectionId?: string;
  readingSectionId?: string;
  speakingSectionId?: string;
  writingSectionId?: string;
  listening?: IExamSection;
  reading?: IExamSection;
  writing?: IExamSection;
  speaking?: IExamSection;
}

export interface ExamFilter
  extends Required<Pick<BaseFilter, 'page' | 'quantity'>> {
  title: string;
  isNeedPaid: 'All' | 'true' | 'false';
  type: ExamType;
}

export type ExamType = 'All' | 'IELTS' | 'TOEIC' | 'TOEFL' | 'CEFR';
