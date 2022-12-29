import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Link from "next/link";

export default function ContactUs() {
    return (
        <Stack sx={{
            width: "1200px",
            alignItems: "center",
            gap: "1rem",
            margin: "auto"
        }}>
            <Typography sx={{fontSize: "30px", fontWeight: 600}}>Masz pomysł na odcinek? Chcesz być naszym gościem?</Typography>
            <Link href="/contact">
                <Button variant="contained" sx={{width: "50%", margin: "auto"}}>Skontaktuj się z nami</Button>
            </Link>
        </Stack>
    )
}