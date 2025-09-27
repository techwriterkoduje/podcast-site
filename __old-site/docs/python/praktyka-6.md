---
title: 'Krok 6: Ustaw ścieżki do potrzebnych zasobów'
---

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
