import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ActionButtonLink from '../components/ActionButtonLink/ActionButtonLink';
import Image from '../components/Image';
import Layout from '../components/Layout/Layout';
import NavLink from '../components/GuideNavigation/NavLink';
import PageContainer from '../components/Layout/PageContainer';
import { useCurrentRoute } from '../hooks/router';
import { findMatchingEpisode, getAllEpisodeData, RssItem } from '../lib/rss';

export async function getStaticProps() {
  const allEpisodeData = await getAllEpisodeData();
  const props: Custom404Props = { allEpisodeData };
  return { props };
}

type Custom404Props = {
  allEpisodeData: RssItem[];
};

export default function Custom404({ allEpisodeData }: Custom404Props) {
  const router = useRouter();
  const { currentRoute } = useCurrentRoute();

  useEffect(
    function () {
      const dateMatch = currentRoute.match(
        /\/([0-9][0-9][0-9][0-9]\/[0-9][0-9]\/[0-9][0-9])/
      );

      if (dateMatch) {
        const [year, month, day] = dateMatch[1].split('/');
        const matchingEpisode = findMatchingEpisode(
          year,
          month,
          day,
          allEpisodeData
        );

        if (matchingEpisode) {
          router.push(matchingEpisode.episodeLink);
        }
      }
    },
    [currentRoute, allEpisodeData, router]
  );

  return (
    <Layout
      title="404: strona nie istnieje"
      description="Błąd, nie udało się znaleźć strony"
    >
      <PageContainer centered>
        <Typography variant="h1">404: nie udało sie znaleźć strony</Typography>
        <Image src="dreamer.svg" alt="" width={400} height={400} />
        <Typography>
          Strona <code>{currentRoute}</code> nie istnieje
        </Typography>
        <ActionButtonLink href="/">Wróć do strony głównej</ActionButtonLink>
      </PageContainer>
    </Layout>
  );
}
