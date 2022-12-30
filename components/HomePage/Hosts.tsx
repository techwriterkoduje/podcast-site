import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Image from '../Image';
import NavLink from '../Layout/NavLink';

const hosts = [
  {
    key: 'michalskowron',
    name: 'Michał Skowron',
    img: '/michal-skowron.png',
    alt: 'Zdjęcie Michała Skowrona',
  },
  {
    key: 'pawelkowaluk',
    name: 'Paweł Kowaluk',
    img: '/pawel-kowaluk.png',
    alt: 'Zdjęcie Pawła Kowaluka',
  },
];

export default function Hosts() {
  return (
    <Stack direction="row" sx={{ gap: '3rem' }}>
      {hosts.map((h) => (
        <Stack
          key={h.key}
          sx={{
            width: 'fit-content',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.2rem',
          }}
        >
          <NavLink href="/contact" sx={{ textAlign: 'center' }}>
            <Image src={h.img} width="60px" height="60px" alt={h.alt} />
            <Typography sx={{ fontSize: '0.75em' }}>{h.name}</Typography>
          </NavLink>
        </Stack>
      ))}
    </Stack>
  );
}
