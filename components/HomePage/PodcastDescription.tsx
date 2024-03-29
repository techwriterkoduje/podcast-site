import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function PodcastDescription() {
  return (
    <Stack
      sx={{
        marginTop: { xs: 3 },
        textAlign: { md: 'center', lg: 'left' },
      }}
      spacing={1}
    >
      <Typography
        component="h1"
        sx={{ fontSize: '40px', fontWeight: 700, lineHeight: 1.1 }}
      >
        Podcast o technicznej stronie tworzenia dokumentacji w IT
      </Typography>
      <Typography sx={{ fontSize: '18px', padding: '10px 0' }}>
        Skupiamy się na tym jak Tech Writer może wpasować się w środowisko
        programistów zarówno pod kątem sposobu pracy jak i używanych
        technologii, narzędzi i rozwiązań. Staramy się też pokazać, że praca
        Tech Writera może być ciekawa i rozwijająca pod kątem umiejętności
        technicznych.
      </Typography>
    </Stack>
  );
}
