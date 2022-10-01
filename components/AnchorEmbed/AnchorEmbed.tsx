import React from "react";
import styles from "./AnchorEmbed.module.css";

type AnchorEmbedProps = {
  episodeId: string;
};

export default function AnchorEmbed({ episodeId }: AnchorEmbedProps) {
  return (
    <iframe
      src={`https://anchor.fm/docdeveloper/embed/episodes/${episodeId}`}
      frameBorder="0"
      scrolling="no"
      className={styles.iframe}
    ></iframe>
  );
}
