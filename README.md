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

## Installing it as an app

The site is a PWA, so it installs to a desktop, dock or home screen and then
runs in its own window with no browser chrome — and plays offline.

| Where | How |
|---|---|
| Chrome / Edge (desktop) | Open the site, click the **install icon** in the address bar (or ⋮ → *Cast, save and share* → *Install page as app*) |
| Safari (macOS 14+) | **File → Add to Dock** |
| iPad / iPhone | Share → **Add to Home Screen** |
| Android | ⋮ → **Install app** |

`sw.js` is deliberately **network-first**: online, a fresh deploy always wins;
the cache only kicks in when the network is unreachable. Bump `CACHE` in
`sw.js` whenever the precached shell list changes.

## Checking levels are beatable

```sh
node tools/validate-levels.mjs
```

Drives the real `stepPlayer` over the real `LEVELS` data and reports whether
each world can actually be finished. It has caught genuine design bugs.

## Local development

ES modules don't load over `file://` — serve the directory:

```sh
python3 -m http.server 8000
# open http://localhost:8000
```
