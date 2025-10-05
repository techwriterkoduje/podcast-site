import NorthWestIcon from '@mui/icons-material/NorthWest';
import PodcastButton from './PodcastButton';
import React from 'react';

type BackLinkProps = {
  href: string;
  children: React.ReactElement | string;
};

export default function BackLink({ href, children }: BackLinkProps) {
  return (
    <PodcastButton
      className="exclude-from-index"
      href={href}
      startIcon={<NorthWestIcon fontSize="small" />}
      variant="text"
    >
      {children}
    </PodcastButton>
  );
}
