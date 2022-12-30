import Typography from '@mui/material/Typography';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type MarkdownDisplayProps = {
  markdownString: string;
};

export default function MarkdownDisplay({
  markdownString,
}: MarkdownDisplayProps) {
  return (
    <Typography>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {markdownString}
      </ReactMarkdown>
    </Typography>
  );
}
