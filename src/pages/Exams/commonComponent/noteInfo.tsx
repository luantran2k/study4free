import { useState } from 'react';

export const NoteInfo = () => {
  const [isOpenNotes, setIsOpenNote] = useState<boolean>(false);
  const handleNotes = () => {
    setIsOpenNote((prev) => !prev);
    console.log(isOpenNotes);
  };
  return (
    <div>
      <button
        onClick={handleNotes}
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
          ></textarea>
        </div>
      )}
    </div>
  );
};
