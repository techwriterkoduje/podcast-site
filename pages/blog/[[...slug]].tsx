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
import Heading1 from '../../components/Heading1';

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
        <BackLink href="/episode-list/1">lista odcinków</BackLink>
        <Heading1>{title}</Heading1>
        {pubDate && <DateDisplay dateString={pubDate} />}
        <AudioPlayer audioSrc={audioUrl} />
        <HtmlDisplay htmlString={description} />
      </PageContainer>
    </Layout>
  );
};

export default Episode;
