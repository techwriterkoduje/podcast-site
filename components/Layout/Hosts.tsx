import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

const hosts = [
  {
    key: 'michalskowron',
    name: 'Michal Skowron',
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
    <Stack direction="row" justifyContent="space-between">
      {hosts.map((h) => (
        <Container key={h.key}>
          <img src={h.img} width="100px" height="100px" alt={h.alt} />
          <Typography>{h.name}</Typography>
        </Container>
      ))}
    </Stack>
  );
}
