---
title: 'Krok 3: Stwórz szablon dla pliku HTML'
---

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
