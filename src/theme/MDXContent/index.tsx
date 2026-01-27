import { ComponentProps } from 'react';
import MDXContentOriginal from '@theme-original/MDXContent';
import CoverImage from '@site/src/components/CoverImage';

type MDXContentWrapperProps = ComponentProps<typeof MDXContentOriginal>;

export default function MDXContentWrapper(props: MDXContentWrapperProps) {
  return (
    <>
      <CoverImage />
      <MDXContentOriginal {...props} />
    </>
  );
}
