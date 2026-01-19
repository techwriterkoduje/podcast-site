import React, { ComponentProps } from 'react';
import MDXContentOriginal from '@theme-original/MDXContent';
import CoverImage from '@site/src/components/CoverImage';

type MDXContentProps = ComponentProps<typeof MDXContentOriginal>;

const MDXContentWrapper: React.FC<MDXContentProps> = (props) => {
  return (
    <>
      <CoverImage />
      <MDXContentOriginal {...props} />
    </>
  );
};

export default MDXContentWrapper;
