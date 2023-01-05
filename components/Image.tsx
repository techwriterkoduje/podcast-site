export default function Image(
  props: React.ImgHTMLAttributes<HTMLImageElement>
) {
  return (
    <img
      {...props}
      alt={props.alt || ''}
      src={`${process.env.REPO}${props.src}`}
    />
  );
}
