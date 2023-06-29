import { ChangeEventHandler, useId, useRef } from 'react';
import EditIcon from '../../../../assets/icons/Edit';
import TrashIcon from '../../../../assets/icons/Trash';

type Props = {
  isAudioLoading: boolean;
  isAudioError: boolean;
  audioUrl?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onDelete?: () => void;
};

function AudioUploadPreview(props: Props) {
  const { audioUrl, isAudioError, isAudioLoading, onChange, onDelete } = props;
  const imageInputId = useId();
  const input = useRef<HTMLInputElement>(null);
  return (
    <>
      {isAudioLoading ? (
        <p>
          <span className="loading loading-dots loading-lg"></span>
        </p>
      ) : audioUrl != '' && audioUrl != null ? (
        <div className="flex gap-2 items-center">
          <audio
            src={audioUrl}
            className="block object-cover w-full"
            controls
          />
          <button
            onClick={() => {
              input.current?.click();
            }}
            className="btn border-none btn-sm text-white hover:bg-blue-500 transition-all bg-blue-500 "
          >
            <EditIcon />
          </button>
          <button
            onClick={() => {
              if (confirm('Are you sure you want to delete this audio?')) {
                onDelete && onDelete();
              }
            }}
            className="btn border-none btn-sm text-white hover:bg-red-500  transition-all bg-red-600 "
          >
            <TrashIcon />
          </button>

          <input
            ref={input}
            type="file"
            className="file-input file-input-bordered w-full hidden"
            accept="audio/*"
            onChange={onChange}
          />
        </div>
      ) : (
        <>
          {isAudioError && <p>Error</p>}
          <input
            id={imageInputId}
            type="file"
            className="file-input file-input-bordered w-full"
            accept="audio/*"
            onChange={onChange}
          />
        </>
      )}
    </>
  );
}

export default AudioUploadPreview;
