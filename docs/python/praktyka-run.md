---
title: 'Jak uruchomić generator?'
---

W kroku 10, pojawiła się już informacja jak wywołać plik `.py` z linii komend.
Jednak dla porządku, zamieszczam informację jak uruchomić generator:

1. Otwórz linię komend.
2. Przejdź do folderu `rel_notes_generator`.
3. Uruchom poniższą komendę.

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
