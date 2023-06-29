import ReactQuill from 'react-quill';
import IQuestion from '../../../../interfaces/Question';
import MediaViewer from '../../MediaViewer';

function SingleChoice(question: IQuestion & { index: number }) {
  const { title, description, audio, answers, id, image, index } = question;
  return (
    <div className="flex gap-[0.5rem] flex-col">
      <div className="flex gap-[1rem] ">
        <div className="bg-[#e8f2ff] w-[35px] h-[35px] aspect-square flex justify-center items-center rounded-full text-[#35509a] font-bold">
          {index + 1}
        </div>
        <ReactQuill value={title} readOnly={true} theme="bubble" />
      </div>
      <MediaViewer audio={audio as string} image={image as string} />
      {answers.map((answer, answerIndex) => {
        return (
          <div className="flex items-center gap-[0.5rem]">
            <input
              type="radio"
              name={`${index}`}
              //   onClick={(e) => handleGetValue(e, answer)}
              //   value={answer.value}
              //   defaultChecked={answersArr?.questions
              //     .find((question) => question?.id === partId)
              //     ?.answers.some((item) => item.id === answer.id)}
            ></input>
            <label htmlFor={`${id + 1}-${answerIndex}`}>{answer.value}</label>
          </div>
        );
      })}
    </div>
  );
}

export default SingleChoice;
