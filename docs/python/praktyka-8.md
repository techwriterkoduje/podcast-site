---
title: 'Krok 8: Dodaj funkcję generującą wiersze tabeli'
---

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
2. Dodał wygenerowany wiersz tabeli HTML do zmiennej, którą stworzyliśmy na
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
