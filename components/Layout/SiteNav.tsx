import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import HorizontalNav from "./HorizontalNav";
import LeftNav from "./LeftNav";
import { navLinks } from "./SiteLinks";

export default function SiteNav() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("sm"));

  if (isLargeScreen) {
    return <HorizontalNav navLinks={navLinks} />;
  }

  return <LeftNav navLinks={navLinks} />;
}
