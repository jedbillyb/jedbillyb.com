<div align="center">

<img src="favicon.ico" width="64" height="64" alt="favicon" />

# jedbillyb.com

**My personal site.**

[![Deploy](https://img.shields.io/badge/deployed-live-brightgreen?style=flat-square)](https://jedbillyb.com)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](./LICENSE)

</div>

---

## What's here

- **[`jedbillyb.com`](https://jedbillyb.com)** - the landing page (`index.html`). Links to my socials (email, LinkedIn, X, GitHub, Instagram, Discord) plus the things I'm currently pointing people at.
- **[`jedbillyb.com/extensions/desmos-text-io`](https://jedbillyb.com/extensions/desmos-text-io)** - privacy policy for the Desmos Text I/O browser extension (`extensions/desmos-text-io/privacy.html`).

## Elsewhere

- **Faultline** - my Minecraft server, currently on Season 4. Java Edition, Paper 26.1.2, room for 69 players. Connect at `mc.jedbillyb.com`, community lives in [Discord](https://discord.jedbillyb.com).
- **[vehiclefinder.co.nz](https://vehiclefinder.co.nz)** - NZ vehicle lookup tool, the project featured on the landing page.
- **[server.jedbillyb.com](https://github.com/jedbillyb/server.jedbillyb.com)** - the server dashboard, in its own repo.

---

## Stack

Static HTML with SCSS/CSS. No build step for the landing page.

## Deploying

Push to `main` and `.github/workflows/deploy.yml` copies `index.html`, `favicon.ico`, `og-image.jpg`, `assets/` and `extensions/` straight into the nginx docroot on `server.jedbillyb.com`. Nothing to build, nothing to run locally beyond opening `index.html`.

---

<div align="center">
<sub><a href="./LICENSE">MIT</a> © <a href="https://jedbillyb.com">jedbillyb</a></sub>
</div>
