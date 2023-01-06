---
title: 'Krok 5: Dodaj linki do potrzebnych komponentów Pythona'
---

Python zawiera w sobie bogaty zestaw gotowych komponentów, z których możemy
korzystać od razu bez instalowania dodatkowego oprogramowania. Ten zestaw nazywa
się **The Python Standard Library**. Żeby móc skorzystać z jakiegoś komponentu
musimy go zaimportować w naszej aplikacji, czyli tak jakby dodać do niego link.
Możemy to zrobić wpisując:

```python
import nazwaKomponentu
```

albo

```python
from nazwaKomponentu import nazwaElementu
```

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
