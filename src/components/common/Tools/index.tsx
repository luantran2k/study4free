import Dictionary from '../../../assets/icons/Dictionary';
import ArrowDown from '../../../assets/icons/ArrowDown';
import { lazy, useState } from 'react';

const DictionaryComponent = lazy(() => import('./DictionaryComponent'));

interface ITools {
  intersection: boolean;
}

const Tools = (props: ITools) => {
  const [clicked, setClicked] = useState(false);
  console.log(props.intersection)
  return (
    <div
      data-aos="zoom-in"
      data-aos-offset="50"
      data-aos-duration="500"
      data-aos-delay="3000"
      className="fixed flex flex-col justify-center top-[40vh] bottom-0 right-3 h-fit bg-transparent z-10"
    >
      <div className="bg-gray-300 rounded-xl w-[88px] p-3 relative">
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
          className={`btn w-full flex-col items-center transition-all ${
            props.intersection ? 'flex' : 'hidden'
          }`}
        >
          <ArrowDown width="30px" height="30px" />
        </button>
        <DictionaryComponent clicked={clicked} />
      </div>
    </div>
  );
};

export default Tools;
