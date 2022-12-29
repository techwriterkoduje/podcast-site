import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import DateDisplay from '../components/DateDisplay/DateDisplay';
import Layout from '../components/Layout/Layout';
import { EpisodeMetadata, getAllEpisodeMetadata } from '../lib/episodes';
import styles from '../styles/EpisodeList.module.css';

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
      <section className={styles.pageWrapper}>
        <h1>Lista odcinków</h1>
        <nav>
          {allEpisodeMetadata.map((episode) => {
            const { id, date, title } = episode.params;
            return (
              <div key={id} className={styles.navItem}>
                <Link href={`/episodes/${id}`}>
                  <a className={styles.episodeTitle}>{title}</a>
                </Link>
                <div className={styles.date}>
                  <DateDisplay dateString={date} />
                </div>
              </div>
            );
          })}
        </nav>
      </section>
    </Layout>
  );
};

export default EpisodeList;
