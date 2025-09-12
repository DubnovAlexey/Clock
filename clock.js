// ==== Инъекция CSS ====
const styles = `
:root { /* Переменные, можно менять, чтобы изменить цветовую схему, например на "темную" */
    --accent: orangered;
}

*, /* Селекторы для всех элементов, а также для псевдоэлементов, чтобы избежать проблем с отступами и размерами */
::before, /* Сброс отступов и полей для всех элементов, а также установка box-sizing в border-box */
::after { /* чтобы padding и border учитывались в ширине и высоте элементов */
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body { /* Стили для body, чтобы центрировать содержимое и задать фон */
    height: 100vh;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e1dfb6;
    font-family: system-ui;
    text-wrap: pretty;
}

.card { /* Стили для карточки с часами, включая фон, отступы, рамки и позиционирование */
    --light: rgba(255, 255, 255, calc(1 - var(--distance, 0)));
    --border-radius: .4rem;
    background: #f1f1f1;
    background-clip: padding-box;
    border: .2rem solid transparent;
    border-radius: var(--border-radius);
    padding: 3rem 4rem;
    margin: 1rem;
    position: relative;
}

.card::before { /* Псевдоэлемент для создания динамической рамки с градиентом, использующий переменные для угла и расстояния */
    content: "";
    position: absolute;
    inset: -.4rem; /* Новый размер рамки */
    background: conic-gradient(
        from calc(125deg + var(--deg, 0deg)),
        var(--accent),
        var(--accent) 80%,
        var(--light) 90%,
        var(--accent)
    ), linear-gradient(var(--accent), var(--accent));
    border-radius: var(--border-radius);
    z-index: -1;
}

.card::after { /* Псевдоэлемент для создания динамической тени, использующий переменные для угла и расстояния, чтобы тень смещалась в зависимости от положения мыши */
    content: "";
    position: absolute;
    inset: -.4rem; /* Новый размер тени */
    background: #0005;
    filter: blur(1px);
    z-index: -2;
    transform: translate(
        calc(cos(var(--deg, 0deg)) * -1.5rem),
        calc(sin(var(--deg, 0deg)) * -1.5rem)
    )
    scale(calc(var(--distance, 0) / 10 + 1));
    border-radius: var(--border-radius);
}

#clock h1 { /* Стили для заголовка с часами, включая размер шрифта, цвет, тень и семейство шрифтов, а также межстрочный интервал и балансировку текста */
    font-size: 7rem;
    color: #091c7e;
    text-shadow: 0 0 10px #34d3e0;
    font-family: monospace, sans-serif;
    line-height: 1.8rem;
    text-wrap: balance;
}

@keyframes pulse { /* Анимация пульсации для секунд, изменяющая прозрачность, чтобы создать эффект пульсации, используется в последние 10 секунд каждой минуты */
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0.6;
    }
    100% {
        opacity: 1;
    }
}

#clock .seconds { /* Стили для секунд, включая размер шрифта, цвет и тень, а также отключение анимации по умолчанию, чтобы анимация применялась только в последние 10 секунд */
    animation: none;
    color: #091c7e;
    text-shadow: 0 0 10px #34d3e0;
}

#clock .pulse-animation { /* Стили для секунд с анимацией пульсации, включая анимацию, цвет и тень, чтобы выделить последние 10 секунд каждой минуты */
    animation: pulse 1s infinite;
    color: #ab3434;
    text-shadow: 0 0 15px #c31b1b;
}

::selection { /* Стили для выделенного текста, включая цвет фона и текста, чтобы улучшить видимость выделенного текста, используя акцентный цвет */
    background: var(--accent);
    color: white;
}
`;

const styleTag = document.createElement("style"); /* Создаем тег <style> и добавляем в него CSS стили */
styleTag.textContent = styles;
document.head.appendChild(styleTag);

// ===== Логика часов =====
function showTime() { /* Функция для отображения текущего времени, обновляется каждую секунду, включает логику для анимации и звука в последние 10 секунд каждой минуты */
    const date = new Date();
    const h = String(date.getHours()).padStart(2, "0");
    const m = String(date.getMinutes()).padStart(2, "0");
    const s = String(date.getSeconds()).padStart(2, "0");

    // Проверяем, если это последние 10 секунд (от 50 до 59)
    const isLastTenSeconds = s >= 50;

    // Применяем класс для анимации и цвета
    const secondsClass = isLastTenSeconds ? "seconds pulse-animation" : "seconds"; /* Класс для секунд, добавляем анимацию в последние 10 секунд */

    // Формируем HTML для отображения времени с подсветкой секунд
    const timeHTML = `${h}:${m}:<span class="${secondsClass}">${s}</span>`; /* HTML с подсветкой секунд, добавляем span с классом для секунд, чтобы применить стили и анимацию */

    // Вставляем время в DOM
    const root = document.getElementById("clock"); /* Корневой элемент для часов, создаем его, если не существует, чтобы избежать ошибок */
    let h1 = root.querySelector("h1");
    if (!h1) {
        h1 = document.createElement("h1");
        root.appendChild(h1);
    }

    h1.innerHTML = timeHTML;

    // Воспроизводим звук только в последние 10 секунд
    if (isLastTenSeconds) {
        playTick();
    }
}

// ===== Звук "тик" =====
let tickSound = new Audio( /* Звук "тик", загружаем аудио файл, можно заменить на любой другой короткий звук, например, "тик" часов */
    "https://actions.google.com/sounds/v1/alarms/beep_short.ogg"
);
tickSound.volume = 0.3;

function playTick() { /* Функция для воспроизведения звука "тик", клонируем аудио элемент, чтобы можно было воспроизводить звук несколько раз подряд */
    const sound = tickSound.cloneNode();
    sound.play().catch(() => {});
}

// ===== Логика подсветки =====
function quickDist(deltaX, deltaY) { /* Быстрое вычисление квадрата расстояния от центра, чтобы избежать использования Math.sqrt для производительности, возвращает квадрат расстояния */
    return deltaX ** 2 + deltaY ** 2; /* Возвращаем квадрат расстояния, чтобы избежать вычисления квадратного корня для производительности */
}

document.addEventListener("mousemove", e => { /* Обработчик события движения мыши, вычисляет угол и расстояние от центра окна, чтобы обновить CSS переменные для динамической подсветки, используем quickDist для производительности */
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY
    const maxDist = Math.sqrt(quickDist(centerX, centerY)); // <-- Вторая ошибка: Исправлено, теперь вычисляем корень, чтобы получить правильное расстояние
    const dist = Math.sqrt(quickDist(distanceX, distanceY)); // <-- Также исправлено здесь, чтобы получить правильное расстояние
    const deg = Math.atan2(distanceY, distanceX) / Math.PI * 180;

    document.body.style.setProperty("--deg", `${deg}deg`);
    document.body.style.setProperty("--distance", `${dist / maxDist}`);
});

// ===== Запуск =====
document.addEventListener("DOMContentLoaded", () => { /* Ждем загрузки DOM, чтобы инициализировать часы и начать обновление каждую секунду, запускаем showTime сразу, чтобы не ждать первую секунду */
    showTime();
    setInterval(showTime, 1000);
});

document.addEventListener("click", () => { /* Воспроизводим звук "тик" при первом клике, чтобы избежать проблем с автозапуском звука в браузерах, воспроизводим только один раз */
    tickSound.play().catch(() => {});
}, { once: true });