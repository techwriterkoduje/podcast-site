import { guideIds } from '../../docs/python/guideIds';
import Feature, { FeatureProps } from './Feature';
import PageContainer from './Layout/PageContainer';
import Heading1 from './Heading1';

const features: FeatureProps[] = [
  {
    title: 'Coding with AI is like speed dating',
    author: 'Michał Skowron',
    imageUrl: 'coding-with-ai.png',
    description: (
      <>
        (Napisałem ten krótki artykuł po angielsku) What does dating have 
        to do with coding? Surprisingly a lot, especially if you commit too fast.
      </>
    ),
    actionLinks: [
      {
        to: '/coding-with-ai',
        label: 'Czytaj o kodowaniu z AI',
      },
    ],
  },
  {
    title: 'A tech writing CCMS can also be a broken promise',
    author: 'Paweł Kowaluk, Michał Skowron',
    imageUrl: 'broken-promise.png',
    description: (
      <>
        (Napisaliśmy ten artykuł po angielsku) CCMS vendors are creating a false
        equivalency between docs as code and their systems. If anything is wrong
        with docs as code, their CCMS is supposed to be the answer. We beg to
        differ.
      </>
    ),
    actionLinks: [
      {
        to: '/broken-promise',
        label: 'Czytaj o złamanej obietnicy',
      },
    ],
  },
  {
    title: 'Are people abandoning docs as code?',
    author: 'Paweł Kowaluk',
    imageUrl: 'abandon.png',
    description: (
      <>
        (Napisałem ten artykuł po angielsku) Based on interviews with content
        professionals. Are people looking to swap their open-source tools for an
        enterprise doc writing experience? Find out the answer! (Spoiler alert:
        it&apos;s &ldquo;no&rdquo;)
      </>
    ),
    actionLinks: [
      {
        to: '/abandon-docs-as-code',
        label: 'Czytaj artykuł',
      },
    ],
  },
  {
    title: 'Organize your team like git',
    author: 'Michał Skowron',
    imageUrl: 'git-logo.png',
    description: (
      <>
        (Napisałem ten artykuł po angielsku!) This article aims to show how you
        can use concepts from git, a distributed version control system, to
        organize your team.
      </>
    ),
    actionLinks: [
      {
        to: '/git-team',
        label: 'Czytaj artykuł',
      },
    ],
  },
  {
    title: 'Golden rules for writing docs',
    imageUrl: 'ten-golden-rules.png',
    author: 'Michał Skowron',
    description: (
      <>
        Zestaw podstawowych zasad, który został stworzony, żeby pomóc
        programistom pisać dobrą dokumentację. Infografika w sposób zwięzły i
        przystępny przedstawia stare prawidła tech writingu, przez co dobrze
        sprawdza się jako ściągawka na co dzień.
      </>
    ),
    actionLinks: [
      {
        to: '/golden-rules',
        label: 'Czytaj zasady',
      },
    ],
  },
  {
    title:
      "Don't panic! How to ride the wave of AI in technical communication and not drown",
    imageUrl: 'dont-panic.png',
    author: 'Michał Skowron, Paweł Kowaluk',
    description: (
      <>
        <p>
          Nasza prezentacja ze spotkania MeetContent, które odbyło się w
          Techie&apos;s Space w Krakowie 9 maja 2023.
        </p>
        <p>
          Tematem spotkania była sztuczna inteligencja w komunikacji technicznej
          - jej możliwości, ograniczenia, narzędzia i zastosowania. W
          prezentacji podzieliliśmy się naszymi spostrzeżeniami i
          doświadczeniami związanymi z tworzeniem treści wspomaganych przez AI.
        </p>
        <p>
          Mamy nadzieję, że zainspiruje Cię to do dalszego poznawania tego
          fascynującego tematu. Pamiętaj jednak, że branża AI rozwija się bardzo
          szybko i niektóre informacje mogą się przedawnić.
        </p>
      </>
    ),
    actionLinks: [
      {
        to: 'https://www.canva.com/design/DAFhwQaRefE/Mp2-2koQ8VD44ye2f6eRLw/edit?utm_content=DAFhwQaRefE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
        label: 'Przeglądaj slajdy',
      },
      {
        to: 'https://meetcontent.github.io/',
        label: 'meetcontent.org',
      },
    ],
  },
  {
    title: 'DITA as code - a modern approach to the classic standard',
    author: 'Michał Skowron, Paweł Kowaluk',
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
        to: 'dita-as-code',
        label: 'Czytaj artykuł',
      },
    ],
  },
  {
    title: 'Tech Writer koduje w Pythonie. Przewodnik szybkiego startu.',
    author: 'Michał Skowron',
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
