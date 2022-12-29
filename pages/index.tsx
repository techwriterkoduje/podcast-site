import type {NextPage} from "next";
import Layout from "../components/Layout/Layout";
import {getAllEpisodeMetadata, getEpisodeData} from "../lib/episodes";
import HomePage from "../components/Layout/HomePage";

const podcastTitle = process.env.podcastTitle;
const email = process.env.contactEmail;

export async function getStaticProps() {
    const allEpisodeMetadata = getAllEpisodeMetadata();
    const latestId = allEpisodeMetadata[0].params.id;
    const episodeData = await getEpisodeData(latestId);
    return {
        props: {
            episodeId: episodeData.episodeId,
        },
    };
}

type HomePageProps = {
    episodeId: string;
};

const Home: NextPage<HomePageProps> = ({episodeId}) => {
    return (
        <Layout
            title={`Podcast ${podcastTitle}`}
            description="Podcast dla tech writerów, którzy kodują i nie tylko"
            isHome
            mainStyle={{textAlign: "center"}}>
            <HomePage/>
        </Layout>
    );
};

export default Home;
