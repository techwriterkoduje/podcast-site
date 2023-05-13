import { guideIds } from '../docs/python/guideIds';
import Feature, { FeatureProps } from './Feature';
import PageContainer from './Layout/PageContainer';
import Heading1 from './Heading1';

const features: FeatureProps[] = [
  {
    title:
      "Don't panic! How to ride the wave of AI in technical communication and not drown",
    imageUrl: 'dont-panic.png',
    description: (
      <>
        <p>
          Prezentacja, którą przedstawiliśmy na MeetContent w Krakowie, 9 maja
          2023. W prezentacji między innymi:
        </p>
        <ul>
          <li>Jak używać AI w codziennej pracy z dokumentacją</li>
          <li>Dlaczego nie można polegać na treści, ale można na stylu</li>
          <li>Czy zastąpią nas roboty?</li>
        </ul>
        <p>To tylko slajdy, więc może dołączysz do nas następnym razem.</p>
      </>
    ),
    actionLinks: [
      {
        to: 'https://www.canva.com/design/DAFhwQaRefE/Mp2-2koQ8VD44ye2f6eRLw/edit?utm_content=DAFhwQaRefE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
        label: 'Przeglądaj slajdy',
      },
      {
        to: 'http://www.meetcontent.org',
        label: 'meetcontent.org',
      },
    ],
  },
  {
    title: 'DITA as code - a modern approach to the classic standard',
    imageUrl: 'dita-as-code.jpg',
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
    imageUrl: 'python.png',
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
    imageUrl: 'managers.png',
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

export default function ReadPage() {
  return (
    <PageContainer>
      <Heading1>Czytelnia</Heading1>
      {features.map((featureProps) => (
        <Feature key={featureProps.title} {...featureProps} />
      ))}
    </PageContainer>
  );
}
