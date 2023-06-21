import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import IExam, { CreateExamFormData, Skills } from '../../interfaces/Exam';
import IExamSection from '../../interfaces/ExamSection';
import { CreatePartFormData } from '../../schemas/part';
import { v4 as uuid } from 'uuid';

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
    addPart: (
      state: Partial<IExam>,
      action: PayloadAction<{ data: CreatePartFormData; currentSkill: Skills }>
    ) => {
      const { title, description, type, totalPoints } = action.payload.data;
      if (!state.sections) {
        state.sections = {};
      }
      if (!state.sections[action.payload.currentSkill]) {
        state.sections[action.payload.currentSkill] = {
          name: action.payload.currentSkill,
          description: '',
          parts: [],
        };
      }
      state.sections?.[action.payload.currentSkill]?.parts.push({
        title,
        description,
        type,
        totalPoints,
        id: uuid(),
        questions: [],
      });
    },
  },
});

export const { setExamInfo, addPart } = examSlice.actions;

export const examReducer = examSlice.reducer;
