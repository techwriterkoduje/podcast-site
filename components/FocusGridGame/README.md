# Wymagania

## Wersja 1.0

### Do zrobienia

- Apka jest przeglądarce, ale można ją zainstalować na urządzeniu. Więc chyba
  jakieś PWA.

### Zrobione

- Liczby zawsze zaczynają się od "1".
- Tło kafelka jest białe
- Można zmieniać rozmiar siatki od 4x4 do 10x10 na wszystkich urządzeniach.
- Informacja o zakończeniu gry pojawia się z małym opóźnieniem po zaznaczeniu
  ostatniej liczby.
- Po zaznaczeniu liczby, karta odwraca się o 180 stopni w poziomie. Liczba osiem
  mogłaby się rotować o 90 stopni w prawo (wyglądałaby jak znak
  nieskończoności), bo obracanie w poziomie nie daje żadnego efektu.
- Aplikacja ma przycisk "Start" rozpoczynający grę. Najpierw wybieramy rozmiar
  siatki, a potem klikamy "Start". Po naciśnięciu przycisku "Start" następuje
  automatyczne przetasowanie.
- Timer liczy czas. Startuje po naciśnięciu "Start"
- Aplikacja ma przycisk "Resetuj grę", który resetuje grę bez potrzeby
  przeładowywania strony. Użytkownik może chcieć zresetować grę w trakcie
  grania. Naciskasz przycisk "Resetuj grę", pojawia się przycisk "Start" i
  dopiero po naciśnięciu przycisku następuje reset planszy i czas startuje.
- Czcionka liczb powinna być mniej pogrubiona. Zastanowić się nad krawędziami
  między liczbami.
- Na czarnej planszy po zakończeniu gry, czas powinien być bardziej
  wyszczególniony, np. w osobnej linijce i większy
- Zmniejszyć odstępy pomiędzy kwadratami w siatce. Im siatka ma więcej liczb tym
  odstępy powinny być mniejsze, żeby powierzchnia do kliknięcia była większa.
  Może by to zastosować tylko od 7x7 w górę?
- Najlepszy wynik powinien być wyświetlany wszędzie tak samo - w oknie
  zakończenia gry jest uzyskany wynik i najlepszy wynik, w głównym oknie gry
  jest najlepszy wynik i pomiędzy tymi elementami są różnice w formatowaniu
- Siatka powinna być wycentrowana (teraz jest wyrównana do lewej strony).
- Adres do siatki np. techwriterkoduje.pl/focusgrid
- Zamiast licznika punktów, aplikacja pokazuje najlepszy czas dla danego
  rozmiaru siatki. Np. jeśli wybrałem siatkę 6x6, to w prawym górnym rogu widzę
  swój najlepszy czas dla tego rozmiaru.

## Wersja 2.0

- Apka ma trzy tryby:
  - Łatwy - gdzie po jakimś czasie jak nie możesz znaleźć liczby, podświetla ci
    tę liczbę. Ilość sekund możesz ustawić sam.
  - Średni - normalny tryb gry. Po zaznaczeniu liczby, karta odwraca się o 180
    stopni w poziomie. Liczba osiem mogłaby się rotować o 90 stopni w prawo
    (wyglądałaby jak znak nieskończoności), bo obracanie w poziomie nie daje
    żadnego efektu.
  - Trudny - po prawidłowym zaznaczeniu liczby, siatka się zmienia (tj. liczby
    które zostały zmieniają rozmieszczenie)
- Aplikacja ma przycisk "Start" rozpoczynający grę. Najpierw wybieramy rozmiar
  siatki i poziom trudności, a potem klikamy "Start"
