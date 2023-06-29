import SearchIcon from '../../../assets/icons/SearchIcon';
import SearchImg from '../../../assets/images/SearchImg.png';
import { lazy, useState } from 'react';
import axios from 'axios';
import { API_DICTIONARY_URL } from '../../../api';
import {
  IAudioData,
  IDefinition,
  IPartOfSpeech,
  IPhonetics,
} from '../../../interfaces/DictionaryData';
const LoadingAnimate = lazy(() => import('../LoadingAnimate'));
interface Props {
  clicked: boolean;
}

const DictionaryComponent = ({ clicked }: Props) => {
  const [keyWord, setKeyWord] = useState('false');
  const [word, setWord] = useState<any>([]);
  const [errorMess, setErrorMess] = useState<boolean>(false);

  const handleSetKeyWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyWord(e.target.value);
  };
  const handleRenderWord = async () => {
    try {
      const response = await axios.get(`${API_DICTIONARY_URL}${keyWord}`);

      setWord(response.data);
      setErrorMess(false);
    } catch (error) {
      console.log(error);
      setErrorMess(true);
    }
  };
  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleRenderWord();
    }
  };

  return (
    <div
      className={`fixed min-w-[400px] min-h-[400px] bg-gray-100 z-20 rounded-2xl p-5 top-[50%] -translate-y-[50%]  transition-all ${
        !clicked ? 'right-[-430px]' : 'right-[8rem]'
      }`}
    >
      <div className="relative mb-5">
        <input
          type="text"
          placeholder="Enter the key word ..."
          className="input w-full "
          onChange={handleSetKeyWord}
          onKeyDown={handleKeyDown}
        />
        <div
          onClick={handleRenderWord}
          className="flex items-center absolute right-3 top-0 z-10 bottom-0 my-auto hover:cursor-pointer hover:scale-125"
        >
          <SearchIcon />
        </div>
      </div>
      {word.length !== 0 && !errorMess ? (
        <div className="absolute top-[80px] overflow-y-scroll h-[70%]">
          <div>
            <div className="font-bold ">Pronunciation:</div>
            {word &&
              word[0]?.phonetics.map((spelling: IAudioData, index: number) => {
                return <div key={`spelling-${index}`}>{spelling.text}</div>;
              })}
          </div>
          {word &&
            word[0]?.meanings.map((mean: IPartOfSpeech, index: number) => {
              return (
                <div key={`word-${index}`}>
                  <div className="font-bold">{mean?.partOfSpeech}:</div>
                  <div>
                    {mean?.definitions.map((define: IDefinition) => {
                      return <div>{define.definition}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          {word &&
            word[0]?.phonetics.map((voice: IPhonetics, index: number) => {
              return (
                <div className="my-[16px]" key={`voice-${index}`}>
                  {voice.audio != '' && (
                    <>
                      <div className="font-bold text-blue-800">Spelling:</div>

                      <audio controls>
                        <source src={voice.audio} type="audio/ogg" />
                      </audio>
                    </>
                  )}
                </div>
              );
            })}
        </div>
      ) : (
        <div className="m-auto ">
          <p className="absolute top-[70%] right-[50%] translate-x-[50%] text-[red]">
            {errorMess &&
              'The word you searched for is not syntactically correct, please re-enter it'}
          </p>
          <img
            className="absolute top-[50%] right-[50%] translate-x-[50%] -translate-y-[50%] w-[6rem] animate-pulse	"
            src={SearchImg}
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default DictionaryComponent;
