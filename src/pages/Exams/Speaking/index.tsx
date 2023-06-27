import { lazy, useState } from 'react';
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';
import { useGetPartByIdQuery } from '../../../store/queries/exams';

const NavigationTest = lazy(() => import('../commonComponent/navigationTest'));
const NoteInfo = lazy(() => import('../commonComponent/noteInfo'));

const Speaking = () => {
  const [index, setIndex] = useState<number>(0);
  const [partId, setPartId] = useState<string>('');
  const [audioUrl, setAudioUrl] = useState('');

  const { data, isSuccess, error, isLoading } = useGetPartByIdQuery({
    section: 'Speaking',
    partId: partId,
  });

  const handleTask = (task: string) => {
    setPartId(task);
  };

  const handleIndex = (index: number) => {
    setIndex(index);
  };
  console.log(index);

  const recorderControls = useAudioRecorder();
  const addAudioElement = (blob: any) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement('audio');
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
    setAudioUrl(audio.src);
  };
  return (
    <div className="bg-[#f8f9fa]">
      <div className="flex justify-center items-center gap-[1rem] p-[2rem]">
        <p className="font-bold text-[1.5rem]">SPEAKING TEST EXAM</p>
        <button className="bg-[red] py-[.25rem] px-[1rem] rounded-full">
          Quit
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 w-[90%] mx-auto py-[2rem] gap-[1rem] border-b-2 ">
        <div className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-12 bg-[] bg-[#fff] rounded-xl shadow-2xl py-[2rem]">
          <div className="xl:col-span-7 col-span-12 px-[1rem] bg-[#f8f9fa]">
            <p className="tex-[1rem] font-bold uppercase my-[1rem]">
              {data?.description}
            </p>
            <p>
              You should spend about 20 minutes on this task. Speaking about the
              following point:
            </p>
            <div className="font-bold my-[1.5rem]">
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.questions[0].title || '',
                }}
              />
            </div>{' '}
          </div>
          <div className="xl:col-span-5 col-span-12 flex flex-col p-[1rem]">
            <NoteInfo index={index} />
            <div className="my-[1rem]">
              <AudioRecorder
                onRecordingComplete={addAudioElement}
                audioTrackConstraints={{
                  noiseSuppression: true,
                  echoCancellation: true,
                }}
                recorderControls={recorderControls}
                downloadOnSavePress={true}
                downloadFileExtension="mp3"
                showVisualizer={true}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-3 ">
          <NavigationTest
            handleTask={handleTask}
            handleIndex={handleIndex}
            defaultPartId={partId}
          />
        </div>
      </div>
    </div>
  );
};

export default Speaking;
