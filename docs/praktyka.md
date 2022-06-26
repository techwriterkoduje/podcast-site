---
title: Przechodzimy do praktyki
---

Być może z rozpędu czy też przyzwyczajenia przejście od razu do części
praktycznej tego przewodnika wydało Ci się dobrym pomysłem. Jeśli tak się stało,
to zachęcam Cię do przeczytania [części teoretycznej](teoria.md), żeby
dowiedzieć się jaki miałem cel pisząc ten przewodnik i jakie powinny być Twoje
oczekiwania w stosunku do tego co tu znajdziesz.

## Co będziemy robić?

Jak to co? Kodować w Pythonie! :)

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

```
Naprawiliśmy błąd, który powodował, że aplikacja zawieszała się na kilka sekund, a następnie okno aplikacji przesuwało się poza ekran przez co stawało się niewidoczne.
```

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

## Co nam będzie potrzebne?

Starałem się ograniczyć liczbę potrzebnych komponentów do minimum, żebyśmy mogli
przejść jak najszybciej do kodowania. Jednak pewnych rzeczy nie da się pominąć,
dlatego będziesz potrzebować takiego oprogramowania.

### Python

Pythona trzeba zainstalować. W niektórych systemach operacyjnych, może już być
zainstalowany, ale istnieje spora szansa, że nie będzie to wersja, której
potrzebujemy. A będziemy potrzebować wersji 3.7 lub nowszej.

Instalatory znajdziesz na oficjalnej stronie Pythona (https://www.python.org/).
Możesz też zainstalować Pythona poprzez menedżera paczek w swoim systemie
operacyjnym. Kolejną opcją jest użycie narzędzia pyenv
(https://github.com/pyenv/pyenv). W przypadku Windowsa możesz także skorzystać z
instalacji poprzez Microsoft Store.

Wybierz dogodną dla siebie metodę instalacji. Jeśli napotkasz jakieś problemy to
najlepiej poproś o pomoc kogoś kto ma doświadczenie z Pythonem albo poszukaj
informacji w internecie. Biorąc pod uwagę liczbę systemów operacyjnych,
potencjalna liczba problemów z instalacją jest spora, dlatego nie byłbym w
stanie pokryć w tym przewodniku każdej możliwej ścieżki.

Bez względu na to jaką wybierzesz metodę instalacji, zwróć uwagę, żeby dodać
Pythona do zmiennych środowiskowych, czyli przypisać komendę `python` do Pythona
3, którego zainstalujesz. Robi się to różnie w zależności od systemu
operacyjnego i sposobu instalacji. Na przykład, jeśli instalujesz Pythona na
Windowsie za pomocą instalatora pobranego z oficjalnej strony Pythona, na jednym
z ekranów będziesz mieć opcję, żeby dodać Pythona do zmiennych środowiskowych
(`PATH`).

### Edytor tekstowy

Możesz użyć jakiegokolwiek edytora tekstowego, żeby kodować w Pythonie. Jednak
zachęcam Cię do skorzystania z edytora, który wspiera Pythona. Ułatwi Ci to
znacznie życie, bo taki edytor podpowie Ci podczas pisania jakie masz opcje,
automatycznie sformatuje Twój kod i da Ci znać jeśli coś będzie nie tak. Na
szczęście nie ma problemu ze znalezieniem odpowiedniego edytora, który jest
darmowy. Nie chcę Ci narzucać niczego, ale w momencie pisania tego przewodnika
popularnym i darmowym edytorem, który oferuje wsparcie dla Pythona jest Visual
Studio Code od Microsoftu (https://code.visualstudio.com/). Może ta opcja będzie
dla Ciebie odpowiednia.

Oprócz edytorów, możesz skorzystać z bardziej zaawansowanej opcji, czyli IDE
(ang. _integrated development environment_). Przykładem może być PyCharm od
JetBrains (https://www.jetbrains.com/pycharm/). Jednak na nasze potrzeby jest to
za dużo. Nauczenie się obsługi IDE przyniesie Ci korzyści, ale na późniejszym
etapie nauki Pythona. Na tym etapie, polecam edytor tekstowy.

## Kodowanie czas zacząć

Mam nadzieję, że instalacja Pythona i edytora nie przysporzyły Ci problemów i że
Twój zapał jest taki sam albo większy jak w momencie rozpoczęcia czytania tego
przewodnika. Skoro mamy już wszystko gotowe to zabieramy się do pracy.

Będziemy krok po kroku budować naszą aplikację. Pomimo tego, że ten przewodnik
jest napisany w języku polskim i nasze pliki tekstowe zawierają w sobie polski
tekst, to nasz kod będziemy pisać po angielsku. Być może wyda Ci się to dziwne,
ale według mnie jest to bardziej naturalne i powszechne. Poza tym, dzięki temu,
Twój kod będzie mógł bywać w świecie, bo Twoi anglojęzyczni znajomi też będą w
stanie go zrozumieć.

Jeśli chcesz od razu skoczyć na głęboką wodę albo po prostu jesteś ciekaw co tu
się wydarzy, przejdź do sekcji [Gotowa aplikacja](#gotowa-aplikacja).

### Krok 1: Stwórz folder dla generatora

W dogodnej lokalizacji na swoim dysku, stwórz folder `rel_notes_generator`. W
tym folderze będziemy dodawać kolejne zasoby potrzebne nam do zbudowania
generatora.

### Krok 2: Dodaj przykładowe pliki tekstowe

Stwórz folder `rel_notes_generator\input`, a w nim dodaj dwa pliki tekstowe,
`PROJ-101.txt` i `PROJ-102.txt`, z taką zawartością jak widać poniżej. Tymi
plikami "nakarmimy" nasz generator. Dzięki temu będziemy mogli sprawdzić czy
działa tak jak tego chcemy.

_PROJ-101.txt_

```PROJ-101.txt
Dodaliśmy nową funkcję, która pozwala na szybkie pobieranie zasobów sieciowych.
```

_PROJ-102.txt_

```PROJ-102.txt
Naprawiliśmy błąd, który powodował, że aplikacja zawieszała się na kilka sekund, a następnie okno aplikacji przesuwało się poza ekran przez co stawało się niewidoczne.
```

### Krok 3: Stwórz szablon dla pliku HTML

Mamy już pliki tekstowe, z których pobierzemy treść naszych not wydania. Teraz
potrzebujemy jeszcze szablonu, do którego wstawimy informacje pobrane z plików
tekstowych. Stwórz plik `rel_notes_generator\release_notes_template.html` z
takim kodem HTML.

_release_notes_template.html_

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Noty wydania</title>
  </head>

  <body>
    <table>
      <tr>
        <th>Numer zgłoszenia</th>
        <th>Opis</th>
      </tr>
      $release_notes
    </table>
  </body>
</html>
```

Ten prosty plik zawiera tabelkę, która póki co ma tylko jeden wiersz z dwoma
kolumnami (`Numer zgłoszenia` i `Opis`) oraz tajemniczy element
`$release_notes`. Jest to element zastępczy, który zostanie zamieniony przez
nasz generator na informacje pobrane z plików tekstowych. W kroku 5 poznasz
komponent Pythona, który będzie w stanie zrobić użytek z tego elementu.

### Krok 4: Stwórz plik dla kodu generatora

Stwórz plik `rel_notes_generator\rel_notes_generator.py`. Pliki zawierające kod
Pythona mają rozszerzenie `.py`. W tym pliku będzie znajdował się kod dla
naszego generatora, który napiszemy w kolejnych krokach.

### Krok 5: Dodaj linki do potrzebnych komponentów Pythona

Python zawiera w sobie bogaty zestaw gotowych komponentów, z których możemy
korzystać od razu bez instalowania dodatkowego oprogramowania. Ten zestaw nazywa
się **The Python Standard Library**. Żeby móc skorzystać z jakiegoś komponentu
musimy go zaimportować w naszej aplikacji, czyli tak jakby dodać do niego link.
Możemy to zrobić wpisując:

`import nazwaKomponentu`

albo

`from nazwaKomponentu import nazwaElementu`

Różnica jest taka, że w pierwszym sposobie importujemy cały komponent a w drugim
tylko określone elementy, których akurat potrzebujemy.

Nasz generator będzie korzystał z trzech elementów, które są w trzech różnych
komponentach. Dlatego na początku naszego kodu w pliku `rel_notes_generator.py`
musimy dodać takie linijki.

_rel_notes_generator.py_

```python
from string import Template
from pathlib import Path
from shutil import rmtree
```

Z komponentu `string` importujemy element `Template`, który pozwala na obsługę
szablonów. Będzie on nam potrzebny, żeby odpowiednio opakować informacje pobrane
z plików tekstowych i potem je podstawić w odpowiednie miejsce w szablonie HTML.
Jak pamiętasz, w kroku 3 pojawił się element zastępczy `$release_notes`.
Dodaliśmy go do naszego szablonu po to, żeby komponent `Template` wiedział gdzie
ma wstawić właściwe informacje.

Z komponentu `pathlib` importujemy element `Path`, dzięki któremu w elegancki
sposób będziemy mogli ustawić w naszej aplikacji ścieżki do potrzebnych zasobów.

Z komponentu `shutil` importujemy element `rmtree`, który pozwala na usuwanie
folderów, nawet jeśli nie są puste.

### Krok 6: Ustaw ścieżki do potrzebnych zasobów

W naszym generatorze musimy ustawić trzy ścieżki w taki oto sposób.

_rel_notes_generator.py_

```python
current_dir = Path(__file__).parent
input_dir = current_dir / 'input'
output_dir = current_dir / 'output'
```

Zanim przejdę do wyjaśnienia o co dokładnie tutaj chodzi, wspomnę tylko, że
zmienne w Pythonie tworzymy poprzez przypisanie jakiejś wartości do nazwy. Na
przykład, jeśli chciałbym stworzyć zmienną `name`, która będzie przechowywać w
sobie moje imię i nazwisko, to muszę zrobić to tak.

```python
name = 'Michał Skowron'
```

W Pythonie możesz używać zarówno pojedynczych (`''`) jak i podwójnych (`""`)
cudzysłowów.

Ale wróćmy do naszych ścieżek. Na początku, ustawiamy `current_dir` czyli
ścieżkę do folderu, w którym znajduje się nasz plik `rel_notes_generator.py`.
Robimy to za pomocą elementu `__file__` dostępnego w Pythonie. Ten element
przechowuje ścieżkę do pliku. Dodając `.parent` mówimy Pythonowi, że chcemy w
naszej zmiennej zapisać nie ścieżkę do naszego pliku, tylko do folderu, w którym
nasz plik się znajduje.

Pewnie zastanawiasz się po co jest nam to potrzebne? Jest to ogólnie dobra
praktyka. Korzystając z niej ułatwiamy sobie życie, bo nie musimy na sztywno
wpisywać ścieżki do naszego pliku. Dzięki temu nie ma znaczenia gdzie znajduje
się nasz plik `rel_notes_generator.py`, bo Python sam sobie rozwiąże tę ścieżkę.
Ta ścieżka jest naszym punktem wyjścia dla kolejnych ścieżek. Na jej podstawie
budujemy ścieżkę do folderu `input`, w którym trzymamy pliki tekstowe i do
folderu `output`, w którym zapisujemy nasz końcowy plik HTML.

Możliwe, że zastanawiasz się teraz czy nie dałoby się tego zrobić prościej i
uniknąć tej szamanerii. Dałoby się, ale niekoniecznie byłoby to lepsze
rozwiązanie. Gdybyśmy nie skorzystali z elementu `__file__`, musielibyśmy
ustawić ścieżki "na piechotę". Wyobraź sobie, że Twój plik
`rel_notes_generator.py` znajduje się w `C:\my-apps\rel_notes_generator`. Więc
ustawiasz ścieżki na sztywno w taki sposób.

```python
current_dir = 'C:\my-apps\rel_notes_generator'
input_dir = current_dir + '\' + 'input'
output_dir = current_dir + '\' + 'output'
```

Takie rozwiązanie na pierwszy rzut oka może Ci się wydawać całkiem w porządku,
ale niestety niesie ze sobą parę problemów. Generator będzie działał tylko wtedy
jeśli:

- Uruchomimy go na Windowsie
- Nasz folder projektu będzie nazywał się `rel_notes_generator` i będzie
  znajdował się w `C:\my-apps`.

Jeśli zmienimy nazwę folderu projektu albo przeniesiemy go w inne miejsce, to
nasz generator przestanie działać. To dość spore ograniczenia, których możemy
uniknąć stosując komponent `pathlib` i ścieżkę do folderu projektu, która sama
się automatycznie rozwiązuje.

### Krok 7: Dodaj funkcję do wyciągania informacji z plików źródłowych

Teraz dodamy naszą pierwszą funkcję.

Funkcja w kodzie to nic innego jak kawałek kodu, który wykonuje jakąś operację.
Będzie nam ona potrzebna, żeby z naszych plików tekstowych pobrać ich nazwę i
zawartość.

Dodaj do pliku `rel_notes_generator.py` następujący kod.

_rel_notes_generator.py_

```python
def get_release_notes(source_dir):
    rel_notes = {}
    for file in source_dir.glob('*.txt'):
        rel_note_id = file.stem
        with file.open() as f:
            rel_note_text = f.read()
        rel_notes[rel_note_id] = rel_note_text
    return rel_notes
```

W Pythonie, tworzymy funkcję za pomocą słowa `def`. Następnie podajemy nazwę
funkcji i opcjonalnie w nawiasie określamy parametry, które funkcja przyjmuje.

W naszym wypadku funkcja nazywa się `get_release_notes`. Żeby mogła wykonać
poprawnie swoje zadanie, musimy podać jej ścieżkę do folderu, w którym znajdują
się pliki tekstowe (`source_dir`).

Pierwsze koty za płoty. Idziemy dalej. Nasza funkcja ma za zadanie przejść przez
wszystkie pliki i zebrać z nich nazwę i zawartość. Zgodnie z tym co zostało
ustalone z programistami w Twoim projekcie, nazwa pliku to numer zgłoszenia, a
zawartość to opis wprowadzonych zmian w kodzie aplikacji. W związku z tym,
wygodnie będzie nam zapisać informacje zebrane przez naszą funkcję w formie
słownika (`dict`), czyli takiego zbioru elementów `klucz: wartość`. W Pythonie,
słownik to jeden z najważniejszych typów danych, który jest bardzo często
używany.

W naszym wypadku, taka para będzie wyglądać tak: `numer zgłoszenia: opis zmian`.
Na początku dodajemy zmienną `rel_notes`, która będzie przechowywać pusty
słownik (`{}`). Potem ten pusty słownik wypełnimy danymi, które nasza funkcja
zbierze.

W folderze może znajdować się więcej niż jeden plik tekstowy, więc musimy zrobić
pętlę, która przejdzie po wszystkich plikach. Innymi słowy, mówimy Pythonowi,
żeby dla każdego pliku (`for file`), który ma rozszerzenie TXT
(`in source_dir.glob('*.txt')`):

1. W zmiennej `rel_note_id` zapisał nazwę pliku (`file.stem`).
1. Otworzył plik (`with file.open() as f`) i w zmiennej `rel_note_text` zapisał
   jego zawartość, którą pobrał (`f.read()`).
1. Do słownika dodał parę z numerem zgłoszenia i opisem zmian
   (`rel_notes[rel_note_id] = rel_note_text`).

Kiedy pętla przejdzie po wszystkich plikach, funkcja zwróci nam wypełniony
słownik (`return rel_notes`). W naszym testowym środowisku, funkcja zwróci nam
taki słownik:

```js
{'PROJ-101': 'Dodaliśmy nową funkcję, która pozwala na szybkie pobieranie zasobów sieciowych.', 'PROJ-102': 'Naprawiliśmy błąd, który powodował, że aplikacja zawieszała się na kilka sekund, a następnie okno aplikacji przesuwało się poza ekran przez co stawało się niewidoczne.'}
```

Na tym etapie, tylko stworzyliśmy nową funkcję, ale jeszcze jej nie
uruchomiliśmy. To zrobimy dopiero później.

### Krok 8: Dodaj funkcję generującą wiersze tabeli

W poprzednim kroku zrobiliśmy całkiem sporo, ale to dopiero początek. Potrzebne
nam będą jeszcze inne funkcje, żeby nasza aplikacja zrobiła wszystko co to
chcemy, czyli stworzyła dla nas plik HTML z notami wydania.

W tym kroku dodamy funkcję i prosty szablon, który pozwoli nam przerobić słownik
na fragment kodu HTML. Będą to wiersze tabeli, które podstawimy w kolejnych
krokach do naszego szablonu HTML. Jak pamiętasz, szablon przygotowaliśmy w
kroku 3.

Na początek, dodaj taki mały szablon.

_rel_notes_generator.py_

```python
rel_note_template = Template('''<tr>
<td>$id</td>
<td>$description</td>
</tr>
''')
```

Szablon ma w sobie dwa elementy zastępcze, `$id` i `$description`, które
będziemy zamieniać odpowiednio na klucz i wartość ze słownika. Potrójny
cudzysłów (`'''` lub `"""`) służy do tworzenia łańcuchów znaków, które zajmują
więcej niż jedną linijkę. Dla łańcuchów znaków, które nie wykraczają poza jedną
linijkę używa się pojedynczego cudzysłowu (`'` lub `"`).

Następnie dodaj kolejną funkcję.

_rel_notes_generator.py_

```python
def generate_release_notes(release_notes):
    rel_note_table_rows = ''
    for id, description in release_notes.items():
        rel_note_table_rows += rel_note_template.substitute(
            id=id, description=description)
    return rel_note_table_rows
```

Jej zadaniem będzie przekształcenie słownika we fragment kodu HTML. W poprzednim
kroku analizowaliśmy poszczególne części składowe funkcji, więc pewnie ta
funkcja nie jest już dla Ciebie wielką niewiadomą. Jednak dla porządku przejdźmy
po tym co się tutaj dzieje.

Nasza funkcja o nazwie `generate_release_notes` przyjmuje jako parametr słownik
(`release_notes`), w którym są pary `numer zgłoszenia: opis zmian`.

Na początku, tworzymy zmienną `rel_note_table_rows`, której wartość to pusty
tekst (`''`). W tej zmiennej zapiszemy nasze wiersze tabeli HTML, które
wygenerujemy za pomocą naszego szablonu `rel_note_template`.

Następnie, mówimy Pythonowi, żeby dla każdej pary (`for id, description`) w
słowniku (`release_notes.items()`):

1. Wziął szablon `rel_note_template` i podmienił w nim element zastępczy `$id`
   na `id` ze słownika (czyli numer zgłoszenia) i zamienił element zastępczy
   `$description` na `description` ze słownika. Innymi słowy pobieramy ze
   słownika numer zgłoszenia i opis zmian i wstawiamy je do szablonu
   (`rel_note_template.substitute(id=id, description=description)`).
1. Dodał wygenerowany wiersz tabeli HTML do zmiennej, którą stworzyliśmy na
   początku (`rel_note_table_rows +=`).

Kiedy pętla przejdzie po wszystkich parach w słowniku, funkcja zwróci nam
zmienną z gotowymi wierszami tabeli (`return rel_note_table_rows`). W naszym
testowym środowisku, funkcja zwróci nam taki kod:

```html
<tr>
  <td>PROJ-101</td>
  <td>
    Dodaliśmy nową funkcję, która pozwala na szybkie pobieranie zasobów
    sieciowych.
  </td>
</tr>
<tr>
  <td>PROJ-102</td>
  <td>
    Naprawiliśmy błąd, który powodował, że aplikacja zawieszała się na kilka
    sekund, a następnie okno aplikacji przesuwało się poza ekran przez co
    stawało się niewidoczne.
  </td>
</tr>
```

Dla przypomnienia dodam, że tak jak w poprzednim kroku, tylko stworzyliśmy nową
funkcję, ale jeszcze jej nie uruchomiliśmy. To zrobimy dopiero później.

### Krok 9: Dodaj funkcję zapisującą końcowy plik HTML

To już ostatnia funkcja, której potrzebujemy. Jej zadaniem jest podstawienie
wierszy tabeli do szablonu pliku HTML, a następnie zapisanie końcowego pliku
HTML z notkami wydania. Dodaj taki kod do pliku `rel_notes_generator.py`.

_rel_notes_generator.py_

```python
def write_release_notes(release_note_rows, target_dir):
    if target_dir.exists():
        rmtree(target_dir)
    target_dir.mkdir()
    with Path('release_notes_template.html').open() as rnt:
        file_template = Template(rnt.read())
    with (target_dir / 'release_notes.html').open('w') as rn:
        rn.write(file_template.substitute(release_notes=release_note_rows))
```

Na początku funkcja sprawdza czy folder docelowy, w którym zapiszemy końcowy
plik już istnieje (`target_dir.exists()`). Jeśli tak, to najpierw go kasuje
(`rmtree(target_dir)`). Następnie, funkcja tworzy folder docelowy
(`target_dir.mkdir()`). Te wszystkie kroki możemy wykonać w łatwy sposób dzięki
komponentom `pathlib` i `shutil`, które zaimportowaliśmy w kroku 5.

Po przygotowaniu folderu docelowego, funkcja otwiera plik szablonu HTML
(`with Path('release_notes_template.html').open() as rnt`) po czym przypisuje
zawartość szablonu do zmiennej `file_template`
(`file_template = Template(rnt.read())`).

Następnie, funkcja tworzy pusty plik końcowy o nazwie `release_notes.html`
(`with (target_dir / 'release_notes.html').open('w') as rn`). Ostatnia część to
zamiana w szablonie HTML elementu zastępczego `$release_notes` na właściwe
wiersze tabeli i zapisanie tego kodu HTML do pliku końcowego
(`rn.write(file_template.substitute(release_notes=release_note_rows))`).

Funkcja jest dość krótka, ale całkiem sporo się tutaj wydarzyło. To jest właśnie
jedna z zalet Pythona - zwięzła i czytelna składnia, dzięki której można na
niewielkiej przestrzeni zawrzeć całkiem sporo logiki.

Tak jak poprzednio, na razie tylko zdefiniowaliśmy funkcję. Teraz musimy ją
jeszcze uruchomić.

### Krok 10: Ostatnie szlify

To już ostatnia prosta. Właściwie mamy już wszystko co nam potrzebne. Teraz
pozostaje nam uruchomić nasze funkcje.

Żeby to zrobić, dodaj taki kod.

_rel_notes_generator.py_

```python
if __name__ == '__main__':
    collected_release_notes = get_release_notes(input_dir)
    generated_table_rows = generate_release_notes(collected_release_notes)
    write_release_notes(generated_table_rows, output_dir)
```

Pierwsza linijka, `if __name__ == '__main__'`, wygląda dość enigmatycznie. W
Pythonie w taki sposób określamy, że dany fragment kodu ma zostać uruchomiony
tylko jeśli wywołamy plik `.py` jako skrypt z linii komend. Dzięki temu, ten
fragment kodu nie zostanie wywołany jeśli zaimportujemy nasz plik `.py` do
innego pliku. Zapewne to wszystko brzmi dość zagadkowo, dlatego postaram się to
rozjaśnić na przykładzie.

Kod naszego generatora znajduje się w pliku `rel_notes_generator.py`. W
większości przypadków będziesz uruchamiać generator z linii komend jak skrypt za
pomocą polecenia `python rel_notes_generator.py`. Kiedy to zrobisz, część kodu,
która znajduje się pod `if __name__ == '__main__'` zostanie wykonana. Czyli
wszystko się zgadza, to jest właśnie to o co nam chodzi.

Po pewnym czasie, stworzysz kolejny generator, który będzie miał trochę inne
funkcje niż generator, który stworzyliśmy wspólnie. Jednak pewne części będą
takie same. Żeby nie pisać tego samego kodu jeszcze raz, możesz zaimportować
`rel_notes_generator.py` do swojego nowego generatora w taki sam sposób jak
importowaliśmy komponenty w kroku 5. W tej sytuacji chcesz tylko zaimportować
funkcje z generatora, ale nie chcesz, żeby się uruchomiły. O tym kiedy je
uruchomić, zdecydujesz w odpowiedniej części swojego nowego generatora. I
właśnie użycie `if __name__ == '__main__'`, powoduje że funkcje się nie
uruchomią. Podczas importu funkcji, wszystko co znajduje się poniżej tej linijki
nie wykona się.

Skoro już wiemy po co nam ten enigmatyczny fragment kodu, zobaczmy co znajduje
się pod nim. Najpierw, uruchamiamy funkcję `get_release_notes` na folderze
`input`, czyli tam gdzie mamy nasze testowe pliki tekstowe. Dla przypomnienia,
funkcja wyciągnie nam nazwy i zawartość plików tekstowych. Wynik uruchomienia
funkcji przypisujemy do zmiennej `collected_release_notes`. Następnie,
uruchamiamy funkcję `generate_release_notes`, która stworzy nam wiersze tabeli
HTML z zawartości plików tekstowych, którą trzymamy w zmiennej
`collected_release_notes`. Wygenerowane wiersze tabeli przypisujemy do zmiennej
`generated_release_notes`. Ostatnia operacja, to uruchomienie funkcji
`write_release_notes`, która zapisze to co mamy w zmiennej
`generated_release_notes` do końcowego pliku HTML.

Nasze noty wydania są gotowe!

## Gotowa aplikacja

Udało się nam przejść przez wszystkie etapy tworzenia generatora. Poniżej
kompletny kod naszej aplikacji.

_rel_notes_generator.py_

```python
from string import Template
from pathlib import Path
from shutil import rmtree

current_dir = Path(__file__).parent
input_dir = current_dir / 'input'
output_dir = current_dir / 'output'

rel_note_template = Template('''<tr>
<td>$id</td>
<td>$description</td>
</tr>
''')


def get_release_notes(source_dir):
    rel_notes = {}
    for file in source_dir.glob('*.txt'):
        rel_note_id = file.stem
        with file.open() as f:
            rel_note_text = f.read()
        rel_notes[rel_note_id] = rel_note_text
    return rel_notes


def generate_release_notes(release_notes):
    rel_note_table_rows = ''
    for id, description in release_notes.items():
        rel_note_table_rows += rel_note_template.substitute(
            id=id, description=description)
    return rel_note_table_rows


def write_release_notes(release_note_rows, target_dir):
    if target_dir.exists():
        rmtree(target_dir)
    target_dir.mkdir()
    with Path('release_notes_template.html').open() as rnt:
        file_template = Template(rnt.read())
    with (target_dir / 'release_notes.html').open('w') as rn:
        rn.write(file_template.substitute(release_notes=release_note_rows))

if __name__ == '__main__':
    collected_release_notes = get_release_notes(input_dir)
    generated_table_rows = generate_release_notes(collected_release_notes)
    write_release_notes(generated_table_rows, output_dir)
```

## Jak uruchomić generator?

W kroku 10, pojawiła się już informacja jak wywołać plik `.py` z linii komend.
Jednak dla porządku, zamieszczam informację jak uruchomić generator:

1. Otwórz linię komend.
1. Przejdź do folderu `rel_notes_generator`.
1. Uruchom poniższą komendę.

   ```bash
   python rel_notes_generator.py
   ```

   W folderze `output` pojawi się plik `release_notes.html` z gotowymi notami
   wydania.

> W zależności od tego w jaki sposób Python został zainstalowany na Twoim
> komputerze, komenda może się różnić. Na przykład, jeśli Python 3 nie został
> dodany do zmiennych środowiskowych Twojego systemu operacyjnego, może
> uruchomić się Python 2, który już wcześniej był zainstalowany na Twoim
> komputerze. W innym wypadku, komenda może w ogóle nie zostać rozpoznana.
> Możesz wtedy spróbować użyć komendy `python3`.
