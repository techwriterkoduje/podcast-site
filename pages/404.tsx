import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Image from '../components/Image';
import Layout from '../components/Layout/Layout';
import NavLink from '../components/Layout/NavLink';
import PageContainer from '../components/Layout/PageContainer';

const Custom404: NextPage = () => {
  const router = useRouter();
  const currentPage = router.asPath;
  return (
    <Layout
      title="404: strona nie istnieje"
      description="Błąd, nie udało się znaleźć strony"
    >
      <PageContainer centered>
        <Typography variant="h1">404: nie udało sie znaleźć strony</Typography>
        <Image src="/dreamer.svg" alt="" width={400} height={400} />
        <Typography>
          Strona <code>{currentPage}</code> nie istnieje
        </Typography>
        <NavLink href="/">
          <Button>Wróć do strony głównej</Button>
        </NavLink>
      </PageContainer>
    </Layout>
  );
};

export default Custom404;
