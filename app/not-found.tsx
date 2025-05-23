import Typography from '@mui/material/Typography';
import PodcastButton from '../components/PodcastButton'; // Adjusted path
import Image from '../components/Image'; // Adjusted path
import PageContainer from '../components/Layout/PageContainer'; // Adjusted path
import NotFoundLogic from '../components/NotFoundLogic'; // Adjusted path
import { headers } from 'next/headers'; // To get the current path on the server for display

export default function NotFound() {
  const heads = headers();
  const currentRoute = heads.get('next-url') || ''; // Get the path from headers

  return (
    <>
      <NotFoundLogic />
      <PageContainer centered>
        <Typography variant="h1">404: nie udało sie znaleźć strony</Typography>
        <Image src="/dreamer.svg" alt="" width={400} height={400} /> {/* Ensure path is relative to public */}
        <Typography>
          Strona <code>{currentRoute}</code> nie istnieje
        </Typography>
        <PodcastButton href="/">Wróć do strony głównej</PodcastButton>
      </PageContainer>
    </>
  );
}
