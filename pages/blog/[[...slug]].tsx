import Typography from '@mui/material/Typography';
import { NextPage } from 'next';
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer';
import BackLink from '../../components/BackLink';
import DateDisplay from '../../components/DateDisplay/DateDisplay';
import Layout from '../../components/Layout/Layout';
import PageContainer from '../../components/Layout/PageContainer';
import HtmlDisplay from '../../components/HtmlDisplay';
import {
  getAllEpisodeData,
  getDateAsStrings,
  getOneEpisodeData,
  RssItem,
} from '../../lib/rss';
import ExcludeFromIndex from '../../components/ExcludeFromIndex';

export async function getStaticProps({ params }: { params: any }) {
  const slug = params.slug;
  const [year, month, day] = slug;
  const episodeData = await getOneEpisodeData(year, month, day);
  return {
    props: {
      episodeData,
    },
  };
}

export async function getStaticPaths() {
  const allEpisodeData = await getAllEpisodeData();
  const slugs = allEpisodeData.map((episode) => {
    return [
      ...getDateAsStrings(episode.pubDate),
      episode.episodeNumber.toString(),
    ];
  });

  const paths = slugs.map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
}

type EpisodeProps = {
  episodeData: RssItem;
};

const Episode: NextPage<EpisodeProps> = ({ episodeData }: EpisodeProps) => {
  const { title, pubDate, audioUrl, description } = episodeData;
  return (
    <Layout title={title} description={title}>
      <PageContainer>
        <ExcludeFromIndex>
          <BackLink href="/episode-list/1">lista odcinków</BackLink>
          <Typography variant="h1">{title}</Typography>
          {pubDate && <DateDisplay dateString={pubDate} />}
          <AudioPlayer audioSrc={audioUrl} />
        </ExcludeFromIndex>
        <HtmlDisplay htmlString={description} />
      </PageContainer>
    </Layout>
  );
};

export default Episode;
