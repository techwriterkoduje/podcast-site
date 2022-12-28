import Stack from "@mui/material/Stack";
import NavLink from "./NavLink";
import HomeIcon from "@mui/icons-material/Home";
import {navLinks} from "./SiteLinks";

export default function Header() {
    return (
        <Stack direction="row" sx={{
            color: "#ed6e5f",
            borderBottom: "2px solid #ed6e5f",
            alignItems: "center",
            height: "50px",
            padding: "0 1rem",
            gap: "1rem"
        }}>
            <NavLink href="/">
                <HomeIcon/>
            </NavLink>
            {navLinks.map(({href, label}) => (
                <NavLink href={href} key={label}>
                    {label}
                </NavLink>
            ))}
        </Stack>
    );
}
