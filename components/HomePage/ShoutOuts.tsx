import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from '../Image';
import Link from 'next/link';
import PodcastCard from '../PodcastCard';
import SectionStack from '../SectionStack';

type ShoutOutLink = {
  img: string;
  alt: string;
  href: string;
};

const shoutOutLinks: ShoutOutLink[] = [
  {
    img: 'content-bytes.png',
    alt: 'Content Bytes',
    href: 'https://www.linkedin.com/company/content-bytes/about/',
  },
  {
    img: 'soapconf-logo.png',
    alt: 'konferencji soap!',
    href: 'https://soapconf.com/',
  },
  {
    img: 'meetcontent-logo.png',
    alt: 'MeetContent',
    href: 'http://meetcontent.org/',
  },
  {
    img: 'itcqf-logo.png',
    alt: 'ITCQF',
    href: 'https://itcqf.org/',
  },
  {
    img: 'switowski-logo.svg',
    alt: 'Sebastian Witowski',
    href: 'https://switowski.com/',
  },
  {
    img: 'techwriter-logo.png',
    alt: 'Techwriter.pl',
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
          {shoutOutLinks.map(({ alt, href, img }) => (
            <Link href={href} key={href} target="_blank">
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
                <Image
                  src={img}
                  alt={alt}
                  width={imageSize}
                  height={imageSize}
                />
              </ImageListItem>
            </Link>
          ))}
        </ImageList>
      </SectionStack>
    </PodcastCard>
  );
}
