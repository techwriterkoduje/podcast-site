import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Image from '../Image';

type Host = {
  name: string;
  img: string;
  alt: string;
  linkedIn: string;
};

const hosts: Host[] = [
  {
    name: 'Michał Skowron',
    img: '/michal-skowron.png',
    alt: 'Zdjęcie Michała Skowrona',
    linkedIn: 'https://www.linkedin.com/in/michalskowron/',
  },
  {
    name: 'Paweł Kowaluk',
    img: '/pawel-kowaluk.png',
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
    small: '60px',
    medium: '150px',
    large: '300px',
  };

  const imageSize = size ? imageSizes[size] : imageSizes['medium'];
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
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
          <Link
            href={overrideLink ? overrideLink : host.linkedIn}
            target={overrideLink ? undefined : '_blank'}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <Image src={host.img} height={imageSize} alt={host.alt} />
            <Typography fontSize={size}>{host.name}</Typography>
          </Link>
        </Stack>
      ))}
    </Stack>
  );
}
