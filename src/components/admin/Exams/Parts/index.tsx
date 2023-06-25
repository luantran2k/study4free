import { useEffect, useState } from 'react';
import AddIcon from '../../../../assets/icons/Add';
import TrashIcon from '../../../../assets/icons/Trash';
import {
  useGetPartIdsBySectionIdQuery,
  useRemovePartMutation,
} from '../../../../store/queries/exams';
import Modal from '../../../common/Modal';
import CreatePartForm from '../CreatePartForm';
import Part from '../Part';
import { SectionType } from '../Sections';
import NotExistPart from './NotExistPart';
import { useAutoAnimate } from '@formkit/auto-animate/react';

type Props = {
  section: SectionType;
  modalId: string;
  sectionId: string;
};

function Parts({ section, modalId, sectionId }: Props) {
  const [partIndex, setPartIndex] = useState(0);

  const { data, isLoading, isError } = useGetPartIdsBySectionIdQuery({
    sectionId,
    section,
  });

  const [removePart] = useRemovePartMutation();
  const [parent] = useAutoAnimate();

  useEffect(() => {
    setPartIndex(0);
  }, [sectionId]);

  useEffect(() => {
    if (data && data.parts.length == 0) {
      setPartIndex(0);
    } else if (data && data.parts.length <= partIndex) {
      setPartIndex((pre) => pre - 1);
    }
  }, [data, partIndex]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  const partIds = data?.parts.map((part) => part.id) || [];
  if (partIds.length <= 0)
    return (
      <NotExistPart section={section} modalId={modalId} sectionId={sectionId} />
    );

  return (
    <div>
      <div className="flex gap-2 mt-6 items-center" ref={parent}>
        <p className="text-3xl font-medium">Part: </p>
        {partIds.map((id, index) => (
          <button
            key={id}
            onClick={() => setPartIndex(index)}
            className={`active:translate-y-1 transition-all relative cursor-pointer  bg-base-200 w-8 h-8 rounded-box flex justify-center items-center ${
              index === partIndex ? 'bg-blue-500 text-white' : ''
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          className={`active:translate-y-1 transition-all relative cursor-pointer text-white bg-red-500 w-8 h-8 rounded-box flex justify-center items-center `}
          onClick={() => removePart({ partId: partIds[partIndex], section })}
        >
          <TrashIcon />
        </button>

        <Modal
          trigger={
            <button
              className={`active:translate-y-1 transition-all cursor-pointer bg-blue-500 text-white w-8 h-8 rounded-box flex justify-center items-center`}
            >
              <AddIcon />
            </button>
          }
          modalId={modalId}
        >
          <CreatePartForm
            section={section}
            modalId={modalId}
            sectionId={sectionId}
          />
        </Modal>
      </div>
      <Part partId={partIds[partIndex]} section={section} />
    </div>
  );
}

export default Parts;
