import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import IExam, { CreateExamFormData } from '../../interfaces/Exam';
import IExamSection from '../../interfaces/ExamSection';

const initialState: Partial<IExam> = {};

export const examSlice = createSlice({
  name: 'exam',
  initialState,
  reducers: {
    setExamInfo: (
      state: Partial<IExam>,
      action: PayloadAction<CreateExamFormData>
    ) => {
      const { title, description, duration, type, price, sections } =
        action.payload;
      state.title = title;
      state.description = description;
      state.duration = duration;
      state.type = type;
      state.price = price;
      state.sections = sections.reduce((acc, cur) => {
        return {
          ...acc,
          [cur]: { name: cur, description: '', parts: [] } as IExamSection,
        };
      }, {});
    },
  },
});

export const { setExamInfo } = examSlice.actions;

export const examReducer = examSlice.reducer;
