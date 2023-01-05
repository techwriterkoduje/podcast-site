import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { NextPage } from 'next';
import EpisodePreview from '../components/EpisodePreview/EpisodePreview';
import Layout from '../components/Layout/Layout';
import PageContainer from '../components/Layout/PageContainer';
import { getAllEpisodeData, RssItem } from '../lib/rss';

export async function getStaticProps() {
  const allEpisodeData = await getAllEpisodeData();
  const props: EpisodeListProps = { allEpisodeData };
  return { props };
}

type EpisodeListProps = {
  allEpisodeData: RssItem[];
};

const EpisodeList: NextPage<EpisodeListProps> = ({ allEpisodeData }) => {
  return (
    <Layout
      title="Lista odcinków"
      description="Wybierz odcinek podcastu do posłuchania"
    >
      <PageContainer>
        <Typography variant="h1">Lista odcinków</Typography>
        <Stack spacing={5}>
          {allEpisodeData.map((episode) => (
            <EpisodePreview {...episode} key={episode.anchorLink} />
          ))}
        </Stack>
      </PageContainer>
    </Layout>
  );
};

export default EpisodeList;
