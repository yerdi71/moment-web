# Jeden Moment — strona promocyjna, paczka zoptymalizowana

Niezależna strona promocyjna projektu Expo `yerdi71/moment--app`. Nie zmienia ani nie zastępuje `App.js`.

## Struktura
- `index.html` — semantyczny HTML i metadane.
- `css/styles.css` — responsywne style, motywy Soft Minimal i Dark Neon, animacje.
- `js/app.js` — przełącznik motywu, menu mobilne, demo wpisu, ogród i rok w pikselach.
- `assets/logo-icon.svg` i `assets/favicon.svg` — lekkie, skalowalne logo i favicon.

## Uruchomienie
Otwórz `index.html` w przeglądarce lub uruchom serwer statyczny. Google Fonts jest opcjonalne; systemowa czcionka zostanie użyta offline.

## Wdrożenie
Wgraj ten folder na GitHub Pages lub do katalogu statycznych plików hostingu. Nie mieszaj z plikami źródłowymi Expo, chyba że celowo konfigurujesz stronę web.

## Optymalizacja
- HTML/CSS/JS rozdzielone, skrypt z `defer`.
- Własne SVG zamiast zewnętrznej biblioteki ikon.
- Lokalny plik logo i favicon.
- Animacje uwzględniają `prefers-reduced-motion`.
- Sekcje animowane przez `IntersectionObserver` z fallbackiem.
- Obsługa błędów `localStorage`.
- Demo formularza zapisuje wyłącznie w pamięci przeglądarki i nie synchronizuje się z aplikacją.

Uwaga: projekt aplikacji znajduje się w repozytorium `https://github.com/yerdi71/moment--app`; stabilny APK nie jest deklarowany jako dostępny.
