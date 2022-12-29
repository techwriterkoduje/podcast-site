import { GetStaticProps, NextPage } from 'next';
import { join } from 'path';
import BackLink from '../components/BackLink/BackLink';
import Layout from '../components/Layout/Layout';
import {
  getMarkdownContent,
  markdownDir,
  MarkdownProps,
} from '../lib/markdown';
import styles from '../styles/EpisodeList.module.css';

export const getStaticProps: GetStaticProps = async () => {
  const markdownContent = await getMarkdownContent(
    join(markdownDir, 'articles', 'dita-as-code.md')
  );
  return {
    props: {
      ...markdownContent,
    },
  };
};

const DitaAsCode: NextPage<MarkdownProps> = ({
  contentHtml,
  title,
  description,
}) => {
  return (
    <Layout title={title} description={description || ''}>
      <section className={styles.pageWrapper}>
        <BackLink href="/read">więcej artykułów</BackLink>
        <h1>{title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: contentHtml }}
          className={styles.episodeContents}
        />
      </section>
    </Layout>
  );
};

export default DitaAsCode;
