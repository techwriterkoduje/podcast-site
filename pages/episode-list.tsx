import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { NextPage } from 'next';
import Link from 'next/link';
import DateDisplay from '../components/DateDisplay/DateDisplay';
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
        <nav>
          {allEpisodeData.map((episode) => {
            const { title, anchorLink, pubDate, episodeLink } = episode;
            return (
              <Stack key={anchorLink} sx={{ gap: '3px', margin: '2rem 0' }}>
                <Typography variant="h5" component="h2">
                  <Link
                    href={`/blog/${episodeLink}`}
                    style={{ lineBreak: 'auto' }}
                  >
                    {title}
                  </Link>
                </Typography>
                <Typography variant="subtitle1">
                  <DateDisplay dateString={pubDate} />
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
