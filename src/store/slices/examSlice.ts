import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SectionType } from '../../components/admin/Exams/Sections';
import { PartType } from '../../interfaces/Part';
import {
  IAnswerResponse,
  IQuestionResponse,
  ISectionResponse,
  QuestionType,
} from '../../interfaces/SectionResponse';
import SingleChoice from '../../components/exam/Question/SingleChoice';

interface ExamEditInfo {
  examId?: string;
  sectionId?: string;
  section?: SectionType;
  partId?: string;
  partType?: PartType;
  questionId?: string;
}

interface ExamSliceState {
  examEditInfo: ExamEditInfo;
  examSectionResponse?: ISectionResponse;
}

const initialState: ExamSliceState = {
  examEditInfo: {},
};

const examSlice = createSlice({
  name: 'exam',
  initialState,
  reducers: {
    updateExamEditInfo: (
      state: ExamSliceState,
      action: PayloadAction<ExamEditInfo>
    ) => {
      const updateInfo = action.payload;
      state.examEditInfo = { ...state.examEditInfo, ...updateInfo };
    },

    updateSectionResponse: (
      state: ExamSliceState,
      action: PayloadAction<{ section: SectionType; sectionId: string }>
    ) => {
      if (!state.examSectionResponse) {
        state.examSectionResponse = {
          section: '' as SectionType,
          id: '',
          questions: [],
        };
      }
      state.examSectionResponse.section = action.payload.section;
      state.examSectionResponse.id = action.payload.sectionId;
    },
    updateQuestionResponse: (
      state,
      action: PayloadAction<IQuestionResponse>
    ) => {
      if (!state.examSectionResponse) {
        state.examSectionResponse = {
          section: '' as SectionType,
          id: '',
          questions: [],
        };
      }

      const questionIndex = state.examSectionResponse.questions.findIndex(
        (question: IQuestionResponse) => {
          return question.id === action.payload.id;
        }
      );
      if (questionIndex != -1) {
        return;
      } else {
        state.examSectionResponse?.questions.push(action.payload);
      }
    },

    resetSectionResponse: (state) => {
      state.examSectionResponse = undefined;
    },

    updateAnswerResponse: (
      state,
      action: PayloadAction<{
        questionId: string;
        questionType: QuestionType;
        answer: IAnswerResponse;
      }>
    ) => {
      if (!state.examSectionResponse) {
        state.examSectionResponse = {
          section: '' as SectionType,
          id: '',
          questions: [],
        };
      }
      const question = state.examSectionResponse.questions.find(
        (question: IQuestionResponse) => {
          return question.id === action.payload.questionId;
        }
      );

      if (question) {
        const answerIndex = question.answers.findIndex(
          (answer: IAnswerResponse) => {
            return answer.id === action.payload.answer.id;
          }
        );
        if (answerIndex != -1) {
          if (action.payload.questionType === 'Single choice') {
            question.answers = question.answers.map((answer) => ({
              ...answer,
              isTrue: false,
            }));
          }
          question.answers[answerIndex] = action.payload.answer;
        } else {
          question.answers.push(action.payload.answer);
        }
      }
    },
  },
});

export const {
  updateExamEditInfo,
  updateSectionResponse,
  updateQuestionResponse,
  resetSectionResponse,
  updateAnswerResponse,
} = examSlice.actions;
export const examReducer = examSlice.reducer;
