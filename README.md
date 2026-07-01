<a href="https://jedbillyb.com"><img align="right" src="https://img.shields.io/badge/jedbillyb.com-000?style=for-the-badge&logo=archlinux&logoColor=blue" /></a>
<div align="center">

<img src="favicon.ico" width="64" height="64" alt="favicon" />

# jedbillyb.com

**Personal site, server dashboard, and extension hub.**

[![Deploy](https://img.shields.io/badge/deployed-live-brightgreen?style=flat-square)](https://jedbillyb.com)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](./LICENSE)
[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)](https://react.dev)
[![TanStack](https://img.shields.io/badge/TanStack_Start-SSR-ff4154?style=flat-square)](https://tanstack.com/start)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)

</div>

---

## Pages

### [`jedbillyb.com`](https://jedbillyb.com)
The main landing page. Links to my socials - Discord, Instagram, email, GitHub, and X.

### [`server.jedbillyb.com/setup`](https://server.jedbillyb.com/setup) - Absolute Server Manifest
A **Terminal Noir** dashboard that visualises the full state of `server.jedbillyb.com` in real time.

| Panel | What it shows |
|---|---|
| **Live system stats** | Uptime, RAM, load average, disk, network I/O, swap |
| **Systemd catalog** | Collapsible unit files & env keys |
| **PM2 processes** | Live CPU / memory per process |
| **Tmux sessions** | Active session list |
| **Nginx routing map** | Proxy & static targets |
| **Security panel** | SSL cert details, IPTables rules, cron jobs |
| **Filesystem map** | `du -sh` with usage bars |
| **Recent deploys** | Repo, SHA, branch, commit message |

### [`jedbillyb.com/extensions/desmos-text-io`](https://jedbillyb.com/extensions/desmos-text-io)
Privacy policy for the **Desmos Text Input/Output Tool** Chrome & Firefox extension.

---

## Stack

| Layer | Tech |
|---|---|
| Markup | HTML |
| Styles | SCSS · CSS · Tailwind CSS v4 |
| Framework | React 19 (Server Manifest) |
| SSR | TanStack Start |
| Dashboard bundler | Vite |
| Dashboard runtime | Bun |

---

## Repo structure

```
jedbillyb.com/
├── assets/
│   ├── css/
│   ├── sass/
│   ├── webfonts/
│   └── *.svg              # Social icons
├── dashboard/             # server.jedbillyb.com/setup
│   ├── src/
│   ├── vite.config.ts
│   ├── wrangler.jsonc
│   └── ...
├── extensions/
│   └── desmos-text-io/
│       └── privacy.html
├── index.html             # Main landing page
└── favicon.ico
```

---

<div align="center">
<sub><a href="./LICENSE">MIT</a> © <a href="https://jedbillyb.com">jedbillyb</a> · Made with ❤️</sub>
</div>
