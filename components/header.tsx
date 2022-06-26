import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="py-3 px-5 font-semibold text-gray-800 flex justify-between shadow-md">
      <Link href="/">
        <a className="flex content-center gap-2 text-lg">
          <Image alt="logo" src="/logo.png" width={30} height={30} />
          <span>Tech Writer koduje</span>
        </a>
      </Link>
      <nav>
        <Link href="/blog">
          <a>Odcinki</a>
        </Link>
      </nav>
    </header>
  );
}
