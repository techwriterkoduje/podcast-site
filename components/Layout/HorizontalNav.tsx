import { SiteLinkProps } from "./SiteNav";
import styles from "./HorizontalNav.module.css";
import NavLink from "./NavLink";

export default function HorizontalNav({
  navLinks,
}: {
  navLinks: SiteLinkProps[];
}) {
  return (
    <div className={styles.list}>
      {navLinks.map(({ href, label }) => (
        <>
          <NavLink href={href} className={styles.listItem} key={label}>
            <>{label}</>
          </NavLink>
        </>
      ))}
    </div>
  );
}
