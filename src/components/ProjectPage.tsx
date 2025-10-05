import Feature, { FeatureProps } from './Feature';
import PageContainer from './Layout/PageContainer';
import Heading1 from './Heading1';

const projects: FeatureProps[] = [
  {
    title: 'Git for docs: basics, not only for beginners',
    imageUrl: 'git-for-docs-workshops-poster.png',
    description: (
      <>
        Materiały do warsztatu &quot;Git for docs: basics, not only for
        beginners&quot;, który poprowadziliśmy 19 września 2025, podczas
        pierwszej edycji CAKE conf.
      </>
    ),
    actionLinks: [
      {
        to: 'https://github.com/techwriterkoduje/cake-conf-2025-git-for-docs',
        label: 'Zacznij się uczyć',
      },
    ],
  },
  {
    title: 'Semantyczne testy w DITA (Python)',
    imageUrl: 'semantics.png',
    description: (
      <>
        Semantyczne tagi w standardzie DITA pozwalają na na pisanie bardzo
        dokładnych testów dokumentacji. Na przykład możesz sprawdzić czy komenda
        (&lt;codeblock&gt;) zapisana w dokumentacji jest poprawna i czy
        przyniesie pożądany skutek (&lt;result&gt;).
      </>
    ),
    actionLinks: [
      {
        to: 'https://github.com/techwriterkoduje/dita-semantic-tests',
        label: 'Zacznij testować',
      },
    ],
  },
  {
    title: 'Statyczna strona z dokumentacja do wielu API (Next.js + Redoc)',
    imageUrl: 'next-redoc.png',
    description: (
      <>
        Zobacz przykład strony, która wyświetla zbiór specyfikacji OpenAPI.
        Redoc renderuje każdą ze specyfikacji. Next.js serwuje całość jako
        statyczną stronę.
      </>
    ),
    actionLinks: [
      {
        to: 'https://github.com/techwriterkoduje/next-js-redoc',
        label: 'Dokumentuj API',
      },
    ],
  },
  {
    title: 'Źródło tej strony (Next.js)',
    imageUrl: 'website.png',
    description: (
      <>
        <p>
          Podoba Ci się nasza strona? Chcesz stworzyć podobną? Strona opiera się
          o Next.js. Odcinki są pobierane z anchor.fm przez RSS feed. Strona
          jest statycznie generowana kiedy wychodzi nowy odcinek lub robimy
          jakieś inne zmiany.
        </p>
        <p>
          Strona jest deployowana za pomocą GitHub Actions i hostowana na GitHub
          Pages.
        </p>
      </>
    ),
    actionLinks: [
      {
        to: 'https://github.com/techwriterkoduje/podcast-site',
        label: 'Zainspiruj się',
      },
    ],
  },
];

export default function ProjectPage() {
  return (
    <PageContainer>
      <Heading1>Projekty</Heading1>
      {projects.map((project) => (
        <Feature {...project} key={project.title} />
      ))}
    </PageContainer>
  );
}
