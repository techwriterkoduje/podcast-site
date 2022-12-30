import NorthWestIcon from '@mui/icons-material/NorthWest';
import Link from 'next/link';
import styles from './BackLink.module.css';

type BackLinkProps = {
  href: string;
  children: React.ReactElement | string;
};

export default function BackLink({ href, children }: BackLinkProps) {
  return (
    <Link href={href} className={styles.iconLink}>
      <NorthWestIcon fontSize="small" />
      <span>{children}</span>
    </Link>
  );
}
