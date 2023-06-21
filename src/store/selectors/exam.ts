import { RootState } from '..';
import { Skills } from '../../interfaces/Exam';

export const partSelector = (skill: Skills, partIndex: number) => {
  return (state: RootState) => {
    return state.exams.sections?.[skill]?.parts[partIndex];
  };
};

export const questionSelector = (skill: Skills, partIndex: number) => {
  return (state: RootState) => {
    return state.exams.sections?.[skill]?.parts[partIndex]?.questions;
  };
};
