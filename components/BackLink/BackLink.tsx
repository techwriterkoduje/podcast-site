import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import styles from './BackLink.module.css';

type BackLinkProps = {
  href: string;
  children: JSX.Element | JSX.Element[] | string;
};

export default function BackLink({ href, children }: BackLinkProps) {
  return (
    <Link href={href} className={styles.iconLink}>
      <ArrowBackIcon fontSize="small" />
      <span>{children}</span>
    </Link>
  );
}
