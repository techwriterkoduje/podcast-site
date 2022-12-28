import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function PodcastDescription() {
    return (
        <Stack sx={{textAlign: "left"}} gap="2rem">
            <Typography sx={{fontSize: "24px", fontWeight: "600"}}>Podcast o technicznej stronie tworzenia
                dokumentacji w IT</Typography>
            <Typography>
                Skupiamy się na tym jak Tech Writer może wpasować się w środowisko programistów zarówno pod
                kątem
                sposobu pracy jak i używanych technologii, narzędzi i rozwiązań. Staramy się też pokazać, że
                praca
                Tech Writera może być ciekawa i rozwijająca pod kątem umiejętności technicznych.
            </Typography>
        </Stack>
    )
}