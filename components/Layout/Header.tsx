import Stack from "@mui/material/Stack";
import HomeIcon from "@mui/icons-material/Home";
import {navLinks} from "./SiteLinks";
import Link from "next/link";

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
            <Link href="/">
                <HomeIcon/>
            </Link>
            {navLinks.map(({href, label}) => (
                <Link href={href} key={label}>
                    {label}
                </Link>
            ))}
        </Stack>
    );
}
