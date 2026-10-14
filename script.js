/* ════════════════════════════════════════════
   Jeden Moment: strona projektu
   Interaktywne demo: jeden wpis dziennie, drzewko, passa, odznaki.
   Zero zależności. Dane demo żyją w localStorage tej przeglądarki.
   ════════════════════════════════════════════ */

/* ─── TREŚCI Z APLIKACJI (src/constants.js) ─── */
const DAILY_PROMPTS = [
  "Kto dziś sprawił, że się uśmiechnąłeś?",
  "Jaki mały sukces dziś osiągnąłeś?",
  "Co Cię dziś zaskoczyło pozytywnie?",
  "Za co kochasz swoje ciało dzisiaj?",
  "Jaki dźwięk sprawił Ci dziś przyjemność?",
  "Co dziś zrobiłeś dla siebie?",
  "Które wspomnienie dziś do Ciebie wróciło?",
  "Jaki zapach wywołał uśmiech na Twojej twarzy?",
  "Kto był dziś dla Ciebie życzliwy?",
  "Co dziś zobaczyłeś pięknego?",
  "Za jaką lekcję jesteś wdzięczny?",
  "Jaki smak sprawił Ci dziś radość?",
  "Co dziś poszło lepiej niż się spodziewałeś?",
  "Komu dziś pomogłeś?",
  "Za co jesteś wdzięczny swojemu ciału?",
  "Jaka książka / film / piosenka Cię dziś poruszyła?",
  "Za co lubisz swój dom / swoje miejsce?",
  "Który moment dziś zapamiętasz na długo?",
  "Co dziś zrobiłeś, co wymagało odwagi?",
  "Za co jesteś wdzięczny przyjacielowi?",
  "Jaki drobiazg dziś Cię ucieszył?",
  "Czego dziś nauczyłeś się o sobie?",
  "Za co dziękujesz przyrodzie?",
  "Jaka myśl dziś dodała Ci sił?",
  "Kogo chciałbyś dziś przytulić?",
  "Za co jesteś wdzięczny technologii?",
  "Jaka chwila dziś była dla Ciebie święta?",
  "Co dziś sprawiło, że poczułeś się bezpiecznie?",
  "Za co dziękujesz swoim bliskim?",
  "Jaki mały rytuał dziś poprawił Ci humor?"
];

const DAILY_AFFIRMATIONS = [
  "Twoja obecność ma znaczenie dla innych.",
  "Dobrze, że jesteś. Serio.",
  "To, co robisz, ma sens — nawet jeśli dziś tego nie widzisz.",
  "Zasługujesz na spokój, którego szukasz.",
  "Małe kroki też prowadzą do celu.",
  "Jesteś kimś więcej niż swoimi błędami.",
  "Twoja wrażliwość to supermoc, nie słabość.",
  "Dziś wystarczy, że jesteś. Naprawdę.",
  "Ktoś myśli o Tobie z czułością.",
  "Świat jest lepszy, bo w nim jesteś.",
  "Twoje wysiłki nie idą na marne.",
  "Zasługujesz na dobre rzeczy.",
  "Jesteś silniejszy niż myślisz.",
  "Twoja historia jest warta opowiedzenia.",
  "Oddychaj. Wszystko jest w porządku.",
  "Nie musisz być dziś produktywny, by być wartościowy.",
  "Twoje uczucia są ważne i prawdziwe.",
  "Robisz to lepiej, niż Ci się wydaje.",
  "Zasługujesz na odpoczynek.",
  "Twoja życzliwość wraca do Ciebie."
];

const DAILY_QUOTES = [
  {
    "text": "Wdzięczność to pamięć serca.",
    "author": "Jean-Baptiste Massieu"
  },
  {
    "text": "Szczęście to nie coś gotowego. To coś, co tworzysz.",
    "author": "Dalajlama XIV"
  },
  {
    "text": "Kiedy dziękujesz, strach znika, a pojawia się obfitość.",
    "author": "Anthony Robbins"
  },
  {
    "text": "Nie liczy się to, ile masz, ale ile doceniasz.",
    "author": "Nieznany"
  },
  {
    "text": "Wdzięczność zamienia to, co mamy, w to, co wystarcza.",
    "author": "Melody Beattie"
  },
  {
    "text": "Ciesz się małymi rzeczami, bo kiedyś spojrzysz wstecz i zobaczysz, że były wielkie.",
    "author": "Robert Brault"
  },
  {
    "text": "Wdzięczność to najpiękniejszy kwiat, jaki wyrasta z duszy.",
    "author": "Henry Ward Beecher"
  },
  {
    "text": "Każdy dzień to nowa szansa, by być wdzięcznym.",
    "author": "Nieznany"
  },
  {
    "text": "Wdzięczność otwiera drzwi do większej ilości dobra.",
    "author": "Nieznany"
  },
  {
    "text": "Szczęśliwi nie mają wszystkiego, ale doceniają wszystko.",
    "author": "Nieznany"
  },
  {
    "text": "Ten, kto potrafi być wdzięczny za małe rzeczy, jest bogaty.",
    "author": "Nieznany"
  },
  {
    "text": "Wdzięczność to cicha modlitwa serca.",
    "author": "Nieznany"
  },
  {
    "text": "Im więcej dziękujesz, tym więcej masz powodów do dziękowania.",
    "author": "Nieznany"
  },
  {
    "text": "Nie czekaj na idealny moment. Bądź wdzięczny za ten.",
    "author": "Nieznany"
  },
  {
    "text": "Wdzięczność to najkrótsza droga do szczęścia.",
    "author": "Nieznany"
  },
  {
    "text": "Świat jest pełen cudów, jeśli tylko chcesz je zobaczyć.",
    "author": "Nieznany"
  },
  {
    "text": "Wdzięczne serce to magnes na dobro.",
    "author": "Nieznany"
  },
  {
    "text": "Kiedy dziękujesz, życie staje się bogatsze.",
    "author": "Nieznany"
  },
  {
    "text": "Bądź wdzięczny za to, co masz, a dostaniesz więcej.",
    "author": "Nieznany"
  },
  {
    "text": "Wdzięczność to nie tylko słowa, to sposób patrzenia na świat.",
    "author": "Nieznany"
  },
  {
    "text": "Radość dzielona się mnoży, smutek dzielony maleje.",
    "author": "Przysłowie"
  },
  {
    "text": "Każdy dzień, w którym się obudziłeś, jest dobrym dniem.",
    "author": "Nieznany"
  },
  {
    "text": "Wdzięczność nie zmienia świata. Zmienia Ciebie.",
    "author": "Nieznany"
  },
  {
    "text": "Najlepszy czas, by być wdzięcznym, to teraz.",
    "author": "Nieznany"
  },
  {
    "text": "Doceniaj każdy moment — one nie wrócą.",
    "author": "Nieznany"
  },
  {
    "text": "Wdzięczność to jedna z najkrótszych dróg do spokoju.",
    "author": "Nieznany"
  },
  {
    "text": "Szczęście nie polega na posiadaniu, lecz na docenianiu.",
    "author": "Nieznany"
  },
  {
    "text": "Wdzięczność to most między tym, co masz, a tym, czego pragniesz.",
    "author": "Nieznany"
  },
  {
    "text": "Kto potrafi dziękować, ten potrafi żyć.",
    "author": "Cyceron"
  },
  {
    "text": "Wszystko, co dobre, zaczyna się od wdzięczności.",
    "author": "Nieznany"
  }
];

const VIBES = {
  "😊": {
    "title": "Pozytywny Promień",
    "desc": "Radość to Twoje drugie imię. Dostrzegasz dobro na co dzień!"
  },
  "😌": {
    "title": "Oaza Spokoju",
    "desc": "Cenisz balans i harmonię. Wdzięczność za spokój to Twoja droga."
  },
  "⚡": {
    "title": "Wulkan Energii",
    "desc": "Akcja i ekscytacja! Twój dziennik kipi od dynamicznych momentów."
  },
  "💡": {
    "title": "Błyskotliwy Umysł",
    "desc": "Często doświadczasz momentów „Aha!”. Rozwój to Twój żywioł."
  },
  "❤️": {
    "title": "Czułe Serce",
    "desc": "Relacje i miłość są dla Ciebie kluczowe. Piękna cecha!"
  }
};

const TREE_STAGES = [
  {
    "min": 100,
    "icon": "🌳✨",
    "name": "Magiczne Drzewo",
    "desc": "Stworzyłeś niesamowity ekosystem pełen wdzięczności i miłości."
  },
  {
    "min": 50,
    "icon": "🌲",
    "name": "Majestatyczne Bonsai",
    "desc": "Zapuściłeś potężne korzenie. Twoja praktyka stała się nawykiem."
  },
  {
    "min": 25,
    "icon": "🌳",
    "name": "Rozłożyste Drzewo",
    "desc": "Drzewo rośnie w siłę, podobnie jak Twoje pozytywne myślenie."
  },
  {
    "min": 10,
    "icon": "🪴",
    "name": "Kwitnąca Roślina",
    "desc": "Pielęgnujesz swoje myśli, a one zaczynają pięknie kwitnąć."
  },
  {
    "min": 3,
    "icon": "🌿",
    "name": "Młody Pęd",
    "desc": "Z nasionka kiełkuje pierwsza roślina. Zadbaj o nią."
  },
  {
    "min": 0,
    "icon": "🌱",
    "name": "Zasiane Nasionko",
    "desc": "Każda wielka zmiana zaczyna się od małego kroku."
  }
];

(() => {
  'use strict';

  const STORAGE_KEY = 'jeden-moment-demo-v1';
  const VISIBLE_STEP = 6;

  /* ─── ODZNAKI (kopia logiki z aplikacji: src/constants.js) ─── */
  const BADGES = [
    { id: 'first_step',   icon: '🌱', title: 'Pierwszy Krok',       desc: 'Dodaj swój pierwszy moment wdzięczności.', check: (m) => m.length >= 1 },
    { id: 'streak_3',     icon: '🔥', title: 'Mała Passa',          desc: 'Utrzymaj 3-dniową passę.',                 check: (m, s) => s >= 3 },
    { id: 'streak_7',     icon: '⚡', title: 'Tydzień Blasku',      desc: 'Utrzymaj 7-dniową passę.',                 check: (m, s) => s >= 7 },
    { id: 'entries_10',   icon: '📚', title: 'Kolekcjoner Chwil',   desc: 'Zapisz łącznie 10 momentów.',              check: (m) => m.length >= 10 },
    { id: 'entries_50',   icon: '👑', title: 'Mistrz Wdzięczności', desc: 'Zapisz łącznie 50 momentów.',              check: (m) => m.length >= 50 },
    { id: 'media_master', icon: '📷', title: 'Okiem Obiektywu',     desc: 'Dodaj wpis ze zdjęciem.',                  check: () => false, appOnly: true },
    { id: 'voice_master', icon: '🎙️', title: 'Głos Serca',          desc: 'Dodaj notatkę głosową.',                   check: () => false, appOnly: true },
    { id: 'favorite_5',   icon: '⭐', title: 'Kurator Wspomnień',   desc: 'Oznacz 5 wpisów jako ⭐.',                 check: (m) => m.filter((x) => x.fav).length >= 5 },
    { id: 'traveler',     icon: '🗺️', title: 'Podróżnik',           desc: 'Dodaj wpis z 3 różnych miejsc.',           check: (m) => new Set(m.map((x) => x.location).filter(Boolean)).size >= 3 },
  ];

  /* ─── PRZYKŁADOWE WPISY (od najstarszego do wczoraj) ─── */
  const SEED = [
    { text: 'Kawa na balkonie, zanim ktokolwiek wstał.', mood: '😌', location: 'Dom' },
    { text: 'Ktoś w tramwaju oddał mi miejsce i się uśmiechnął.', mood: '😊', location: '' },
    { text: 'Skończyłem rzecz, którą odkładałem od tygodnia.', mood: '⚡', location: '' },
    { text: 'Telefon od mamy, bez powodu. Żeby zapytać, jak się mam.', mood: '❤️', location: 'Dom' },
    { text: 'Pierwszy chłodny poranek i zapach liści.', mood: '😌', location: 'Kraków' },
    { text: 'Pomysł wpadł mi do głowy pod prysznicem. Zapisałem na mokro.', mood: '💡', location: '' },
    { text: 'Długi spacer nad Wisłą i nic do załatwienia.', mood: '😌', location: 'Kraków' },
    { text: 'Znajomy przysłał zdjęcie z wakacji. Śmiałem się sam do siebie.', mood: '😊', location: 'Gdańsk' },
    { text: 'Ciepła zupa po zimnym dniu.', mood: '❤️', location: 'Dom' },
  ];

  /* ─── STAN ─── */
  const state = load();
  let editing = false;
  let visible = VISIBLE_STEP;

  function fresh() { return { entries: [], dayOffset: 0 }; }

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return fresh();
      const data = JSON.parse(raw);
      if (!data || !Array.isArray(data.entries)) return fresh();
      return { entries: data.entries.filter(isValidEntry), dayOffset: Number.isInteger(data.dayOffset) ? data.dayOffset : 0 };
    } catch (_e) {
      return fresh();
    }
  }

  function isValidEntry(e) {
    return e && typeof e.dateKey === 'string' && typeof e.text === 'string' && typeof e.mood === 'string';
  }

  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (_e) { /* tryb prywatny: pomijamy */ }
  }

  /* ─── DATY (wirtualny „dziś” = prawdziwe dziś + przesunięcie demo) ─── */
  const pad = (n) => String(n).padStart(2, '0');
  const keyOf = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

  function virtualNow() {
    const d = new Date();
    d.setHours(12, 0, 0, 0);
    d.setDate(d.getDate() + state.dayOffset);
    return d;
  }

  function dateFromKey(key) {
    const [y, m, d] = key.split('-').map(Number);
    return new Date(y, m - 1, d, 12);
  }

  function dayOfYear(d) {
    return Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 86400000);
  }

  function plural(n, one, few, many) {
    const mod10 = n % 10, mod100 = n % 100;
    if (n === 1) return one;
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few;
    return many;
  }

  /* ─── LOGIKA (jak w aplikacji: src/utils.js) ─── */
  function calcStreak(entries) {
    const days = [...new Set(entries.map((e) => e.dateKey))].sort().reverse();
    if (!days.length) return 0;
    const now = virtualNow();
    const today = keyOf(now);
    const yest = new Date(now);
    yest.setDate(yest.getDate() - 1);
    const yesterday = keyOf(yest);
    if (days[0] !== today && days[0] !== yesterday) return 0;
    let streak = 1;
    const cur = new Date(days[0] === today ? now : yest);
    for (let i = 1; i < days.length; i++) {
      cur.setDate(cur.getDate() - 1);
      if (days[i] === keyOf(cur)) streak++;
      else break;
    }
    return streak;
  }

  function treeFor(total) {
    const current = TREE_STAGES.find((t) => total >= t.min) || TREE_STAGES[TREE_STAGES.length - 1];
    let next = null;
    for (let i = TREE_STAGES.length - 1; i >= 0; i--) {
      if (TREE_STAGES[i].min > total) { next = TREE_STAGES[i]; break; }
    }
    const progress = next ? (total - current.min) / (next.min - current.min) : 1;
    return { current, next, progress };
  }

  const todayEntry = () => state.entries.find((e) => e.dateKey === keyOf(virtualNow()));

  /* ─── NARZĘDZIA DOM ─── */
  const $ = (id) => document.getElementById(id);

  function h(tag, attrs, ...children) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v === false || v == null) continue;
      if (k === 'class') node.className = v;
      else if (k === 'text') node.textContent = v;
      else node.setAttribute(k, v === true ? '' : v);
    }
    children.flat().forEach((c) => c != null && node.append(c));
    return node;
  }

  function announce(msg) {
    const live = $('announce');
    live.textContent = '';
    setTimeout(() => { live.textContent = msg; }, 30);
  }

  /* Przycisk z potwierdzeniem: pierwsze kliknięcie uzbraja, drugie wykonuje */
  function confirmable(btn, armedLabel, action) {
    const original = btn.textContent;
    let timer;
    btn.addEventListener('click', () => {
      if (btn.dataset.armed) {
        clearTimeout(timer);
        delete btn.dataset.armed;
        btn.textContent = original;
        action();
      } else {
        btn.dataset.armed = '1';
        btn.textContent = armedLabel;
        timer = setTimeout(() => { delete btn.dataset.armed; btn.textContent = original; }, 4000);
      }
    });
  }

  /* ─── RENDEROWANIE ─── */
  function renderDate() {
    const label = virtualNow().toLocaleDateString('pl-PL', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    const n = state.dayOffset;
    $('demo-date').textContent = n === 0
      ? `Dziś: ${label}`
      : `Dzień w demo: ${label} (${n} ${plural(n, 'dzień', 'dni', 'dni')} do przodu)`;
  }

  function renderDaily() {
    const idx = dayOfYear(virtualNow());
    const quote = DAILY_QUOTES[idx % DAILY_QUOTES.length];
    $('daily-quote').textContent = `„${quote.text}”`;
    $('daily-author').textContent = quote.author;
    $('daily-affirmation').textContent = DAILY_AFFIRMATIONS[idx % DAILY_AFFIRMATIONS.length];
    const prompt = DAILY_PROMPTS[idx % DAILY_PROMPTS.length];
    $('daily-prompt').textContent = prompt;
    $('prompt-label').textContent = prompt;
  }

  function renderToday() {
    const form = $('moment-form');
    const view = $('today-entry');
    const entry = todayEntry();

    if (entry && !editing) {
      form.hidden = true;
      view.hidden = false;
      const parts = [entry.mood, virtualNow().toLocaleDateString('pl-PL', { day: 'numeric', month: 'long' })];
      if (entry.location) parts.push(`📍 ${entry.location}`);
      $('entry-meta').textContent = parts.join('  ');
      $('entry-text').textContent = entry.text;
      return;
    }

    view.hidden = true;
    form.hidden = false;
    $('cancel-edit').hidden = !editing;
    $('save-btn').textContent = editing ? 'Zapisz zmiany' : 'Zapisz ten moment';
    if (editing && entry) {
      $('moment-text').value = entry.text;
      $('moment-place').value = entry.location || '';
      const radio = form.querySelector(`input[name="mood"][value="${CSS.escape(entry.mood)}"]`);
      if (radio) radio.checked = true;
    } else {
      $('moment-text').value = '';
      $('moment-place').value = '';
    }
    updateCounter();
    $('form-error').textContent = '';
  }

  function renderStatus() {
    const total = state.entries.length;
    const { current, next, progress } = treeFor(total);
    $('tree-glyph').textContent = current.icon;
    $('tree-name').textContent = current.name;
    $('tree-desc').textContent = current.desc;
    const pct = Math.round(progress * 100);
    $('tree-bar').style.width = `${pct}%`;
    $('tree-bar-wrap').setAttribute('aria-valuenow', String(pct));
    if (next) {
      const left = next.min - total;
      $('tree-next').textContent = `Do etapu „${next.name}” brakuje ${left} ${plural(left, 'wpisu', 'wpisów', 'wpisów')}.`;
    } else {
      $('tree-next').textContent = 'Najwyższy etap. Drzewo jest pełne.';
    }
    const streak = calcStreak(state.entries);
    $('stat-total').textContent = String(total);
    $('stat-streak').textContent = `${streak} ${plural(streak, 'dzień', 'dni', 'dni')}`;
  }

  function renderLog() {
    const list = $('log-list');
    const sorted = [...state.entries].sort((a, b) => b.dateKey.localeCompare(a.dateKey));
    list.replaceChildren();

    if (!sorted.length) {
      list.append(h('li', { class: 'log-empty', text: 'Twoje wpisy pojawią się tutaj. Zapisz pierwszy moment albo wczytaj przykładowe dni.' }));
      $('log-more').hidden = true;
      return;
    }

    sorted.slice(0, visible).forEach((e) => {
      const date = dateFromKey(e.dateKey).toLocaleDateString('pl-PL', { day: 'numeric', month: 'short', year: 'numeric' });
      const star = h('button', {
        type: 'button',
        class: 'star',
        'aria-pressed': e.fav ? 'true' : 'false',
        'aria-label': `Ulubiony wpis z ${date}`,
        text: e.fav ? '★' : '☆',
      });
      star.addEventListener('click', () => {
        e.fav = !e.fav;
        save();
        renderLog();
        renderBadges();
      });
      list.append(h('li', {},
        h('span', { class: 'log-date', text: date }),
        h('span', { class: 'log-text' }, `${e.mood} ${e.text}`, e.location ? h('span', { class: 'log-place', text: `📍 ${e.location}` }) : null),
        star,
      ));
    });

    const more = $('log-more');
    more.hidden = sorted.length <= visible;
  }

  function renderStages() {
    const total = state.entries.length;
    const currentMin = treeFor(total).current.min;
    const ascending = [...TREE_STAGES].reverse();
    $('stages').replaceChildren(...ascending.map((s) => {
      const reached = total >= s.min;
      const isCurrent = s.min === currentMin;
      return h('li', { class: `stage${reached ? ' is-reached' : ''}`, 'aria-current': isCurrent ? 'true' : false },
        h('span', { class: 'stage-icon', 'aria-hidden': 'true', text: s.icon }),
        h('p', { class: 'stage-name', text: s.name }),
        h('p', { class: 'stage-min', text: s.min === 0 ? 'Na start' : `Od ${s.min} ${plural(s.min, 'wpisu', 'wpisów', 'wpisów')}` }),
        isCurrent ? h('p', { class: 'stage-here', text: 'Tu jesteś w demo' }) : null,
        h('p', { class: 'stage-desc', text: s.desc }),
      );
    }));
  }

  function renderBadges() {
    const streak = calcStreak(state.entries);
    $('badges').replaceChildren(...BADGES.map((b) => {
      const unlocked = b.check(state.entries, streak);
      const stateText = unlocked ? 'Zdobyta' : b.appOnly ? 'Do zdobycia w aplikacji' : 'Do zdobycia';
      return h('li', { class: `badge${unlocked ? ' is-unlocked' : ''}` },
        h('span', { class: 'badge-icon', 'aria-hidden': 'true', text: b.icon }),
        h('div', {},
          h('p', { class: 'badge-title', text: b.title }),
          h('p', { class: 'badge-desc', text: b.desc }),
          h('p', { class: 'badge-state', text: stateText }),
        ),
      );
    }));
  }

  function renderYear() {
    const now = virtualNow();
    const year = now.getFullYear();
    const today = keyOf(now);
    const first = new Date(year, 0, 1, 12);
    const days = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 366 : 365;
    const filledKeys = new Set(state.entries.map((e) => e.dateKey));
    const frag = document.createDocumentFragment();
    const lead = (first.getDay() + 6) % 7; // tydzień zaczyna się w poniedziałek
    for (let i = 0; i < lead; i++) frag.append(h('div', { class: 'px is-spacer' }));
    let filled = 0;
    for (let i = 0; i < days; i++) {
      const d = new Date(year, 0, 1 + i, 12);
      const k = keyOf(d);
      const isFilled = filledKeys.has(k);
      if (isFilled) filled++;
      frag.append(h('div', { class: `px${isFilled ? ' is-filled' : ''}${k === today ? ' is-today' : ''}`, title: k }));
    }
    $('year-grid').replaceChildren(frag);
    const summary = `${filled} z ${days} dni w roku ${year} ma zapisany moment.`;
    $('year-caption').textContent = `${summary} Obrys oznacza dzień w demo.`;
    $('year-grid-wrap').setAttribute('aria-label', `Rok w pikselach. ${summary}`);
  }

  function renderAll() {
    renderDate();
    renderDaily();
    renderToday();
    renderStatus();
    renderLog();
    renderStages();
    renderBadges();
    renderYear();
  }

  function updateCounter() {
    $('counter').textContent = `${$('moment-text').value.length} / 150`;
  }

  /* ─── ZDARZENIA ─── */
  $('moment-text').addEventListener('input', updateCounter);

  $('moment-form').addEventListener('submit', (ev) => {
    ev.preventDefault();
    const text = $('moment-text').value.trim();
    if (!text) {
      $('form-error').textContent = 'Napisz choć jedno zdanie, zanim zapiszesz.';
      $('moment-text').focus();
      return;
    }
    const mood = ($('moment-form').querySelector('input[name="mood"]:checked') || {}).value || '😊';
    const location = $('moment-place').value.trim();
    const before = treeFor(state.entries.length).current.name;
    const existing = todayEntry();

    if (existing && editing) {
      Object.assign(existing, { text, mood, location });
      editing = false;
      announce('Zmiany zapisane.');
    } else if (!existing) {
      state.entries.push({
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        dateKey: keyOf(virtualNow()),
        text, mood, location, fav: false,
      });
      announce('Moment zapisany. Na dziś wystarczy.');
    } else {
      return; // drugi wpis w tym samym dniu jest zablokowany
    }

    save();
    renderAll();

    const after = treeFor(state.entries.length).current;
    if (after.name !== before) {
      const glyph = $('tree-glyph');
      glyph.classList.remove('is-growing');
      void glyph.offsetWidth;
      glyph.classList.add('is-growing');
      announce(`Moment zapisany. Drzewko urosło: ${after.name}.`);
    }
    $('edit-btn').focus();
  });

  $('edit-btn').addEventListener('click', () => {
    editing = true;
    renderToday();
    $('moment-text').focus();
  });

  $('cancel-edit').addEventListener('click', () => {
    editing = false;
    renderToday();
    $('edit-btn').focus();
  });

  confirmable($('delete-btn'), 'Na pewno usunąć?', () => {
    const key = keyOf(virtualNow());
    state.entries = state.entries.filter((e) => e.dateKey !== key);
    editing = false;
    save();
    renderAll();
    announce('Wpis usunięty. Możesz dodać nowy moment.');
    $('moment-text').focus();
  });

  $('next-day').addEventListener('click', () => {
    state.dayOffset += 1;
    editing = false;
    save();
    renderAll();
    const missed = state.entries.length && calcStreak(state.entries) === 0;
    announce(missed
      ? 'Minął dzień bez wpisu, passa wróciła do zera. Możesz dodać nowy moment.'
      : 'Demo przesunięte o jeden dzień. Możesz dodać nowy moment.');
  });

  $('seed').addEventListener('click', () => {
    const now = virtualNow();
    const have = new Set(state.entries.map((e) => e.dateKey));
    SEED.forEach((s, i) => {
      const d = new Date(now);
      d.setDate(d.getDate() - (SEED.length - i));
      const k = keyOf(d);
      if (have.has(k)) return;
      state.entries.push({
        id: `seed-${k}`, dateKey: k, text: s.text, mood: s.mood, location: s.location, fav: false,
      });
    });
    save();
    renderAll();
    announce('Wczytano przykładowe dni. Dodaj dzisiejszy moment, żeby zobaczyć, jak rośnie drzewko.');
  });

  confirmable($('reset'), 'Na pewno wyczyścić?', () => {
    Object.assign(state, fresh());
    editing = false;
    visible = VISIBLE_STEP;
    save();
    renderAll();
    announce('Demo wyczyszczone.');
  });

  $('log-more').addEventListener('click', () => {
    visible += VISIBLE_STEP;
    renderLog();
  });

  renderAll();
})();
