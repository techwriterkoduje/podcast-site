import PageContainer from './Layout/PageContainer';
import Feature, { FeatureProps } from './Feature';
import Heading1 from './Heading1';

const multimediaItems: FeatureProps[] = [
  {
    title: '#114: Technical writer (Porozmawiajmy o IT)',
    description: (
      <>
        <p>
          Nasz gościnny występ w podcaście &quot;Porozmawiajmy o IT&quot;
          (POIT), w którym opowiadamy o zawodzie Technical Writera.
        </p>
      </>
    ),
    actionLinks: [
      {
        label: 'Posłuchaj',
        to: 'https://porozmawiajmyoit.pl/poit-114-technical-writer/',
      },
    ],
  },
  {
    title: 'Skill #11: Surviving in the Dev World (The Not-Boring Tech Writer)',
    description: (
      <>
        <p>
          Nasz gościnny występ w podcaście &quot;The Not-Boring Tech
          Writer&quot;, w którym opowiadamy o tym, jak Technical Writer może
          przetrwać w świecie deweloperów.
        </p>
      </>
    ),
    actionLinks: [
      {
        label: 'Posłuchaj',
        to: 'https://thenotboringtechwriter.com/episodes/skill-11-surviving-in-the-dev-world',
      },
    ],
  },
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

export default function MultimediaPage() {
  return (
    <PageContainer>
      <Heading1>Multimedia</Heading1>
      {multimediaItems.map((multimediaItem) => (
        <Feature key={multimediaItem.title} {...multimediaItem} />
      ))}
    </PageContainer>
  );
}
