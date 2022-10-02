import { SiteLinkProps } from "./SiteLinks";
import styles from "./HorizontalNav.module.css";
import NavLink from "./NavLink";
import HomeIcon from "@mui/icons-material/Home";

export default function HorizontalNav({
  navLinks,
}: {
  navLinks: SiteLinkProps[];
}) {
  return (
    <div className={styles.list}>
      <NavLink href="/">
        <HomeIcon />
      </NavLink>
      {navLinks.map(({ href, label }) => (
        <NavLink href={href} className={styles.listItem} key={label}>
          {label}
        </NavLink>
      ))}
    </div>
  );
}
