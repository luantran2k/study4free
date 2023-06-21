import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import IExam, { CreateExamFormData, Skills } from '../../interfaces/Exam';
import IExamSection from '../../interfaces/ExamSection';
import IQuestion from '../../interfaces/Question';
import { CreatePartFormData } from '../../schemas/part';

type examSliceState = Partial<IExam>;
const initialState: examSliceState = {};

export const examSlice = createSlice({
  name: 'exam',
  initialState,
  reducers: {
    setExamInfo: (
      state: examSliceState,
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
      state: examSliceState,
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

    addQuestion: (
      state: examSliceState,
      action: PayloadAction<{
        currentSkill: Skills;
        partIndex: number;
        question: IQuestion;
      }>
    ) => {
      const { currentSkill, partIndex, question } = action.payload;
      state.sections?.[currentSkill]?.parts[partIndex]?.questions.push(
        question
      );
    },
    editQuestion: (
      state: examSliceState,
      action: PayloadAction<{
        currentSkill: Skills;
        partIndex: number;
        questionIndex: number;
        question: IQuestion;
        field: keyof IQuestion;
      }>
    ) => {
      const { currentSkill, partIndex, questionIndex, question } =
        action.payload;
      state.sections?.[currentSkill]?.parts[partIndex]?.questions[
        questionIndex
      ];
    },
  },
});

export const { setExamInfo, addPart, addQuestion } = examSlice.actions;

export const examReducer = examSlice.reducer;
