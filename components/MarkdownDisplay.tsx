import Typography from '@mui/material/Typography';

type MarkdownDisplayProps = {
  htmlString: string;
};

export default function MarkdownDisplay({ htmlString }: MarkdownDisplayProps) {
  return (
    <Typography
      dangerouslySetInnerHTML={{ __html: htmlString }}
      sx={{ maxWidth: '80ch' }}
      fontSize="1.1rem"
    />
  );
}
