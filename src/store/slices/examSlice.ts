import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SectionType } from '../../components/admin/Exams/Sections';
import { PartType } from '../../interfaces/Part';

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
  },
});

export const { updateExamEditInfo } = examSlice.actions;
export const examReducer = examSlice.reducer;
