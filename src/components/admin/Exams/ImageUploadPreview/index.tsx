import { ChangeEventHandler, useId, useRef } from 'react';
import TrashIcon from '../../../../assets/icons/Trash';
import styles from './style.module.css';
import EditIcon from '../../../../assets/icons/Edit';

type Props = {
  isImageLoading: boolean;
  isImageError: boolean;
  imageUrl?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onDelete?: () => void;
};

function ImageUploadPreview(props: Props) {
  const { imageUrl, isImageError, isImageLoading, onChange, onDelete } = props;
  const imageInputId = useId();
  const input = useRef<HTMLInputElement>(null);
  return (
    <>
      {isImageLoading ? (
        <p>Loading...</p>
      ) : imageUrl != '' && imageUrl != null ? (
        <div className={`relative w-36 h-36  ${styles.box}`}>
          <img
            src={imageUrl}
            alt=""
            className="block object-cover w-full h-full"
          />
          <button
            onClick={onDelete}
            className="btn border-none btn-sm text-white hover:bg-red-500 opacity-0 absolute top-2 transition-all right-2 bg-red-600 "
          >
            <TrashIcon />
          </button>

          <button
            onClick={() => {
              input.current?.click();
            }}
            className="btn border-none btn-sm text-white hover:bg-blue-500 opacity-0 transition-all absolute top-2 left-2 bg-blue-500 "
          >
            <EditIcon />
          </button>

          <input
            ref={input}
            type="file"
            className="file-input file-input-bordered w-full hidden"
            accept="image/*"
            onChange={onChange}
          />
        </div>
      ) : (
        <>
          {isImageError && <p>Error</p>}
          <input
            id={imageInputId}
            type="file"
            className="file-input file-input-bordered w-full"
            accept="image/*"
            onChange={onChange}
          />
        </>
      )}
    </>
  );
}

export default ImageUploadPreview;
