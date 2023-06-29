type Props = {
  image?: string;
  audio?: string;
};

function MediaViewer({ image, audio }: Props) {
  return (
    <div>
      <div> {image && <img src={image} />}</div>
      {audio && <audio src={audio} controls />}
    </div>
  );
}

export default MediaViewer;
