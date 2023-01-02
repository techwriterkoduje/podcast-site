---
title: 'Krok 9: Dodaj funkcję zapisującą końcowy plik HTML'
---

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
