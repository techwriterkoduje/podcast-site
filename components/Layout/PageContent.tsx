import Stack from "@mui/material/Stack";
import HeroBanner from "./HeroBanner";
import LatestEpisodes from "./LatestEpisodes";
import ContactUs from "./ContactUs";
import Friends from "./Friends";

export default function PageContent() {
    return (
        <Stack>
            <HeroBanner/>
            <LatestEpisodes/>
            <ContactUs/>
            <Friends/>
        </Stack>
    )
}