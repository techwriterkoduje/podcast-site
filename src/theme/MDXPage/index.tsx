import MDXPageOriginal from '@theme-original/MDXPage';
import { PageImageProvider } from '@site/src/context/PageImageContext';

type MDXPageWrapperProps = {
  content: {
    frontMatter: {
      image?: string;
      [key: string]: unknown;
    };
    [key: string]: unknown;
  };
  [key: string]: unknown;
};

export default function MDXPageWrapper(props: MDXPageWrapperProps) {
  const { content } = props;
  const { frontMatter } = content;

  return (
    <PageImageProvider image={frontMatter.image}>
      <MDXPageOriginal {...props} />
    </PageImageProvider>
  );
}
