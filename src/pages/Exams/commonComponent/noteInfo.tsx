import { ChangeEvent, useState } from 'react';

// const exams = {
//   id: 1,
//   cambridge: 14,
//   test: 1,
//   skill: 'writing',
//   task: [
//     {
//       topic:
//         'The graph below gives information about the percentage of the population in four Asian countries living in cities from 1970 to 2020, with predictions for 2030 and 2040.Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
//       imageTopic:
//         'https://study4.com/media/uploads/editor/study4/2023/06/09/screen-shot-2023-06-09-at-82718-pm.png',
//     },
//     {
//       topic:
//         'The most important aim of science should be to improve people’s lives. To what extent do you agree or disagree with this statement?Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
//     },
//   ],
// };
interface Props {
  index: number;
}
const NoteInfo = ({ index }: Props) => {
  const [isOpenNotes, setIsOpenNote] = useState<boolean>(false);
  const [note, setNote] = useState<string[]>();

  const openleNotes = () => {
    setIsOpenNote((prev) => !prev);
    console.log(isOpenNotes);
  };
  const getNotes = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const updatedArr = [...(note || [])];
    updatedArr[index] = e.target.value;
    setNote(updatedArr);
  };
  return (
    <div>
      <button
        onClick={openleNotes}
        className="border-2 border-[#35509a] text-[#35509a] py-[0.25rem] px-[0.5rem] rounded-md font-medium hover:bg-[#35509a] hover:text-[#fff] mb-[1rem] "
      >
        Add notes / outline
      </button>
      {isOpenNotes && (
        <div>
          <textarea
            className="border-2 rounded-lg p-[1rem]"
            name=""
            id=""
            placeholder="Write your notes here"
            cols={36}
            rows={6}
            value={note && note[index] !== undefined ? note[index] : ''}
            onChange={getNotes}
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default NoteInfo