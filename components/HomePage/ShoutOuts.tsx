import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from '../Image';
import NavLink from '../Layout/NavLink';

type ShoutOutLink = {
  img: string;
  alt: string;
  href: string;
};

const shoutOutLinks: ShoutOutLink[] = [
  {
    img: '/switkowski-logo.svg',
    alt: 'Logo strony Sebastian Witowskiego',
    href: 'https://switowski.com/',
  },
  {
    img: '/techwriter-logo.png',
    alt: 'Logo strony Techwriter.pl',
    href: 'http://techwriter.pl/',
  },
  {
    img: '/soapconf-logo.png',
    alt: 'Logo konferencji soap!',
    href: 'https://soapconf.com/',
  },
];

export default function ShoutOuts() {
  return (
    <Stack sx={{ alignItems: 'center', gap: '2rem', maxWidth: '100%' }}>
      <Typography variant="h2">Szanujemy i wspieramy</Typography>
      <ImageList sx={{ width: '100%' }} cols={3} rowHeight={200}>
        {shoutOutLinks.map((l) => (
          <NavLink href={l.href} key={l.href}>
            <ImageListItem
              sx={{
                border: '3px dotted black',
                aspectRatio: '1/1',
                cursor: 'pointer',
                justifyContent: 'center',
                textAlign: 'center',
                backgroundColor: 'white',
              }}
            >
              <Image src={l.img} alt={l.alt} width="100%" height="100%" />
            </ImageListItem>
          </NavLink>
        ))}
      </ImageList>
    </Stack>
  );
}
