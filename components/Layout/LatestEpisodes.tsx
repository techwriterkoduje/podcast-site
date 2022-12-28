import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Unstable_Grid2"
import Link from "next/link";
import Button from "@mui/material/Button";

export default function LatestEpisodes() {
    return (
        <Stack alignItems="center" gap="1rem" width="100%">
                <iframe
                    src="https://anchor.fm/docdeveloper/embed/episodes/49-Tech-Writer-testuje-narzdzia-do-mierzenia-indeksu-czytelnoci-e1sgepc"
                    height="102px" width="400px" scrolling="no">
                </iframe>
            <Grid container>
                <iframe
                    src="https://anchor.fm/docdeveloper/embed/episodes/49-Tech-Writer-testuje-narzdzia-do-mierzenia-indeksu-czytelnoci-e1sgepc"
                    height="102px" width="200px" scrolling="no">
                </iframe>
                <iframe
                    src="https://anchor.fm/docdeveloper/embed/episodes/49-Tech-Writer-testuje-narzdzia-do-mierzenia-indeksu-czytelnoci-e1sgepc"
                    height="102px" width="200px" scrolling="no">
                </iframe>
            </Grid>
            <Link href="/episode-list">
                <Button variant="contained">Wszystkie odcinki</Button>
            </Link>
        </Stack>
    )
}