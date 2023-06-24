import Modal from '../../../../common/Modal';
import CreatePartForm from '../../CreatePartForm';
import { SectionType } from '../../Sections';

type Props = {
  section: SectionType;
  modalId: string;
  sectionId: string;
};
function NotExistPart({ section, modalId, sectionId }: Props) {
  return (
    <div>
      <p className="text-danger mt-4 text-2xl">Not exist part</p>
      <Modal
        trigger={
          <button className="btn btn-info text-white bg-blue-500">
            Create Part
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
  );
}

export default NotExistPart;
