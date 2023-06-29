import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';
import { useParams } from 'react-router-dom';
import NoteInfo from '../../../pages/Exams/commonComponent/noteInfo';
import {
  useGetPartByIdQuery,
  useGetPartIdsBySectionIdQuery,
} from '../../../store/queries/exams';
import { SectionType } from '../../admin/Exams/Sections';
import ReactQuill from 'react-quill';

function SpeakingPart() {
  const { partId = '', section = '', sectionId = '' } = useParams();

  const { data: sectionData } = useGetPartIdsBySectionIdQuery({
    section: section as SectionType,
    sectionId,
  });

  const addAudioElement = (blob: File) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement('audio');
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
    // setAudioUrl(audio.src);
  };
  const { data, isSuccess, error, isLoading } = useGetPartByIdQuery({
    section: 'Speaking',
    partId: partId,
  });
  const recorderControls = useAudioRecorder();
  const partIndex =
    sectionData?.parts?.findIndex((item) => item.id === partId) || 0;

  return (
    <div className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-12 bg-[] bg-[#fff] rounded-xl shadow-2xl py-[2rem]">
      <div className="xl:col-span-7 col-span-12 px-[1rem] bg-[#f8f9fa]">
        <p className="tex-[1rem] font-bold uppercase my-[1rem]">
          {data?.description}
        </p>
        <p>
          You should spend about{' '}
          {partIndex === 0 ? '5' : partIndex === 1 ? '2' : '5'} minutes on this
          task. Speaking about the following point:
        </p>
        <div className="font-bold my-[1.5rem]">
          <ReactQuill
            value={data?.questions[0].title || ''}
            readOnly={true}
            theme={'bubble'}
          />
        </div>{' '}
      </div>
      <div className="xl:col-span-5 col-span-12 flex flex-col p-[1rem]">
        <NoteInfo index={partIndex} />
        <div className="my-[1rem]">
          <AudioRecorder
            onRecordingComplete={addAudioElement}
            audioTrackConstraints={{
              noiseSuppression: true,
              echoCancellation: true,
            }}
            recorderControls={recorderControls}
            downloadOnSavePress={false}
            downloadFileExtension="mp3"
            showVisualizer={true}
          />
        </div>
      </div>
    </div>
  );
}

export default SpeakingPart;
