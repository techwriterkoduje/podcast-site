import Stack from "@mui/material/Stack";
import HeroBanner from "./HeroBanner";
import LatestEpisodes from "./LatestEpisodes";
import ContactUs from "./ContactUs";
import ShoutOuts from "./ShoutOuts";

export default function PageContent() {
    return (
        <Stack gap="4rem">
            <HeroBanner/>
            <LatestEpisodes/>
            <ContactUs/>
            <ShoutOuts/>
        </Stack>
    )
}