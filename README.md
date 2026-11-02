# Clock

**English** · [עברית](README.he.md) · [Русский](README.ru.md)

A digital clock in a card whose glowing border follows the mouse. The whole look is built with CSS that the script injects itself, so the page is one HTML file and one JavaScript file.

## Features

- Hours, minutes and seconds, updated every second.
- The gradient border and the shadow turn towards the cursor: the script turns the mouse position into an angle and a distance from the centre and passes them to CSS as custom properties (`--deg`, `--distance`).
- In the last ten seconds of every minute the seconds pulse and a short beep plays. Sound starts after the first click, as browsers require.
- Fits a phone screen: the digits and paddings are fluid (`clamp`), and the light follows a finger too.

## Tech stack

HTML5 · CSS3 (custom properties, `conic-gradient`, `cos()` / `sin()` in CSS, `clamp()`, pseudo-elements) · JavaScript (`setInterval`, `Audio`, Pointer Events)

## What I practised

- Driving CSS from JavaScript through custom properties instead of changing styles one by one.
- Trigonometry for a mouse-following light effect.
- Working with the browser autoplay rules for sound.

## Run locally

Open `index.html` in a browser.

## Roadmap

- Publish on GitHub Pages (Settings → Pages → Deploy from a branch → branch `main`, folder `/ (root)`).
- A dark theme switch: the colours already come from one `--accent` variable.

## Credits

The beep sound is loaded from the Google Actions sound library (`actions.google.com/sounds`).
