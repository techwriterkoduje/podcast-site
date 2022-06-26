type EpisodeEmbedProps = {
  episodeId: string;
};

export default function EpisodeEmbed({ episodeId }: EpisodeEmbedProps) {
  return (
    <div className="w-[800px] max-w-full">
      <iframe
        src={`https://anchor.fm/docdeveloper/embed/episodes/${episodeId}`}
        frameBorder="0"
        scrolling="no"
        className="w-full"
      ></iframe>
    </div>
  );
}
