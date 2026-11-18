# Portfolio

Source for [ellin-cenciado.github.io/portfolio](https://ellin-cenciado.github.io/portfolio) — a dependency-free static portfolio covering eight selected repositories.

## Layout

- `Portfolio/` — the deployable site (HTML, CSS, JavaScript, custom SVG diagrams)
- `.github/workflows/deploy-pages.yml` — GitHub Pages deployment
- `Projects/` — local clones used as source material; ignored by git

## Local preview

```bash
cd Portfolio
python3 -m http.server 8080
```

Then open <http://localhost:8080>. There is no build step and no dependencies.

## Deployment

The site deploys through GitHub Actions. In the repository settings, set:

**Settings → Pages → Build and deployment → Source → GitHub Actions**

After that, every push to `main` deploys the contents of `Portfolio/`. The workflow can also be started manually from the Actions tab.

If Pages is not enabled yet, the workflow exits with a notice instead of failing.
