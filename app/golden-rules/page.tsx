import type { Metadata } from 'next';
import Box, { BoxProps } from '@mui/material/Box';
import PageContainer from '../../components/Layout/PageContainer'; // Adjusted path
import Image from '../../components/Image'; // Adjusted path
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

export const metadata: Metadata = {
  title: 'Golden rules for writing docs',
  description: 'How to create docs that are easy to read and understand',
};

const cadetBlue = '#6497A6';
const lightBlue = '#79CCDE';
const dimGray = '#4E5D6A';
const goldenPath = '#FFF852';

type RuleProps = {
  title: string;
  bullets: string[];
  icon: string;
};

const rules: RuleProps[] = [
  {
    title: 'Write in a simple way',
    bullets: [
      'Use clear declarative sentences',
      'Use the active voice',
      'Be concise and get to the point quickly',
      'Avoid jargon, slang, and idioms',
      'Explain complex terms and acronyms',
    ],
    icon: 'message.png',
  },
  {
    title: 'Structure your writing',
    bullets: [
      'Use headings and paragraphs',
      'Use tables to represent information more clearly, especially information that is repetitive or has a pattern',
    ],
    icon: 'structure.png',
  },
  {
    title: 'Use lists',
    bullets: [
      'Use ordered lists for procedures and or sets of items where numbers are useful',
      "Use bulleted lists for a sets of items where the order isn't important",
      'If you list three or more things, consider putting them in a bulleted list instead of listing them in a sentence.',
    ],
    icon: 'list.png',
  },
  {
    title: 'Create procedures for tasks',
    bullets: [
      'Introduce the procedure with a short sentence explaining what the user will accomplish',
      'Break down the procedure into steps',
      'Don\'t use "then" and "next" - the sequence of steps is clear from step numbers',
      'Describe the result of the procedure',
    ],
    icon: 'procedure.png',
  },
  {
    title: 'Emphasize important info',
    bullets: ['Use tips, notes, and warnings'],
    icon: 'warning.png',
  },
  {
    title: 'Be consistent',
    bullets: [
      'Stick to one convention for presenting an element, e.g., use monospace for all commands.',
      'Always use the same word for a thing, using synonyms can cause confusion',
    ],
    icon: 'consistent.png',
  },
  {
    title: 'Make navigation easy',
    bullets: ['Add a table of contents in long topics', 'Use links'],
    icon: 'navigation.png',
  },
  {
    title: 'Use graphics wisely',
    bullets: [
      'Add graphics only where they add value',
      "Crop graphics to show only what's necessary",
      'Highlight important elements in the graphic',
    ],
    icon: 'graphics.png',
  },
];

function Rule({ title, bullets, icon }: RuleProps) {
  return (
    <Box>
      <h2
        style={{
          color: lightBlue,
          textAlign: 'center',
          fontSize: 'clamp(20px, 5vw, 45px)',
        }}
      >
        &lt;{title}/&gt;
      </h2>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          maxWidth: '500px',
          gap: 2,
          margin: '0 auto',
        }}
      >
        <Image
          src={icon} // Assuming images are in public directory and paths are relative to public
          alt=""
          width={100}
          height={100}
          style={{ margin: '0 auto' }}
        />
        <ul style={{ flex: 1 }}>
          {bullets.map((bullet, idx) => (
            <li key={idx}>{bullet}</li>
          ))}
        </ul>
      </Box>
    </Box>
  );
}

export default function TenGoldenRulesPage() {
  const commonStyles: BoxProps['sx'] = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    py: 6,
    px: 2,
  };
  return (
    <PageContainer centered stackSpacing={0}>
      <Box
        id="header"
        sx={{
          backgroundColor: cadetBlue,
          ...commonStyles,
        }}
      >
        <p>TECH WRITER KODUJE PRESENTS</p>
        <h1
          style={{
            color: goldenPath,
            fontSize: 'clamp(25px, 5vw, 55px)',
            textAlign: 'center',
          }}
        >
          golden rules for writing docs
        </h1>
      </Box>
      <Box id="body" sx={{ backgroundColor: dimGray, ...commonStyles }}>
        {rules.map((rule, idx) => (
          <Rule key={idx} {...rule} />
        ))}
      </Box>
      <Box
        id="footer"
        sx={{
          backgroundColor: cadetBlue,
          ...commonStyles,
          fontSize: 'large',
        }}
      >
        And remember to stick to the KISS rule (Keep It Simple, Stupid!)
      </Box>
      <Box sx={{ ...commonStyles }}>
        <Button
          variant="contained"
          size="large"
          endIcon={<DownloadIcon />}
          href="/ten-golden-rules.png" // Path relative to public folder
          download={'ten-golden-rules.png'}
        >
          Download
        </Button>
      </Box>
    </PageContainer>
  );
}
