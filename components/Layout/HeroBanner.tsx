import Stack from "@mui/material/Stack";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import SubscribeButtons from "../SubscribeButtons/SubscribeButtons";
import Hosts from "./Hosts";
import PodcastDescription from "./PodcastDescription";
import PodcastLogo from "./PodcastLogo";
import Grid from "@mui/material/Unstable_Grid2";


export default function HeroBanner() {
    return (
        <Grid container alignItems="center" justifyContent="space-evenly" sx={{width: "100%"}}>
            <Grid
                lg={7}
                container
                alignItems="center"
                justifyContent="center"
                gap="2rem"
                sx={{padding: "2rem 4rem"}}
            >
                <PodcastDescription/>
                <Hosts/>
                <SubscribeButtons/>
            </Grid>
            <PodcastLogo/>
        </Grid>
    )
}