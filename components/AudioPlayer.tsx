type AudioPlayerProps = {
  audioSrc: string;
};

export default function AudioPlayer({ audioSrc }: AudioPlayerProps) {
  return <audio controls preload="none" src={audioSrc}></audio>;
}
