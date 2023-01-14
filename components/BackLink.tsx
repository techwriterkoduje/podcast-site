import NorthWestIcon from '@mui/icons-material/NorthWest';
import PodcastButton from './PodcastButton';

type BackLinkProps = {
  href: string;
  children: React.ReactElement | string;
};

export default function BackLink({ href, children }: BackLinkProps) {
  return (
    <PodcastButton
      href={href}
      startIcon={<NorthWestIcon fontSize="small" />}
      variant="text"
    >
      {children}
    </PodcastButton>
  );
}
