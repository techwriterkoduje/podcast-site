export default function Image(
  props: React.ImgHTMLAttributes<HTMLImageElement>
) {
  return <img {...props} src={`${process.env.REPO}${props.src}`} />;
}
