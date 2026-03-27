import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import PodcastButton from '../PodcastButton';
import Image from '../Image';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';
import PodcastCard from '../PodcastCard';
import SectionStack from '../SectionStack';

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
    <PodcastCard>
      <SectionStack>
        <Typography variant="h2" textAlign="center">
          Prowadzący
        </Typography>
        <Typography>
          Od kilku lat zajmujemy się zawodowo dokumentacją do oprogramowania.
          Właściwie od samego początku, techniczna strona tworzenia dokumentacji
          była dla nas najbardziej interesująca. Dlatego uwielbiamy pisać
          skrypty, konfigurować narzędzia i automatyzować. Szukamy rozwiązań,
          które pozwolą Tech Writerom skupić się na tym co ważne.
        </Typography>
        <Typography>
          Na co dzień zastanawiamy się jak świat dokumentacji może czerpać
          korzyści z technologii, których używa się w świecie IT.
        </Typography>
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
                  <Button
                    href={host.linkedIn}
                    target="_blank"
                    startIcon={<LinkedInIcon />}
                    sx={{ textTransform: 'none', fontSize: size }}
                  >
                    {host.name}
                  </Button>
                </>
              )}
            </Stack>
          ))}
        </Stack>
      </SectionStack>
    </PodcastCard>
  );
}
