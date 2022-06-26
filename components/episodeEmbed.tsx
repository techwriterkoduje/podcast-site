type EpisodeEmbedProps = {
  episodeId: string;
};

export default function EpisodeEmbed({ episodeId }: EpisodeEmbedProps) {
  return (
    <iframe
      src={`https://anchor.fm/docdeveloper/embed/episodes/${episodeId}`}
      frameBorder="0"
      scrolling="no"
    ></iframe>
  );
}
