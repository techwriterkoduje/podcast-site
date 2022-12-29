export default function Image(
  props: React.ImgHTMLAttributes<HTMLImageElement>
) {
  return <img {...props} src={`${process.env.repo}${props.src}`} />;
}
