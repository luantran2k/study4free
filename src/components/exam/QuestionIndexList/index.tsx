import IPart from '../../../interfaces/Part';
import CircleButton from '../../common/CircleButton';

type Props = {
  part?: IPart;
  questionIndex: number;
  setQuestionIndex: (index: number) => void;
};

function QUestionNumberList(props: Props) {
  const { part, questionIndex, setQuestionIndex } = props;
  return (
    <div className="flex gap-2 items-center mt-8">
      <p className="text-xl font-medium">Question: </p>
      {part?.questions?.map((_, index: number) => {
        return (
          <CircleButton
            onClick={() => setQuestionIndex(index)}
            active={index === questionIndex}
            key={index}
          >
            {index + 1}
          </CircleButton>
        );
      })}
    </div>
  );
}

export default QUestionNumberList;
