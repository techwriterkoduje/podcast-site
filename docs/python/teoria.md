---
id: teoria
title: Na początek trochę teorii
---

Z doświadczenia wiem, że nikt nie lubi czytać wstępów. Jednak zachęcam Cię do
przeczytania tych kilku krótkich sekcji. Dzięki temu, zrozumiesz co, komu i w
jaki sposób chciałem przekazać za pomocą tego przewodnika.

## Dla kogo jest ten przewodnik?

Dla osób zajmujących się tworzeniem dokumentacji do oprogramowania. Twoje
stanowisko może mieć różne nazwy, ale ja dla uproszczenia będę się w tym
przewodniku posługiwał określeniem "Tech Writer".

## Po co powstał ten przewodnik?

Moim celem nie jest zrobienie z Ciebie programisty. Nie dlatego, że nie jest to
możliwe, tylko dlatego, że jako Tech Writer wnosisz dużo do swojej organizacji.
Poza tym, bycie programistą to coś więcej niż tylko nauczenie się składni
jakiegoś języka. To zestaw umiejętności oraz odpowiedni sposób myślenia. Tak
samo jest w przypadku pisania dokumentacji. Umiejętność pisania w dicie czy
obsługi narzędzia typu HAT nie zrobi z Ciebie Tech Writera. Więc zostań tam
gdzie jesteś.

Moim celem jest zrobienie z Ciebie kodującego Tech Writera. Specjalnie używam
słowa "kodować" zamiast "programować", żeby jasno rozróżnić pomiędzy tym co robi
techniczny Tech Writer, a zawodowy programista. Nie staraj się zostać ekspertem
w danym języku programowania. Potraktuj kodowanie jako narzędzie, które ułatwi
Ci osiąganie celów dokumentacyjnych. Niech to będzie kolejna umiejętność, która
zrobi z Ciebie jeszcze lepszego Tech Writera.

Ten przewodnik ma za zadanie wprowadzić Cię w świat kodowania w Pythonie i
zachęcić Cię do pogłębiania wiedzy w tym obszarze. Dzięki temu łatwiej będzie Ci
tworzyć praktyczne rozwiązania, które usprawnią proces tworzenia dokumentacji i
pozwolą Ci lepiej zintegrować się z tym co robią programiści w Twojej
organizacji.

## Dlaczego warto kodować?

Pewnie zastanawiasz się po co Ci kodowanie, skoro budowaniem aplikacji zajmuje
się ktoś inny, a Twoim zadaniem jest ich opisywanie. Nauka kodowania jest dla
Ciebie wartościowa z kilku powodów:

- Będziesz w stanie lepiej zrozumieć o czym mówią programiści. To na pewno
  ułatwi Ci pracę.
- Ucząc się kodowania masz okazję korzystać z tych samych źródeł wiedzy co
  programiści. Dzięki temu lepiej zrozumiesz jak pracują i z jakimi wyzwaniami
  się mierzą. To z kolei pozwoli Ci na łatwiejsze budowanie relacji z nimi. Poza
  tym łatwiej będzie Ci zagaić do nich przy kawie.
- Będziesz w stanie tworzyć rozwiązania, takie jak skrypty, które zautomatyzują
  nudną i powtarzalną część Twojej pracy. Na przykład, zamiast generować 10
  wersji dokumentu poprzez klikanie i czekanie a potem przenoszenie ich w
  miejsce docelowe, napiszesz skrypt, który uruchomi budowanie dokumentów, a
  potem przekopiuje je gdzie trzeba. Przekazując takie zadania maszynie będziesz
  mieć więcej czasu na zajęcie się tym co jest ważne w pracy Tech Writera, a
  czego maszyna nie potrafi tak dobrze jak Ty, czyli tworzeniem użytecznej
  treści.
- Jest to dobre ćwiczenie mentalne. Zmusisz swój mózg do innego rodzaju
  aktywności od tego co robisz na co dzień jako Tech Writer.
- Zrozumiesz, że pisanie dokumentacji podczas kodowania nie jest do końca
  naturalną rzeczą. Kiedy zatopisz się w kodowaniu, wchodzisz w tryb rozmowy z
  maszyną i skupiasz się na rozwiązaniu problemu. Nie jest łatwo przełączyć się
  na tryb rozmowy z człowiekiem, czyli pisanie dokumentacji. Dlatego następnym
  razem kiedy programista nie doda dokumentacji do swojego kodu, spojrzysz na
  niego łaskawszym okiem.

## Dlaczego Python?

Python jest dobrym językiem, żeby rozpocząć przygodę z kodowaniem. Jego składnia
jest prosta i przejrzysta, dlatego pierwsze proste skrypty jesteś w stanie
zacząć pisać szybko. To trochę jak mówienie po angielsku do komputera.
Uszczypliwi twierdzą wręcz, że składnia Pythona przypomina bardziej pseudokod
niż prawdziwy kod. O ile dla programisty takie stwierdzenie może być obelgą i
spowodować, że ucierpi na tym jego ego, o tyle dla Tech Writera jest to jak
najbardziej pozytywna rzecz, bo łatwiej jest się nauczyć takiej składni.
Słyszałem kiedyś takie stwierdzenie, że łatwa składnia Pythona ułatwia skupienie
się na problemie, który chcemy rozwiązać zamiast na tym jak napisać kod.

Jednak, żeby wszystko było jasne - Python nie jest prymitywny. To język, który
ma wiele twarzy. Jeśli potrzebujesz prostego skryptu, to możesz go napisać w
relatywnie krótkim czasie nie rozumiejąc dogłębnie wszystkich aspektów tego
języka. Ale jeśli potrzebujesz napisać rozbudowaną aplikację, Python też to
potrafi.

Kiedyś przyszła mi do głowy taka analogia - Python dla Tech Writera jest jak
Markdown dla programisty. Nie zajmujesz się zawodowo programowaniem i kodowanie
jest dla Ciebie kolejnym narzędziem do osiągania dokumentacyjnych celów, dlatego
potrzebujesz czegoś łatwego i przyjemnego. Tak samo jest w przypadku
programistów. Ich głównym zadaniem jest programowanie, a nie pisanie
dokumentacji, dlatego również potrzebują czegoś z czego można szybko zacząć
korzystać.

## Jak będziemy się uczyć?

Python jak by nie było jest językiem. Co prawda programowania, ale nadal
językiem. Każdy kto uczęszczał do szkoły miał okazję uczyć się (lub być uczonym)
jakiegoś języka. Dlatego chciałbym podejść do nauki Pythona jak do nauki języka
angielskiego. Jednak w przeciwieństwie do tradycyjnej szkoły, w tym przewodniku
"gramatyką" zajmiemy się tylko do takiego stopnia, żeby było wiadomo co się
dzieje i żeby mieć poczucie komfortu w trakcie pisania kodu. Nie zrozum mnie
źle, gramatyka jest ważna i jej znajomość jest jak najbardziej wartościowa, ale
na etapie gdzie zaczynasz swoją przygodę z językiem skupimy się na
"konwersacjach".

Wskoczymy na głęboką wodę i od razu zaczniemy rozmawiać z komputerem. Na
początku nie będziesz do końca rozumieć co mówisz, pewne zasady być może będą
dla Ciebie niejasne, ale będziesz mieć poczucie, że uczysz się czegoś
praktycznego i będziesz od razu widzieć efekty tej nauki. Czyli będzie dokładnie
tak jak podczas nauki angielskiego poprzez konwersacje z native speakerem.
Zamiast uczyć się reguł kodowania w Pythonie, żeby potem błyszczeć w
towarzystwie wiedzą teoretyczną, stworzymy razem przykładową aplikację, dzięki
której nauczysz się czegoś praktycznego i zobaczysz w jakich obszarach znajomość
Pythona może Ci pomóc w pracy Tech Writera. Zatem, nie przedłużając, przystąpmy
do kodowania.
