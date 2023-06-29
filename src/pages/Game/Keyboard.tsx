interface Props {
  activeLetter: string[];
  inactiveLetter: string[];
  addGuessedLetter: (letter: string) => void;
}
export const KeyBoard = ({
  activeLetter,
  inactiveLetter,
  addGuessedLetter,
}: Props) => {
  const KEYS = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  return (
    <div className="flex flex-wrap gap-[8px] justify-center">
      {KEYS.map((key) => {
        const isActive = activeLetter?.includes(key);
        const isInactive = inactiveLetter?.includes(key);
        return (
          <button
            key={key}
            onClick={() => {
              addGuessedLetter(key);
            }}
            className={`w-[40px] border-[1px] border-slate-900 aspect-square text-[24px] uppercase font-bold  p-[4px] hover:bg-sky-500 hover:text-white
${isActive ? 'bg-sky-500' : ''} ${isInactive ? 'bg-slate-300 ' : ''}
            `}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};
