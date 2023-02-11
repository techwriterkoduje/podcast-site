import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';

export type SearchResultProps = {
  href: string;
  title: string;
  contents: string;
};

type SearchResultLinkProps = {
  href: string;
  label: string;
};

function SearchResultLink({ href, label }: SearchResultLinkProps) {
  const theme = useTheme();

  return (
    <Link
      style={{ color: theme.palette.primary.main }}
      href={`${href !== '/' && '/'}${href}`}
    >
      {label}
    </Link>
  );
}

const previewLength = 300;

export default function SearchResult({
  href,
  title,
  contents,
}: SearchResultProps) {
  return (
    <Stack gap={1}>
      <Typography variant="h5" component="div">
        <SearchResultLink href={href} label={title} />
      </Typography>
      <Typography>
        {contents.substring(0, previewLength)}
        {contents.length > previewLength && '...'}
      </Typography>
    </Stack>
  );
}
