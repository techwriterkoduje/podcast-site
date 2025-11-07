import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from '../Image';
import Link from '@docusaurus/Link';
import PodcastCard from '../PodcastCard';
import SectionStack from '../SectionStack';

type ShoutOutLink = {
  img: string;
  label: string;
  href: string;
};

const shoutOutLinks: ShoutOutLink[] = [
  {
    img: 'content-bytes.png',
    label: 'Content Bytes',
    href: 'https://contentbytes.pl/',
  },
  {
    img: 'switowski-logo.svg',
    label: 'Sebastian Witowski',
    href: 'https://switowski.com/',
  },
  {
    img: 'techwriter-logo.png',
    label: 'Techwriter.pl',
    href: 'http://techwriter.pl/',
  },
];

export default function ShoutOuts() {
  const imageSize = 150;

  return (
    <PodcastCard>
      <SectionStack>
        <Typography variant="h2" textAlign="center" id="shout-outs">
          Szanujemy i wspieramy
        </Typography>
        <ImageList
          sx={{ width: '100%', justifyItems: 'center' }}
          cols={shoutOutLinks.length}
          rowHeight={imageSize}
        >
          {shoutOutLinks.map(({ label, href, img }) => (
            <Link href={href} key={href} target="_blank" aria-label={label}>
              <ImageListItem
                sx={{
                  aspectRatio: '1/1',
                  width: imageSize,
                  height: imageSize,
                  cursor: 'pointer',
                  justifyContent: 'center',
                  textAlign: 'center',
                  backgroundColor: 'white',
                  borderRadius: '6px',
                  overflow: 'hidden',
                }}
              >
                <Image src={img} alt="" width={imageSize} height={imageSize} />
              </ImageListItem>
            </Link>
          ))}
        </ImageList>
      </SectionStack>
    </PodcastCard>
  );
}
