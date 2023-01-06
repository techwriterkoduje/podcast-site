import NextImage, { ImageProps } from 'next/image';

export default function Image(
  props: ImageProps
) {
  return (
    <NextImage
      {...props}
      alt={props.alt || ''}
      src={`${process.env.REPO}${props.src}`}
    />
  );
}
