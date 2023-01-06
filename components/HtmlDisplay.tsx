import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

type HtmlDisplayProps = {
  htmlString: string;
};

const contentWidth = '80ch';
const noLineBreakStyle = {
  lineBreak: 'anywhere',
};

export default function HtmlDisplay({ htmlString }: HtmlDisplayProps) {
  const theme = useTheme();
  return (
    <div style={{ width: 'fit-content' }}>
      <Typography
        dangerouslySetInnerHTML={{ __html: htmlString }}
        sx={{
          maxWidth: contentWidth,
          '& a': { color: theme.palette.primary.main, ...noLineBreakStyle },
          '& p code': noLineBreakStyle,
          '& li code': noLineBreakStyle,
          '.remark-highlight': {
            maxWidth: '90vw',
          },
        }}
        fontSize="1.1rem"
        component="article"
      />
    </div>
  );
}
