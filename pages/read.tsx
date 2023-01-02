import Feature, { FeatureProps } from '../components/Feature/Feature';
import Layout from '../components/Layout/Layout';
import PageContainer from '../components/Layout/PageContainer';
import { guideIds } from './python/[id]';

const features: FeatureProps[] = [
  {
    title: 'DITA as code - a modern approach to the classic standard',
    // imageUrl: "img/dita-as-code.jpg",
    description: (
      <>
        (Napisaliśmy ten artykuł po angielsku!) This article aims to show how
        you can use DITA in the docs as code model. Unlike some of the more
        accessible but simpler markup languages like Markdown, DITA offers a
        structured framework for content creation. At the same time, it has
        enough flexibility to fit modern workflows and create a collaborative
        space for cross-functional teams.
      </>
    ),
    actionLinks: [
      {
        to: '/dita-as-code',
        label: 'Czytaj artykuł',
      },
    ],
  },
  {
    title: 'Tech Writer koduje w Pythonie. Przewodnik szybkiego startu.',
    // imageUrl: "img/python.png",
    description: (
      <>
        Jako Tech Writer, możesz zrobić bardzo dużo przy użyciu odrobiny
        programowania. Nie musisz być ekspertem, wystarczy, że umiesz użyć
        Pythona jako narzędzia. A zacząć jest bardzo łatwo. Udostępniamy darmowy
        przewodnik szybkiego startu.
      </>
    ),
    actionLinks: [
      {
        to: `/python/${guideIds[0]}`,
        label: 'Czytaj przewodnik',
      },
    ],
  },
  {
    title: 'Dokumentacja do oprogramowania. Poradnik dla managerów.',
    // imageUrl: "img/managers.png",
    description: (
      <>
        Ta książka została napisana z myślą o osobach odpowiedzialnych za
        dokumentację w firmie. Nieważne czy jesteś na stanowisku kierowniczym i
        prowadzisz zespół, czy jesteś product ownerem i w Twoim produkcie nie ma
        jeszcze dokumentacji czy jesteś jedynym Technical Writerem w firmie.
        Czytaj online za darmo.
      </>
    ),
    actionLinks: [
      {
        to: 'https://pensjonatus.github.io/dokumentacja-do-oprogramowania/docs/przedslowie',
        label: 'Czytaj książkę',
      },
    ],
  },
];

export default function Read() {
  return (
    <Layout
      title="Poczytaj"
      description="Artykuły, poradniki i inne teksty w służbie technical writingu"
    >
      <PageContainer>
        {features.map((featureProps) => (
          <Feature key={featureProps.title} {...featureProps} />
        ))}
      </PageContainer>
    </Layout>
  );
}
