import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

type Props = {
  defaultValue: string;
  onBlur: (value: string) => void;
};

function TextEditor(props: Props) {
  const [value, setValue] = useState(props.defaultValue);
  useEffect(() => {
    setValue(props.defaultValue);
  }, [props.defaultValue]);
  const toolbarOptions = [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ size: ['small', false, 'large', 'huge'] }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image'],
    ['clean'],
  ];
  return (
    <>
      <ReactQuill
        modules={{ toolbar: toolbarOptions }}
        theme="snow"
        value={value}
        onChange={setValue}
        defaultValue={props.defaultValue}
        onBlur={(_, __, editor) => {
          props.onBlur(editor.getHTML());
        }}
      />
    </>
  );
}

export default TextEditor;
