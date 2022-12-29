import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Link from 'next/link';
import Image from 'next/image';

const shoutOutLinks = [
  {
    key: 'switowski',
    img: '/switkowski-logo.svg',
    alt: 'Logo strony Sebastian Witowskiego',
    href: 'https://switowski.com/',
  },
  {
    key: 'techwriter',
    img: '/techwriter-logo.png',
    alt: 'Logo strony Techwriter.pl',
    href: 'http://techwriter.pl/',
  },
  {
    key: 'soapconf',
    img: '/soapconf-logo.png',
    alt: 'Logo konferencji soap!',
    href: 'https://soapconf.com/',
  },
];

export default function ShoutOuts() {
  return (
    <Stack sx={{ alignItems: 'center', gap: '1rem' }}>
      <Typography>Szanujemy i wspieramy</Typography>
      <ImageList sx={{ width: 600 }} cols={3} rowHeight={164}>
        {shoutOutLinks.map((l) => (
          <ImageListItem
            key={l.key}
            sx={{
              border: '3px dotted black',
              height: '200px',
              maxWidth: '100%',
              width: '200px',
              cursor: 'pointer',
              justifyContent: 'center',
            }}
          >
            <Link href={l.href}>
              <Image src={l.img} alt={l.alt} layout="fill" />
            </Link>
          </ImageListItem>
        ))}
      </ImageList>
    </Stack>
  );
}
