import PageContainer from './Layout/PageContainer';
import Feature, { FeatureProps } from './Feature';
import Heading1 from './Heading1';

const videos: FeatureProps[] = [
  {
    embedId: 'Luya41MjDO4',
    title: 'Is tech writing in Central and Eastern Europe growing? (soap!)',
    description: (
      <>
        <p>Nasza prezentacja z konferencji soap! w 2022 roku.</p>
        <p>
          The world is now more open to remote work and that gives us, technical
          writing professionals, more opportunities than ever before. If I want
          to work remotely, which countries should I look into? And what if I
          want to relocate? Or what if I want to look for writers for my team?
        </p>
        <p>
          ITCQF compiled statistics about technical writers employed in
          countries across Europe. Come to this talk to learn about which
          countries have the most writers, which ones have the most job offers,
          what the salaries are and how the markets have grown or shrunk. You
          can also learn where the growing trends have been the most rapid.
        </p>
      </>
    ),
    actionLinks: [{ label: 'soapconf.com', to: 'http://soapconf.com' }],
  },
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
      <Heading1>Filmiki</Heading1>
      {videos.map((video) => (
        <Feature key={video.title} {...video} />
      ))}
    </PageContainer>
  );
}
