# Sugar Paws — A Candy Cat Adventure

A canvas platformer. No build step — plain HTML, CSS, and ES modules, deployed as static files on Netlify.

## Layout

| File | What it owns |
|---|---|
| `index.html` | Markup only (frame, HUD, screens, touch controls) |
| `styles.css` | All styling |
| `js/levels.js` | `LEVELS` + `THEMES` — pure level data |
| `js/physics.js` | Physics constants, `aabb`, `stepPlayer` — no DOM/canvas/audio, importable from Node |
| `js/save.js` | `localStorage` persistence |
| `js/audio.js` | Synth sound effects |
| `js/input.js` | Keyboard + touch input (`keys`) |
| `js/game.js` | Game state, level loading, enemies/boss, all rendering, screens, boot |

## Local development

ES modules don't load over `file://` — serve the directory:

```sh
python3 -m http.server 8000
# open http://localhost:8000
```
