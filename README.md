<div align="center">

<img src="favicon.ico" width="64" height="64" alt="favicon" />

# jedbillyb.com

**My personal site.**

[![Deploy](https://img.shields.io/badge/deployed-live-brightgreen?style=flat-square)](https://jedbillyb.com)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](./LICENSE)

</div>

---

## Files

- `index.html` - the whole page. Single screen, background image, social links.
- `assets/sass/` - source styles. `assets/css/main.css` is the compiled output.
- `assets/webfonts/`, `assets/*.svg`, `favicon.ico`, `og-image.jpg` - static assets.
- `extensions/desmos-text-io/privacy.html` - privacy policy page for my Desmos browser extension.

## Running it

No build step, no dependencies. Open `index.html`, or serve the folder:

```sh
python3 -m http.server
```

To change styles, edit `assets/sass/main.scss` and compile it to `assets/css/main.css` with any Sass compiler. The compiled CSS is committed, so nothing else needs to run.

## Deploying

Push to `main`. `.github/workflows/deploy.yml` copies the static files into the nginx docroot on the web server.

---

<div align="center">
<sub><a href="./LICENSE">MIT</a> © <a href="https://jedbillyb.com">jedbillyb</a></sub>
</div>
