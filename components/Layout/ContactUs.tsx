import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import NavLink from "./NavLink";

export default function ContactUs() {
    return (
        <Stack sx={{
            alignItems: "center",
            gap: "1rem"
        }}>
            <Typography>Masz pomysł na odcinek? Chcesz być naszym gościem?</Typography>
            <NavLink href="/contact">
                <Button variant="outlined">Skontaktuj się z nami</Button>
            </NavLink>
        </Stack>
    )
}