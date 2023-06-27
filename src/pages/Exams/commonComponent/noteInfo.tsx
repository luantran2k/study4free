import { ChangeEvent, useState } from 'react';

interface Props {
  index: number;
}
const NoteInfo = ({ index }: Props) => {
  const [isOpenNotes, setIsOpenNote] = useState<boolean>(false);
  const [note, setNote] = useState<string[]>();

  const openleNotes = () => {
    setIsOpenNote((prev) => !prev);
  };
  const getNotes = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const updatedArr = [...(note || [])];
    updatedArr[index] = e.target.value;
    setNote(updatedArr);
  };
  console.log(note, index);

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

export default NoteInfo;
