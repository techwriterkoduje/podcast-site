import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { GetStaticProps, NextPage } from 'next';
import EpisodePreview, {
  EpisodePreviewProps,
} from '../../components/EpisodePreview/EpisodePreview';
import Layout from '../../components/Layout/Layout';
import PodcastCard from '../../components/PodcastCard';
import { getAllEpisodeData } from '../../lib/rss';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import Heading1 from '../../components/Heading1';

const pageSize = 10;

function getNumberOfPages(numberOfEpisodes: number): number {
  const pages = Math.floor(numberOfEpisodes / pageSize);
  const remainder = numberOfEpisodes % pageSize;
  return remainder > 0 ? pages + 1 : pages;
}

function getPageFromQuery(query: ParsedUrlQuery): number {
  const page = query.page;
  if (typeof page === 'string') {
    return parseInt(page);
  }

  if (Array.isArray(page)) {
    return parseInt(page[0]);
  }

  return 0;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const page: number = context.params ? getPageFromQuery(context.params) : 0;
  const allEpisodeData = await getAllEpisodeData();
  const pageStart = (page - 1) * pageSize;
  const pageEnd = pageStart + pageSize;
  const episodesForPage = allEpisodeData.slice(pageStart, pageEnd);
  const episodePreviews: EpisodePreviewProps[] = episodesForPage.map(
    ({ audioUrl, title, blurb, episodeLink, pubDate, duration }) => ({
      audioUrl,
      title,
      blurb,
      episodeLink,
      pubDate,
      duration,
    })
  );
  const props: EpisodeListProps = {
    episodePreviews,
    numberOfPages: getNumberOfPages(allEpisodeData.length),
  };
  return { props };
};

type EpisodePagination = {
  params: {
    page: string;
  };
}[];

export async function getStaticPaths() {
  const allEpisodeData = await getAllEpisodeData();
  const numberOfEpisodes = allEpisodeData.length;
  const numberOfPages = getNumberOfPages(numberOfEpisodes);
  const paths: EpisodePagination = Array.from(Array(numberOfPages).keys()).map(
    (page) => ({
      params: {
        page: `${page + 1}`,
      },
    })
  );
  return {
    paths,
    fallback: false,
  };
}

type EpisodeListProps = {
  episodePreviews: EpisodePreviewProps[];
  numberOfPages: number;
};

const EpisodeList: NextPage<EpisodeListProps> = ({
  episodePreviews,
  numberOfPages,
}) => {
  const router = useRouter();
  const page = getPageFromQuery(router.query);

  function handlePageChange(event: React.ChangeEvent<unknown>, value: number) {
    router.push(`${value}`);
  }

  return (
    <Layout
      title={`Lista odcinków (strona ${page})`}
      description="Wybierz odcinek podcastu do posłuchania"
    >
      <Container>
        <Stack spacing={4} paddingTop={4} paddingBottom={4}>
          <Heading1>Lista odcinków</Heading1>
          <Stack spacing={2}>
            {episodePreviews.map((episode) => (
              <PodcastCard key={episode.episodeLink}>
                <EpisodePreview {...episode} />
              </PodcastCard>
            ))}
          </Stack>
          <Pagination
            count={numberOfPages}
            page={page}
            onChange={handlePageChange}
          />
        </Stack>
      </Container>
    </Layout>
  );
};

export default EpisodeList;
