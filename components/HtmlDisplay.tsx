import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Prism from 'prismjs';
import { useEffect } from 'react';

type HtmlDisplayProps = {
  htmlString: string;
};

const contentWidth = '80ch';
const noLineBreakStyle = {
  lineBreak: 'anywhere',
};

export default function HtmlDisplay({ htmlString }: HtmlDisplayProps) {
  const theme = useTheme();

  useEffect(function () {
    Prism.highlightAll();
  }, []);

  return (
    <div style={{ width: 'fit-content' }}>
      <Typography
        dangerouslySetInnerHTML={{ __html: htmlString }}
        sx={{
          maxWidth: contentWidth,
          '& a': { color: theme.palette.primary.main, ...noLineBreakStyle },
          '& p code': noLineBreakStyle,
          '& li code': noLineBreakStyle,
          '.line-numbers': {
            maxWidth: '90vw',
            fontSize: '90%',
          },
        }}
        fontSize="1.1rem"
        component="article"
        className="line-numbers"
      />
    </div>
  );
}
