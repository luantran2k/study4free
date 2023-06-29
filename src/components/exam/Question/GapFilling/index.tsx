import ReactQuill from 'react-quill';
import IQuestion from '../../../../interfaces/Question';
import MediaViewer from '../../MediaViewer';

function GapFilling(question: IQuestion & { index: number }) {
  const { title, description, audio, answers, id, image, index } = question;
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-[1rem]">
      <div>
        <p className="text-xl font-medium ml-4">Question {index + 1}:</p>
        <ReactQuill value={title} readOnly={true} theme="bubble" />
        <ReactQuill value={description} readOnly={true} theme="bubble" />
        <MediaViewer audio={audio as string} image={image as string} />
      </div>
      <div className="flex flex-col gap-4">
        {answers.map((a, i: number) => {
          return (
            <div className="flex gap-[1rem]">
              <label
                className="bg-[#e8f2ff] w-[35px] aspect-square flex justify-center items-center rounded-full text-[#35509a] font-bold"
                htmlFor={`${id + i}-${i}`}
              >
                {i + 1}
              </label>
              <input
                className="border-[#bdc5d1] border-2 rounded-xl px-[0.5rem]"
                key={id}
                type="text"
                id={`${id + 1}-${i}`}
                name={`${id + 1}-${i}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GapFilling;
