<div align="center">

# ✨ Jeden Moment: strona projektu

**Codziennie *jeden* moment wdzięczności. Nie więcej.**

Statyczna strona prezentująca aplikację [Jeden Moment](https://github.com/yerdi71/moment--app), prywatny dziennik wdzięczności na telefon. Z interaktywnym demo, w którym można zapisać własny moment i zobaczyć, jak rośnie drzewko.

![HTML](https://img.shields.io/badge/HTML-5-orange?style=for-the-badge)
![CSS](https://img.shields.io/badge/CSS-3-blue?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2020-yellow?style=for-the-badge)
![Zależności](https://img.shields.io/badge/zależności-0-brightgreen?style=for-the-badge)

</div>

---

## 🌱 O stronie

Strona opowiada o aplikacji **Jeden Moment** (wersja beta 0.7.2.2) i jej filozofii: jeden wpis dziennie, bez kont, reklam i serwerów. Cała treść pochodzi z kodu aplikacji, więc cytaty, afirmacje, etapy drzewka, odznaki i motywy zgadzają się z tym, co użytkownik zobaczy w telefonie.

Strona **nie oferuje pobrania aplikacji**. Jest opisem projektu i jego funkcji.

### Co na niej jest

| Sekcja | Zawartość |
|--------|-----------|
| **Hero z demo** | Pole do zapisania jednego momentu (do 150 znaków), emocja, miejsce, drzewko, passa i lista wpisów |
| **Start dnia** | Cytat dnia, Cichy Anioł i pytanie dnia, wybierane tak samo jak w aplikacji |
| **Zasada** | Dlaczego drugiego wpisu w ciągu dnia nie można dodać |
| **Ogród** | Sześć etapów drzewka, z zaznaczonym etapem z demo |
| **Odznaki** | Dziewięć odznak, siedem odblokowuje się w demo |
| **Funkcje** | Pełna lista funkcji aplikacji oraz „Rok w pikselach” zasilany wpisami z demo |
| **Motywy** | Sześć motywów aplikacji w miniaturze |
| **Prywatność i technologia** | PIN, backupy, eksport oraz stack |

---

## 🎮 Interaktywne demo

Demo odtwarza podstawowe zasady aplikacji:

- **Jeden moment dziennie.** Dzisiejszy wpis można edytować lub usunąć, ale nie da się dodać drugiego.
- **Przesuń demo o jeden dzień.** Pozwala zobaczyć kolejne dni bez czekania. Pominięcie dnia zeruje passę, tak jak w aplikacji.
- **Wczytaj 9 przykładowych dni.** Daje gotową historię, dzięki której po jednym wpisie drzewko przechodzi w etap *Kwitnąca Roślina*, a odznaki zaczynają się odblokowywać.
- **Ulubione ⭐ i miejsca** działają jak w aplikacji, więc można zdobyć odznaki *Kurator Wspomnień* i *Podróżnik*.

Odznaki *Okiem Obiektywu* i *Głos Serca* wymagają zdjęcia i nagrania, więc na stronie oznaczone są jako „Do zdobycia w aplikacji”.

Dane demo trafiają wyłącznie do `localStorage` przeglądarki odwiedzającego (klucz `jeden-moment-demo-v1`). Nic nie jest wysyłane na żaden serwer.

---

## 📁 Struktura

```
.
├── index.html   # treść i struktura strony
├── style.css    # style, jasny i ciemny motyw wg systemu
├── script.js    # demo, treści dnia i renderowanie
└── README.md
```

Strona nie wymaga budowania, Node.js ani żadnych pakietów.

---

## 🚀 Uruchomienie lokalnie

Wystarczy otworzyć `index.html` w przeglądarce. Jeśli wolisz serwer lokalny:

```bash
# Python
python3 -m http.server 8000

# albo Node.js
npx serve .
```

Następnie wejdź na `http://localhost:8000`.

---

## 🌍 Publikacja na GitHub Pages

1. Wrzuć pliki do repozytorium (na gałąź `main`).
2. Wejdź w **Settings → Pages**.
3. W sekcji **Build and deployment** wybierz **Deploy from a branch**, gałąź `main` i folder `/ (root)`.
4. Po minucie strona będzie dostępna pod adresem `https://<twoj-login>.github.io/<nazwa-repo>/`.

---

## 🛠️ Personalizacja

**Kolory** zmienisz w jednym miejscu, na początku `style.css`. Jasny motyw jest w `:root`, ciemny w bloku `@media (prefers-color-scheme: dark)`:

```css
:root {
  --paper: #F5F2FB;   /* tło */
  --ink: #1D1830;     /* tekst */
  --accent: #6A3BD8;  /* fiolet akcentowy */
  --leaf: #2F7D52;    /* zieleń drzewka */
}
```

**Treści z aplikacji** (cytaty, afirmacje, pytania dnia, etapy drzewka) są na górze `script.js`. Jeśli zmienisz je w aplikacji (`src/constants.js`), skopiuj zmiany także tam.

**Odznaki** i przykładowe wpisy demo są w tablicach `BADGES` i `SEED` w `script.js`.

**Wersja aplikacji** jest wpisana w `index.html` (sekcja „Pod spodem” i stopka). Po wydaniu nowej wersji wystarczy zamienić `0.7.2.2`.

**Link do kodu aplikacji** jest w stopce `index.html`. Jeśli repozytorium jest prywatne albo ma inny adres, zmień go lub usuń.

---

## ♿ Dostępność i wydajność

- Semantyczny HTML, link „Przejdź do treści”, widoczny fokus klawiatury.
- Demo w pełni obsługiwane klawiaturą, zmiany ogłaszane czytnikom ekranu (`aria-live`).
- Wysoki kontrast tekstu w obu trybach. Miniatury motywów odwzorowują kolory aplikacji, a nie strony.
- Szanuje `prefers-reduced-motion`.
- Układ responsywny, sprawdzony na ekranie komputera i telefonu (390 px) bez przewijania poziomego.
- Brak zewnętrznych czcionek, skryptów, cookies i śledzenia. Krój pisma pochodzi z czcionek systemowych.

---

## 🔐 Prywatność strony

Strona jest w pełni statyczna. Nie ładuje niczego z zewnętrznych domen i nie zbiera żadnych danych. Jedyne, co zapisuje, to opcjonalne wpisy demo w pamięci przeglądarki odwiedzającego, które można w każdej chwili wyczyścić przyciskiem **Wyczyść demo**.

---

## 📱 O aplikacji

| Technologia | Wersja | Do czego |
|-------------|--------|----------|
| React Native | 0.81 | Interfejs |
| Expo | 54 | Środowisko deweloperskie |
| AsyncStorage | 2.2 | Lokalna baza danych |
| JavaScript | ES2020+ | Język |

Aplikacja jest w fazie **beta** i działa w Expo Go. Kod źródłowy: [yerdi71/moment--app](https://github.com/yerdi71/moment--app).

---

<div align="center">

*Jeden moment dziennie. Koniec.* 🌅

</div>
