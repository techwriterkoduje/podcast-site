import Image from "next/image";
import Link from "next/link";
import styles from "./Layout.module.css";

type HeaderProps = {
  showLogo?: boolean;
};

export default function Header({ showLogo }: HeaderProps) {
  return (
    <nav role="nav" className={styles.header}>
      {showLogo && (
        <Link href="/">
          <a className={styles.headerLogo}>
            <Image
              alt="Tech Writer Koduje"
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
