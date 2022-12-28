import Stack from "@mui/material/Stack";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import SubscribeButtons from "../SubscribeButtons/SubscribeButtons";

const hosts = [
    {
        key: "michalskowron",
        name: "Michal Skowron",
        img: "/michal-skowron.png",
        alt: "Zdjęcie Michała Skowrona"
    },
    {
        key: "pawelkowaluk",
        name: "Paweł Kowaluk",
        img: "/pawel-kowaluk.png",
        alt: "Zdjęcie Pawła Kowaluka"
    }
]

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
                <ImageList sx={{width: 600}} cols={2} rowHeight={164}>
                    {hosts.map(h => (
                        <ImageListItem
                            key={h.key}
                            sx={{
                                width: "200px",
                                height: "200px",
                                justifyContent: "center"
                            }}>
                            <Image src={h.img} width="100%" height="100%" alt={h.alt}/>
                            <ImageListItemBar position="below" title={h.name}/>
                        </ImageListItem>
                    ))}
                </ImageList>
                <SubscribeButtons/>
            </Stack>
            <Container sx={{textAlign: "center"}}>
                <Image src="/logo.png" width="400px" height="400px"/>
            </Container>
        </Stack>
    )
}