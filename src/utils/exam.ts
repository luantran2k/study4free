import { SectionType } from '../components/admin/Exams/Sections';
import IExamSection from '../interfaces/ExamSection';

export const getSectionName = (sectionWithSectionId: string): SectionType => {
  const sectionNameLowerCase = sectionWithSectionId.slice(0, -9);
  return (sectionNameLowerCase.slice(0, 1).toUpperCase() +
    sectionNameLowerCase.slice(1)) as SectionType;
};

export const getSectionTime = (
  totalTime: number,
  section: SectionType
): number => {
  switch (section) {
    case 'Listening':
    case 'Reading':
    case 'Writing':
      return Math.round((totalTime * 30) / 100);
    case 'Speaking':
      return Math.round((totalTime * 10) / 100);
  }
};

export const countQuestion = (examSection: IExamSection) => {
  return examSection.parts.reduce(
    (acc, part) => acc + part.questions.length,
    0
  );
};
