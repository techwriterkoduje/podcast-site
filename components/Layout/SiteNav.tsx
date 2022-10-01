import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import HorizontalNav from "./HorizontalNav";
import LeftNav from "./LeftNav";

export type SiteLinkProps = {
  label: string;
  href: string;
  dividerAfter?: boolean;
};

const navLinks: SiteLinkProps[] = [
  { label: "Odcinki", href: "/episode-list" },
  { label: "Czytelnia", href: "/read" },
  { label: "Filmiki", href: "/watch" },
  { label: "Projekty", href: "/projects", dividerAfter: true },

  { label: "Kontakt", href: "/contact" },
];

export default function SiteNav() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("sm"));

  if (isLargeScreen) {
    return <HorizontalNav navLinks={navLinks} />;
  }

  return <LeftNav navLinks={navLinks} />;
}
