---
title: 'Krok 10: Ostatnie szlify'
---

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
