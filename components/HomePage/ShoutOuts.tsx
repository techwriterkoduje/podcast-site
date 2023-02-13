import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from '../Image';
import Link from 'next/link';
import PodcastCard from '../PodcastCard';
import { useTheme } from '@mui/material/styles';
import SectionStack from '../SectionStack';

type ShoutOutLink = {
  img: string;
  alt: string;
  href: string;
};

const shoutOutLinks: ShoutOutLink[] = [
  {
    img: 'soapconf-logo.png',
    alt: 'Logo konferencji soap!',
    href: 'https://soapconf.com/',
  },
  {
    img: 'itcqf-logo.png',
    alt: 'Logo ITCQF',
    href: 'https://itcqf.org/',
  },
  {
    img: 'switowski-logo.svg',
    alt: 'Logo strony Sebastian Witowskiego',
    href: 'https://switowski.com/',
  },
  {
    img: 'techwriter-logo.png',
    alt: 'Logo strony Techwriter.pl',
    href: 'http://techwriter.pl/',
  },
];

export default function ShoutOuts() {
  const imageSize = 150;

  return (
    <PodcastCard>
      <SectionStack>
        <Typography variant="h2" textAlign="center">
          Szanujemy i wspieramy
        </Typography>
        <ImageList
          sx={{ width: '100%', justifyItems: 'center' }}
          cols={shoutOutLinks.length}
          rowHeight={imageSize}
        >
          {shoutOutLinks.map((l) => (
            <Link href={l.href} key={l.href} target="_blank">
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
                  src={l.img}
                  alt={l.alt}
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
