import Typography from '@mui/material/Typography';
import Feature, { FeatureProps } from './Feature/Feature';
import PageContainer from './Layout/PageContainer';

const projects: FeatureProps[] = [
  {
    title: 'Semantyczne testy w DITA (Python)',
    imageUrl: 'img/semantics.png',
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
    imageUrl: 'img/next-redoc.png',
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
    title: 'Focus Grid',
    imageUrl: 'img/focus-grid.png',
    description: (
      <>
        <p>
          Gra poprawiająca koncentrację. Wybierz rozmiar tablicy i odsłoń
          kolejne liczby w jak najkrótszym czasie.
        </p>
      </>
    ),
    actionLinks: [
      {
        to: '/focusgrid',
        label: 'Zagraj',
      },
    ],
  },
  {
    title: 'Źródło tej strony (Next.js)',
    imageUrl: 'img/website.png',
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
      <Typography variant="h1">Projekty</Typography>
      {projects.map((project) => (
        <Feature {...project} key={project.title} />
      ))}
    </PageContainer>
  );
}
