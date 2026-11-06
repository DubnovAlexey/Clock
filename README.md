# Clock

[English](#english) · [Русский](#russian) · [עברית](#hebrew)

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

- Visual: add a restrained theme switch, reduced-motion styling and a readable clock favicon.
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

- Визуал: добавить сдержанную смену темы, reduced motion и читаемый favicon часов.
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

- חזות: בחירת ערכת צבעים מאופקת, תמיכה בהפחתת תנועה וסמל שעון קריא.
- הנדסה: בדיקות דטרמיניסטיות למעברי דקה ויום ולחזרה מלשונית מוסתרת.
- יכולות: בחירת אזור זמן, תצוגת 12/24 שעות ומתג צליל מפורש.

</div>
