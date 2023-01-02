import Typography from '@mui/material/Typography';

type MarkdownDisplayProps = {
  htmlString: string;
};

const contentWidth = '80ch';
const noLineBreakStyle = {
  lineBreak: 'anywhere',
};

export default function MarkdownDisplay({ htmlString }: MarkdownDisplayProps) {
  return (
    <div style={{ width: 'fit-content' }}>
      <Typography
        dangerouslySetInnerHTML={{ __html: htmlString }}
        sx={{
          maxWidth: contentWidth,
          '& .markdown a': noLineBreakStyle,
          '& .markdown p code': noLineBreakStyle,
          '& .markdown li code': noLineBreakStyle,
          '.remark-highlight': {
            maxWidth: '90vw',
          },
        }}
        fontSize="1.1rem"
        className="markdown"
        component="article"
      />
    </div>
  );
}
