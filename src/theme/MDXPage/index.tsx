import React from 'react';
import MDXPageOriginal from '@theme-original/MDXPage';
import type { WrapperProps } from '@docusaurus/types'; // Pomocnicze typy (opcjonalne)
import { PageImageProvider } from '@site/src/context/PageImageContext';

interface MDXPageProps {
  content: {
    frontMatter: {
      image?: string;
      [key: string]: unknown;
    };
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

type MDXPageType = React.FC<MDXPageProps>;

const MDXPageWrapper: MDXPageType = (props) => {
  const { content } = props;
  const { frontMatter } = content;

  return (
    <PageImageProvider image={frontMatter.image}>
      <MDXPageOriginal {...props} />
    </PageImageProvider>
  );
};

export default MDXPageWrapper;
