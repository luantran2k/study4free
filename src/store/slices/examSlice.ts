import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SectionType } from '../../components/admin/Exams/Sections';
import { PartType } from '../../interfaces/Part';
import {
  IQuestionResponse,
  ISectionResponse,
} from '../../interfaces/SectionResponse';

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
      action: PayloadAction<{ section: SectionType }>
    ) => {
      if (state.examSectionResponse?.section) {
        state.examSectionResponse.section = action.payload.section;
      }
    },
    updateQuestionResponse: (
      state,
      action: PayloadAction<IQuestionResponse>
    ) => {
      const questionIndex = state.examSectionResponse?.questions.findIndex(
        (question: IQuestionResponse) => {
          return question.id === action.payload.id;
        }
      );
      if (questionIndex && state.examSectionResponse) {
        state.examSectionResponse.questions[questionIndex] = action.payload;
      } else {
        state.examSectionResponse?.questions.push(action.payload);
      }
    },

    // updateAnswerResponse: (
    //   state,
    //   action: PayloadAction<{ questionId: string; answer: IAnswerResponse }>
    // ) => {
    //   const question = state.examSectionResponse?.questions.find(
    //     (question: IQuestionResponse) => {
    //       return question.id === action.payload.questionId;
    //     }
    //   );
    //   if (question) {
    //     question.answers
    //   } else {
    //     state.examSectionResponse?.questions.push(action.payload);
    //   }
    // },
  },
});

export const {
  updateExamEditInfo,
  updateSectionResponse,
  updateQuestionResponse,
} = examSlice.actions;
export const examReducer = examSlice.reducer;
