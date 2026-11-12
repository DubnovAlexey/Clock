# Clock

[English](#english) · [Русский](#russian) · [עברית](#hebrew) · [Español](#spanish) · [Français](#french)

<a name="english"></a>

## English

A digital clock in a card whose glowing border follows the mouse. The whole look is built with CSS that the script injects itself, so the page is one HTML file and one JavaScript file.

### Quick tour

Move the pointer around the card and watch the border follow it. Observe a minute boundary; after a click, the last ten seconds can play the existing short sound.

Start with `clock.js`: `showTime()` reads the current date, while pointer coordinates drive CSS variables. This is a browser-local clock, not a time-synchronization service.

The language links above switch the documentation; they do not translate the existing demo interface.

### Features

- Hours, minutes and seconds, updated every second.
- The gradient border and the shadow turn towards the cursor: the script turns the mouse position into an angle and a distance from the centre and passes them to CSS as custom properties (`--deg`, `--distance`).
- In the last ten seconds of every minute the seconds pulse and a short beep plays. Sound starts after the first click, as browsers require.
- Fits a phone screen: the digits and paddings are fluid (`clamp`), and the light follows a finger too.

### Tech stack

HTML5 · CSS3 (custom properties, `conic-gradient`, `cos()` / `sin()` in CSS, `clamp()`, pseudo-elements) · JavaScript (`setInterval`, `Audio`, Pointer Events)

### What I practised

- Driving CSS from JavaScript through custom properties instead of changing styles one by one.
- Trigonometry for a mouse-following light effect.
- Working with the browser autoplay rules for sound.

### Run locally

Open `index.html` in a browser.

### Credits

The beep sound is loaded from the Google Actions sound library (`actions.google.com/sounds`).

### Planned improvements

These are proposals, not currently implemented features.

- Visual: add a restrained theme switch and reduced-motion styling.
- Engineering: keep deterministic checks for minute/day boundaries and test recovery after the tab has been hidden.
- Functionality: offer a timezone/12–24-hour choice and an explicit sound toggle.

---

<a name="russian"></a>

## Русский

Электронные часы в карточке, светящаяся рамка которой следует за мышью. Всё оформление — CSS, который скрипт вставляет сам, поэтому страница — это один HTML-файл и один JavaScript-файл.

### Быстрый просмотр

Подвигайте указатель вокруг карточки и проследите за подсветкой. Посмотрите на смену минуты: после щелчка в последние десять секунд может звучать существующий короткий сигнал.

Начните с `clock.js`: `showTime()` читает текущую дату, а координаты указателя управляют CSS-переменными. Это локальные браузерные часы, а не сервис синхронизации времени.

Языковые ссылки выше переключают документацию, а не переводят существующий интерфейс демо.

### Возможности

- Часы, минуты и секунды, обновление каждую секунду.
- Градиентная рамка и тень поворачиваются к курсору: скрипт превращает положение мыши в угол и расстояние от центра и передаёт их в CSS через переменные (`--deg`, `--distance`).
- В последние десять секунд каждой минуты секунды пульсируют и звучит короткий сигнал. Звук включается после первого щелчка — так требуют браузеры.
- Помещается на экране телефона: размер цифр и отступы «резиновые» (`clamp`), а подсветка следует и за пальцем.

### Технологии

HTML5 · CSS3 (переменные, `conic-gradient`, `cos()` / `sin()` в CSS, `clamp()`, псевдоэлементы) · JavaScript (`setInterval`, `Audio`, Pointer Events)

### Что я отработал

- Управление CSS из JavaScript через переменные вместо правки стилей по одному.
- Тригонометрию для эффекта света, который следует за мышью.
- Правила браузеров для автозапуска звука.

### Запуск

Откройте `index.html` в браузере.

### Авторы и источники

Звуковой сигнал загружается из библиотеки звуков Google Actions (`actions.google.com/sounds`).

### План развития

Это предложения, а не уже реализованные возможности.

- Визуал: добавить сдержанную смену темы и reduced motion.
- Инженерия: закрепить детерминированные проверки границ минуты/суток и возврата из скрытой вкладки.
- Функции: предложить часовой пояс, формат 12/24 часа и явный переключатель звука.

---

<a name="hebrew"></a>

<div dir="rtl">

## עברית

שעון דיגיטלי בכרטיס שהמסגרת הזוהרת שלו עוקבת אחרי העכבר. כל העיצוב בנוי מ-CSS שהסקריפט מוסיף בעצמו, ולכן הדף הוא קובץ HTML אחד וקובץ JavaScript אחד.

### סיור קצר

הזיזו את הסמן סביב הכרטיס וצפו בתאורה. בדקו את מעבר הדקה; לאחר לחיצה, בעשר השניות האחרונות יכול להישמע הצליל הקצר הקיים.

התחילו ב־`clock.js`: הפונקציה `showTime()` קוראת את התאריך הנוכחי, וקואורדינטות הסמן מעדכנות משתני CSS. זהו שעון מקומי בדפדפן, לא שירות לסנכרון זמן.

קישורי השפה למעלה מחליפים את התיעוד, ולא מתרגמים את ממשק ההדגמה הקיים.

### יכולות

- שעות, דקות ושניות, עדכון בכל שנייה.
- מסגרת הגרדיאנט והצל פונים אל הסמן: הסקריפט הופך את מיקום העכבר לזווית ולמרחק מהמרכז ומעביר אותם ל-CSS כמשתנים (`--deg`, `--distance`).
- בעשר השניות האחרונות של כל דקה השניות פועמות ונשמע צפצוף קצר. הצליל מתחיל אחרי הלחיצה הראשונה, כפי שהדפדפנים דורשים.
- מתאים למסך טלפון: גודל הספרות והריווחים גמישים (`clamp`), והתאורה עוקבת גם אחרי האצבע.

### טכנולוגיות

HTML5 · CSS3 (custom properties, `conic-gradient`, `cos()` / `sin()`, `clamp()`, pseudo-elements) · JavaScript (`setInterval`, `Audio`, Pointer Events)

### מה תרגלתי

- שליטה ב-CSS מתוך JavaScript בעזרת משתנים.
- טריגונומטריה לאפקט אור שעוקב אחרי העכבר.
- כללי הדפדפנים להפעלה אוטומטית של צליל.

### הרצה מקומית

פתחו את `index.html` בדפדפן.

### קרדיטים

צליל הצפצוף נטען מספריית הצלילים של Google Actions (`actions.google.com/sounds`).

### שיפורים מתוכננים

אלה הצעות, לא יכולות שכבר מומשו.

- חזות: בחירת ערכת צבעים מאופקת ותמיכה בהפחתת תנועה.
- הנדסה: בדיקות דטרמיניסטיות למעברי דקה ויום ולחזרה מלשונית מוסתרת.
- יכולות: בחירת אזור זמן, תצוגת 12/24 שעות ומתג צליל מפורש.

</div>

---

<a name="spanish"></a>

## Español

Un reloj digital en una tarjeta cuyo marco luminoso sigue al ratón. Todo el estilo es CSS que el propio script inserta, así que la página es un único archivo HTML y un único archivo JavaScript.

### Recorrido rápido

Mueva el puntero alrededor de la tarjeta y observe la luz. Fíjese en el cambio de minuto: tras un clic, en los últimos diez segundos puede sonar la breve señal existente.

Empiece por `clock.js`: `showTime()` lee la fecha actual, y las coordenadas del puntero controlan variables CSS. Es un reloj local del navegador, no un servicio de sincronización horaria.

Los enlaces de idioma de arriba cambian la documentación; no traducen la interfaz de la demo.

### Funciones

- Horas, minutos y segundos, actualizados cada segundo.
- El marco degradado y la sombra se giran hacia el cursor: el script convierte la posición del ratón en un ángulo y una distancia al centro y los pasa a CSS mediante variables (`--deg`, `--distance`).
- En los últimos diez segundos de cada minuto los segundos laten y suena una breve señal. El sonido se activa tras el primer clic, como exigen los navegadores.
- Cabe en la pantalla de un móvil: el tamaño de las cifras y los márgenes son fluidos (`clamp`), y la luz también sigue al dedo.

### Tecnologías

HTML5 · CSS3 (variables, `conic-gradient`, `cos()` / `sin()` en CSS, `clamp()`, pseudoelementos) · JavaScript (`setInterval`, `Audio`, Pointer Events)

### Lo que practiqué

- Controlar CSS desde JavaScript con variables en lugar de cambiar estilos uno a uno.
- Trigonometría para un efecto de luz que sigue al ratón.
- Las reglas de los navegadores sobre la reproducción automática de sonido.

### Cómo ejecutarlo

Abra `index.html` en el navegador.

### Autores y fuentes

La señal sonora se carga de la biblioteca de sonidos de Google Actions (`actions.google.com/sounds`).

### Plan de desarrollo

Son propuestas, no funciones ya implementadas.

- Visual: añadir un cambio de tema discreto y soporte de reduced motion.
- Ingeniería: fijar comprobaciones deterministas del cambio de minuto y de día y de la vuelta desde una pestaña oculta.
- Funciones: ofrecer zona horaria, formato de 12/24 horas y un interruptor de sonido visible.

---

<a name="french"></a>

## Français

Une horloge numérique dans une carte dont le cadre lumineux suit la souris. Tout le style est du CSS que le script insère lui-même : la page tient donc en un seul fichier HTML et un seul fichier JavaScript.

### Visite rapide

Déplacez le pointeur autour de la carte et suivez la lueur. Regardez le changement de minute : après un clic, la courte alerte existante peut retentir pendant les dix dernières secondes.

Commencez par `clock.js` : `showTime()` lit la date actuelle, et les coordonnées du pointeur pilotent des variables CSS. C'est une horloge locale du navigateur, pas un service de synchronisation de l'heure.

Les liens de langue ci-dessus changent la documentation ; ils ne traduisent pas l'interface de la démo.

### Fonctions

- Heures, minutes et secondes, mises à jour chaque seconde.
- Le cadre en dégradé et l'ombre se tournent vers le curseur : le script transforme la position de la souris en angle et en distance au centre et les transmet au CSS par des variables (`--deg`, `--distance`).
- Pendant les dix dernières secondes de chaque minute, les secondes palpitent et une courte alerte retentit. Le son s'active après le premier clic, comme l'exigent les navigateurs.
- Tient sur un écran de téléphone : la taille des chiffres et les marges sont fluides (`clamp`), et la lueur suit aussi le doigt.

### Technologies

HTML5 · CSS3 (variables, `conic-gradient`, `cos()` / `sin()` en CSS, `clamp()`, pseudo-éléments) · JavaScript (`setInterval`, `Audio`, Pointer Events)

### Ce que j'ai travaillé

- Piloter le CSS depuis JavaScript avec des variables au lieu de modifier les styles un par un.
- La trigonométrie pour un effet de lumière qui suit la souris.
- Les règles des navigateurs sur la lecture automatique du son.

### Lancer le projet

Ouvrez `index.html` dans le navigateur.

### Auteurs et sources

L'alerte sonore provient de la bibliothèque de sons Google Actions (`actions.google.com/sounds`).

### Pistes d'évolution

Ce sont des propositions, pas des fonctions déjà réalisées.

- Visuel : ajouter un changement de thème discret et la prise en charge de reduced motion.
- Ingénierie : fixer des vérifications déterministes du passage de minute et de jour et du retour depuis un onglet masqué.
- Fonctions : proposer le fuseau horaire, le format 12/24 heures et un interrupteur de son visible.
