import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import SiteNav from "./SiteNav";

type HeaderProps = {
  showLogo?: boolean;
};

const podcastTitle = process.env.podcastTitle;

export default function Header({ showLogo }: HeaderProps) {
  return (
    <nav role="nav" className={styles.header}>
      <div className={styles.links}>
        <SiteNav />
      </div>
      <div className={styles.logo}>
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
      </div>
      <div className={styles.rightSide}></div>
    </nav>
  );
}
