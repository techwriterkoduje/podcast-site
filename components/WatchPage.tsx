import PageContainer from './Layout/PageContainer';
import Feature, { FeatureProps } from './Feature/Feature';

const videos: FeatureProps[] = [
  {
    embedId: 'JkU2n2mpuU0',
    title: 'Doing docs like code (soap!)',
    description: <>Nasza prezentacja z konferencji soap! w 2019 roku.</>,
    actionLinks: [{ label: 'soapconf.com', to: 'http://soapconf.com' }],
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
    actionLinks: [
      {
        to: 'https://github.com/techwriterkoduje/dita-semantic-tests',
        label: 'Przykładowy projekt',
      },
    ],
  },
];

export default function WatchPage() {
  return (
    <PageContainer>
      {videos.map((video) => (
        <Feature key={video.title} {...video} />
      ))}
    </PageContainer>
  );
}
