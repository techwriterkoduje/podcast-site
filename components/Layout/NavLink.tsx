import Link from "next/link";

type NavLinkProps = {
  children: JSX.Element | JSX.Element[];
  href: string;
  className: string;
};

export default function NavLink({
  children,
  href,
  className,
}: NavLinkProps & { className?: string }) {
  return (
    <Link href={href}>
      <a className={className}>{children}</a>
    </Link>
  );
}
