import Dictionary from '../../../assets/icons/Dictionary';
import ArrowDown from '../../../assets/icons/ArrowDown';
import { useRef, useState } from 'react';
import { DictionaryComponent } from './DictionaryComponent';

const Tools = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="fixed flex flex-col justify-center top-0 bottom-0 right-0 h-screen bg-transparent z-10">
      <div className="bg-gray-300 rounded-xl w-full p-3 relative">
        <button
          className="text-sm flex flex-col gap-3 items-center border-b-2 mb-2"
          onClick={() => setClicked(!clicked)}
        >
          <Dictionary width="30px" height="30px" />
          <span className="italic text-sky-500">Dictionary</span>
        </button>
        <button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }}
          className="btn flex w-full flex-col items-center"
        >
          <ArrowDown width="30px" height="30px" />
        </button>
        <DictionaryComponent clicked={clicked} />
      </div>
    </div>
  );
};

export default Tools;
