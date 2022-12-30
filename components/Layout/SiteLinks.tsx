import MicIcon from '@mui/icons-material/Mic';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import CodeIcon from '@mui/icons-material/Code';
import EmailIcon from '@mui/icons-material/Email';

export type SiteLinkProps = {
  label: string;
  href: string;
  icon: React.ReactElement | string;
};

export const navLinks: SiteLinkProps[] = [
  { label: 'Odcinki', href: '/episode-list', icon: <MicIcon /> },
  { label: 'Czytelnia', href: '/read', icon: <MenuBookIcon /> },
  { label: 'Filmiki', href: '/watch', icon: <MovieCreationIcon /> },
  { label: 'Projekty', href: '/projects', icon: <CodeIcon /> },

  { label: 'Kontakt', href: '/contact', icon: <EmailIcon /> },
];
