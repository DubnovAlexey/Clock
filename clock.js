

// ==== Инъекция CSS ====
const styles = `
:root {
    --accent: orangered;
}

*,
::before,
::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    height: 100vh;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e1dfb6;
    font-family: system-ui;
    text-wrap: pretty;
}

.card {
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

.card::before {
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

.card::after {
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

#clock h1 {
    font-size: 7rem;
    color: #091c7e;
    text-shadow: 0 0 10px #34d3e0;
    font-family: monospace, sans-serif;
    line-height: 1.8rem;
    text-wrap: balance;
}

@keyframes pulse {
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

#clock .seconds {
    animation: none;
    color: #091c7e;
    text-shadow: 0 0 10px #34d3e0;
}

#clock .pulse-animation {
    animation: pulse 1s infinite;
    color: #ab3434;
    text-shadow: 0 0 15px #c31b1b;
}

::selection {
    background: var(--accent);
    color: white;
}
`;

const styleTag = document.createElement("style");
styleTag.textContent = styles;
document.head.appendChild(styleTag);

// ===== Логика часов =====
function showTime() {
    const date = new Date();
    const h = String(date.getHours()).padStart(2, "0");
    const m = String(date.getMinutes()).padStart(2, "0");
    const s = String(date.getSeconds()).padStart(2, "0");

    // Проверяем, если это последние 10 секунд (от 50 до 59)
    const isLastTenSeconds = s >= 50;

    // Применяем класс для анимации и цвета
    const secondsClass = isLastTenSeconds ? "seconds pulse-animation" : "seconds";

    const timeHTML = `${h}:${m}:<span class="${secondsClass}">${s}</span>`;

    const root = document.getElementById("clock");
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
let tickSound = new Audio(
    "https://actions.google.com/sounds/v1/alarms/beep_short.ogg"
);
tickSound.volume = 0.3;

function playTick() {
    const sound = tickSound.cloneNode();
    sound.play().catch(() => {});
}

// ===== Логика подсветки =====
function quickDist(deltaX, deltaY) {
    return deltaX ** 2 + deltaY ** 2;
}

document.addEventListener("mousemove", e => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY
    const maxDist = quickDist(centerX, centerY);
    const dist = quickDist(distanceX, distanceY);
    const deg = Math.atan2(distanceY, distanceX) / Math.PI * 180;

    document.body.style.setProperty("--deg", `${deg}deg`);
    document.body.style.setProperty("--distance", `${dist / maxDist}`);
});

// ===== Запуск =====
document.addEventListener("DOMContentLoaded", () => {
    showTime();
    setInterval(showTime, 1000);
});

document.addEventListener("click", () => {
    tickSound.play().catch(() => {});
}, { once: true });