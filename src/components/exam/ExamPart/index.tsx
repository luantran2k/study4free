import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux';
import {
  resetSectionResponse,
  updateSectionResponse,
} from '../../../store/slices/examSlice';
import { SectionType } from '../../admin/Exams/Sections';
import ListeningPart from '../ListeningPart';
import ReadingPart from '../ReadingPart';
import SpeakingPart from '../SpeakingPart';
import WritingPart from '../WritingPart';

function ExamPart() {
  const { section = '', sectionId = '' } = useParams();

  const getSection = (section: SectionType) => {
    switch (section) {
      case 'Listening':
        return <ListeningPart />;
      case 'Reading':
        return <ReadingPart />;
      case 'Speaking':
        return <SpeakingPart />;
      case 'Writing':
        return <WritingPart />;
      default:
        return <p className="text-red-500">Invalid section</p>;
    }
  };
  return <> {getSection(section as SectionType)}</>;
}

export default ExamPart;
