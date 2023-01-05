import Stack from "@mui/material/Stack";
import LogoLink from "./LogoLink";
import NavLink from "./NavLink";
import { navLinks } from "./SiteLinks";

export default function DesktopHeader() {
    return (
      <Stack
        direction="row"
        sx={{
          color: '#ed6e5f',
          borderBottom: '2px solid #ed6e5f',
          alignItems: 'center',
          height: '50px',
          padding: '0 1rem',
          gap: '1rem',
        }}
      >
        <LogoLink />
        {navLinks.map(({ href, label }) => (
          <NavLink href={href} key={label} sx={{ fontSize: '1.1rem' }}>
            {label}
          </NavLink>
        ))}
      </Stack>
    );
  }