import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import DateDisplay from '../components/DateDisplay/DateDisplay';
import Layout from '../components/Layout/Layout';
import { EpisodeMetadata, getAllEpisodeMetadata } from '../lib/episodes';
import PageContainer from '../components/Layout/PageContainer';

export const getStaticProps: GetStaticProps = async () => {
  const allEpisodeMetadata = getAllEpisodeMetadata();
  return {
    props: {
      allEpisodeMetadata,
    },
  };
};

type EpisodeListProps = {
  allEpisodeMetadata: EpisodeMetadata[];
};

const EpisodeList: NextPage<EpisodeListProps> = ({ allEpisodeMetadata }) => {
  return (
    <Layout
      title="Lista odcinków"
      description="Wybierz odcinek podcastu do posłuchania"
    >
      <PageContainer>
        <Typography variant="h1">Lista odcinków</Typography>
        <nav>
          {allEpisodeMetadata.map((episode) => {
            const { id, date, title } = episode.params;
            return (
              <Stack key={id} sx={{ gap: '3px', margin: '2rem 0' }}>
                <Typography variant="h5" component="h2">
                  <Link href={`/episodes/${id}`}>{title}</Link>
                </Typography>
                <Typography variant="subtitle1">
                  <DateDisplay dateString={date} />
                </Typography>
              </Stack>
            );
          })}
        </nav>
      </PageContainer>
    </Layout>
  );
};

export default EpisodeList;
