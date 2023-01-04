import PageContainer from './Layout/PageContainer';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import YoutubeEmbed, { YoutubeEmbedProps } from './YoutubeEmbed';

const videos: YoutubeEmbedProps[] = [
  {
    embedId: 'JkU2n2mpuU0',
    title: 'Doing docs like code (soap!)',
    description: <>Nasza prezentacja z konferencji soap! w 2019 roku.</>,
    links: [{ label: 'soapconf.com', href: 'http://soapconf.com' }],
  },
  {
    embedId: 'PIXNG3agLhg',
    title: 'Semantic testing in DITA',
    description: (
      <>
        Prezentacja z TC World 2020. DITA umożliwia semantykę, która wychodzi
        daleko poza proste formatowanie tekstu. Semantyka w DITA pozwala na
        pisanie testów, które sprawdzają dokumentację z kodem lub aplikacją.
      </>
    ),
    links: [
      {
        href: 'https://github.com/techwriterkoduje/dita-semantic-tests',
        label: 'Przykładowy projekt',
      },
    ],
  },
];

export default function WatchPage() {
  return (
    <PageContainer>
      <Grid container spacing={2}>
        {videos.map((video) => (
          <Grid key={video.title} md={6}>
            <YoutubeEmbed {...video} />
          </Grid>
        ))}
      </Grid>
    </PageContainer>
  );
}
