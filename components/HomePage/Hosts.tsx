import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import PodcastButton from '../PodcastButton';
import Image from '../Image';
import PodcastIconButton from '../PodcastIconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

type Host = {
  name: string;
  img: string;
  alt: string;
  linkedIn: string;
};

const hosts: Host[] = [
  {
    name: 'Michał Skowron',
    img: 'michal-skowron.png',
    alt: 'Zdjęcie Michała Skowrona',
    linkedIn: 'https://www.linkedin.com/in/michalskowron/',
  },
  {
    name: 'Paweł Kowaluk',
    img: 'pawel-kowaluk.png',
    alt: 'Zdjęcie Pawła Kowaluka',
    linkedIn: 'https://www.linkedin.com/in/pawel-kowaluk/',
  },
];

type HostsProps = {
  size?: 'small' | 'medium' | 'large';
  overrideLink?: string;
};

export default function Hosts({ size, overrideLink }: HostsProps) {
  const imageSizes = {
    small: 60,
    medium: 150,
    large: 300,
  };

  const imageSize = size ? imageSizes[size] : imageSizes['medium'];
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      spacing={3}
      width="100%"
      sx={{ padding: '1rem 0' }}
    >
      {hosts.map((host) => (
        <Stack
          key={host.name}
          alignItems="center"
          justifyContent="center"
          spacing={1}
        >
          {overrideLink ? (
            <PodcastButton
              href={overrideLink}
              endIcon={null}
              variant="text"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <Image
                src={host.img}
                height={imageSize}
                width={imageSize}
                alt={host.alt}
              />
              <Typography fontSize={size}>{host.name}</Typography>
            </PodcastButton>
          ) : (
            <>
              <Image
                src={host.img}
                height={imageSize}
                width={imageSize}
                alt={host.alt}
              />
              <Stack direction="row" flexWrap="wrap">
                <PodcastIconButton
                  href={host.linkedIn}
                  title="łącze do Linkedin"
                >
                  <LinkedInIcon />
                </PodcastIconButton>
              </Stack>
            </>
          )}
        </Stack>
      ))}
    </Stack>
  );
}
