import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

type AnchorEmbedProps = {
  episodeId: string;
};

type IframeSizes = {
  height: number;
  width: number;
};

function useIframeSizes(): IframeSizes {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("md"));
  const isMedium = useMediaQuery(theme.breakpoints.up("sm"));

  if (isLarge) {
    return {
      height: 161,
      width: 800,
    };
  }

  if (isMedium) {
    return {
      height: 98,
      width: 600,
    };
  }

  return {
    height: 98,
    width: 300,
  };
}

export default function AnchorEmbed({ episodeId }: AnchorEmbedProps) {
  const { height, width } = useIframeSizes();

  return (
    <iframe
      src={`https://anchor.fm/docdeveloper/embed/episodes/${episodeId}`}
      height={height}
      width={width}
      frameBorder="0"
      scrolling="no"
    ></iframe>
  );
}
