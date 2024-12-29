---
title: Przechodzimy do praktyki
---

Być może z rozpędu czy też przyzwyczajenia przejście od razu do części
praktycznej tego przewodnika wydało Ci się dobrym pomysłem. Jeśli tak się stało,
to zachęcam Cię do przeczytania [części teoretycznej](teoria.md), żeby
dowiedzieć się jaki miałem cel pisząc ten przewodnik i jakie powinny być Twoje
oczekiwania w stosunku do tego co tu znajdziesz.

## Co będziemy robić?

Jak to co? Kodować w Pythonie! 🙂

W świecie dokumentacji do oprogramowania, istnieje wiele miejsc, gdzie
tradycyjne "kopiuj-wklej" można potencjalnie zastąpić jakimś automatycznym
rozwiązaniem, które odwali za nas brudną robotę.

Wyobraź sobie taki scenariusz. Dostajesz przydział do projektu, w którym
będziesz bardzo blisko współpracować z programistami. Ustaliliście na samym
początku, że za każdym razem kiedy programista zrobi zmianę w kodzie, która musi
zostać udokumentowana, doda do folderu `docs` plik tekstowy z opisem zmian. Plik
będzie miał taką nazwę jak numer historyjki w systemie do śledzenia zadań. Na
przykład, jeśli historyjka ma numer **PROJ-102** i została stworzona po to, żeby
programista naprawił błąd powodujący, że aplikacja zawieszała się na kilka
sekund, a następnie okno aplikacji przesuwało się poza ekran, to programista w
repozytorium z kodem doda plik `docs\PROJ-102.txt`, w którym będzie taka
informacja.

_PROJ-102.txt_

> Naprawiliśmy błąd, który powodował, że aplikacja zawieszała się na kilka
> sekund, a następnie okno aplikacji przesuwało się poza ekran przez co stawało
> się niewidoczne.

Co kilka tygodni zespół publikuje nową wersję aplikacji wraz z aktualną
dokumentacją, której częścią są _release notes_ (noty wydania). Treść, która
trafia do _release notes_ pochodzi z plików tekstowych, które dodają programiści
kiedy zmieniają kod. Twoim zadaniem, jako Tech Writera, jest sprawdzanie
informacji w tych plikach, poprawianie ich, a na końcu wygenerowanie pliku HTML
z gotowymi notami. Jest to prosty plik z tabelką przedstawiającą zmiany w
aplikacji. Chodzi o coś takiego.

| Numer zgłoszenia | Opis                                                                                                                                                                    |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PROJ-102         | Naprawiliśmy błąd, który powodował, że aplikacja zawieszała się na kilka sekund, a następnie okno aplikacji przesuwało się poza ekran przez co stawało się niewidoczne. |
| PROJ-101         | Dodaliśmy nową funkcję, która pozwala na szybkie pobieranie zasobów sieciowych.                                                                                         |

Nie chcesz generować pliku HTML poprzez ręczne przeklejanie informacji z plików
tekstowych i potem wprowadzanie pozostałych poprawek, dlatego szukasz bardziej
sprytnego rozwiązania. Chcesz swój czas i energię przeznaczyć głównie na
ulepszanie informacji, które dostarczają Ci programiści, a proces publikowania
końcowego pliku chcesz przekazać maszynie.

I to właśnie będzie nasz cel, który będziemy krok po kroku realizować w
kolejnych sekcjach. Zbudujemy razem przykładowy generator treści, który pobiera
informacje z plików tekstowych, a następnie generuje docelowy plik HTML na
podstawie szablonu.
