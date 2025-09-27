type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export default function Image(props: ImageProps) {
  return <img {...props} alt={props.alt || ''} src={`img/${props.src}`} />;
}
