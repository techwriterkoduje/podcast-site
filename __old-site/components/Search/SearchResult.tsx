import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';

export type SearchResultProps = {
  href: string;
  title: string;
  contents: string;
  onClose: () => void;
};

const previewLength = 300;

export default function SearchResult({
  href,
  title,
  contents,
  onClose,
}: SearchResultProps) {
  const theme = useTheme();
  const isCurrentPage = window.location.pathname.endsWith(href);

  return (
    <Stack gap={1}>
      <Typography variant="h5" component="div">
        <Link
          style={{ color: theme.palette.primary.main }}
          href={`${href === '/' ? '' : '/'}${href}`}
          onClick={onClose}
        >
          {title}
        </Link>
      </Typography>
      {isCurrentPage && (
        <Typography color={theme.palette.success.main}>
          obecna strona
        </Typography>
      )}
      <Typography>
        {contents.substring(0, previewLength)}
        {contents.length > previewLength && '...'}
      </Typography>
    </Stack>
  );
}
