import Typography from '@mui/material/Typography';
import { NextPage } from 'next';
import AnchorEmbed from '../../components/AnchorEmbed/AnchorEmbed';
import BackLink from '../../components/BackLink/BackLink';
import DateDisplay from '../../components/DateDisplay/DateDisplay';
import Layout from '../../components/Layout/Layout';
import PageContainer from '../../components/Layout/PageContainer';
import MarkdownDisplay from '../../components/MarkdownDisplay';
import { getAllEpisodeMetadata, getEpisodeData } from '../../lib/episodes';
import { MarkdownProps } from '../../lib/markdown';

export async function getStaticProps({ params }: { params: any }) {
  const episodeData = await getEpisodeData(params.id);
  return {
    props: {
      episodeData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllEpisodeMetadata();
  return {
    paths,
    fallback: false,
  };
}

type EpisodeProps = {
  episodeData: MarkdownProps;
};

const Episode: NextPage<EpisodeProps> = ({ episodeData }: EpisodeProps) => {
  const { episodeId, title, date, contentHtml } = episodeData;
  return (
    <Layout title={title} description={title}>
      <PageContainer>
        <BackLink href="/episode-list">lista odcinków</BackLink>
        <Typography variant="h1">{title}</Typography>
        {date && <DateDisplay dateString={date} />}
        <AnchorEmbed episodeId={episodeId} />
        <MarkdownDisplay htmlString={contentHtml} />
      </PageContainer>
    </Layout>
  );
};

export default Episode;
