import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function PodcastDescription() {
  return (
    <Stack sx={{ textAlign: 'left' }} spacing={1}>
      <Typography variant="h4" component="h1">
        Podcast o technicznej stronie tworzenia dokumentacji w IT
      </Typography>
      <Typography sx={{ fontSize: '14px' }}>
        Skupiamy się na tym jak Tech Writer może wpasować się w środowisko
        programistów zarówno pod kątem sposobu pracy jak i używanych
        technologii, narzędzi i rozwiązań. Staramy się też pokazać, że praca
        Tech Writera może być ciekawa i rozwijająca pod kątem umiejętności
        technicznych.
      </Typography>
    </Stack>
  );
}
