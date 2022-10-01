import React from "react";
import styles from "./AnchorEmbed.module.css";

type AnchorEmbedProps = {
  episodeId: string;
  style?: React.CSSProperties;
};

export default function AnchorEmbed({ episodeId, style }: AnchorEmbedProps) {
  return (
    <iframe
      src={`https://anchor.fm/docdeveloper/embed/episodes/${episodeId}`}
      frameBorder="0"
      scrolling="no"
      className={styles.iframe}
      style={style}
    ></iframe>
  );
}
