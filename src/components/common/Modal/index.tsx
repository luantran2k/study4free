import { ReactElement } from 'react';

declare global {
  interface Window {
    [key: string]: any;
  }
}

type Props = {
  trigger?: ReactElement;
  buttonText?: string;
  submitButtonText?: string;
  children: ReactElement | ReactElement[];
  onSubmit?: () => void;
  modalId: string;
};

function Modal(props: Props) {
  const { trigger: Trigger, buttonText, children, modalId } = props;
  return (
    <>
      {/* Open the modal using ID.showModal() method */}
      {Trigger ? (
        <Trigger.type
          {...Trigger?.props}
          {...{ onClick: () => window[modalId].showModal() }}
        />
      ) : (
        <button className="btn" onClick={() => window[modalId].showModal()}>
          {buttonText}
        </button>
      )}
      <dialog id={modalId} className="modal">
        <div className="modal-box ">
          {children}
          <div className="modal-action"> </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default Modal;
