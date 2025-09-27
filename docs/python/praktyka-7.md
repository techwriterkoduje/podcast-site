---
title: 'Krok 7: Dodaj funkcję do wyciągania informacji z plików źródłowych'
---

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
2. Otworzył plik (`with file.open() as f`) i w zmiennej `rel_note_text` zapisał
   jego zawartość, którą pobrał (`f.read()`).
3. Do słownika dodał parę z numerem zgłoszenia i opisem zmian
   (`rel_notes[rel_note_id] = rel_note_text`).

Kiedy pętla przejdzie po wszystkich plikach, funkcja zwróci nam wypełniony
słownik (`return rel_notes`). W naszym testowym środowisku, funkcja zwróci nam
taki słownik:

```json
{
  "PROJ-101": "Dodaliśmy nową funkcję, która pozwala na szybkie pobieranie zasobów sieciowych.",
  "PROJ-102": "Naprawiliśmy błąd, który powodował, że aplikacja zawieszała się na kilka sekund, a następnie okno aplikacji przesuwało się poza ekran przez co stawało się niewidoczne."
}
```

Na tym etapie, tylko stworzyliśmy nową funkcję, ale jeszcze jej nie
uruchomiliśmy. To zrobimy dopiero później.
