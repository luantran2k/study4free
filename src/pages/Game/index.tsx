import { useLocation } from 'react-router-dom';
import { KeyBoard } from './Keyboard';
import { useCallback, useEffect, useState } from 'react';
import { FillWord } from './FillWord';
import { IVocabularyItem } from '../../interfaces/Collection';
import HeartIcon from '../../assets/images/HeartIcon.gif';

const MiniGame = () => {
  const location = useLocation();
  const storeVocabs = new Set<number>()
  const [wordToGuess, setWordToGuess] = useState<IVocabularyItem>(location.state[0]);

  const [heart, setHeart] = useState<string[]>(['3', '2', '1']);

  const [guessedLetters, setGuessedLetter] = useState<string[]>([]);
  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter)) return;
      setGuessedLetter((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [guessedLetters]);

  const inCorrectLetter = guessedLetters.filter(
    (letter) => !wordToGuess.vocabulary.toLowerCase().includes(letter)
  );

  useEffect(() => {
    if (inCorrectLetter.length === 0) {
      setHeart(['3', '2', '1']);
    } else if (inCorrectLetter.length === 1) {
      setHeart(['2', '1']);
    } else if (inCorrectLetter.length === 2) {
      setHeart(['1']);
    } else {
      handleTryAgain();
    }
  }, [inCorrectLetter.length]);

  const handleTryAgain = () => {
    let indexToPresent: number = 0
    storeVocabs.add(0)
    while(true) {
      if(storeVocabs.size === location.state.length) {
        storeVocabs.clear()
      }
      const newIndex = Math.floor(Math.random() * location.state.length)
      const remainSize = storeVocabs.size
      console.log(remainSize)
      storeVocabs.add(newIndex)
      // console.log(newIndex, remainSize, storeVocabs)
      if(storeVocabs.size === remainSize + 1) {
        indexToPresent = newIndex
        console.log(indexToPresent, storeVocabs)
        break
      }
    }
    setWordToGuess(
      location.state[Math.floor(Math.random() * location.state.length)]
    );
    setGuessedLetter([]);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h4 className="text-sky-400 font-bold text-[2rem] uppercase">Practice</h4>
      <div className="w-[60%] mx-auto ">
        <p className="text-[red] italic font-bold">
          Note : You only have 3 chances, check carefully, if you get it wrong
          more than 3 times it will automatically change to a new word
        </p>
        <div className="bg-white h-[200px] rounded-2xl shadow-2xl my-[2rem] flex justify-center items-center text-[3rem] relative flex-col">
          <p className="text-[1rem]">Vietnamese meaning:</p>
          {wordToGuess.meaning}
          <div className="absolute bottom-[4px] right-[4px]  flex">
            {heart.map((item: string) => (
              <img key={item} className="w-[32px] h-[32px]" src={HeartIcon} />
            ))}
          </div>
        </div>

        <FillWord
          guessedLetters={guessedLetters}
          wordToGuess={wordToGuess.vocabulary.toLowerCase()}
        />
        <KeyBoard
          activeLetter={guessedLetters.filter((letter) =>
            wordToGuess.vocabulary.toLowerCase().includes(letter)
          )}
          inactiveLetter={inCorrectLetter}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
      <button
        onClick={handleTryAgain}
        className="my-[2rem] bg-[red] w-fit text-white py-[0.5rem] px-[1rem] rounded-full"
      >
        Change word
      </button>
    </div>
  );
};
export default MiniGame;
