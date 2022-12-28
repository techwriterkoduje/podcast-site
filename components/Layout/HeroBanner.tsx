import Stack from "@mui/material/Stack";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function HeroBanner() {
    return (
        <Stack direction="row"
               sx={{
                   alignItems: "center",
                   justifyContent: "space-evenly"
               }}>
            <Stack>
                <Typography sx={{fontSize: "24px", fontWeight: "600"}}>Podcast o technicznej stronie tworzenia
                    dokumentacji w IT</Typography>
                <Typography>
                    Skupiamy się na tym jak Tech Writer może wpasować się w środowisko programistów zarówno pod
                    kątem
                    sposobu pracy jak i używanych technologii, narzędzi i rozwiązań. Staramy się też pokazać, że
                    praca
                    Tech Writera może być ciekawa i rozwijająca pod kątem umiejętności technicznych.
                </Typography>
                <div>Prowadzący</div>
                <div>Linki do platform</div>
            </Stack>
            <Container sx={{textAlign: "center"}}>
                <Image src="/logo.png" width="400px" height="400px"/>
            </Container>
        </Stack>
    )
}