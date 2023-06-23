import Dictionary from '../../../assets/icons/Dictionary';
import ArrowDown from '../../../assets/icons/ArrowDown';
import { useRef, useState } from 'react';
import SearchIcon from '../../../assets/icons/SearchIcon';

const Tools = () => {
  const [clicked, setClicked] = useState(false)
  return (
    <div className="fixed flex flex-col justify-center top-[40vh] bottom-0 right-0 h-fit bg-transparent z-10">
      <div className="bg-gray-300 rounded-xl w-full p-3 relative">
        <button className="text-sm flex flex-col gap-3 items-center border-b-2 mb-2" onClick={() => setClicked(!clicked)}>
          <Dictionary width="30px" height="30px" />
          <span className="italic text-sky-500">Dictionary</span>
        </button>
        <button onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }} className="btn flex w-full flex-col items-center">
          <ArrowDown width="30px" height="30px" />
        </button>
        <div className={`absolute min-w-[400px] min-h-[400px] bg-gray-100 z-20 rounded-2xl p-5 top-[-100px] transition-all ${clicked ? 'left-[-430px]' : 'left-[900px]'}`}>
          <div className='relative mb-5'>
            <input type="text" placeholder="Type me please!!!" className="input w-full " />
            <p className='flex items-center absolute right-3 top-0 z-10 bottom-0 my-auto pointer-events-none'>
              <SearchIcon />
            </p>
          </div>
          <div className=''>
            ...
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
