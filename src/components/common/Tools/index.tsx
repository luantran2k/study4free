import Dictionary from '../../../assets/icons/Dictionary';
import ArrowDown from '../../../assets/icons/ArrowDown';
import { useRef, useState } from 'react';

const Tools = () => {
  return (
    <div className="fixed flex flex-col justify-center top-0 bottom-0 right-0 h-screen bg-transparent z-10">
      <div className="bg-white rounded-xl w-full p-3">
        <p className="text-sm flex flex-col gap-3 items-center border-b-2 mb-2">
          <Dictionary width="30px" height="30px" />
          <span className="italic text-cyan-500">Dictionary</span>
        </p>
        <button className="flex w-full flex-col items-center rotate-180">
          <ArrowDown width="30px" height="30px" />
        </button>
      </div>
    </div>
  );
};

export default Tools;
