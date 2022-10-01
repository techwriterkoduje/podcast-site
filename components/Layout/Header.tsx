import Image from "next/image";
import Link from "next/link";
import styles from "./Layout.module.css";
import SiteNav from "./SiteNav";

type HeaderProps = {
  showLogo?: boolean;
};

const podcastTitle = process.env.podcastTitle;

export default function Header({ showLogo }: HeaderProps) {
  return (
    <nav role="nav" className={styles.header}>
      <SiteNav />
      {showLogo && (
        <Link href="/">
          <a className={styles.headerLogo}>
            <Image
              alt={podcastTitle}
              src="/logo.png"
              width={100}
              height={100}
            />
          </a>
        </Link>
      )}
    </nav>
  );
}
